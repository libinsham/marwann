
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { getGallery, CATEGORIES } from "@/lib/store";
import PageScript from "@/components/PageScript";
import { getAllProgramGalleries } from "@/lib/program-gallery";
import ProgramGalleryMedia from "@/components/gallery/ProgramGalleryMedia";

export const metadata = {
  title: "Photo Gallery | MARWANN CHARITABLE TRUST",
  description:
    "Explore photographs of MARWANN CHARITABLE TRUST charitable and community activities.",
};

const programGallerySlugs = [
  "child-orphanage-support",
  "covid-food-distribution",
  "nilavembu-kasayam-distribution",
  "eye-camps",
  "rice-bag-distribution",
  "independence-day-flood-relief",
  "old-age-home-support",
  "medical-assistance",
  "womens-tailoring-classes",
];

const PROGRAM_GALLERY_BY_TITLE = {
  "Child Orphanage Support": "child-orphanage-support",
  "COVID-19 Food Distribution": "covid-food-distribution",
  "Nilavembu Kasayam Distribution": "nilavembu-kasayam-distribution",
  "Eye Camps": "eye-camps",
  "Rice Bag Distribution": "rice-bag-distribution",
  "Independence Day & Flood Relief": "independence-day-flood-relief",
  "Old Age Home Support": "old-age-home-support",
  "Medical Assistance": "medical-assistance",
  "Women's Tailoring Classes": "womens-tailoring-classes",
};

const pageStyles = `
.marwann-gallery-hero {
  position: relative;
  overflow: hidden;
  padding: 150px 0 48px;
  color: #fff;
  text-align: center;
  background: linear-gradient(135deg, #064f49, #073d39 68%, #092f2d);
}

.marwann-gallery-hero .container {
  position: relative;
  z-index: 1;
}

.marwann-gallery-hero h1 {
  margin: 0 0 12px;
  color: #fff;
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 800;
  line-height: 1.15;
}

.marwann-gallery-hero p {
  max-width: 760px;
  margin: 0 auto;
  color: rgba(255,255,255,.86);
  font-size: 15px;
  line-height: 1.75;
}

.marwann-gallery-eyebrow {
  display: inline-block;
  margin-bottom: 10px;
  color: #f7d95d;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .16em;
}

.marwann-gallery-archive {
  padding: 0 0 70px;
  background: #f8f7f0;
}

.marwann-gallery-filter-wrap {
  margin-bottom: 28px;
  border-block: 1px solid #e7ecef;
  background: #fff;
}

.marwann-gallery-filters {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 0;
}

.marwann-gallery-filter {
  appearance: none;
  flex: 0 0 auto;
  padding: 8px 14px;
  border: 1px solid transparent;
  border-radius: 999px;
  background: transparent;
  color: #64748b;
  font: inherit;
  font-size: 12px;
  font-weight: 650;
  cursor: pointer;
  white-space: nowrap;
}

.marwann-gallery-filter .count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  margin-left: 6px;
  padding: 0 6px;
  border-radius: 999px;
  background: #edf2f4;
  font-size: 10px;
}

.marwann-gallery-filter.is-active {
  border-color: #075d56;
  background: #075d56;
  color: #fff;
}

.marwann-gallery-filter.is-active .count {
  background: rgba(255,255,255,.18);
  color: #fff;
}

.marwann-gallery-item {
  width: 100%;
  min-width: 0;
  margin: 0 0 20px;
}

.marwann-gallery-item[hidden] {
  display: none !important;
}

.marwann-gallery-empty {
  display: none;
  padding: 38px 18px;
  color: #64748b;
  text-align: center;
}

@media (max-width: 767.98px) {
  .marwann-gallery-hero {
    padding: 112px 0 38px;
  }

  .marwann-gallery-archive {
    padding-bottom: 42px;
  }

  .marwann-gallery-filters {
    flex-wrap: nowrap;
    overflow-x: auto;
  }
}
`;

export default async function GalleryPage() {
  const [rawItems, rawGalleries] = await Promise.all([
    getGallery(),
    getAllProgramGalleries(programGallerySlugs),
  ]);

  const items = (rawItems || []).filter(
    (item) => item.visible !== false
  );

  const galleries = rawGalleries || {};

  const filterOptions = [
    { id: "all", label: "All" },
    { id: "education", label: "Education & Skills" },
    { id: "health", label: "Health & Wellness" },
    { id: "community", label: "Community Support" },
  ];

  const categoryCounts = filterOptions.map((filter) => ({
    ...filter,
    count:
      filter.id === "all"
        ? items.length
        : items.filter(
            (item) => item.category === filter.id
          ).length,
  }));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      <main>
        {/* GALLERY HERO */}
        <section
          className="marwann-gallery-hero"
          aria-labelledby="gallery-page-title"
        >
          <div className="container">
            <span className="marwann-gallery-eyebrow">
              MARWANN CHARITABLE TRUST · OUR WORK
            </span>

            <h1 id="gallery-page-title">
              Moments of Service
            </h1>

            <p>
              Explore our charitable activities through photographs
              of healthcare, education, food assistance, and
              community welfare.
            </p>
          </div>
        </section>

        <section className="marwann-gallery-archive">
          {/* CATEGORY FILTERS */}
          <div className="marwann-gallery-filter-wrap">
            <div className="container">
              <div
                className="marwann-gallery-filters"
                role="group"
                aria-label="Filter galleries by category"
              >
                {categoryCounts.map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    className={
                      "marwann-gallery-filter" +
                      (filter.id === "all" ? " is-active" : "")
                    }
                    data-gallery-filter={filter.id}
                    aria-pressed={filter.id === "all"}
                  >
                    {filter.label}

                    <span className="count">
                      {filter.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ONE IMAGE SLIDER PER PROGRAM */}
          <div className="container">
            {items.map((item) => {
              const slug =
                PROGRAM_GALLERY_BY_TITLE[item.title];

              const folderPhotos = slug
                ? galleries[slug] || []
                : [];

              const photos =
                folderPhotos.length > 0
                  ? folderPhotos
                  : item.image
                    ? [
                        {
                          src: item.image,
                          alt: item.alt || item.title,
                          caption: item.title,
                        },
                      ]
                    : [];

              const categoryLabel =
                CATEGORIES[item.category] || item.category;

              return (
                <div
                  key={item.id}
                  className="marwann-gallery-item"
                  data-gallery-category={item.category}
                >
                  <ProgramGalleryMedia
                    slug={slug || String(item.id)}
                    title={item.title}
                    category={categoryLabel}
                    description={item.description || ""}
                    photos={photos}
                  />
                </div>
              );
            })}

            <div
              className="marwann-gallery-empty"
              id="marwann-gallery-empty"
              aria-live="polite"
            >
              No activities are available in this category.
            </div>
          </div>
        </section>
      </main>

      {/* CLIENT-SIDE CATEGORY FILTERS */}
      <PageScript
        code={`
          (function () {
            function initializeGalleryFilters() {
              const filters = document.querySelectorAll(
                "[data-gallery-filter]"
              );

              const panels = document.querySelectorAll(
                ".marwann-gallery-item"
              );

              const empty = document.getElementById(
                "marwann-gallery-empty"
              );

              filters.forEach(function (filter) {
                if (filter.dataset.filterReady === "true") return;

                filter.dataset.filterReady = "true";

                filter.addEventListener("click", function () {
                  const selected = filter.getAttribute(
                    "data-gallery-filter"
                  );

                  let visibleCount = 0;

                  filters.forEach(function (button) {
                    const active = button === filter;

                    button.classList.toggle("is-active", active);
                    button.setAttribute(
                      "aria-pressed",
                      String(active)
                    );
                  });

                  panels.forEach(function (panel) {
                    const visible =
                      selected === "all" ||
                      panel.getAttribute("data-gallery-category") ===
                        selected;

                    panel.hidden = !visible;

                    if (visible) visibleCount++;
                  });

                  if (empty) {
                    empty.style.display = visibleCount
                      ? "none"
                      : "block";
                  }
                });
              });
            }

            initializeGalleryFilters();
          })();
        `}
      />
    </>
  );
}
