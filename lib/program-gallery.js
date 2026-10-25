
import "server-only";
import fs from "node:fs/promises";
import path from "node:path";

const GALLERY_ROOT = path.join(
  process.cwd(),
  "public",
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
]);

// Prevent invalid slugs and directory traversal.
function isValidSlug(slug) {
  return (
    typeof slug === "string" &&
    /^[a-z0-9-]+$/i.test(slug)
  );
}

// Read all images from one program's folder.
export async function getProgramGallery(slug) {
  if (!isValidSlug(slug)) {
    throw new Error(`Invalid gallery slug: ${slug}`);
  }

  const folder = path.join(GALLERY_ROOT, slug);

  try {
    const entries = await fs.readdir(folder, {
      withFileTypes: true,
    });

    return entries
      .filter(
        (entry) =>
          entry.isFile() &&
          IMAGE_EXTENSIONS.has(
            path.extname(entry.name).toLowerCase()
          )
      )
      .sort((a, b) =>
        a.name.localeCompare(a.name, undefined, {
          numeric: true,
          sensitivity: "base",
        })
      )
      .map((entry) => ({
        src: `/assets/img/gallery/${slug}/${entry.name
          .split("/")
          .map(encodeURIComponent)
          .join("/")}`,
        alt: entry.name
          .replace(/\.[^.]+$/, "")
          .replace(/[-_]/g, " "),
        caption: entry.name,
      }));
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

// Read multiple program galleries.
export async function getAllProgramGalleries(slugs) {
  const results = await Promise.all(
    slugs.map(async (slug) => [
      slug,
      await getProgramGallery(slug),
    ])
  );

  return Object.fromEntries(results);
}
