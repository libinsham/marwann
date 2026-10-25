
"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

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

  // Carousel phases: idle, dragging, settling, resetting.
  const [phase, setPhase] = useState("idle");
  const [dragOffset, setDragOffset] = useState(0);
  const [settleDirection, setSettleDirection] = useState(0);

  const viewportRef = useRef(null);
  const dragRef = useRef(null);
  const suppressClickRef = useRef(false);
  const resetClickTimerRef = useRef(null);
  const animationFrameRef = useRef(null);

  const total = validPhotos.length;
  const currentIndex = total > 0 ? activeIndex % total : 0;

  const lightboxOpen =
    lightboxIndex !== null && total > 0;

  const offsets =
    total >= 3 ? [-1, 0, 1] : total === 2 ? [0, 1] : [0];

  const activePhoto = validPhotos[currentIndex];

  const modalPhoto = lightboxOpen
    ? validPhotos[lightboxIndex]
    : null;

  // Reset the carousel when its program or photo collection changes.
  useEffect(() => {
    setActiveIndex(0);
    setLightboxIndex(null);
    setDragOffset(0);
    setSettleDirection(0);
    setPhase("idle");
    dragRef.current = null;
  }, [slug, total, validPhotos[0]?.src]);

  // Lock background scrolling and support keyboard controls in the lightbox.
  useEffect(() => {
    if (!lightboxOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setLightboxIndex(null);
        return;
      }

      if (event.key === "ArrowRight" && total > 1) {
        event.preventDefault();

        setLightboxIndex((index) =>
          index === null ? null : (index + 1) % total
        );
      }

      if (event.key === "ArrowLeft" && total > 1) {
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

  // Clean up timers and animation frames.
  useEffect(() => {
    return () => {
      if (resetClickTimerRef.current) {
        window.clearTimeout(resetClickTimerRef.current);
      }

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const showPrevious = useCallback(() => {
    if (total < 2 || phase !== "idle") return;

    setDragOffset(0);
    setSettleDirection(-1);
    setPhase("settling");
  }, [total, phase]);

  const showNext = useCallback(() => {
    if (total < 2 || phase !== "idle") return;

    setDragOffset(0);
    setSettleDirection(1);
    setPhase("settling");
  }, [total, phase]);

  function openLightbox(index) {
    if (phase === "dragging" || phase === "settling") return;

    setActiveIndex(index);
    setLightboxIndex(index);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  // Begin tracking pointer movement.
  function handlePointerDown(event) {
    if (total < 2 || phase !== "idle") return;

    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      lastX: event.clientX,
      moved: false,
    };

    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Pointer capture is optional.
    }
  }

  // Follow the cursor directly while dragging.
  function handlePointerMove(event) {
    const drag = dragRef.current;

    if (!drag || drag.pointerId !== event.pointerId) return;

    const distanceX = event.clientX - drag.startX;
    const distanceY = event.clientY - drag.startY;

    drag.lastX = event.clientX;

    // Ignore primarily vertical movement to preserve page scrolling.
    if (
      Math.abs(distanceX) < 5 ||
      Math.abs(distanceX) <= Math.abs(distanceY)
    ) {
      return;
    }

    drag.moved = true;

    if (phase !== "dragging") {
      setPhase("dragging");
    }

    // A little resistance near the travel limit feels more natural.
    const viewportWidth =
      viewportRef.current?.clientWidth || 600;

    const limit = viewportWidth * 0.9;

    const distance =
      Math.sign(distanceX) *
      limit *
      (1 - Math.exp(-Math.abs(distanceX) / limit));

    setDragOffset(distance);
  }

  // Animate to the adjacent slide instead of replacing the image immediately.
  function handlePointerUp(event) {
    const drag = dragRef.current;

    if (!drag || drag.pointerId !== event.pointerId) return;

    const distanceX = event.clientX - drag.startX;
    const distanceY = event.clientY - drag.startY;

    const horizontalDrag =
      drag.moved &&
      Math.abs(distanceX) > 45 &&
      Math.abs(distanceX) > Math.abs(distanceY);

    dragRef.current = null;

    if (!drag.moved) {
      setPhase("idle");
      setDragOffset(0);
      return;
    }

    // Prevent the synthetic click that follows dragging from opening the lightbox.
    suppressClickRef.current = true;

    if (resetClickTimerRef.current) {
      window.clearTimeout(resetClickTimerRef.current);
    }

    resetClickTimerRef.current = window.setTimeout(() => {
      suppressClickRef.current = false;
      resetClickTimerRef.current = null;
    }, 400);

    if (horizontalDrag) {
      setSettleDirection(distanceX < 0 ? 1 : -1);
    } else {
      // A short pull returns to the same photo.
      setSettleDirection(0);
    }

    // Keep the current drag offset. CSS animates from it to the destination.
    setPhase("settling");
  }

  function handlePointerCancel() {
    if (!dragRef.current) return;

    dragRef.current = null;
    setSettleDirection(0);
    setPhase("settling");
  }

  // Called once the track's CSS transform transition completes.
  function handleTrackTransitionEnd(event) {
    if (event.target !== event.currentTarget) return;

    if (event.propertyName !== "transform") return;

    if (phase !== "settling") return;

    if (settleDirection !== 0 && total > 1) {
      const direction = settleDirection;

      setActiveIndex((index) =>
        (index + direction + total) % total
      );
    }

    // Recenter the three-page track without a second visible animation.
    setDragOffset(0);
    setSettleDirection(0);
    setPhase("resetting");

    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = window.requestAnimationFrame(() => {
      animationFrameRef.current = null;
      setPhase("idle");
    });
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

  // Empty state.
  if (total === 0) {
    return (
      <section
        className="mct-program-gallery-panel"
        data-program-gallery={slug}
      >
        <h2 className="mct-program-gallery-title">
          {title}
        </h2>

        <div className="mct-program-gallery-empty">
          <i
            className="fa-regular fa-images"
            aria-hidden="true"
          />
          <span>No photos available yet</span>
        </div>
      </section>
    );
  }

  // Calculate the track position for dragging, release, and recentering.
  let trackTransform;

  if (phase === "settling" && settleDirection === 1) {
    trackTransform = "translate3d(-66.666667%, 0, 0)";
  } else if (
    phase === "settling" &&
    settleDirection === -1
  ) {
    trackTransform = "translate3d(0, 0, 0)";
  } else {
    trackTransform =
      `translate3d(calc(-33.333333% + ${dragOffset}px), 0, 0)`;
  }

  const trackClassName = [
    "mct-program-gallery-track",
    phase === "dragging" ? "is-dragging" : "",
    phase === "settling" ? "is-settling" : "",
    phase === "resetting" ? "is-resetting" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <section
        className="mct-program-gallery-panel"
        data-program-gallery={slug}
        aria-label={`${title} photo gallery`}
      >
        {/* Program heading */}
        <header className="mct-program-gallery-header">
          <div className="mct-program-gallery-heading">
            {category && (
              <span className="mct-program-gallery-category">
                {category}
              </span>
            )}

            <h2 className="mct-program-gallery-title">
              {title}
            </h2>

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

        {/* Main slider */}
        <div className="mct-program-gallery-stage">
          <button
            type="button"
            className="mct-program-gallery-arrow"
            onClick={showPrevious}
            disabled={total < 2 || phase !== "idle"}
            aria-label={`Previous ${title} photo`}
          >
            <span aria-hidden="true">‹</span>
          </button>

          <div
            className="mct-program-gallery-viewport"
            ref={viewportRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onLostPointerCapture={handlePointerCancel}
          >
            <div
              className={trackClassName}
              style={{ transform: trackTransform }}
              onTransitionEnd={handleTrackTransitionEnd}
            >
              {[-1, 0, 1].map((pageOffset) => {
                const pageIndex =
                  (currentIndex + pageOffset + total) % total;

                return (
                  <div
                    className="mct-program-gallery-page"
                    key={`page-${pageOffset}`}
                    aria-hidden={pageOffset !== 0}
                  >
                    <div
                      className="mct-program-gallery-slides"
                      data-count={Math.min(total, 3)}
                    >
                      {offsets.map((offset) => {
                        const photoIndex =
                          ((pageIndex + offset) % total + total) %
                          total;

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
                            className={
                              `mct-program-gallery-slide ${positionClass}`
                            }
                            onClick={() => {
                              if (pageOffset === 0) {
                                handleSlideClick(photoIndex);
                              }
                            }}
                            tabIndex={pageOffset === 0 ? 0 : -1}
                            aria-label={`Open photo ${photoIndex + 1} of ${total}`}
                            aria-pressed={
                              pageOffset === 0 && isActive
                            }
                            draggable={false}
                          >
                            <img
                              src={photo.src}
                              alt={
                                photo.alt ||
                                photo.caption ||
                                `${title} photo ${photoIndex + 1}`
                              }
                              loading={
                                pageOffset === 0 && isActive
                                  ? "eager"
                                  : "lazy"
                              }
                              draggable={false}
                            />

                            {pageOffset === 0 && isActive && (
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
                );
              })}
            </div>
          </div>

          <button
            type="button"
            className="mct-program-gallery-arrow"
            onClick={showNext}
            disabled={total < 2 || phase !== "idle"}
            aria-label={`Next ${title} photo`}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>

        {/* Current caption */}
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
                onClick={() => {
                  if (phase !== "idle") return;
                  setActiveIndex(index);
                }}
                aria-label={`Show photo ${index + 1} of ${total}`}
                aria-pressed={index === currentIndex}
              >
                <img
                  src={photo.src}
                  alt=""
                  loading="lazy"
                  draggable={false}
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
            <span className="mct-photo-lightbox-title">
              {title}
            </span>

            <span className="mct-photo-lightbox-count">
              {lightboxIndex + 1} / {total}
            </span>
          </div>

          <button
            type="button"
            className="mct-photo-lightbox-arrow mct-photo-lightbox-prev"
            onClick={() =>
              setLightboxIndex(
                (index) => (index - 1 + total) % total
              )
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
              draggable={false}
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
              setLightboxIndex(
                (index) => (index + 1) % total
              )
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
                <img
                  src={photo.src}
                  alt=""
                  draggable={false}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
