
"use client";

import { useCallback, useEffect, useRef } from "react";
import "./GalleryCarousel.css";

export default function GalleryCarousel({ children }) {
  const viewportRef = useRef(null);

  const move = useCallback((direction) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const firstVisibleCard = viewport.querySelector(
      ".marwann-gallery-item:not([hidden])"
    );

    if (!firstVisibleCard) return;

    const track = viewport.querySelector(".marwann-gallery-carousel-track");
    const styles = track ? window.getComputedStyle(track) : null;
    const gap = Number.parseFloat(
      styles?.columnGap || styles?.gap || "24"
    ) || 24;

    viewport.scrollBy({
      left: direction * (firstVisibleCard.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  }, []);

  // Return to the first card when a category filter is selected.
  useEffect(() => {
    const resetSlider = (event) => {
      if (!event.target.closest("[data-gallery-filter]")) return;

      requestAnimationFrame(() => {
        viewportRef.current?.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      });
    };

    document.addEventListener("click", resetSlider);

    return () => {
      document.removeEventListener("click", resetSlider);
    };
  }, []);

  return (
    <section className="marwann-gallery-carousel" aria-label="Photo galleries">
      <button
        type="button"
        className="marwann-gallery-carousel-arrow"
        onClick={() => move(-1)}
        aria-label="Previous galleries"
      >
        &#10094;
      </button>

      <div
        className="marwann-gallery-carousel-viewport"
        ref={viewportRef}
      >
        <div
          className="row marwann-gallery-grid marwann-gallery-carousel-track"
          id="marwann-gallery-grid"
        >
          {children}
        </div>
      </div>

      <button
        type="button"
        className="marwann-gallery-carousel-arrow"
        onClick={() => move(1)}
        aria-label="Next galleries"
      >
        &#10095;
      </button>
    </section>
  );
}
