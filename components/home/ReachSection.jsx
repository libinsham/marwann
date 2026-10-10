"use client";

import Link from "next/link";
import { useState } from "react";
import IndiaMap from "@/components/IndiaMap";
import { reachStats, stateData, defaultState } from "./reachData";

import "@/public/assets/css/marwann-reach-trust-details.css";

export default function ReachSection() {
  const [selectedState, setSelectedState] = useState(defaultState);

  const selected = stateData[selectedState] || {
    type: "Coverage Overview",
    members: 0,
    centres: 0,
    districts: 0,
    coordinator: "Data pending",
    coordinatorRole: "To be verified",
    groundCentres: [],
  };

  return (
    <section className="our-reach-section marwann-reach-section">
      <div className="container">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="row align-items-end marwann-reach-heading-row">
          <div className="col-xl-7 col-lg-7">
            <div className="common-subtitle">
              <span>Our Reach &amp; Grassroots Presence</span>
            </div>

            <div className="common-title text-start m-b-0">
              <h2>Empowering Communities Across Many States</h2>
            </div>
          </div>

          <div className="col-xl-5 col-lg-5">
            <p className="reach-intro marwann-reach-intro">
              Explore our trial state-wise footprint, community presence and
              grassroots programme network across India.
            </p>
          </div>
        </div>

        {/* =====================================================
            REACH DASHBOARD
        ===================================================== */}
        <div className="reach-dashboard marwann-reach-dashboard">

          {/* Dashboard Header */}
          <div className="reach-dashboard-header">
            <div className="reach-dashboard-brand">
              <div className="reach-dashboard-icon">
                <i className="fa-regular fa-compass" />
              </div>

              <div>
                <h4>Grassroots Reach Overview</h4>
                <p>
                  Trial data — replace with verified MARWANN values
                </p>
              </div>
            </div>

            <span className="reach-status">
              <i className="fa-solid fa-circle" />
              Trial Data
            </span>
          </div>

          {/* =================================================
              TOP METRICS
          ================================================= */}
          <div className="reach-metrics marwann-reach-metrics">

            <div className="reach-metric">
              <h3>{reachStats.verifiedMembers}</h3>
              <p>Verified Members</p>
            </div>

            <div className="reach-metric">
              <h3>{reachStats.approvedCentres}</h3>
              <p>Approved Centres</p>
            </div>

            <div className="reach-metric">
              <h3>{reachStats.beneficiariesServed}</h3>
              <p>Beneficiaries Served</p>
            </div>

            <div className="reach-metric">
              <h3>{reachStats.activeProgrammes}</h3>
              <p>Programmes</p>
            </div>

          </div>

          {/* =================================================
              MAIN DASHBOARD
          ================================================= */}
          <div className="reach-dashboard-content">

            {/* =================================================
                LEFT — INDIA MAP
            ================================================= */}
            <div className="reach-map-card">

              <div className="reach-map-heading">
                <h4>India — Community Reach</h4>
                <span>Trial state mapping</span>
              </div>

              <div className="reach-map-area marwann-reach-map-area marwann-live-map-area">
                <IndiaMap
                  selectedState={selectedState}
                  onStateSelect={setSelectedState}
                />
              </div>

              <div className="reach-map-legend">
                

              
              </div>

            </div>

            {/* =================================================
                RIGHT — SELECTED STATE DETAILS
            ================================================= */}
            <div className="reach-state-panel">

              <div className="reach-state-header">

                <span className="reach-eyebrow">
                  {selected.type}
                </span>

                <h3>{selectedState}</h3>

                <p>
                  Trial community presence details for this state.
                  Replace these figures with MARWANN's exact verified
                  records later.
                </p>

              </div>

              {/* State Statistics */}
              <div className="reach-state-stats">

                {/* Members */}
                <div className="reach-state-stat">

                  <div className="reach-stat-icon">
                    <i className="fa-regular fa-user-group" />
                  </div>

                  <div>
                    <span>Database Members</span>
                    <h4>{selected.members}</h4>
                  </div>

                </div>

                {/* Centres */}
                <div className="reach-state-stat">

                  <div className="reach-stat-icon">
                    <i className="fa-regular fa-building" />
                  </div>

                  <div>
                    <span>Digital / Approved Centres</span>
                    <h4>{selected.centres}</h4>
                  </div>

                </div>

                {/* Districts */}
                <div className="reach-state-stat">

                  <div className="reach-stat-icon">
                    <i className="fa-regular fa-location-dot" />
                  </div>

                  <div>
                    <span>Administrative / District Units</span>
                    <h4>{selected.districts}</h4>
                  </div>

                </div>

                {/* Compliance */}
                <div className="reach-state-stat">

                  <div className="reach-stat-icon">
                    <i className="fa-regular fa-badge-check" />
                  </div>

                  <div>
                    <span>Compliance</span>
                    <h4>To be verified</h4>
                  </div>

                </div>

              </div>

              {/* =================================================
                  ACTIVE GROUND CENTRES
              ================================================= */}
            {/* ACTIVE GROUND CENTRES */}
<div className="marwann-ground-centres-box">
  <div className="marwann-ground-centres-title">
    <i className="fa-regular fa-building" aria-hidden="true" />
    <strong>Active Ground Centres</strong>
  </div>

  <div className="marwann-ground-centres-list">
    {selected.groundCentres?.length > 0 ? (
      selected.groundCentres.map((centre) => (
        <span className="marwann-ground-centre-item" key={centre}>
          <i className="fa-solid fa-check" aria-hidden="true" />
          <span>{centre}</span>
        </span>
      ))
    ) : (
      <span className="marwann-ground-centre-empty">
        Data pending
      </span>
    )}
  </div>
</div>

{/* COORDINATOR */}
<div className="marwann-coordinator-box">
  <i
    className="fa-regular fa-circle-check"
    aria-hidden="true"
  />

  <div className="marwann-coordinator-content">
    <strong>Appointed Regional Coordinator</strong>

    <p className="marwann-coordinator-name">
      {selected.coordinator}
    </p>

    <span className="marwann-coordinator-role">
      {selected.coordinatorRole}
    </span>
  </div>
</div>
              {/* =================================================
                  COORDINATOR
              ================================================= */}
              <div className="marwann-coordinator-box">

                <i className="fa-regular fa-circle-check" />

                <div>
                  <strong>
                    Appointed Regional Coordinator
                  </strong>

                  <span>
                    {selected.coordinator}
                    {" "}
                    ({selected.coordinatorRole})
                  </span>
                </div>

              </div>

              {/* =================================================
                  ACTIONS
              ================================================= */}
              <div className="reach-actions">

                <Link
                  href="/program-areas"
                  className="e-primary-btn has-icon"
                >
                  Explore Our Work

                  <span className="icon-wrap">
                    <span className="icon">
                      <i className="fa-regular fa-arrow-right" />
                      <i className="fa-regular fa-arrow-right" />
                    </span>
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="reach-contact-btn"
                >
                  Contact Us
                  <i className="fa-regular fa-arrow-right" />
                </Link>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}