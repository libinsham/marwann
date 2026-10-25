
import "server-only";

import fs from "node:fs/promises";
import path from "node:path";

const PUBLIC_DIR = path.join(process.cwd(), "public");

const GALLERY_ROOT = path.join(
  PUBLIC_DIR,
  "assets",
  "img",
  "gallery"
);

const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".gif",
  ".bmp",
]);

/*
 * Additional folders belonging to an existing program.
 *
 * Keep the original folder names exactly as they appear
 * under public/assets/img/gallery/.
 */
const ADDITIONAL_PROGRAM_FOLDERS = {
  "independence-day-flood-relief": [
    "independence-day",
    "flood-relief",
  ],
};

/*
 * Standalone image files visible in your screenshot.
 * These are matched by filename, without the extension.
 *
 * Example:
 * public/assets/img/gallery/rice-bag.webp
 */
const ROOT_IMAGE_ALIASES = {
  "child-orphanage-support": ["child-orphanage-support"],
  "covid-food-distribution": ["covid-food-distribution"],
  "nilavembu-kasayam-distribution": [
    "nilavembu-kasayam-distribution",
  ],
  "independence-day-flood-relief": ["flood"],
  "old-age-home-support": ["old-age"],
  "rice-bag-distribution": ["rice-bag"],
  "womens-tailoring-classes": ["tailoring"],
};

// Prevent invalid slugs and directory traversal.
function isValidSlug(slug) {
  return (
    typeof slug === "string" &&
    /^[a-z0-9-]+$/i.test(slug)
  );
}

// Sort filenames naturally: image2.jpg before image10.jpg.
function compareNames(a, b) {
  return a.localeCompare(b, undefined, {
    numeric: true,
    sensitivity: "base",
  });
}

// Convert a filesystem path into a URL served from /public.
function toPublicUrl(filePath) {
  const relativePath = path.relative(PUBLIC_DIR, filePath);

  return (
    "/" +
    relativePath
      .split(path.sep)
      .map((part) => encodeURIComponent(part))
      .join("/")
  );
}

// Remove the file extension and create a readable caption.
function getImageCaption(filename) {
  return path
    .parse(filename)
    .name
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/*
 * Recursively read all supported image files from a folder.
 * Nested folders are included; video and other files are ignored.
 */
async function findImages(directory) {
  let entries;

  try {
    entries = await fs.readdir(directory, {
      withFileTypes: true,
    });
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }

    throw error;
  }

  entries.sort((a, b) => compareNames(a.name, b.name));

  const results = [];

  for (const entry of entries) {
    // Do not follow symbolic links outside the gallery.
    if (entry.isSymbolicLink()) {
      continue;
    }

    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      const nestedImages = await findImages(fullPath);
      results.push(...nestedImages);
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();

    if (IMAGE_EXTENSIONS.has(extension)) {
      results.push(fullPath);
    }
  }

  return results;
}

/*
 * Find selected standalone images directly in GALLERY_ROOT.
 * The match ignores filename extension and letter case.
 */
async function findRootImages(aliases = []) {
  if (!aliases.length) {
    return [];
  }

  let entries;

  try {
    entries = await fs.readdir(GALLERY_ROOT, {
      withFileTypes: true,
    });
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }

    throw error;
  }

  const aliasSet = new Set(
    aliases.map((alias) => alias.toLowerCase())
  );

  return entries
    .filter((entry) => {
      if (!entry.isFile() || entry.isSymbolicLink()) {
        return false;
      }

      const extension = path.extname(entry.name).toLowerCase();

      if (!IMAGE_EXTENSIONS.has(extension)) {
        return false;
      }

      const filenameWithoutExtension = path
        .parse(entry.name)
        .name
        .toLowerCase();

      return aliasSet.has(filenameWithoutExtension);
    })
    .sort((a, b) => compareNames(a.name, b.name))
    .map((entry) => path.join(GALLERY_ROOT, entry.name));
}

/*
 * Load all images belonging to a single program.
 *
 * Output:
 * [{ src, alt, caption }, ...]
 */
export async function getProgramGallery(slug) {
  if (!isValidSlug(slug)) {
    throw new Error(`Invalid gallery slug: ${slug}`);
  }

  const folderNames = [
    slug,
    ...(ADDITIONAL_PROGRAM_FOLDERS[slug] || []),
  ];

  const folderImageGroups = await Promise.all(
    folderNames.map((folderName) =>
      findImages(path.join(GALLERY_ROOT, folderName))
    )
  );

  const rootImages = await findRootImages(
    ROOT_IMAGE_ALIASES[slug] || []
  );

  /*
   * Deduplicate identical URLs while preserving the image files.
   * Folder photos are listed first, followed by matching root photos.
   */
  const uniqueFiles = [
    ...new Set([
      ...folderImageGroups.flat(),
      ...rootImages,
    ]),
  ];

  return uniqueFiles.map((filePath, index) => {
    const filename = path.basename(filePath);
    const caption = getImageCaption(filename);

    return {
      src: toPublicUrl(filePath),
      alt: `${slug.replace(/-/g, " ")} photo ${index + 1}`,
      caption,
    };
  });
}

/*
 * Load several program galleries in parallel.
 *
 * Existing gallery pages can keep using this export.
 */
export async function getAllProgramGalleries(slugs = []) {
  const uniqueSlugs = [...new Set(slugs)].filter(isValidSlug);

  const results = await Promise.all(
    uniqueSlugs.map(async (slug) => [
      slug,
      await getProgramGallery(slug),
    ])
  );

  return Object.fromEntries(results);
}
