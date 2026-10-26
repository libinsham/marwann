
"use client";

import { useEffect, useState } from "react";
import "./TrustIntroPopup.css";



import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";


const socialLinks = [
  {
    name: "WhatsApp Channel",
    icon: FaWhatsapp,
    description: "Follow our latest announcements",
    url: "https://whatsapp.com/channel/0029VbECtZs8V0trE7V7LG0r",
    color: "#25D366",
    button: "Follow Channel",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    description: "Connect with our community",
    url: "https://www.facebook.com/marwann.charitabletrust.9",
    color: "#1877F2",
    button: "Follow Facebook",
  },
{
    name: "Instagram",
    icon: FaInstagram,
    description: "Connect with our community",
    url: "https://www.instagram.com/marwanncharitabletrust",
    color: "#ca0b64",
    button: "Follow Instagram",
  },

    {
    name: "YouTube",
    icon: FaYoutube,
    description: "Watch our videos and activities",
    url: "https://www.youtube.com/@marwanncharitabletrust/videos",
    color: "#FF0000",
    button: "Subscribe on YouTube",
  },
    {
    name: "Twitter",
    icon: FaTwitter,
    description: "Connect with our community",
    url: "https://x.com/marwanntrust_",
    color: "#01000e",
    button: "Follow Twitter",
  },
];

export default function TrustIntroPopup() {
  const [open, setOpen] = useState(false);

  // Open the popup shortly after the page loads.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 500);

    return () => window.clearTimeout(timer);
  }, []);

  // Prevent background scrolling while the popup is open.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="mct-intro-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setOpen(false);
        }
      }}
    >
      <section
        className="mct-intro-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mct-intro-title"
      >
        {/* Close button */}
        <button
          type="button"
          className="mct-intro-close"
          onClick={() => setOpen(false)}
          aria-label="Close welcome popup"
        >
          ×
        </button>

        {/* Welcome banner */}
        <header className="mct-intro-banner">
          <span className="mct-banner-label">
            MARWAN CHARITABLE TRUST
          </span>

          <h1 id="mct-intro-title">
            Together, We Make a Difference
          </h1>

          <p>Compassion • Service • Hope</p>

          <span className="mct-banner-date">
            Established 26 September 2016
          </span>
        </header>

        {/* Main content */}
        <div className="mct-intro-content">
          <h2>Connect With Us</h2>

          <p className="mct-intro-description">
            Follow Marwan Charitable Trust through our official
            social media channels for news, activities, and
            community updates.
          </p>

          {/* Social media cards */}
          <div className="mct-social-grid">
            {socialLinks.map((social) => {
              const SocialIcon = social.icon;

              return (
                <article
                  className="mct-social-card"
                  key={social.name}
                >
                  {/* Real React social icon */}
                  <div
                    className="mct-social-icon"
                    style={{
                      "--social-color": social.color,
                    }}
                    aria-hidden="true"
                  >
                    <SocialIcon />
                  </div>

                  <h3>{social.name}</h3>

                  <p className="mct-social-description">
                    {social.description}
                  </p>

                  <a
                    className="mct-social-button"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      "--social-color": social.color,
                    }}
                  >
                    {social.button}
                    <FaArrowUpRightFromSquare
                      className="mct-social-button-arrow"
                      aria-hidden="true"
                    />
                  </a>
                </article>
              );
            })}
          </div>

          {/* Popup footer */}
          <p className="mct-intro-footer">
            Thank you for supporting our mission.
          </p>

          <button
            type="button"
            className="mct-continue-button"
            onClick={() => setOpen(false)}
          >
            Continue to Website
          </button>
        </div>
      </section>
    </div>
  );
}
