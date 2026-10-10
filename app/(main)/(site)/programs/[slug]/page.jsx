import Link from "next/link";
import { notFound } from "next/navigation";
import "./program-detail.css";

const DONATE_URL = "/donate";
const PROGRAMS_URL = "/program-areas";
const CONTACT_URL = "/contact";

const programs = {
  "child-orphanage-support": {
    title: "Child Orphanage Support",
    category: "Community Support",
    shortDescription:
      "Providing charitable assistance to children in orphanages.",
    image: "/assets/img/gallery/child-orphanage-support.webp",

    overview: [
      "Every child deserves care, dignity, encouragement and opportunities for a better future. MARWANN CHARITABLE TRUST works to extend charitable assistance to children living in orphanages.",
      "Through community participation and compassionate service, the trust aims to support children's wellbeing and contribute to an environment where they feel valued and cared for.",
      "Our approach is centred on charitable assistance, community support and responding to the needs identified through our service activities.",
    ],

    purpose:
      "To extend compassionate support to children in orphanages and contribute to their wellbeing.",

    activities: [
      {
        title: "Charitable Assistance",
        description:
          "Support children in orphanages through charitable activities based on identified needs.",
        icon: "♥",
      },
      {
        title: "Community Participation",
        description:
          "Encourage individuals and supporters to participate in activities that benefit children.",
        icon: "♧",
      },
      {
        title: "Care and Wellbeing",
        description:
          "Promote compassion, dignity and consideration for children in need of support.",
        icon: "✦",
      },
    ],

    features: [
      "Charitable assistance for children in orphanages",
      "Community participation and support",
      "Child wellbeing-focused initiatives",
      "Opportunities for responsible volunteering",
      "Donations supporting the trust's charitable work",
    ],

    gallery: [
      {
        src: "/assets/img/gallery/child-orphanage-support.webp",
        alt: "Child Orphanage Support program",
        caption: "Child Orphanage Support",
      },
    ],

    quickInfo: [
      ["Category", "Community Support"],
      ["Focus", "Child Welfare"],
      ["Activities", "Charitable Assistance"],
    ],

    related: [
      "rice-bag-distribution",
      "medical-assistance",
      "old-age-home-support",
    ],
  },

  "covid-food-distribution": {
    title: "COVID-19 Food Distribution",
    category: "Community Support",
    shortDescription:
      "Food distribution to support communities during the COVID-19 pandemic.",
    image: "/assets/img/gallery/covid-food-distribution.webp",

    overview: [
      "The COVID-19 pandemic created difficult circumstances for families and communities. Food assistance became an important form of charitable support during this challenging period.",
      "MARWANN CHARITABLE TRUST undertook food distribution activities to support communities affected by the pandemic.",
      "This program represents the importance of community solidarity and responding to essential needs during emergencies.",
    ],

    purpose:
      "To provide food assistance to communities facing difficulties during the COVID-19 pandemic.",

    activities: [
      {
        title: "Food Assistance",
        description:
          "Provide food support through charitable distribution activities.",
        icon: "♥",
      },
      {
        title: "Community Outreach",
        description:
          "Support communities experiencing hardship during emergencies.",
        icon: "♧",
      },
      {
        title: "Humanitarian Support",
        description:
          "Promote compassion and community participation during difficult times.",
        icon: "✦",
      },
    ],

    features: [
      "Food distribution activities",
      "Community-focused assistance",
      "Humanitarian support during emergencies",
      "Community participation",
      "Charitable service for people in need",
    ],

    gallery: [
      {
        src: "/assets/img/gallery/covid-food-distribution.webp",
        alt: "COVID-19 Food Distribution program",
        caption: "COVID-19 Food Distribution",
      },
    ],

    quickInfo: [
      ["Category", "Community Support"],
      ["Focus", "Food Assistance"],
      ["Program", "COVID-19 Relief"],
    ],

    related: [
      "rice-bag-distribution",
      "independence-day-flood-relief",
      "medical-assistance",
    ],
  },

  "nilavembu-kasayam-distribution": {
    title: "Nilavembu Kasayam Distribution",
    category: "Health & Wellness",
    shortDescription:
      "Distributing Nilavembu Kasayam in communities and public institutions.",
    image: "/assets/img/gallery/nilavembu-kasayam-distribution.webp",

    overview: [
      "Community outreach can help bring health-related activities closer to people. MARWANN CHARITABLE TRUST has undertaken Nilavembu Kasayam distribution activities in communities and public institutions.",
      "This program reflects the trust's involvement in community health and wellness initiatives.",
      "Activities should be undertaken responsibly, with appropriate guidance from qualified healthcare professionals wherever health advice or treatment is involved.",
    ],

    purpose:
      "To support community outreach activities focused on health and wellness.",

    activities: [
      {
        title: "Community Distribution",
        description:
          "Conduct distribution activities in communities and public institutions.",
        icon: "♥",
      },
      {
        title: "Public Outreach",
        description:
          "Connect with communities through organised charitable activities.",
        icon: "♧",
      },
      {
        title: "Responsible Health Awareness",
        description:
          "Encourage appropriate professional guidance for health-related questions.",
        icon: "✦",
      },
    ],

    features: [
      "Community distribution activities",
      "Public institution outreach",
      "Health and wellness initiatives",
      "Community participation",
      "Responsible health-related communication",
    ],

    gallery: [
      {
        src: "/assets/img/gallery/nilavembu-kasayam-distribution.webp",
        alt: "Nilavembu Kasayam Distribution program",
        caption: "Nilavembu Kasayam Distribution",
      },
    ],

    quickInfo: [
      ["Category", "Health & Wellness"],
      ["Focus", "Community Outreach"],
      ["Activity", "Distribution"],
    ],

    related: [
      "eye-camps",
      "medical-assistance",
      "covid-food-distribution",
    ],
  },

  "eye-camps": {
    title: "Eye Camps",
    category: "Health & Wellness",
    shortDescription:
      "Organising eye camps as part of the trust's healthcare activities.",
    image: "/assets/img/gallery/eye-camp.webp",

    overview: [
      "Access to eye care is an important part of community wellbeing. MARWANN CHARITABLE TRUST includes eye camps among its healthcare-related charitable activities.",
      "Eye camps can provide opportunities for people to seek information and access eye care services from qualified professionals.",
      "The trust's program focuses on community-oriented healthcare activities and the importance of eye health.",
    ],

    purpose:
      "To support eye care awareness and community healthcare activities.",

    activities: [
      {
        title: "Eye Care Activities",
        description:
          "Support organised eye camp activities for communities.",
        icon: "♥",
      },
      {
        title: "Community Awareness",
        description:
          "Encourage awareness of eye health and the importance of professional care.",
        icon: "♧",
      },
      {
        title: "Healthcare Outreach",
        description:
          "Support community access to eye care services provided by qualified professionals.",
        icon: "✦",
      },
    ],

    features: [
      "Community eye camp activities",
      "Eye health awareness",
      "Healthcare outreach",
      "Professional eye care involvement",
      "Community participation",
    ],

    gallery: [
      {
        src: "/assets/img/gallery/eye-camp.webp",
        alt: "Eye Camps program",
        caption: "Eye Camps",
      },
    ],

    quickInfo: [
      ["Category", "Health & Wellness"],
      ["Focus", "Eye Care"],
      ["Activity", "Healthcare Outreach"],
    ],

    related: [
      "medical-assistance",
      "nilavembu-kasayam-distribution",
      "old-age-home-support",
    ],
  },

  "rice-bag-distribution": {
    title: "Rice Bag Distribution",
    category: "Community Support",
    shortDescription:
      "Providing rice bags as part of the trust's food assistance activities.",
    image: "/assets/img/gallery/rice-bag.webp",

    overview: [
      "Access to essential food is important for every household. Through its Rice Bag Distribution program, MARWANN CHARITABLE TRUST provides charitable food assistance as part of its community support work.",
      "Food distribution initiatives can help bring community members and supporters together around a practical way to assist people experiencing hardship.",
      "The program reflects the trust's commitment to charitable service and community wellbeing.",
    ],

    purpose:
      "To provide essential food assistance through charitable community support.",

    activities: [
      {
        title: "Rice Distribution",
        description:
          "Provide rice bags through charitable food assistance activities.",
        icon: "♥",
      },
      {
        title: "Community Support",
        description:
          "Extend assistance to people in need through organised initiatives.",
        icon: "♧",
      },
      {
        title: "Charitable Participation",
        description:
          "Encourage support for food assistance through donations and volunteering.",
        icon: "✦",
      },
    ],

    features: [
      "Rice bag distribution",
      "Food assistance activities",
      "Community-focused charitable work",
      "Donation-supported initiatives",
      "Opportunities to participate in community service",
    ],

    gallery: [
      {
        src: "/assets/img/gallery/rice-bag.webp",
        alt: "Rice Bag Distribution program",
        caption: "Rice Bag Distribution",
      },
    ],

    quickInfo: [
      ["Category", "Community Support"],
      ["Focus", "Food Assistance"],
      ["Activity", "Rice Distribution"],
    ],

    related: [
      "covid-food-distribution",
      "independence-day-flood-relief",
      "child-orphanage-support",
    ],
  },

  "independence-day-flood-relief": {
    title: "Independence Day & Flood Relief",
    category: "Community Support",
    shortDescription:
      "Supporting Independence Day activities and providing flood relief assistance.",
    image: "/assets/img/gallery/flood.webp",

    overview: [
      "Community participation and humanitarian assistance are important parts of charitable service. MARWANN CHARITABLE TRUST supports Independence Day activities and has undertaken flood relief assistance.",
      "Flooding can disrupt everyday life and create urgent needs for affected communities. Relief initiatives help bring attention and support to people facing these challenges.",
      "This program brings together community activities and charitable assistance during difficult circumstances.",
    ],

    purpose:
      "To contribute to community activities and provide assistance during flood-related hardships.",

    activities: [
      {
        title: "Community Activities",
        description:
          "Support Independence Day activities and community participation.",
        icon: "♥",
      },
      {
        title: "Flood Relief",
        description:
          "Provide charitable assistance through flood-related relief activities.",
        icon: "♧",
      },
      {
        title: "Humanitarian Support",
        description:
          "Encourage compassionate responses to communities facing hardship.",
        icon: "✦",
      },
    ],

    features: [
      "Independence Day activities",
      "Flood relief assistance",
      "Community participation",
      "Humanitarian support",
      "Charitable relief initiatives",
    ],

    gallery: [
      {
        src: "/assets/img/gallery/flood.webp",
        alt: "Independence Day and Flood Relief program",
        caption: "Flood Relief",
      },
    ],

    quickInfo: [
      ["Category", "Community Support"],
      ["Focus", "Relief Assistance"],
      ["Activities", "Community & Humanitarian Support"],
    ],

    related: [
      "rice-bag-distribution",
      "covid-food-distribution",
      "medical-assistance",
    ],
  },

  "old-age-home-support": {
    title: "Old Age Home Support",
    category: "Community Support",
    shortDescription:
      "Extending charitable support to residents of old age homes.",
    image: "/assets/img/gallery/old-age.webp",

    overview: [
      "Older adults deserve respect, dignity and compassion. MARWANN CHARITABLE TRUST extends charitable support to residents of old age homes through its community service activities.",
      "Support for older adults can take many forms depending on the needs identified by the institution and the assistance available.",
      "The program reflects the importance of community responsibility and treating older people with care and respect.",
    ],

    purpose:
      "To offer compassionate support to residents of old age homes.",

    activities: [
      {
        title: "Charitable Assistance",
        description:
          "Extend support to residents of old age homes based on identified needs.",
        icon: "♥",
      },
      {
        title: "Community Care",
        description:
          "Encourage community participation in activities supporting older adults.",
        icon: "♧",
      },
      {
        title: "Dignity and Respect",
        description:
          "Promote compassionate service and respect for older people.",
        icon: "✦",
      },
    ],

    features: [
      "Support for old age home residents",
      "Charitable community activities",
      "Compassionate service",
      "Community participation",
      "Assistance based on identified needs",
    ],

    gallery: [
      {
        src: "/assets/img/gallery/old-age.webp",
        alt: "Old Age Home Support program",
        caption: "Old Age Home Support",
      },
    ],

    quickInfo: [
      ["Category", "Community Support"],
      ["Focus", "Older Adult Wellbeing"],
      ["Activity", "Charitable Assistance"],
    ],

    related: [
      "child-orphanage-support",
      "medical-assistance",
      "rice-bag-distribution",
    ],
  },

  "medical-assistance": {
    title: "Medical Assistance",
    category: "Health & Wellness",
    shortDescription:
      "Providing medical help to people in need.",
    image: "/assets/img/gallery/medical-assistance.webp",

    overview: [
      "Medical needs can create financial and practical challenges for individuals and families. MARWANN CHARITABLE TRUST aims to provide charitable medical assistance to people who need help.",
      "Assistance depends on the needs identified, the resources available and the nature of the support that can responsibly be provided.",
      "Through this program, the trust seeks to support community wellbeing and encourage access to appropriate healthcare.",
    ],

    purpose:
      "To assist people facing medical needs through charitable support.",

    activities: [
      {
        title: "Medical Support",
        description:
          "Provide charitable assistance for medical needs where support is available.",
        icon: "♥",
      },
      {
        title: "Community Outreach",
        description:
          "Identify opportunities for charitable healthcare-related assistance.",
        icon: "♧",
      },
      {
        title: "Healthcare Awareness",
        description:
          "Encourage people to seek appropriate professional medical care.",
        icon: "✦",
      },
    ],

    features: [
      "Charitable medical assistance",
      "Healthcare-related community support",
      "Support based on identified needs",
      "Community participation",
      "Encouragement to seek professional healthcare",
    ],

    gallery: [
      {
        src: "/assets/img/gallery/medical-assistance.webp",
        alt: "Medical Assistance program",
        caption: "Medical Assistance",
      },
    ],

    quickInfo: [
      ["Category", "Health & Wellness"],
      ["Focus", "Medical Support"],
      ["Activity", "Charitable Assistance"],
    ],

    related: [
      "eye-camps",
      "old-age-home-support",
      "nilavembu-kasayam-distribution",
    ],
  },

  "womens-tailoring-classes": {
    title: "Women's Tailoring Classes",
    category: "Education & Skills",
    shortDescription:
      "Conducting tailoring classes to develop practical skills among women.",
    image: "/assets/img/gallery/tailoring.webp",

    overview: [
      "Practical skills can create opportunities for confidence, independence and future livelihoods. MARWANN CHARITABLE TRUST conducts tailoring classes to help women develop useful skills.",
      "Tailoring provides a practical learning opportunity that can support personal development and potentially contribute to income-generating activities.",
      "The program focuses on skills development and encouraging opportunities for women through learning and community support.",
    ],

    purpose:
      "To encourage practical skill development and greater opportunities for women.",

    activities: [
      {
        title: "Tailoring Skills",
        description:
          "Help participants develop practical tailoring skills through classes.",
        icon: "♥",
      },
      {
        title: "Learning and Practice",
        description:
          "Encourage hands-on learning and the development of practical abilities.",
        icon: "♧",
      },
      {
        title: "Women's Empowerment",
        description:
          "Support opportunities for women through skills development and learning.",
        icon: "✦",
      },
    ],

    features: [
      "Tailoring classes for women",
      "Practical skills development",
      "Hands-on learning",
      "Personal development",
      "Opportunities to build useful vocational skills",
    ],

    gallery: [
      {
        src: "/assets/img/gallery/tailoring.webp",
        alt: "Women's Tailoring Classes program",
        caption: "Women's Tailoring Classes",
      },
    ],

    quickInfo: [
      ["Category", "Education & Skills"],
      ["Focus", "Women's Skills Development"],
      ["Activity", "Tailoring Classes"],
    ],

    related: [
      "child-orphanage-support",
      "medical-assistance",
      "rice-bag-distribution",
    ],
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const program = programs[slug];

  if (!program) {
    return {
      title: "Program Not Found | MARWANN CHARITABLE TRUST",
    };
  }

  return {
    title: `${program.title} | MARWANN CHARITABLE TRUST`,
    description: program.shortDescription,
  };
}

export default async function ProgramDetailPage({ params }) {
  const { slug } = await params;
  const program = programs[slug];

  if (!program) {
    notFound();
  }

  const relatedPrograms = program.related
    .map((relatedSlug) => ({
      slug: relatedSlug,
      ...programs[relatedSlug],
    }))
    .filter((item) => item.title);

  return (
    <main className="program-detail-page">
      {/* HERO */}
      <section className="program-detail-hero">
        <div className="program-detail-container">
          <nav className="program-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href={PROGRAMS_URL}>All Programs</Link>
            <span>/</span>
            <span aria-current="page">{program.title}</span>
          </nav>

          <span className="program-detail-eyebrow">
            {program.category}
          </span>

          <h1>{program.title}</h1>

          <p className="program-detail-lead">
            {program.shortDescription}
          </p>

          <div className="program-detail-hero-actions">
            <a
              href="#program-overview"
              className="program-detail-button"
            >
              Explore Program <span aria-hidden="true">↓</span>
            </a>

            <Link
              href={DONATE_URL}
              className="program-detail-button program-detail-button-gold"
            >
              Donate Now <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAM HIGHLIGHTS */}
      <section className="program-detail-highlights">
        <div className="program-detail-container">
          <div className="program-highlight">
            <span className="program-highlight-icon">♥</span>
            <span className="program-highlight-label">Program Area</span>
            <strong>{program.category}</strong>
          </div>

          <div className="program-highlight">
            <span className="program-highlight-icon">◎</span>
            <span className="program-highlight-label">Primary Focus</span>
            <strong>{program.title}</strong>
          </div>

          <div className="program-highlight">
            <span className="program-highlight-icon">✦</span>
            <span className="program-highlight-label">Our Approach</span>
            <strong>Community Service</strong>
          </div>

          <div className="program-highlight">
            <span className="program-highlight-icon">♡</span>
            <span className="program-highlight-label">Get Involved</span>
            <strong>Support Our Work</strong>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section
        className="program-detail-section"
        id="program-overview"
      >
        <div className="program-detail-container program-detail-intro-grid">
          <div className="program-detail-copy">
            <span className="program-detail-eyebrow">
              Program Overview
            </span>

            <h2>Serving our community with compassion</h2>

            {program.overview.map((paragraph, index) => (
              <p key={`${slug}-overview-${index}`}>
                {paragraph}
              </p>
            ))}

            <div className="program-detail-purpose">
              <h3>Our Purpose</h3>
              <p>{program.purpose}</p>
            </div>

            <Link
              href={CONTACT_URL}
              className="program-detail-text-link"
            >
              Contact the Trust <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="program-detail-feature-image">
            <img
              src={program.image}
              alt={program.title}
            />

            <div className="program-detail-image-caption">
              <span>{program.category}</span>
              <strong>{program.title}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="program-detail-section program-detail-activities">
        <div className="program-detail-container">
          <div className="program-detail-section-heading">
            <span className="program-detail-eyebrow">
              What We Do
            </span>

            <h2>Our Program Activities</h2>

            <p>
              Explore the key areas of focus within this charitable
              initiative.
            </p>
          </div>

          <div className="program-detail-activity-grid">
            {program.activities.map((activity, index) => (
              <article
                className="program-detail-activity-card"
                key={`${slug}-activity-${index}`}
              >
                <span className="program-detail-activity-icon">
                  {activity.icon}
                </span>

                <span className="program-detail-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="program-detail-section">
        <div className="program-detail-container program-detail-features-grid">
          <div className="program-detail-features-heading">
            <span className="program-detail-eyebrow">
              Our Commitment
            </span>

            <h2>Program Features</h2>

            <p>
              Our activities are guided by charitable service,
              community participation and the needs of the people
              we seek to support.
            </p>

            <Link
              href={DONATE_URL}
              className="program-detail-button program-detail-button-solid"
            >
              Support This Work <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="program-detail-feature-list">
            {program.features.map((feature, index) => (
              <div
                className="program-detail-feature-item"
                key={`${slug}-feature-${index}`}
              >
                <span className="program-detail-check">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        className="program-detail-section program-detail-gallery-section"
        id="program-gallery"
      >
        <div className="program-detail-container">
          <div className="program-detail-section-heading">
            <span className="program-detail-eyebrow">
              Moments of Service
            </span>

            <h2>Photo Gallery</h2>

            <p>
              Photographs associated with this program. Additional
              program photographs can be added to the gallery as
              they become available.
            </p>
          </div>

          <div className="program-detail-gallery-grid">
            {program.gallery.map((photo, index) => (
              <a
                className="program-detail-gallery-card"
                href={photo.src}
                target="_blank"
                rel="noreferrer"
                key={`${slug}-photo-${index}`}
                aria-label={`Open full-size image: ${photo.caption}`}
              >
                <div className="program-detail-gallery-image">
                  <img src={photo.src} alt={photo.alt} />
                  <span
                    className="program-detail-gallery-open"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>

                <div className="program-detail-gallery-caption">
                  <span>{program.category}</span>
                  <h3>{photo.caption}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK INFORMATION */}
      <section className="program-detail-section">
        <div className="program-detail-container program-detail-info-grid">
          <div className="program-detail-info-copy">
            <span className="program-detail-eyebrow">
              At a Glance
            </span>

            <h2>Quick Information</h2>

            <p>
              Learn more about this program and how it fits into the
              trust's charitable activities.
            </p>

            <Link
              href={CONTACT_URL}
              className="program-detail-text-link"
            >
              Ask Us About This Program <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="program-detail-info-table">
            {program.quickInfo.map(([label, value]) => (
              <div
                className="program-detail-info-row"
                key={`${slug}-${label}`}
              >
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}

            <div className="program-detail-info-row">
              <span>Organisation</span>
              <strong>MARWANN CHARITABLE TRUST</strong>
            </div>
          </div>
        </div>
      </section>

      {/* DONATION CTA */}
      <section className="program-detail-donate">
        <div className="program-detail-container">
          <span className="program-detail-eyebrow">
            Be Part of the Change
          </span>

          <h2>Help us continue serving others.</h2>

          <p>
            Your support helps MARWANN CHARITABLE TRUST continue its
            charitable activities and community initiatives.
            Together, we can work towards a more compassionate
            community.
          </p>

          <div className="program-detail-donate-actions">
            <Link
              href={DONATE_URL}
              className="program-detail-button program-detail-button-gold"
            >
              Donate Now <span aria-hidden="true">→</span>
            </Link>

            <Link
              href={CONTACT_URL}
              className="program-detail-button"
            >
              Volunteer / Contact Us
            </Link>
          </div>

          <p className="program-detail-motto">
            We Serve God by Serving Others
          </p>
        </div>
      </section>

      {/* RELATED PROGRAMS */}
      <section className="program-detail-section program-detail-related">
        <div className="program-detail-container">
          <div className="program-detail-section-heading">
            <span className="program-detail-eyebrow">
              Explore More
            </span>

            <h2>Other Programs</h2>

            <p>
              Discover more charitable initiatives by MARWANN
              CHARITABLE TRUST.
            </p>
          </div>

          <div className="program-detail-related-grid">
            {relatedPrograms.map((related) => (
              <article
                className="program-detail-related-card"
                key={related.slug}
              >
                <Link
                  href={`/programs/${related.slug}`}
                  className="program-detail-related-image"
                  aria-label={`Explore ${related.title}`}
                >
                  <img
                    src={related.image}
                    alt={related.title}
                    loading="lazy"
                  />
                </Link>

                <div className="program-detail-related-body">
                  <span>{related.category}</span>
                  <h3>{related.title}</h3>
                  <p>{related.shortDescription}</p>

                  <Link href={`/programs/${related.slug}`}>
                    View Program <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="program-detail-all-programs">
            <Link
              href={PROGRAMS_URL}
              className="program-detail-button program-detail-button-solid"
            >
              View All Programs <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="program-detail-final-cta">
        <div className="program-detail-container">
          <div>
            <span className="program-detail-eyebrow">
              Get Involved
            </span>

            <h2>Be a part of the change.</h2>

            <p>
              Join MARWANN CHARITABLE TRUST as a supporter or
              volunteer and help us continue our charitable work.
            </p>
          </div>

          <div className="program-detail-final-actions">
            <Link
              href={DONATE_URL}
              className="program-detail-button program-detail-button-gold"
            >
              Donate Now
            </Link>

            <Link
              href={CONTACT_URL}
              className="program-detail-button"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* BACK LINK */}
      <section className="program-detail-back">
        <div className="program-detail-container">
          <Link href={PROGRAMS_URL}>
            ← Explore All Programs
          </Link>
        </div>
      </section>
    </main>
  );
}