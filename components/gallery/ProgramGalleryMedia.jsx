
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./ProgramGalleryMedia.css";

export default function ProgramGalleryMedia({
  slug,
  title = "Photo Gallery",
  category = "",
  description = "",
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

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const viewportRef = useRef(null);
  const dragRef = useRef(null);
  const suppressClickRef = useRef(false);
  const resetClickTimerRef = useRef(null);

  const total = validPhotos.length;
  const currentIndex = total ? activeIndex % total : 0;
  const lightboxOpen = lightboxIndex !== null && total > 0;

  useEffect(() => {
    setActiveIndex(0);
    setLightboxIndex(null);
    setDragOffset(0);
    setIsDragging(false);
  }, [slug, total, validPhotos[0]?.src]);

  // Lightbox keyboard navigation and page scroll locking.
  useEffect(() => {
    if (!lightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setLightboxIndex(null);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setLightboxIndex((index) =>
          index === null ? null : (index + 1) % total
        );
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setLightboxIndex((index) =>
          index === null
            ? null
            : (index - 1 + total) % total
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen, total]);

  // Clean up the click-suppression timer.
  useEffect(() => {
    return () => {
      if (resetClickTimerRef.current) {
        window.clearTimeout(resetClickTimerRef.current);
      }
    };
  }, []);

  const showPrevious = useCallback(() => {
    if (total < 2) return;

    setActiveIndex((index) => (index - 1 + total) % total);
  }, [total]);

  const showNext = useCallback(() => {
    if (total < 2) return;

    setActiveIndex((index) => (index + 1) % total);
  }, [total]);

  function openLightbox(index) {
    setActiveIndex(index);
    setLightboxIndex(index);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  // Start dragging the carousel.
  function handlePointerDown(event) {
    if (total < 2) return;

    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      moved: false,
    };

    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Continue if pointer capture is unavailable.
    }
  }

  // The track follows the mouse while the pointer is moving.
  function handlePointerMove(event) {
    const drag = dragRef.current;

    if (!drag || drag.pointerId !== event.pointerId) return;

    const distanceX = event.clientX - drag.startX;
    const distanceY = event.clientY - drag.startY;

    // Ignore vertical movement so page scrolling remains natural.
    if (
      Math.abs(distanceX) <= Math.abs(distanceY) ||
      Math.abs(distanceX) < 5
    ) {
      return;
    }

    drag.moved = true;
    setIsDragging(true);

    // Slight resistance at the edges creates a controlled drag feel.
    const maxOffset = Math.max(
      120,
      (viewportRef.current?.clientWidth || 600) * 0.65
    );

    const resistedOffset = Math.max(
      -maxOffset,
      Math.min(maxOffset, distanceX)
    );

    setDragOffset(resistedOffset);
  }

  // Change images after a meaningful horizontal drag.
  function handlePointerEnd(event) {
    const drag = dragRef.current;

    if (!drag || drag.pointerId !== event.pointerId) return;

    const distanceX = event.clientX - drag.startX;
    const distanceY = event.clientY - drag.startY;

    const horizontalDrag =
      drag.moved &&
      Math.abs(distanceX) > 45 &&
      Math.abs(distanceX) > Math.abs(distanceY);

    dragRef.current = null;
    setIsDragging(false);

    if (drag.moved) {
      // Prevent the browser's synthetic click from opening the lightbox.
      suppressClickRef.current = true;

      if (horizontalDrag) {
        if (distanceX < 0) {
          showNext();
        } else {
          showPrevious();
        }
      }

      if (resetClickTimerRef.current) {
        window.clearTimeout(resetClickTimerRef.current);
      }

      resetClickTimerRef.current = window.setTimeout(() => {
        suppressClickRef.current = false;
        resetClickTimerRef.current = null;
      }, 350);
    }

    // CSS animates the track back to its resting position.
    setDragOffset(0);
  }

  function handlePointerCancel() {
    dragRef.current = null;
    setIsDragging(false);
    setDragOffset(0);
  }

  function handleSlideClick(index) {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;

      if (resetClickTimerRef.current) {
        window.clearTimeout(resetClickTimerRef.current);
        resetClickTimerRef.current = null;
      }

      return;
    }

    openLightbox(index);
  }

  if (!total) {
    return (
      <section
        className="mct-program-gallery-panel"
        data-program-gallery={slug}
      >
        <h2 className="mct-program-gallery-title">{title}</h2>

        <div className="mct-program-gallery-empty">
          <i className="fa-regular fa-images" aria-hidden="true" />
          <span>No photos available yet</span>
        </div>
      </section>
    );
  }

  const offsets =
    total >= 3 ? [-1, 0, 1] : total === 2 ? [0, 1] : [0];

  const activePhoto = validPhotos[currentIndex];
  const modalPhoto =
    lightboxOpen ? validPhotos[lightboxIndex] : null;

  return (
    <>
      <section
        className="mct-program-gallery-panel"
        data-program-gallery={slug}
        aria-label={`${title} photo gallery`}
      >
        {/* Heading */}
        <header className="mct-program-gallery-header">
          <div className="mct-program-gallery-heading">
            {category && (
              <span className="mct-program-gallery-category">
                {category}
              </span>
            )}

            <h2 className="mct-program-gallery-title">{title}</h2>

            {description && (
              <p className="mct-program-gallery-description">
                {description}
              </p>
            )}
          </div>

          <span className="mct-program-gallery-count">
            {total} {total === 1 ? "Photo" : "Photos"}
          </span>
        </header>

        {/* Smooth draggable carousel */}
        <div className="mct-program-gallery-stage">
          <button
            type="button"
            className="mct-program-gallery-arrow"
            onClick={showPrevious}
            disabled={total < 2}
            aria-label={`Previous ${title} photo`}
          >
            <span aria-hidden="true">‹</span>
          </button>

          <div
            className="mct-program-gallery-viewport"
            ref={viewportRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerCancel}
            onLostPointerCapture={handlePointerCancel}
          >
            <div
              className={
                "mct-program-gallery-slides" +
                (isDragging ? " is-dragging" : "")
              }
              data-count={Math.min(total, 3)}
              style={{
                transform: `translate3d(${dragOffset}px, 0, 0)`,
              }}
            >
              {offsets.map((offset) => {
                const photoIndex =
                  ((currentIndex + offset) % total + total) % total;

                const photo = validPhotos[photoIndex];
                const isActive = offset === 0;

                const positionClass = isActive
                  ? "is-active"
                  : offset < 0
                    ? "is-previous"
                    : "is-next";

                return (
                  <button
                    key={`${photo.src}-${offset}`}
                    type="button"
                    className={`mct-program-gallery-slide ${positionClass}`}
                    onClick={() => handleSlideClick(photoIndex)}
                    aria-label={`Open photo ${photoIndex + 1} of ${total} in ${title}`}
                    aria-pressed={isActive}
                    draggable={false}
                  >
                    <img
                      src={photo.src}
                      alt={
                        photo.alt ||
                        photo.caption ||
                        `${title} photo ${photoIndex + 1}`
                      }
                      loading={isActive ? "eager" : "lazy"}
                      draggable="false"
                    />

                    {isActive && (
                      <>
                        <span className="mct-program-gallery-index">
                          {photoIndex + 1} / {total}
                        </span>

                        <span
                          className="mct-program-gallery-zoom"
                          aria-hidden="true"
                        >
                          ⤢
                        </span>
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            className="mct-program-gallery-arrow"
            onClick={showNext}
            disabled={total < 2}
            aria-label={`Next ${title} photo`}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>

        {/* Current photo caption */}
        {activePhoto?.caption && (
          <p className="mct-program-gallery-caption">
            {activePhoto.caption}
          </p>
        )}

        {/* Thumbnail navigation */}
        {total > 1 && (
          <div
            className="mct-program-gallery-thumbnails"
            aria-label={`Choose a ${title} photo`}
          >
            {validPhotos.map((photo, index) => (
              <button
                key={`${photo.src}-thumbnail-${index}`}
                type="button"
                className={
                  "mct-program-gallery-thumbnail" +
                  (index === currentIndex ? " is-active" : "")
                }
                onClick={() => setActiveIndex(index)}
                aria-label={`Show photo ${index + 1} of ${total}`}
                aria-pressed={index === currentIndex}
              >
                <img
                  src={photo.src}
                  alt=""
                  loading="lazy"
                  draggable="false"
                />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Full-screen lightbox */}
      {lightboxOpen && modalPhoto && (
        <div
          className="mct-photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} photo viewer`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >
          <button
            type="button"
            className="mct-photo-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close photo viewer"
            autoFocus
          >
            ×
          </button>

          <div className="mct-photo-lightbox-topbar">
            <span className="mct-photo-lightbox-title">{title}</span>
            <span className="mct-photo-lightbox-count">
              {lightboxIndex + 1} / {total}
            </span>
          </div>

          <button
            type="button"
            className="mct-photo-lightbox-arrow mct-photo-lightbox-prev"
            onClick={() =>
              setLightboxIndex((index) => (index - 1 + total) % total)
            }
            aria-label="Previous photo"
          >
            ‹
          </button>

          <div className="mct-photo-lightbox-content">
            <img
              key={modalPhoto.src}
              className="mct-photo-lightbox-image"
              src={modalPhoto.src}
              alt={
                modalPhoto.alt ||
                modalPhoto.caption ||
                `${title} photo ${lightboxIndex + 1}`
              }
              draggable="false"
            />

            {modalPhoto.caption && (
              <p className="mct-photo-lightbox-caption">
                {modalPhoto.caption}
              </p>
            )}
          </div>

          <button
            type="button"
            className="mct-photo-lightbox-arrow mct-photo-lightbox-next"
            onClick={() =>
              setLightboxIndex((index) => (index + 1) % total)
            }
            aria-label="Next photo"
          >
            ›
          </button>

          <div className="mct-photo-lightbox-thumbnails">
            {validPhotos.map((photo, index) => (
              <button
                key={`${photo.src}-lightbox-${index}`}
                type="button"
                className={
                  "mct-photo-lightbox-thumbnail" +
                  (index === lightboxIndex ? " is-active" : "")
                }
                onClick={() => {
                  setLightboxIndex(index);
                  setActiveIndex(index);
                }}
                aria-label={`Open photo ${index + 1}`}
                aria-pressed={index === lightboxIndex}
              >
                <img src={photo.src} alt="" draggable="false" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
