'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import './MembershipPortal.css';

const STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
  'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
  'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
  'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
  'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi',
  'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry',
];

const BASE_POSITIONS = [
  'General Member', 'State President', 'State Vice President', 'State Secretary',
  'District President', 'District Executive President', 'District Secretary', 'Member Committee',
];
const WOMEN_POSITIONS = [
  'State Women President', 'State Vice Women President', 'State Women Secretary',
  'District Women President', 'District Women Executive President', 'District Women Secretary',
];

export default function MembershipPortal() {
  const [gender, setGender] = useState('');
  const [position, setPosition] = useState('');
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');
  const [applicationNumber, setApplicationNumber] = useState('');

  const positions = useMemo(() => [
    ...BASE_POSITIONS,
    ...(gender === 'Female' ? WOMEN_POSITIONS : []),
  ], [gender]);

  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setBusy(true);
    setNotice('');
    setError('');

    const fd = new FormData(form);
    const body = {
      full_name: String(fd.get('full_name') || '').trim(),
      date_of_birth: fd.get('date_of_birth') || null,
      gender: fd.get('gender') || null,
      address: String(fd.get('address') || '').trim(),
      state: fd.get('state') || '',
      district: String(fd.get('district') || '').trim(),
      phone: String(fd.get('phone') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      blood_group: fd.get('blood_group') || null,
      position: fd.get('position') || '',
      position_state: fd.get('position_state') || null,
      position_district: fd.get('position_district') || null,
      committee_sector: fd.get('committee_sector') || null,
      consent: fd.get('consent') === 'on',
      website: String(fd.get('website') || '').trim(),
    };

    try {
      const response = await fetch('/api/backend/membership-applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const json = await response.json().catch(() => ({}));
      if (!response.ok) {
        const first = json.errors ? Object.values(json.errors)[0]?.[0] : null;
        throw new Error(first || json.message || 'We could not submit your application. Please try again.');
      }
      setApplicationNumber(json.data?.application_number || 'Submitted');
      setNotice(json.data?.message || 'Your application has been received.');
      form.reset();
      setGender('');
      setPosition('');
    } catch (err) {
      setError(err.message || 'We could not submit your application. Please try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="mct-portal">
      <div className="mct-portal-shell">
        <header className="mct-portal-header">
          <div className="mct-portal-brand">
            <img src="/assets/img/marwann-logo.png" alt="MARWANN Charitable Trust" />
            <div>
              <span className="mct-portal-eyebrow">MARWANN CHARITABLE TRUST</span>
              <h1>Membership Registration</h1>
              <p>Join us in serving humanity.</p>
            </div>
          </div>
          <Link href="/admin/login" className="mct-admin-button">Admin Login</Link>
        </header>

        {notice ? (
          <section className="mct-portal-form" aria-live="polite">
            <div className="mct-form-heading">
              <span className="mct-portal-eyebrow">APPLICATION RECEIVED</span>
              <h2>Thank you for registering.</h2>
              <p>{notice}</p>
            </div>
            <div className="mct-payment-notice">
              <strong>Your application reference</strong>
              <p style={{ fontSize: 20, fontWeight: 800, margin: '8px 0' }}>{applicationNumber}</p>
              <p>Your application is pending Trust verification. Membership is confirmed only after the Trust reviews and approves it. No payment is collected at this stage; the Trust will contact you with any approved fee or next steps.</p>
            </div>
            <div className="mct-form-footer">
              <Link href="/" className="mct-secondary-button">Back to website</Link>
              <button type="button" className="mct-primary-button" onClick={() => { setNotice(''); setApplicationNumber(''); }}>Submit another application <span>→</span></button>
            </div>
          </section>
        ) : (
          <form className="mct-portal-form" onSubmit={submit}>
            <div className="mct-honeypot" aria-hidden="true">
              <label>Leave this field empty<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
            </div>
            <div className="mct-form-heading">
              <span className="mct-portal-eyebrow">BECOME A MEMBER</span>
              <h2>Member Application</h2>
              <p>Complete the details below. The Trust will verify your application and contact you about approval and any membership fee.</p>
            </div>

            {error && <div className="mct-portal-notice" role="alert">{error}</div>}

            <section className="mct-form-section">
              <h3>01. Personal Information</h3>
              <div className="mct-form-grid">
                <label className="mct-field mct-field-full">Full Name *
                  <input name="full_name" type="text" autoComplete="name" maxLength={150} placeholder="Enter your full name" required />
                </label>
                <label className="mct-field">Date of Birth
                  <input name="date_of_birth" type="date" autoComplete="bday" max={new Date().toISOString().slice(0, 10)} />
                </label>
                <label className="mct-field">Gender
                  <select name="gender" value={gender} onChange={(event) => { setGender(event.target.value); setPosition(''); }}>
                    <option value="">Select</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </label>
                <label className="mct-field mct-field-full">Full Address *
                  <textarea name="address" autoComplete="street-address" rows={3} maxLength={2000} placeholder="House number, street, town or village" required />
                </label>
                <label className="mct-field">State / Union Territory *
                  <select name="state" defaultValue="" required>
                    <option value="">Select state / union territory</option>
                    {STATES.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </label>
                <label className="mct-field">District *
                  <input name="district" type="text" maxLength={120} placeholder="Enter your district" required />
                </label>
                <label className="mct-field">Phone Number *
                  <input name="phone" type="tel" autoComplete="tel" maxLength={20} pattern="[+]?[0-9 -]{7,20}" placeholder="Enter phone number" required />
                </label>
                <label className="mct-field">Email Address *
                  <input name="email" type="email" autoComplete="email" maxLength={190} placeholder="you@example.com" required />
                </label>
                <label className="mct-field">Blood Group
                  <select name="blood_group" defaultValue="">
                    <option value="">Select blood group</option>
                    {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((group) => <option key={group} value={group}>{group}</option>)}
                  </select>
                </label>
              </div>
            </section>

            <section className="mct-form-section">
              <h3>02. Membership Position</h3>
              <p className="mct-section-description">Choose your preferred position. All positions are subject to Trust verification and approval.</p>
              <div className="mct-form-grid">
                <label className="mct-field mct-field-full">Preferred Position *
                  <select name="position" value={position} onChange={(event) => setPosition(event.target.value)} required>
                    <option value="">Select a position</option>
                    {positions.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </label>
                {position.startsWith('State') && (
                  <label className="mct-field mct-field-full">Preferred State / Union Territory
                    <select name="position_state" defaultValue="" required>
                      <option value="">Select state / union territory</option>
                      {STATES.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </label>
                )}
                {(position.startsWith('District') || position === 'Member Committee') && (
                  <>
                    <label className="mct-field">Preferred State / Union Territory
                      <select name="position_state" defaultValue="" required>
                        <option value="">Select state / union territory</option>
                        {STATES.map((item) => <option key={item} value={item}>{item}</option>)}
                      </select>
                    </label>
                    <label className="mct-field">Preferred District
                      <input name="position_district" type="text" maxLength={120} placeholder="Enter district" required />
                    </label>
                  </>
                )}
                {position === 'Member Committee' && (
                  <label className="mct-field mct-field-full">Sector / Committee Area
                    <input name="committee_sector" type="text" maxLength={150} placeholder="Enter sector or committee area" required />
                  </label>
                )}
              </div>
            </section>

            <section className="mct-terms-content">
              <h3>Membership Declaration</h3>
              <ol>
                <li>The information provided in this application must be accurate and complete.</li>
                <li>Membership and leadership positions are subject to verification and approval by the Trust.</li>
                <li>Submitting this form does not automatically confirm membership or appoint a leadership position.</li>
                <li>The Trust will communicate any approved membership fee and official payment instructions after reviewing the application. Do not send payment to unofficial accounts.</li>
                <li>Your information will be used to review this application and contact you about membership, in accordance with the Trust&apos;s privacy notice.</li>
              </ol>
              <label className="mct-terms-check">
                <input type="checkbox" name="consent" required />
                <span>I confirm that the information is accurate and consent to MARWANN CHARITABLE TRUST using these details to process my membership application. *</span>
              </label>
            </section>

            <div className="mct-payment-notice">
              <strong>Payment is not enabled on this form.</strong>
              <p>The Trust has not configured a confirmed annual membership fee in this application flow. Your application will be submitted for review first. No online or QR payment is collected here.</p>
            </div>

            <div className="mct-form-footer">
              <p>Fields marked * are required. Your application will remain pending until reviewed by the Trust.</p>
              <button className="mct-primary-button" type="submit" disabled={busy}>
                {busy ? 'Submitting…' : 'Submit Membership Application'} <span>→</span>
              </button>
            </div>
          </form>
        )}

        <footer className="mct-portal-footer">MARWANN CHARITABLE TRUST · Membership Registration</footer>
      </div>
    </main>
  );
}
