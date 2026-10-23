'use client';

import { useState } from 'react';
import './MembershipPortal.css';

const POSITIONS = [
  'General Member',
  'State President',
  'State Vice President',
  'State Secretary',
  'District President',
  'District Executive President',
  'District Secretary',
  'Member Committee',
];

const WOMEN_POSITIONS = [
  'State Women President',
  'State Vice Women President',
  'State Women Secretary',
  'District Women President',
  'District Women Executive President',
  'District Women Secretary',
];

export default function MembershipPortal() {
  const [step, setStep] = useState('register');
  const [sex, setSex] = useState('');
  const [position, setPosition] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [notice, setNotice] = useState('');

  const availablePositions = [
    ...POSITIONS,
    ...(sex === 'Female' ? WOMEN_POSITIONS : []),
  ];

  function changeStep(nextStep) {
    setStep(nextStep);
    setNotice('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleRegistration(event) {
    event.preventDefault();

    if (!position) {
      setNotice('Please select a membership position.');
      return;
    }

    if (WOMEN_POSITIONS.includes(position) && sex !== 'Female') {
      setNotice('Women-specific positions are available only to women.');
      return;
    }

    changeStep('terms');
  }

  function handleTerms(event) {
    event.preventDefault();

    if (!termsAccepted) {
      setNotice('Please accept the terms and conditions to continue.');
      return;
    }

    changeStep('payment');
  }

  function handleAdminLogin(event) {
    event.preventDefault();
    setNotice(
      'Admin login is not connected yet. Connect Laravel authentication before using this feature.'
    );
  }

  function handlePaymentSubmission() {
    setNotice(
      'Application submission is not connected yet. Connect the Laravel API and payment verification before accepting applications.'
    );
  }

  return (
    <main className="mct-portal">
      <div className="mct-portal-shell">
        <header className="mct-portal-header">
          <div className="mct-portal-brand">
            <img
              src="/assets/img/marwann-logo.png"
              alt="MARWANN Charitable Trust"
            />
            <div>
              <span className="mct-portal-eyebrow">
                MARWANN CHARITABLE TRUST
              </span>
              <h1>Membership Portal</h1>
              <p>Join us in serving humanity.</p>
            </div>
          </div>

          <button
            type="button"
            className="mct-admin-button"
            onClick={() =>
              changeStep(step === 'admin' ? 'register' : 'admin')
            }
          >
            {step === 'admin' ? 'Member Registration' : 'Admin Login'}
          </button>
        </header>

        {step !== 'admin' && (
          <nav className="mct-steps" aria-label="Registration progress">
            {[
              { id: 'register', label: 'Registration', number: '01' },
              { id: 'terms', label: 'Terms & Conditions', number: '02' },
              { id: 'payment', label: 'Yearly Payment', number: '03' },
            ].map((item, index) => {
              const active = step === item.id;
              const complete =
                (step === 'terms' && index === 0) ||
                (step === 'payment' && index < 2);

              return (
                <div
                  key={item.id}
                  className={[
                    'mct-step',
                    active ? 'is-active' : '',
                    complete ? 'is-complete' : '',
                  ].filter(Boolean).join(' ')}
                >
                  <span className="mct-step-number">
                    {complete ? '✓' : item.number}
                  </span>
                  <span>{item.label}</span>
                </div>
              );
            })}
          </nav>
        )}

        {notice && (
          <div className="mct-portal-notice" role="status">
            {notice}
          </div>
        )}

        {step === 'register' && (
          <form className="mct-portal-form" onSubmit={handleRegistration}>
            <div className="mct-form-heading">
              <span className="mct-portal-eyebrow">BECOME A MEMBER</span>
              <h2>Member Registration</h2>
              <p>
                Enter your details and choose your preferred membership
                position.
              </p>
            </div>

            <section className="mct-form-section">
              <h3>01. Personal Information</h3>
              <div className="mct-form-grid">
                <label className="mct-field mct-field-full">
                  Full Name *
                  <input name="fullName" type="text" autoComplete="name"
                    placeholder="Enter your full name" required />
                </label>

                <label className="mct-field">
                  Date of Birth *
                  <input name="dob" type="date" autoComplete="bday"
                    max={new Date().toISOString().split('T')[0]} required />
                </label>

                <label className="mct-field">
                  Sex *
                  <select name="sex" value={sex}
                    onChange={(event) => {
                      setSex(event.target.value);
                      setPosition('');
                    }} required>
                    <option value="">Select</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </label>

                <label className="mct-field mct-field-full">
                  Full Address *
                  <textarea name="address" autoComplete="street-address"
                    rows={3} placeholder="House number, street, town or village"
                    required />
                </label>

                <label className="mct-field">
                  State / Union Territory *
                  <input name="state" type="text" autoComplete="address-level1"
                    placeholder="Enter your state" required />
                </label>

                <label className="mct-field">
                  District *
                  <input name="district" type="text"
                    placeholder="Type your district name" required />
                </label>

                <label className="mct-field">
                  Phone Number *
                  <input name="phone" type="tel" autoComplete="tel"
                    placeholder="Enter phone number" required />
                </label>

                <label className="mct-field">
                  Email Address *
                  <input name="email" type="email" autoComplete="email"
                    placeholder="you@example.com" required />
                </label>

                <label className="mct-field">
                  Blood Group
                  <select name="bloodGroup" defaultValue="">
                    <option value="">Select blood group</option>
                    {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(
                      (group) => <option key={group} value={group}>{group}</option>
                    )}
                  </select>
                </label>
              </div>
            </section>

            <section className="mct-form-section">
              <h3>02. Identity Information</h3>
              <p className="mct-sensitive-note">
                Provide identity information only as required by the Trust's
                approved membership policy.
              </p>
              <div className="mct-form-grid">
                <label className="mct-field">
                  Aadhaar Number
                  <input name="aadhaar" type="password" inputMode="numeric"
                    autoComplete="off" maxLength={12} pattern="[0-9]{12}"
                    placeholder="12-digit number" />
                </label>
                <label className="mct-field">
                  Voter ID Number
                  <input name="voterId" type="text" autoComplete="off"
                    placeholder="Voter ID number" />
                </label>
                <label className="mct-field mct-field-full">
                  PAN Number
                  <input name="pan" type="text" autoComplete="off"
                    maxLength={10} pattern="[A-Za-z]{5}[0-9]{4}[A-Za-z]"
                    placeholder="PAN number" />
                </label>
              </div>
            </section>

            <section className="mct-form-section">
              <h3>03. Upload Documents</h3>
              <p className="mct-section-description">
                Accepted formats: JPEG, PNG or PDF as specified for each
                field. Maximum 5 MB per file; the server must independently
                validate every upload.
              </p>
              <div className="mct-form-grid">
                <label className="mct-field">
                  Passport-size Photo *
                  <input name="passportPhoto" type="file"
                    accept="image/jpeg,image/png,image/webp" required />
                </label>
                <label className="mct-field">
                  Aadhaar Card
                  <input name="aadhaarDocument" type="file"
                    accept="image/jpeg,image/png,application/pdf" />
                </label>
                <label className="mct-field">
                  Voter ID
                  <input name="voterDocument" type="file"
                    accept="image/jpeg,image/png,application/pdf" />
                </label>
                <label className="mct-field">
                  PAN Card
                  <input name="panDocument" type="file"
                    accept="image/jpeg,image/png,application/pdf" />
                </label>
              </div>
            </section>

            <section className="mct-form-section">
              <h3>04. Membership Position</h3>
              <p className="mct-section-description">
                Choose your preferred position. Leadership appointments are
                subject to Trust approval.
              </p>
              <div className="mct-form-grid">
                <label className="mct-field mct-field-full">
                  Preferred Position *
                  <select name="position" value={position}
                    onChange={(event) => setPosition(event.target.value)} required>
                    <option value="">Select a position</option>
                    {availablePositions.map((item) =>
                      <option key={item} value={item}>{item}</option>
                    )}
                  </select>
                </label>

                {position.startsWith('State') && (
                  <label className="mct-field mct-field-full">
                    State / Union Territory *
                    <input name="positionState" type="text"
                      placeholder="State you wish to represent" required />
                  </label>
                )}

                {(position.startsWith('District') ||
                  position === 'Member Committee') && (
                  <>
                    <label className="mct-field">
                      State / Union Territory *
                      <input name="positionState" type="text"
                        placeholder="Enter state" required />
                    </label>
                    <label className="mct-field">
                      District *
                      <input name="positionDistrict" type="text"
                        placeholder="Type district name" required />
                    </label>
                  </>
                )}

                {position === 'Member Committee' && (
                  <label className="mct-field mct-field-full">
                    Sector / Committee Area *
                    <input name="committeeSector" type="text"
                      placeholder="Enter sector or committee area" required />
                  </label>
                )}
              </div>

              {position === 'Member Committee' && (
                <div className="mct-committee-note">
                  <strong>District committee:</strong> The proposed structure
                  includes 16 members per sector. Final allocation is subject
                  to Trust approval.
                </div>
              )}

              {sex === 'Female' && (
                <div className="mct-women-note">
                  Women-specific leadership positions are available in the
                  position list above.
                </div>
              )}
            </section>

            <div className="mct-form-footer">
              <p>
                Fields marked * are required. Your application is subject to
                verification and approval.
              </p>
              <button className="mct-primary-button" type="submit">
                Continue to Terms <span>→</span>
              </button>
            </div>
          </form>
        )}

        {step === 'terms' && (
          <form className="mct-portal-form" onSubmit={handleTerms}>
            <div className="mct-form-heading">
              <span className="mct-portal-eyebrow">PLEASE REVIEW</span>
              <h2>Terms &amp; Conditions</h2>
              <p>
                Review the membership conditions before proceeding to the
                annual payment step.
              </p>
            </div>

            <div className="mct-terms-content">
              <h3>Membership Declaration</h3>
              <ol>
                <li>Information provided in the application must be accurate and complete.</li>
                <li>Membership and leadership positions are subject to verification and approval by the Trust.</li>
                <li>Members must follow the Trust's approved rules, policies and code of conduct.</li>
                <li>The annual membership fee, renewal date and refund policy must be disclosed before payment.</li>
                <li>Personal information and uploaded documents must be handled securely and only for legitimate membership purposes under the applicable privacy policy.</li>
                <li>Payment does not automatically guarantee a leadership appointment or membership approval.</li>
              </ol>

              <label className="mct-terms-check">
                <input type="checkbox" checked={termsAccepted}
                  onChange={(event) => setTermsAccepted(event.target.checked)} />
                <span>
                  I have read and agree to the membership terms and
                  conditions and privacy notice. *
                </span>
              </label>
            </div>

            <div className="mct-form-footer">
              <button type="button" className="mct-secondary-button"
                onClick={() => changeStep('register')}>
                ← Back to Registration
              </button>
              <button className="mct-primary-button" type="submit">
                Continue to Payment <span>→</span>
              </button>
            </div>
          </form>
        )}

        {step === 'payment' && (
          <section className="mct-portal-form mct-payment-section">
            <div className="mct-form-heading">
              <span className="mct-portal-eyebrow">MEMBERSHIP PAYMENT</span>
              <h2>Yearly Membership Fee</h2>
              <p>
                Choose a payment method for the Trust's annual membership fee.
              </p>
            </div>

            <div className="mct-payment-notice">
              <strong>Annual fee not configured yet</strong>
              <p>
                The Trust must confirm the yearly fee and official payment
                instructions before accepting payments.
              </p>
            </div>

            <div className="mct-payment-methods">
              <h3>Choose Payment Method</h3>
              {[
                { value: 'upi', title: 'UPI / QR Code', detail: "Scan the Trust's official QR code." },
                { value: 'bank', title: 'Bank Transfer', detail: 'Use verified Trust bank details.' },
                { value: 'gateway', title: 'Online Payment Gateway', detail: 'Pay through a configured payment provider.' },
              ].map((method) => (
                <label className="mct-payment-option" key={method.value}>
                  <input type="radio" name="paymentMethod" value={method.value}
                    checked={paymentMethod === method.value}
                    onChange={(event) => setPaymentMethod(event.target.value)} />
                  <span>
                    <strong>{method.title}</strong>
                    <small>{method.detail}</small>
                  </span>
                </label>
              ))}
            </div>

            {paymentMethod === 'upi' && (
              <div className="mct-qr-placeholder">
                <div className="mct-qr-frame">
                  <img
                    src="/assets/img/payments/marwann-membership-qr.png"
                    alt="Official membership payment QR code"
                    onError={(event) => { event.currentTarget.style.display = 'none'; }}
                  />
                  <span>Add the Trust's official QR code here</span>
                </div>
                <p>Verify the recipient name and amount before making any payment.</p>
              </div>
            )}

            {paymentMethod === 'bank' && (
              <div className="mct-payment-notice">
                Add the verified Trust account name, bank name, account number
                and IFSC code after approval.
              </div>
            )}

            {paymentMethod === 'gateway' && (
              <div className="mct-payment-notice">
                Connect an approved payment gateway through the Laravel backend
                to enable online payments.
              </div>
            )}

            <div className="mct-form-footer">
              <button type="button" className="mct-secondary-button"
                onClick={() => changeStep('terms')}>
                ← Back to Terms
              </button>
              <button type="button" className="mct-primary-button"
                onClick={handlePaymentSubmission}>
                Submit Application <span>→</span>
              </button>
            </div>
          </section>
        )}

        {step === 'admin' && (
          <form className="mct-portal-form mct-admin-form" onSubmit={handleAdminLogin}>
            <div className="mct-form-heading">
              <span className="mct-portal-eyebrow">RESTRICTED ACCESS</span>
              <h2>Admin Login</h2>
              <p>Authorized administrators only.</p>
            </div>

            <label className="mct-field">
              Admin Email *
              <input name="adminEmail" type="email" autoComplete="username"
                placeholder="Admin email address" required />
            </label>

            <label className="mct-field">
              Password *
              <input name="adminPassword" type="password"
                autoComplete="current-password" placeholder="Enter password" required />
            </label>

            <button className="mct-primary-button" type="submit">
              Sign In <span>→</span>
            </button>

            <p className="mct-admin-security">
              Admin authentication must be verified by Laravel. Do not store
              admin credentials in frontend code.
            </p>
          </form>
        )}

        <footer className="mct-portal-footer">
          MARWANN CHARITABLE TRUST · Membership Portal
        </footer>
      </div>
    </main>
  );
}
