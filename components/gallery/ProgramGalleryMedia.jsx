
"use client";

import { useCallback, useMemo } from "react";

export default function ProgramGalleryMedia({
  slug,
  title,
  photos = [],
}) {
  const validPhotos = useMemo(
    () =>
      photos.filter(
        (photo) =>
          typeof photo?.src === "string" &&
          photo.src.trim() !== ""
      ),
    [photos]
  );

  const openGallery = useCallback(() => {
    if (!validPhotos.length) {
      console.error("No valid photos for gallery:", slug);
      return;
    }

    const Fancybox = window.Fancybox;

    if (typeof Fancybox?.show !== "function") {
      console.error("Fancybox is not loaded correctly.");
      return;
    }

    const slides = validPhotos.map((photo, index) => ({
      src: photo.src,
      type: "image",
      caption:
        photo.caption ||
        `${title} — ${index + 1} of ${validPhotos.length}`,
    }));

    // Diagnostic: check every slide URL.
    const results = slides.map((slide, index) => {
      try {
        const url = new URL(slide.src, window.location.href);
        return {
          index,
          src: slide.src,
          validUrl: Boolean(url.href),
        };
      } catch {
        return {
          index,
          src: slide.src,
          validUrl: false,
        };
      }
    });

    console.table(results);

    if (results.some((result) => !result.validUrl)) {
      console.error("Gallery contains invalid image URLs.");
      return;
    }

    Fancybox.show(slides, {
      startIndex: 0,
      infinite: true,
      Thumbs: {
        autoStart: true,
      },
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [],
          right: ["slideshow", "fullscreen", "close"],
        },
      },
    });
  }, [validPhotos, slug, title]);

  if (!validPhotos.length) {
    return (
      <div
        className="marwann-program-photo-placeholder"
        role="status"
      >
        <span className="program-symbol" aria-hidden="true">
          <i className="fa-regular fa-images" />
        </span>
        <span className="program-photo-note">
          No photos available yet
        </span>
      </div>
    );
  }

  return (
    <div className="marwann-program-gallery-media">
      <button
        type="button"
        className="marwann-program-photo-link is-loaded"
        onClick={openGallery}
        aria-label={`Open ${title} photo gallery`}
      >
        <img
          src={validPhotos[0].src}
          alt={validPhotos[0].alt || title}
          loading="lazy"
        />

        <span className="program-photo-open" aria-hidden="true">
          <i className="fa-regular fa-magnifying-glass-plus" />
        </span>
      </button>

      <span className="program-photo-count">
        <i className="fa-regular fa-images" />{" "}
        {validPhotos.length} Photos
      </span>
    </div>
  );
}
