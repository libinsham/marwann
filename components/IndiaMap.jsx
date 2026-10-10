
"use client";

import { useState } from "react";
import India from "@svg-maps/india";
import { stateData } from "@/components/home/reachData";
import "./marwann-india-map.css";

export default function IndiaMap({
  selectedState,
  onStateSelect,
}) {
  const [hoveredState, setHoveredState] = useState("");

  const hoveredData = hoveredState
    ? stateData[hoveredState]
    : null;

  const handleStateClick = (stateName) => {
    onStateSelect?.(stateName);
  };

  return (
    <div className="marwann-india-map-wrap">
      <div
        className={`marwann-india-map-tooltip ${
          hoveredState ? "is-visible" : ""
        }`}
        aria-hidden={!hoveredState}
      >
        <strong>{hoveredState || "\u00A0"}</strong>

        <span>
          {hoveredData
            ? `${hoveredData.members} DB Members • ${hoveredData.centres} Approved ${
                hoveredData.centres === 1
                  ? "Center"
                  : "Centers"
              }`
            : "\u00A0"}
        </span>
      </div>

      <div className="marwann-india-map-stage">
        <svg
          className="marwann-india-map-svg"
          viewBox={India.viewBox}
          role="group"
          aria-label="Interactive map of India"
        >
          {India.locations.map((location) => {
            const isSelected =
              selectedState === location.name;

            const isHovered =
              hoveredState === location.name;

            let fillColor = "#075d56";

            if (isSelected) {
              fillColor = "#f7d95d";
            }

            if (isHovered) {
              fillColor = "#ffffff";
            }

            const strokeColor =
              isSelected || isHovered
                ? "#075d56"
                : "#ffffff";

            return (
              <path
                key={location.id}
                d={location.path}
                className={[
                  "marwann-india-map-location",
                  isSelected ? "is-selected" : "",
                  isHovered ? "is-hovered" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{
                  fill: fillColor,
                  stroke: strokeColor,
                }}
                onMouseEnter={() =>
                  setHoveredState(location.name)
                }
                onMouseLeave={() =>
                  setHoveredState("")
                }
                onFocus={() =>
                  setHoveredState(location.name)
                }
                onBlur={() =>
                  setHoveredState("")
                }
                onClick={() =>
                  handleStateClick(location.name)
                }
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();
                    handleStateClick(location.name);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Explore ${location.name}`}
                aria-pressed={isSelected}
              />
            );
          })}
        </svg>
      </div>

      <div
        className="marwann-india-map-status"
        aria-live="polite"
      >
        <span>Selected</span>
        <span className="status-dot">•</span>
        <strong>
          {selectedState || "Click a state to explore"}
        </strong>
      </div>
    </div>
  );
}
