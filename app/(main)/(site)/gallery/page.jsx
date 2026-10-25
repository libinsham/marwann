
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { getGallery, CATEGORIES } from "@/lib/store";
import PageScript from "@/components/PageScript";
import { getAllProgramGalleries } from "@/lib/program-gallery";

export const metadata = {
  title: "Photo Gallery | MARWANN CHARITABLE TRUST",
  description:
    "View photographs of community activities shared for MARWANN CHARITABLE TRUST.",
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

const PLACEHOLDER_CLASS = {
  community: "community",
  education: "skill",
  health: "",
};

const PLACEHOLDER_ICON = {
  community: "fa-hands-holding-heart",
  education: "fa-graduation-cap",
  health: "fa-heart-pulse",
};

function formatDate(dateString) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

const pageStyles = `
.marwann-gallery-hero {
  position:relative; overflow:hidden; padding:180px 0 52px;
  color:#fff; text-align:center;
  background:linear-gradient(135deg,#064f49,#073d39 68%,#092f2d);
}
.marwann-gallery-hero .container { position:relative; z-index:1; }
.marwann-gallery-hero h1 {
  color:#fff; font-size:clamp(30px,4vw,46px);
  line-height:1.15; margin:0 0 12px;
}
.marwann-gallery-hero p {
  max-width:760px; margin:auto; color:rgba(255,255,255,.84);
  font-size:15px; line-height:1.7;
}
.marwann-gallery-eyebrow {
  display:inline-block; margin-bottom:10px; color:#f7d95d;
  font-size:11px; font-weight:800; letter-spacing:.16em;
}
.marwann-gallery-archive { background:#f8f7f0; padding:30px 0 90px; }
.marwann-gallery-filter-wrap {
  border-block:1px solid #e7ecef; background:#fff; margin-bottom:28px;
}
.marwann-gallery-filters {
  display:flex; align-items:center; gap:8px; flex-wrap:wrap; padding:12px 0;
}
.marwann-gallery-filter {
  appearance:none; border:1px solid transparent; border-radius:999px;
  background:transparent; color:#64748b; padding:8px 14px;
  font:inherit; font-size:12px; font-weight:600; cursor:pointer;
}
.marwann-gallery-filter .count {
  display:inline-flex; align-items:center; justify-content:center;
  min-width:20px; height:20px; margin-left:6px; padding:0 6px;
  border-radius:999px; background:#edf2f4; font-size:10px;
}
.marwann-gallery-filter.is-active {
  background:#075d56; color:#fff; border-color:#075d56;
}
.marwann-gallery-filter.is-active .count {
  background:rgba(255,255,255,.18); color:#fff;
}
.marwann-gallery-item[hidden] { display:none !important; }
.marwann-gallery-card {
  height:100%; display:flex; flex-direction:column; overflow:hidden;
  border:1px solid #e8edf0; border-radius:18px; background:#fff;
  box-shadow:0 2px 4px rgba(15,23,42,.025);
}
.marwann-gallery-image {
  position:relative; display:block; margin:14px 14px 0;
  aspect-ratio:1.78 / 1; border-radius:13px;
  overflow:hidden; background:#e8f2ef; cursor:zoom-in;
}
.marwann-gallery-image img {
  display:block; width:100%; height:100%; object-fit:cover;
}
.marwann-gallery-category {
  position:absolute; left:10px; top:10px; z-index:2;
  border-radius:999px; background:rgba(15,23,42,.88); color:#fff;
  font-size:9px; font-weight:800; letter-spacing:.06em;
  padding:5px 9px; text-transform:uppercase;
}
.marwann-gallery-content {
  padding:14px 18px 17px; display:flex; flex:1; flex-direction:column;
}
.marwann-gallery-content h2 {
  color:#142331; font-size:16px; line-height:1.35;
  font-weight:700; margin:0 0 7px; min-height:42px;
}
.marwann-gallery-content p {
  color:#64748b; font-size:12px; line-height:1.65;
  margin:0 0 14px; min-height:40px;
}
.marwann-gallery-meta {
  display:flex; align-items:center; flex-wrap:wrap; gap:6px;
  margin-top:auto; padding-bottom:13px; min-height:34px;
}
.marwann-gallery-pill {
  display:inline-flex; align-items:center; gap:6px; border-radius:999px;
  padding:5px 9px; font-size:10px; font-weight:700;
  background:#e7f7f0; color:#087653;
}
.marwann-gallery-actions {
  display:flex; align-items:center; gap:8px;
  border-top:1px solid #edf0f2; padding-top:10px;
}
.marwann-gallery-actions .gallery-primary {
  display:flex; flex:1; justify-content:center; align-items:center; gap:8px;
  border:0; border-radius:999px; padding:10px 12px;
  background:#075d56; color:#fff; font-size:11px; font-weight:700;
  text-decoration:none; cursor:pointer;
}
.marwann-gallery-actions .gallery-primary:hover {
  background:#06433e; color:#fff;
}
.marwann-gallery-actions .gallery-secondary {
  display:inline-flex; align-items:center; justify-content:center;
  border:1px solid #e4e9ec; border-radius:999px; background:#fff;
  color:#263746; padding:8px 12px; font-size:11px; font-weight:700;
  text-decoration:none; white-space:nowrap;
}
.program-gallery-hidden-photo { display:none !important; }
.marwann-gallery-empty { display:none; text-align:center; padding:38px 18px; color:#64748b; }
.marwann-gallery-placeholder {
  display:flex; flex-direction:column; align-items:center;
  justify-content:center; gap:10px; color:#075d56;
  background:linear-gradient(135deg,#e8f2ef,#d8e8e3);
}
.marwann-gallery-placeholder.community {
  background:linear-gradient(135deg,#f5f1df,#ece5c9);
}
.marwann-gallery-placeholder.skill {
  background:linear-gradient(135deg,#edf0f8,#dfe5f4);
}
.marwann-gallery-placeholder .placeholder-icon {
  display:grid; place-items:center; width:64px; height:64px;
  border-radius:50%; background:#fff; font-size:26px;
}
.marwann-gallery-placeholder .placeholder-note {
  font-size:10px; font-weight:700; text-transform:uppercase;
}
.marwann-gallery-placeholder.has-photo { display:block; }
@media(max-width:767.98px) {
  .marwann-gallery-hero { padding:112px 0 42px; }
  .marwann-gallery-archive { padding-top:22px; }
  .marwann-gallery-filters { flex-wrap:nowrap; overflow-x:auto; }
  .marwann-gallery-filter { flex:0 0 auto; }
  .marwann-gallery-content p { min-height:0; }
}
`;

export default async function Page() {
  const [rawItems, rawGalleries] = await Promise.all([
    getGallery(),
    getAllProgramGalleries(programGallerySlugs),
  ]);

  const items = rawItems.filter((item) => item.visible !== false);
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
        : items.filter((item) => item.category === filter.id).length,
  }));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      <main>
        <section className="marwann-gallery-hero" aria-labelledby="gallery-page-title">
          <div className="container">
            <div className="marwann-gallery-hero-copy">
              <span className="marwann-gallery-eyebrow">
                MARWANN CHARITABLE TRUST · OUR WORK
              </span>
              <h1 id="gallery-page-title">Moments of Service</h1>
              <p>
                Explore our charitable activities through photographs of
                healthcare, education, food assistance, and community welfare.
              </p>
            </div>
          </div>
        </section>

        <section className="marwann-gallery-archive">
          <div className="marwann-gallery-filter-wrap">
            <div className="container">
              <div
                className="marwann-gallery-filters"
                role="group"
                aria-label="Filter gallery by category"
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
                    {filter.label} <span className="count">{filter.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row marwann-gallery-grid row-gap-4" id="marwann-gallery-grid">
              {items.map((item) => {
                const slug = PROGRAM_GALLERY_BY_TITLE[item.title];
                const photos = slug ? galleries[slug] || [] : [];
                const firstPhoto = photos[0];
                const groupName = `gallery-${slug || item.id}`;
                const categoryLabel = CATEGORIES[item.category] || item.category;

                const fallbackPhoto = firstPhoto?.src || item.image || "";

                return (
                  <div
                    key={item.id}
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12 marwann-gallery-item"
                    data-gallery-category={item.category}
                  >
                    <article className="marwann-gallery-card">
                      {fallbackPhoto ? (
                        <>
                          <a
                            className="marwann-gallery-image marwann-gallery-placeholder has-photo"
                            href={fallbackPhoto}
                            data-fancybox={groupName}
                            data-caption={`${item.title} — 1 of ${Math.max(photos.length, 1)}`}
                            aria-label={`Open ${item.title} gallery`}
                          >
                            <img
                              src={fallbackPhoto}
                              alt={firstPhoto?.alt || item.alt || item.title}
                              loading="lazy"
                            />
                            <span className="marwann-gallery-category">
                              {categoryLabel}
                            </span>
                          </a>

                          {photos.slice(1).map((photo, index) => (
                            <a
                              key={photo.src}
                              className="program-gallery-hidden-photo"
                              href={photo.src}
                              data-fancybox={groupName}
                              data-caption={`${item.title} — ${index + 2} of ${photos.length}`}
                              aria-label={photo.alt || `${item.title}, photo ${index + 2}`}
                            />
                          ))}
                        </>
                      ) : (
                        <div
                          className={
                            "marwann-gallery-image marwann-gallery-placeholder " +
                            (PLACEHOLDER_CLASS[item.category] || "")
                          }
                        >
                          <span className="placeholder-icon">
                            <i
                              className={
                                "fa-light " +
                                (PLACEHOLDER_ICON[item.category] || "fa-image")
                              }
                              aria-hidden="true"
                            />
                          </span>
                          <span className="placeholder-note">
                            No photos available yet
                          </span>
                          <span className="marwann-gallery-category">
                            {categoryLabel}
                          </span>
                        </div>
                      )}

                      <div className="marwann-gallery-content">
                        <h2>{item.title}</h2>
                        {item.description && <p>{item.description}</p>}

                        <div className="marwann-gallery-meta">
                          <span className="marwann-gallery-pill">
                            <i className="fa-regular fa-images" aria-hidden="true" />{" "}
                            {photos.length > 0
                              ? `${photos.length} Photos`
                              : item.image
                                ? "Activity Photo"
                                : "Photos Pending"}
                          </span>

                          {item.date && (
                            <span className="marwann-gallery-pill">
                              <i className="fa-regular fa-calendar" aria-hidden="true" />{" "}
                              {formatDate(item.date)}
                            </span>
                          )}
                        </div>

                        <div className="marwann-gallery-actions">
                          {fallbackPhoto ? (
                            <a
                              className="gallery-primary"
                              href={fallbackPhoto}
                              data-fancybox={groupName}
                              data-caption={item.title}
                            >
                              View Gallery{" "}
                              <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                            </a>
                          ) : (
                            <Link
                              className="gallery-primary"
                              href={slug ? `/programs/${slug}` : "/program-areas"}
                            >
                              View Program{" "}
                              <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                            </Link>
                          )}

                          <Link className="gallery-secondary" href="/contact">
                            Contact
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>

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

      <PageScript
        code={`
          (function () {
            function initializeGalleryPage() {
              const filters = document.querySelectorAll("[data-gallery-filter]");
              const cards = document.querySelectorAll(".marwann-gallery-item");
              const empty = document.getElementById("marwann-gallery-empty");

              filters.forEach(function (filter) {
                if (filter.dataset.filterReady === "true") return;
                filter.dataset.filterReady = "true";

                filter.addEventListener("click", function () {
                  const selected = filter.getAttribute("data-gallery-filter");
                  let visibleCount = 0;

                  filters.forEach(function (button) {
                    const active = button === filter;
                    button.classList.toggle("is-active", active);
                    button.setAttribute("aria-pressed", String(active));
                  });

                  cards.forEach(function (card) {
                    const visible =
                      selected === "all" ||
                      card.getAttribute("data-gallery-category") === selected;

                    card.hidden = !visible;
                    if (visible) visibleCount++;
                  });

                  if (empty) {
                    empty.style.display = visibleCount ? "none" : "block";
                  }
                });
              });

              const Fancybox = window.Fancybox;

              if (!Fancybox || typeof Fancybox.bind !== "function") {
                console.error(
                  "Fancybox is unavailable. Check LegacyScripts.jsx and the vendor script."
                );
                return;
              }

              // Avoid registering the same gallery listeners repeatedly.
              if (window.__marwannGalleryBound) return;
              window.__marwannGalleryBound = true;

              Fancybox.bind("[data-fancybox^='gallery-']", {
                infinite: true,
                Thumbs: { autoStart: true },
                Toolbar: {
                  display: {
                    left: ["infobar"],
                    middle: [],
                    right: ["slideshow", "fullscreen", "close"]
                  }
                }
              });
            }

            if (document.readyState === "loading") {
              document.addEventListener("DOMContentLoaded", initializeGalleryPage, {
                once: true
              });
            } else {
              initializeGalleryPage();
            }
          })();
        `}
      />
    </>
  );
}
