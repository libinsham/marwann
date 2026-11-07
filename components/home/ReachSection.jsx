'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import IndiaMap from '@/components/IndiaMap';
import { defaultState, stateNames } from './reachData';
import '@/public/assets/css/marwann-reach-trust-details.css';

const canonicalStateName = (name) => ['Dadra and Nagar Haveli', 'Daman and Diu'].includes(name)
  ? 'Dadra and Nagar Haveli and Daman and Diu'
  : name;

function metricValue(rows, label) {
  const row = rows.find((item) => String(item.label || '').trim().toLowerCase() === label.toLowerCase());
  if (!row || !row.is_verified) return '—';
  return `${row.value ?? '—'}${row.unit ? ` ${row.unit}` : ''}`;
}

export default function ReachSection({ stateRecords = [], globalStats = [] }) {
  const [selectedState, setSelectedState] = useState(defaultState);

  const stateData = useMemo(() => {
    const byName = Object.fromEntries((stateRecords || []).map((row) => [row.name, row]));
    const records = Object.fromEntries(stateNames.map((name) => {
      const row = byName[name];
      return [name, row ? {
        type: row.type || 'State Region',
        members: Number(row.members_count || 0),
        centres: Number(row.centres_count || 0),
        districts: Number(row.districts_count || 0),
        coordinator: row.coordinator_name || '',
        coordinatorRole: row.coordinator_role || '',
        is_verified: Boolean(row.is_verified),
      } : {
        type: name.includes('Islands') || ['Chandigarh', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry', 'Dadra and Nagar Haveli and Daman and Diu'].includes(name) ? 'Union Territory' : 'State Region',
        members: 0, centres: 0, districts: 0, coordinator: '', coordinatorRole: '', is_verified: false,
      }];
    }));
    // The SVG map depicts the combined Dadra and Nagar Haveli and Daman and Diu UT as two paths.
    // Both paths display the same single official state/UT record from Laravel.
    const combined = records['Dadra and Nagar Haveli and Daman and Diu'];
    if (combined) {
      records['Dadra and Nagar Haveli'] = combined;
      records['Daman and Diu'] = combined;
    }
    return records;
  }, [stateRecords]);

  const displayStateName = canonicalStateName(selectedState);
  const selected = stateData[displayStateName] || {
    type: 'State Region', members: 0, centres: 0, districts: 0,
    coordinator: '', coordinatorRole: '', is_verified: false,
  };
  const showStateValue = (value) => selected.is_verified ? Number(value || 0).toLocaleString('en-IN') : '—';
  const verifiedStats = ['Verified Members', 'Approved Centres', 'Beneficiaries Served', 'Programmes']
    .every((label) => globalStats.some((row) => String(row.label || '').trim().toLowerCase() === label.toLowerCase() && row.is_verified));

  return (
    <section className="our-reach-section marwann-reach-section">
      <div className="container">
        <div className="row align-items-end marwann-reach-heading-row">
          <div className="col-xl-7 col-lg-7">
            <div className="common-subtitle"><span>Our Reach &amp; Grassroots Presence</span></div>
            <div className="common-title text-start m-b-0">
              <h2>Empowering Communities Across Many States</h2>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <p className="reach-intro marwann-reach-intro">
              Explore MARWANN&apos;s state-wise membership, approved centres and community presence. Figures are displayed after Trust verification.
            </p>
          </div>
        </div>

        <div className="reach-dashboard marwann-reach-dashboard">
          <div className="reach-dashboard-header">
            <div className="reach-dashboard-brand">
              <div className="reach-dashboard-icon"><i className="fa-regular fa-compass" /></div>
              <div>
                <h4>Grassroots Reach Overview</h4>
                <p>{verifiedStats ? 'Verified MARWANN figures' : 'Figures awaiting Trust verification'}</p>
              </div>
            </div>
            <span className="reach-status">
              <i className="fa-solid fa-circle" />
              {verifiedStats ? 'Verified Data' : 'Verification Pending'}
            </span>
          </div>

          <div className="reach-metrics marwann-reach-metrics">
            {[
              ['Verified Members', metricValue(globalStats, 'Verified Members')],
              ['Approved Centres', metricValue(globalStats, 'Approved Centres')],
              ['Beneficiaries Served', metricValue(globalStats, 'Beneficiaries Served')],
              ['Programmes', metricValue(globalStats, 'Programmes')],
            ].map(([label, value]) => (
              <div className="reach-metric" key={label}>
                <h3>{value}</h3>
                <p>{label}</p>
              </div>
            ))}
          </div>

          <div className="reach-dashboard-content">
            <div className="reach-map-card">
              <div className="reach-map-heading">
                <h4>India — Community Reach</h4>
                <span>Choose a state or union territory</span>
              </div>
              <div className="reach-map-area marwann-reach-map-area marwann-live-map-area">
                <IndiaMap selectedState={selectedState} onStateSelect={setSelectedState} stateData={stateData} />
              </div>
              <div className="reach-map-legend" />
            </div>

            <div className="reach-state-panel">
              <div className="reach-state-header">
                <span className="reach-eyebrow">{selected.type}</span>
                <h3>{displayStateName}</h3>
                <p>{selected.is_verified
                  ? 'State-wise details verified by MARWANN administrators.'
                  : 'State-wise figures and coordinator details will appear here after the Trust verifies and publishes them.'}</p>
              </div>

              <div className="reach-state-stats">
                <div className="reach-state-stat">
                  <div className="reach-stat-icon"><i className="fa-regular fa-user-group" /></div>
                  <div><span>Verified Members</span><h4>{showStateValue(selected.members)}</h4></div>
                </div>
                <div className="reach-state-stat">
                  <div className="reach-stat-icon"><i className="fa-regular fa-building" /></div>
                  <div><span>Approved Centres</span><h4>{showStateValue(selected.centres)}</h4></div>
                </div>
                <div className="reach-state-stat">
                  <div className="reach-stat-icon"><i className="fa-regular fa-location-dot" /></div>
                  <div><span>District / Administrative Units</span><h4>{showStateValue(selected.districts)}</h4></div>
                </div>
              </div>

              <div className="marwann-coordinator-box">
                <i className="fa-regular fa-circle-check" />
                <div>
                  <strong>Appointed Regional Coordinator</strong>
                  <span>{selected.is_verified && selected.coordinator
                    ? `${selected.coordinator}${selected.coordinatorRole ? ` (${selected.coordinatorRole})` : ''}`
                    : 'Coordinator details not published'}</span>
                </div>
              </div>

              <div className="reach-actions">
                <Link href="/membership" className="e-primary-btn has-icon">
                  Register as a Member
                  <span className="icon-wrap"><span className="icon"><i className="fa-regular fa-arrow-right" /><i className="fa-regular fa-arrow-right" /></span></span>
                </Link>
                <Link href="/contact" className="reach-contact-btn">Contact Us <i className="fa-regular fa-arrow-right" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
