
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import PageScript from "@/components/PageScript";

export const metadata = {
  title: "Donate | MARWANN CHARITABLE TRUST",
  description:
    "Support the charitable work of MARWANN CHARITABLE TRUST through a donation.",
};

const pageStyles = `


.donate-main > .container > .row.justify-content-center.row-gap-4 > .col-xl-7,
.donate-main > .container > .row.justify-content-center.row-gap-4 > .col-lg-7,
.donate-main > .container > .row.justify-content-center.row-gap-4 > .col-xl-5,
.donate-main > .container > .row.justify-content-center.row-gap-4 > .col-lg-5 {
  flex: 0 0 auto;
  width: 100%;
  max-width: 980px;
}

@media (max-width: 767.98px) {
  .donate-hero {
    padding: 48px 0 40px;
  }

  .donate-main {
    padding: 40px 0 65px;
  }

  .donate-panel {
    padding: 22px;
  }

  .donate-amount-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .donate-purpose-grid {
    grid-template-columns: 1fr;
  }

  .donate-main > .container > .row.justify-content-center.row-gap-4 {
    gap: 20px;
  }

  .donate-section-note {
    margin-left: 0;
    margin-top: 0;
  }

  .donate-form .donate-field-hint {
    font-size: 10px;
  }
}
`;

const donateScript = `
(function () {
  const form = document.getElementById("marwann-donation-form");
  if (!form) return;

  const amountButtons = Array.from(
    document.querySelectorAll(".donate-amount")
  );
  const customAmount = document.getElementById("custom-amount");
  const amountOutput = document.getElementById("selected-amount");
  const status = document.getElementById("donate-status");
  const aadhaarInput = document.getElementById("donor-aadhaar");
  const panInput = document.getElementById("donor-pan");

  let selectedAmount = 1000;

  // Restrict Aadhaar input to digits only.
  if (aadhaarInput) {
    aadhaarInput.addEventListener("input", function () {
      this.value = this.value.replace(/\\D/g, "").slice(0, 12);
    });
  }

  // Convert PAN letters to uppercase and limit to 10 characters.
  if (panInput) {
    panInput.addEventListener("input", function () {
      this.value = this.value
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "")
        .slice(0, 10);
    });
  }

  function formatINR(value) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  }

  function setAmount(value, button) {
    selectedAmount = Number(value) || 0;

    amountOutput.textContent =
      selectedAmount > 0 ? formatINR(selectedAmount) : "₹0";

    amountButtons.forEach(function (item) {
      const active = item === button;
      item.classList.toggle("is-selected", active);
      item.setAttribute("aria-pressed", active ? "true" : "false");
    });

    if (status) status.style.display = "none";
  }

  amountButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      customAmount.value = "";
      setAmount(button.getAttribute("data-amount"), button);
    });
  });

  customAmount.addEventListener("input", function () {
    amountButtons.forEach(function (button) {
      button.classList.remove("is-selected");
      button.setAttribute("aria-pressed", "false");
    });

    setAmount(customAmount.value, null);
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.reportValidity()) return;

    if (!Number.isInteger(selectedAmount) || selectedAmount < 1) {
      customAmount.setCustomValidity(
        "Please enter a whole amount of at least ₹1."
      );
      customAmount.reportValidity();
      customAmount.setCustomValidity("");
      return;
    }

    if (status) {
      status.textContent =
        "Payment integration is pending. No payment has been initiated, no donation has been recorded, and no receipt has been generated. Please contact the Trust to arrange a contribution.";

      status.style.display = "block";
      status.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  });
})();
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      <main>
        {/* HERO */}
        <section className="donate-hero">
          <div className="container">
            <div className="donate-breadcrumb">
              <Link href="/">Home</Link>
              <i className="fa-regular fa-arrow-right" aria-hidden="true" />
              <span>Engage</span>
              <i className="fa-regular fa-arrow-right" aria-hidden="true" />
              <span>Donate</span>
            </div>

            <div className="donate-eyebrow">
              We Serve God by Serving Others
            </div>

            <h1>Make a Difference Through Giving</h1>

            <p>
              Your contribution can help MARWANN CHARITABLE TRUST
              continue its charitable work in education, healthcare,
              food assistance, women&apos;s skill development and
              community welfare.
            </p>
          </div>
        </section>

        {/* DONATION FORM */}
        <section className="donate-main">
          <div className="container">
            <div className="row justify-content-center row-gap-4">
              <div className="col-xl-7 col-lg-7">
                <div className="donate-panel">
                  <form
                    id="marwann-donation-form"
                    className="donate-form"
                    noValidate
                  >
                    {/* STEP 1 */}
                    <div className="donate-panel-title">
                      <span className="step">1</span>
                      <h2>Choose Donation Type</h2>
                    </div>

                    <p className="donate-help donate-section-note">
                      This donation will be considered under section
                      354 (2) [formerly known as 80G] of Income Tax India.
                    </p>

                    <div
                      className="donate-frequency"
                      role="radiogroup"
                      aria-label="Donation frequency"
                    >
                      <label>
                        <input
                          type="radio"
                          name="frequency"
                          value="one-time"
                          defaultChecked
                        />
                        <i className="fa-regular fa-heart" aria-hidden="true" />
                        One-Time Donation
                      </label>

                      <label>
                        <input
                          type="radio"
                          name="frequency"
                          value="monthly"
                        />
                        <i className="fa-regular fa-calendar" aria-hidden="true" />
                        Monthly Donation
                      </label>
                    </div>

                    {/* STEP 2 */}
                    <div className="donate-panel-title">
                      <span className="step">2</span>
                      <h2>Select Contribution Amount</h2>
                    </div>

                    <p className="donate-help">
                      Choose a suggested amount or enter a custom contribution.
                    </p>

                    <div
                      className="donate-amount-grid"
                      role="group"
                      aria-label="Suggested donation amounts"
                    >
                      <button type="button" className="donate-amount" data-amount="500">
                        ₹500
                      </button>
                      <button
                        type="button"
                        className="donate-amount is-selected"
                        data-amount="1000"
                        aria-pressed="true"
                      >
                        ₹1,000
                      </button>
                      <button type="button" className="donate-amount" data-amount="2500">
                        ₹2,500
                      </button>
                      <button type="button" className="donate-amount" data-amount="5000">
                        ₹5,000
                      </button>
                      <button type="button" className="donate-amount" data-amount="10000">
                        ₹10,000
                      </button>
                      <button type="button" className="donate-amount" data-amount="25000">
                        ₹25,000
                      </button>
                    </div>

                    <label className="donate-custom-label" htmlFor="custom-amount">
                      Custom Amount (INR)
                    </label>

                    <input
                      className="form-control"
                      id="custom-amount"
                      name="custom_amount"
                      type="number"
                      min="1"
                      step="1"
                      placeholder="Enter amount in ₹"
                      inputMode="numeric"
                    />

                    <div className="donate-selected" aria-live="polite">
                      <span>Selected Contribution</span>
                      <strong id="selected-amount">₹1,000</strong>
                    </div>

                    {/* STEP 3 — DONOR DETAILS */}
                    <div className="donate-panel-title m-t-30">
                      <span className="step">3</span>
                      <h2>Donor Details</h2>
                    </div>

                    <div className="row">
                      <div className="col-12 field-group">
                        <label className="field-label" htmlFor="donor-name">
                          Full Name *
                        </label>
                        <input
                          className="form-control"
                          id="donor-name"
                          name="donor_name"
                          type="text"
                          maxLength={120}
                          autoComplete="name"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div className="col-md-6 field-group">
                        <label className="field-label" htmlFor="donor-email">
                          Email Address *
                        </label>
                        <input
                          className="form-control"
                          id="donor-email"
                          name="donor_email"
                          type="email"
                          maxLength={160}
                          autoComplete="email"
                          placeholder="name@example.com"
                          required
                        />
                      </div>

                      <div className="col-md-6 field-group">
                        <label className="field-label" htmlFor="donor-phone">
                          Mobile Number *
                        </label>
                        <input
                          className="form-control"
                          id="donor-phone"
                          name="donor_phone"
                          type="tel"
                          inputMode="numeric"
                          maxLength={10}
                          pattern="[6-9][0-9]{9}"
                          autoComplete="tel-national"
                          placeholder="10-digit mobile number"
                          title="Enter a valid 10-digit Indian mobile number."
                          required
                        />
                      </div>

                      {/* Aadhaar: optional */}
                      <div className="col-md-6 field-group">
                        <label className="field-label" htmlFor="donor-aadhaar">
                          Aadhaar Number (optional)
                        </label>
                        <input
                          className="form-control"
                          id="donor-aadhaar"
                          name="donor_aadhaar"
                          type="password"
                          inputMode="numeric"
                          pattern="[0-9]{12}"
                          maxLength={12}
                          autoComplete="off"
                          placeholder="12-digit Aadhaar number"
                          title="If provided, enter exactly 12 digits."
                          aria-describedby="donor-aadhaar-help"
                        />
                        <small
                          className="donate-field-hint"
                          id="donor-aadhaar-help"
                        >
                          Optional. Provide only if required for an approved purpose.
                        </small>
                      </div>

                      {/* PAN: optional */}
                      <div className="col-md-6 field-group">
                        <label className="field-label" htmlFor="donor-pan">
                          PAN Number (optional)
                        </label>
                        <input
                          className="form-control"
                          id="donor-pan"
                          name="donor_pan"
                          type="text"
                          maxLength={10}
                          minLength={10}
                          autoComplete="off"
                          autoCapitalize="characters"
                          spellCheck={false}
                          pattern="[A-Za-z]{5}[0-9]{4}[A-Za-z]"
                          placeholder="ABCDE1234F"
                          title="If provided, enter a valid 10-character PAN."
                          aria-describedby="donor-pan-help"
                        />
                        <small
                          className="donate-field-hint"
                          id="donor-pan-help"
                        >
                          Format: five letters, four digits, and one letter.
                        </small>
                      </div>

                      {/* Mandatory postal address */}
                      <div className="col-12 field-group">
                        <label className="field-label" htmlFor="donor-address">
                          Full Postal Address *
                        </label>
                        <textarea
                          className="form-control"
                          id="donor-address"
                          name="donor_address"
                          rows={3}
                          maxLength={500}
                          autoComplete="street-address"
                          placeholder="Enter your complete postal address"
                          required
                        />
                      </div>
                    </div>

                    {/* STEP 4 */}
                    <div className="donate-panel-title m-t-20">
                      <span className="step">4</span>
                      <h2>Donation Preference</h2>
                    </div>

                    <p className="donate-help">
                      Select the area you would like to support.
                    </p>

                    <div className="donate-purpose-grid">
                      <label className="donate-purpose">
                        <input
                          type="radio"
                          name="purpose"
                          value="Education & Student Support"
                          defaultChecked
                        />
                        Education &amp; Student Support
                      </label>

                      <label className="donate-purpose">
                        <input
                          type="radio"
                          name="purpose"
                          value="Healthcare & Medical Assistance"
                        />
                        Healthcare &amp; Medical Assistance
                      </label>

                      <label className="donate-purpose">
                        <input
                          type="radio"
                          name="purpose"
                          value="Food & Essential Support"
                        />
                        Food &amp; Essential Support
                      </label>

                      <label className="donate-purpose">
                        <input
                          type="radio"
                          name="purpose"
                          value="Emergency & Disaster Relief"
                        />
                        Emergency &amp; Disaster Relief
                      </label>

                      <label className="donate-purpose">
                        <input
                          type="radio"
                          name="purpose"
                          value="Women's Skill Development"
                        />
                        Women&apos;s Skill Development
                      </label>

                      <label className="donate-purpose">
                        <input
                          type="radio"
                          name="purpose"
                          value="Senior Citizen Support"
                        />
                        Senior Citizen Support
                      </label>

                      <label className="donate-purpose">
                        <input
                          type="radio"
                          name="purpose"
                          value="General Fund"
                        />
                        General Fund (where most needed)
                      </label>
                    </div>

                    <div className="donate-notice m-t-25">
                      <strong>Donation receipt:</strong>{" "}
                      A contribution acknowledgement should be generated
                      only after the payment is successfully verified.
                      This page does not claim an 80G tax deduction or
                      provide a tax-exemption certificate. The receipt
                      format and automated delivery must be connected to
                      the Trust&apos;s approved records and payment system.
                    </div>

                    <button type="submit" className="donate-submit m-t-25">
                      Continue to Secure Payment
                      <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                    </button>

                    <p className="donate-disclaimer">
                      Payment processing is not yet connected. Submitting
                      this form will not collect money or confirm a donation.
                    </p>

                    <div
                      className="donate-status"
                      id="donate-status"
                      role="status"
                      aria-live="polite"
                    />
                  </form>
                </div>
              </div>

              {/* SUPPORT INFORMATION */}
              <div className="col-xl-5 col-lg-5">
                <div className="engage-panel m-b-25">
                  <div className="engage-icon">
                    <i
                      className="fa-light fa-hand-holding-heart"
                      aria-hidden="true"
                    />
                  </div>

                  <h3>Your Support Matters</h3>

                  <p>
                    Contributions help sustain the Trust&apos;s charitable
                    activities. Donors may indicate a preference for a
                    programme area; allocation is subject to the Trust&apos;s
                    needs and applicable processes.
                  </p>

                  <div className="row row-gap-3 m-t-20">
                    <div className="col-sm-6">
                      <div className="donate-impact-card">
                        <div className="impact-icon">
                          <i className="fa-light fa-book-open" aria-hidden="true" />
                        </div>
                        <h3>Education</h3>
                        <p>
                          Support for deserving students and learning initiatives.
                        </p>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="donate-impact-card">
                        <div className="impact-icon">
                          <i className="fa-light fa-heart-pulse" aria-hidden="true" />
                        </div>
                        <h3>Healthcare</h3>
                        <p>
                          Medical assistance and community health activities.
                        </p>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="donate-impact-card">
                        <div className="impact-icon">
                          <i className="fa-light fa-bowl-food" aria-hidden="true" />
                        </div>
                        <h3>Essential Support</h3>
                        <p>
                          Food and essential supplies for people in need.
                        </p>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="donate-impact-card">
                        <div className="impact-icon">
                          <i className="fa-light fa-scissors" aria-hidden="true" />
                        </div>
                        <h3>Skills</h3>
                        <p>
                          Practical skill development through tailoring classes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="engage-panel">
                  <h3>How Online Donation Will Work</h3>

                  <ul className="donate-process">
                    <li>
                      <span className="process-icon">1</span>
                      <span>
                        <strong>Enter your details</strong>
                        <br />
                        Choose an amount and programme preference.
                      </span>
                    </li>

                    <li>
                      <span className="process-icon">2</span>
                      <span>
                        <strong>Complete payment</strong>
                        <br />
                        The configured payment gateway will securely process
                        the contribution.
                      </span>
                    </li>

                    <li>
                      <span className="process-icon">3</span>
                      <span>
                        <strong>Payment verification</strong>
                        <br />
                        The server confirms the transaction before issuing
                        an acknowledgement.
                      </span>
                    </li>

                    <li>
                      <span className="process-icon">4</span>
                      <span>
                        <strong>Receive your receipt</strong>
                        <br />
                        The approved donation receipt can then be generated
                        and sent to your email.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PageScript code={donateScript} />
    </>
  );
}
