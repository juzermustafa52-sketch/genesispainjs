"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const appointmentUrl =
  "https://healow.com/apps/practice/genesis-pain-clinic-15095?v=1";
const phoneUrl = "tel:+1-913-871-9888";

const conditions = [
  {
    title: "Low Back Pain",
    description:
      "Lower back pain is the most common cause for a work-related disability and one of the main reasons for people staying home from work. The lower back is one of the most important parts of the body as it holds most of our body weight when we stand and is involved in movement when we bend or twist at the waist.",
    href: "https://www.genesispain.com/services/pain-conditions/low-back-pain/"
  },
  {
    title: "Neck Pain, Stiffness And Radiculopathy",
    description:
      "The neck, or cervical section of the spine, is a crucial area of the body since it supports the skull and brain. While mild stiff necks are a common complaint, more serious neck pain, particularly pain that travels down the arm, may be cause for concern.",
    href: "https://www.genesispain.com/services/pain-conditions/neck-pain/"
  },
  {
    title: "Complex Regional Pain Syndrome",
    description:
      "Complex regional pain syndrome, also known as reflex sympathetic dystrophy, is a form of chronic pain that often develops after an injury. The pain is often long-term and intense, and tends to get worse over time instead of getting better.",
    href: "https://www.genesispain.com/services/pain-conditions/complex-regional-pain-syndrome/"
  },
  {
    title: "Migraine & Headache",
    description:
      "Migraines are chronic headaches that cause intense pain and throbbing or pulsing sensations in the head. Some people also experience nausea, vomiting, and sensitivity to light and sound.",
    href: "https://www.genesispain.com/services/pain-conditions/migraine-headache/"
  },
  {
    title: "Shingles",
    description:
      "Shingles is a disease caused by the varicella-zoster virus, the herpes virus responsible for chickenpox. Years later, the virus may reactivate as shingles, often after another illness or during a period of great stress.",
    href: "https://www.genesispain.com/services/pain-conditions/shingles/"
  },
  {
    title: "Joint Pain (Knee, Hip, Shoulder)",
    description:
      "Joint pain is a common complaint, often prompting patients to seek medical care. When joints get out of alignment, several painful conditions can result, affecting muscles and nerves.",
    href: "https://www.genesispain.com/services/pain-conditions/sacroiliac-joint-pain/"
  },
  {
    title: "Spinal Stenosis",
    description:
      "Spinal stenosis is the narrowing in one or more areas of the spinal canal as a result of injury or deterioration of the discs, joints or bones of the spine.",
    href: "https://www.genesispain.com/services/pain-conditions/spinal-stenosis/"
  },
  {
    title: "Lumbar Facet Pain",
    description:
      "Facet joint syndrome is a condition that occurs when the facet joints of the spine become damaged or worn out. These small joints allow the bones of the spine to glide easily over each other.",
    href: "https://www.genesispain.com/services/pain-conditions/lumbar-facet-pain/"
  },
  {
    title: "Whiplash Injury",
    description:
      "Whiplash is a common neck condition that occurs as a result of a sudden backwards-forwards motion of the head, often associated with car accidents.",
    href: "https://www.genesispain.com/services/pain-conditions/whiplash/"
  }
];

const treatments = [
  {
    title: "Epidural Steroid Injection",
    description:
      "By reducing inflammation, epidural steroid injections (ESIs) are used to temporarily relieve lumbar, cervical, thoracic and sciatic-nerve pain.",
    image: "treatment-of-lower-back-pain-cover.jpg",
    href: "https://www.genesispain.com/epidural-steroid-injection-overland-park-kansas/"
  },
  {
    title: "Spinal Cord Stimulators",
    description:
      "Spinal cord stimulation typically involves implanting an electronic device to help relieve chronic back and leg pain.",
    image: "conditions-of-lower-back-pain-cover.jpg",
    href: "https://www.genesispain.com/spinal-cord-stimulators-overland-park-kansas/"
  },
  {
    title: "Genicular Nerve Block & Ablation",
    description:
      "By blocking or ablating the sensory nerves to the knee, we can disrupt the pain signals experienced by the patient.",
    image: "knee-pain-cover.jpg",
    href: "https://www.genesispain.com/genicular-nerve-block-ablation-overland-park-kansas/"
  },
  {
    title: "Injections for Migraine",
    description:
      "Migraine injections may help reduce headache pain and the symptoms that can accompany migraine.",
    image: "headache-cover.jpg",
    href: "https://www.genesispain.com/migraine-injections-overland-park-kansas/"
  },
  {
    title: "Trigger Point Injection",
    description:
      "Trigger-point injections treat pain in areas that have developed knots of muscle that form when muscles contract and cannot relax.",
    image: "trigger-point-injections-cover.jpg",
    href: "https://www.genesispain.com/trigger-point-injection-overland-park-kansas/"
  },
  {
    title: "Steroid Injection for Joint Pain",
    description:
      "Joint injections can help reduce inflammation and pain associated with arthritis and other joint conditions.",
    image: "knee-pain-cover.jpg",
    href: "https://www.genesispain.com/steroid-injection-for-joint-pain-overland-park-kansas/"
  }
];

const questions = [
  {
    question: "What should I bring with me to my first visit?",
    answer:
      "A photo ID and your insurance card are required. If you’ve had imaging done or have records from a previous provider, bringing those records helps our team better understand your medical history."
  },
  {
    question: "Can I schedule my appointment online instead of calling?",
    answer:
      "Both options work. Our website has a request form if you’d rather not call, though you’re always welcome to call and speak with our staff directly."
  },
  {
    question: "Will I always see Dr. Jafri, or could I see another provider?",
    answer:
      "Not necessarily. Your care may involve other qualified providers on the team, depending on scheduling and what your treatment calls for."
  },
  {
    question: "How do I request a refill on my medication between visits?",
    answer:
      "Refill requests go through our office directly. A staff member will walk you through the process based on your current treatment plan."
  },
  {
    question: "Can I view my visit notes through the patient portal?",
    answer:
      "The patient portal gives you access to visit summaries and other health information connected to your care here."
  },
  {
    question: "Can I still be seen if I'm being referred from another pain clinic?",
    answer:
      "Yes, we get referrals from other pain clinics regularly. Bringing your records along helps our team pick up where your last provider left off."
  }
];

const testimonials = [
  {
    quote:
      "Words cannot explain how grateful I am for Dr. Raza Jafri. I have been going through this nonstop stabbing pain in my tailbone area for almost 10 years now. I have been all over trying to get answers, and Dr. Jafri actually took the time to research my situation. I am so grateful for everyone in this office; they are all amazing!",
    name: "Macee Chance"
  },
  {
    quote:
      "I thought the staff was very friendly and warm. I liked that Dr. Jafri consults with the patient and works with them on what kind of doses are suitable.",
    name: "Genesis Pain Clinic patient"
  },
  {
    quote:
      "Dr. Raza was attentive and took time with me. He listened to my concerns and answered politely, which made it a great experience.",
    name: "Genesis Pain Clinic patient"
  }
];

const treatmentLinks = [
  ["Regenerative Techniques for Joint, Tendon, and Ligament Injuries", "https://www.genesispain.com/regenerative-medicine-techniques-overland-park-kansas/"],
  ["Spinal Cord Stimulators", "https://www.genesispain.com/spinal-cord-stimulators-overland-park-kansas/"],
  ["Epidural Steroid Injection", "https://www.genesispain.com/epidural-steroid-injection-overland-park-kansas/"],
  ["Genicular Nerve Block & Ablation", "https://www.genesispain.com/genicular-nerve-block-ablation-overland-park-kansas/"],
  ["Injections for Migraine", "https://www.genesispain.com/migraine-injections-overland-park-kansas/"],
  ["Steroid Injection for Joint Pain", "https://www.genesispain.com/steroid-injection-for-joint-pain-overland-park-kansas/"],
  ["Facet Injections & Radiofrequency Ablation", "https://www.genesispain.com/facet-injections-radiofrequency-ablation-overland-park-ks/"],
  ["Trigger Point Injection", "https://www.genesispain.com/trigger-point-injection-overland-park-kansas/"]
];

const conditionLinks = [
  ["Low Back Pain", "https://www.genesispain.com/services/pain-conditions/low-back-pain/"],
  ["Neck Pain", "https://www.genesispain.com/services/pain-conditions/neck-pain/"],
  ["Complex Regional Pain Syndrome", "https://www.genesispain.com/services/pain-conditions/complex-regional-pain-syndrome/"],
  ["Migraine & Headache", "https://www.genesispain.com/services/pain-conditions/migraine-headache/"],
  ["Shingles", "https://www.genesispain.com/services/pain-conditions/shingles/"],
  ["Joint Pain", "https://www.genesispain.com/services/pain-conditions/sacroiliac-joint-pain/"],
  ["Spinal Stenosis", "https://www.genesispain.com/services/pain-conditions/spinal-stenosis/"],
  ["Lumbar Facet Pain", "https://www.genesispain.com/services/pain-conditions/lumbar-facet-pain/"],
  ["Whiplash Injury", "https://www.genesispain.com/services/pain-conditions/whiplash/"]
];

const patientLinks = [
  ["Patient Forms", "https://www.genesispain.com/for-patients/patient-forms/"],
  ["Patient Portal", "https://www.genesispain.com/for-patients/patient-portal/"],
  ["Insurance", "https://www.genesispain.com/for-patients/insurance/"],
  ["Frequently Asked Questions", "https://www.genesispain.com/for-patients/faqs/"]
];

function Arrow({ direction = "right" }) {
  return <span aria-hidden="true">{direction === "left" ? "‹" : "›"}</span>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function updateHeader() {
      setScrolled(window.scrollY > 50);
    }

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <a className="site-logo" href="#top" aria-label="Genesis Pain Clinic home">
        <Image
          src="/images/logo.png"
          alt="Genesis Pain Clinic — Patient First"
          width={272}
          height={103}
          priority
        />
      </a>
      <div className="header-right">
        <div className="header-utility">
          <a className="portal-button" href="https://mycw95.ecwcloud.com/portal12863/jsp/login.jsp">
            Patient Portal
          </a>
          <a className="header-call" href={phoneUrl}>
            Call: (913) 871-9888
          </a>
          <div className="social-links" aria-label="Social media">
            <a href="https://www.facebook.com/genesispainclinic/" aria-label="Facebook">f</a>
            <a href="https://twitter.com/GenesisPainCli2" aria-label="Twitter">t</a>
            <a href="https://www.instagram.com/genesispain/" aria-label="Instagram">◎</a>
            <a href="https://www.genesispain.com/" aria-label="Genesis Pain Clinic">g</a>
          </div>
        </div>
        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={`primary-nav${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <a className="active" href="#top" onClick={closeMenu}>Home</a>
          <a href="https://www.genesispain.com/about-us/" onClick={closeMenu}>Meet Our Providers</a>
          <NavDropdown label="Conditions & Treatments" href="https://www.genesispain.com/services/">
            <>
              <div>
                <strong>Pain Conditions</strong>
                {conditionLinks.map(([label, href]) => (
                  <a key={href} href={href}>{label}</a>
                ))}
              </div>
              <div>
                <strong>Treatments &amp; Procedures</strong>
                {treatmentLinks.map(([label, href]) => (
                  <a key={href} href={href}>{label}</a>
                ))}
              </div>
            </>
          </NavDropdown>
          <NavDropdown
            label="For Patients"
            href="https://www.genesispain.com/for-patients/"
            panelClassName="patient-dropdown"
          >
            <>
              {patientLinks.map(([label, href]) => (
                <a key={href} href={href}>{label}</a>
              ))}
            </>
          </NavDropdown>
          <a href="https://www.genesispain.com/gallery/" onClick={closeMenu}>Gallery</a>
          <a href="https://www.genesispain.com/blog/" onClick={closeMenu}>Blogs</a>
          <a href="https://www.genesispain.com/contact-us/" onClick={closeMenu}>Contact</a>
          <div className="mobile-header-actions">
            <a href={appointmentUrl}>Request an appointment</a>
            <a href={phoneUrl}>Call: (913) 871-9888</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

function NavDropdown({ label, href, panelClassName = "", children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`nav-dropdown${open ? " is-open" : ""}`}>
      <button
        className="nav-dropdown-trigger"
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        {label} <span aria-hidden="true">⌄</span>
      </button>
      <div className={`dropdown-panel ${panelClassName}`}>
        <a className="dropdown-home" href={href}>{label}</a>
        {children}
      </div>
    </div>
  );
}

function CarouselControls({ previous, next, label }) {
  return (
    <div className="carousel-controls">
      <button type="button" onClick={previous} aria-label={`Previous ${label}`}>
        <Arrow direction="left" />
      </button>
      <button type="button" onClick={next} aria-label={`Next ${label}`}>
        <Arrow />
      </button>
    </div>
  );
}

function ConditionsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = conditions[activeIndex];
  const move = (offset) => {
    setActiveIndex((index) => (index + offset + conditions.length) % conditions.length);
  };

  return (
    <div className="conditions-carousel" aria-roledescription="carousel">
      <article className="condition-slide" aria-live="polite">
        <h3>{current.title}</h3>
        <p>{current.description}</p>
        <a className="more-link" href={current.href}>Find out more <span aria-hidden="true">→</span></a>
      </article>
      <div className="condition-carousel-footer">
        <span className="slide-count">
          {String(activeIndex + 1).padStart(2, "0")} / {String(conditions.length).padStart(2, "0")}
        </span>
        <CarouselControls previous={() => move(-1)} next={() => move(1)} label="conditions" />
      </div>
    </div>
  );
}

function TreatmentsCarousel() {
  const [start, setStart] = useState(0);
  const visibleTreatments = Array.from({ length: 3 }, (_, offset) => {
    return treatments[(start + offset) % treatments.length];
  });
  const move = (offset) => {
    setStart((index) => (index + offset + treatments.length) % treatments.length);
  };

  return (
    <div className="treatments-carousel" aria-roledescription="carousel">
      <div className="treatment-cards" aria-live="polite">
        {visibleTreatments.map((treatment) => (
          <article className="treatment-card" key={treatment.title}>
            <div className="treatment-image">
              <Image
                src={`/images/${treatment.image}`}
                alt=""
                width={610}
                height={620}
                sizes="(max-width: 700px) 90vw, (max-width: 1100px) 44vw, 30vw"
              />
            </div>
            <h3><a href={treatment.href}>{treatment.title}</a></h3>
            <p>{treatment.description}</p>
            <a className="more-link" href={treatment.href}>Find out more <span aria-hidden="true">→</span></a>
          </article>
        ))}
      </div>
      <div className="treatment-carousel-footer">
        <span className="slide-count">
          {String(start + 1).padStart(2, "0")} / {String(treatments.length).padStart(2, "0")}
        </span>
        <CarouselControls previous={() => move(-1)} next={() => move(1)} label="treatments" />
      </div>
    </div>
  );
}

function TestimonialsCarousel({ activeIndex, setActiveIndex }) {
  const current = testimonials[activeIndex];
  const move = (offset) => {
    setActiveIndex((index) => (index + offset + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-slider" aria-roledescription="carousel">
      <Image
        className="testimonial-mark"
        src="/images/icon-testimonials.png"
        alt=""
        width={64}
        height={64}
      />
      <blockquote aria-live="polite">
        <p>“{current.quote}”</p>
        <cite>{current.name}</cite>
      </blockquote>
      <CarouselControls previous={() => move(-1)} next={() => move(1)} label="testimonials" />
    </div>
  );
}

function QuickInfo() {
  return (
    <section className="quick-info" aria-label="Clinic location and hours">
      <div className="quick-info-inner">
        <a href="https://maps.app.goo.gl/kwWQFFugeSc6BjCq8">
          <span className="info-icon" aria-hidden="true">⌖</span>
          <span>6700 W 121st St, Suite 300,<br />Overland Park, KS 66209</span>
        </a>
        <a href="#office-hours">
          <span className="info-icon" aria-hidden="true">◷</span>
          <span>Monday–Friday:<br />8:00 AM to 4:30 PM</span>
        </a>
      </div>
    </section>
  );
}

function ContactForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = encodeURIComponent(
      `Name: ${formData.get("fullname")}\nEmail: ${formData.get("emailaddress")}\nPhone: ${formData.get("phone")}\n\n${formData.get("comments") || ""}`
    );
    window.location.href = `mailto:admin@genesispain.com?subject=Website inquiry&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span className="visually-hidden">Full Name</span>
        <input autoComplete="name" name="fullname" placeholder="Full Name*" required />
      </label>
      <label>
        <span className="visually-hidden">Email Address</span>
        <input autoComplete="email" name="emailaddress" type="email" placeholder="Email Address*" required />
      </label>
      <label>
        <span className="visually-hidden">Phone Number</span>
        <input autoComplete="tel" name="phone" type="tel" placeholder="Phone Number*" required />
      </label>
      <label>
        <span className="visually-hidden">Comments</span>
        <textarea
          name="comments"
          rows={4}
          maxLength={2000}
          placeholder="Please do not share any PHI/Confidential information via this form."
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

function Footer() {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-spacer">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6209.5811642408535!2d-94.665201!3d38.905904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x95c299d7382efe50!2sGenesis%20Pain%20Clinic!5e0!3m2!1sen!2s!4v1586535838978!5m2!1sen!2s"
            title="Genesis Pain Clinic location map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="contact-cta">
          <h2>Are you interested</h2>
          <h3>In seeking treatment at Genesis Pain Clinic?</h3>
          <p>
            At Genesis Pain Clinic, we tailor every patient&apos;s experience to
            their specific pain conditions and expectations for treatment.
          </p>
        </div>
        <div className="footer-columns">
          <section className="contact-form-card">
            <h3>Contact Us</h3>
            <ContactForm />
          </section>
          <section className="office-hours" id="office-hours">
            <h3>Office Hours</h3>
            <ul>
              <li>Monday: 8:00 AM – 5:00 PM</li>
              <li>Tuesday: 8:00 AM – 5:00 PM</li>
              <li>Wednesday: 8:00 AM – 5:00 PM</li>
              <li>Thursday: 8:00 AM – 5:00 PM</li>
              <li>Friday: 8:00 AM – 5:00 PM</li>
            </ul>
          </section>
          <section className="footer-clinic">
            <h3>Genesis Pain Clinic</h3>
            <a href="https://maps.app.goo.gl/kwWQFFugeSc6BjCq8">
              6700 W 121st St, Suite 300,<br />Overland Park, KS 66209
            </a>
            <a href={phoneUrl}>(913) 871-9888</a>
            <a className="footer-portal" href="https://mycw95.ecwcloud.com/portal12863/jsp/login.jsp">
              Patient Portal
            </a>
          </section>
        </div>
      </section>
      <footer className="site-footer">
        <nav aria-label="Footer navigation">
          <a href="#top">Home</a>
          <a href="https://www.genesispain.com/about-us/">Meet Our Providers</a>
          <a href="https://www.genesispain.com/services/">Conditions &amp; Treatments</a>
          <a href="https://www.genesispain.com/for-patients/">For Patients</a>
          <a href="https://www.genesispain.com/gallery/">Gallery</a>
          <a href="https://www.genesispain.com/blog/">Blogs</a>
          <a href="https://www.genesispain.com/contact-us/">Contact</a>
        </nav>
        <div className="social-links" aria-label="Social media">
          <a href="https://www.facebook.com/genesispainclinic/" aria-label="Facebook">f</a>
          <a href="https://twitter.com/GenesisPainCli2" aria-label="Twitter">t</a>
          <a href="https://www.instagram.com/genesispain/" aria-label="Instagram">◎</a>
          <a href="https://healow.com/apps/practice/genesis-pain-clinic-15095" aria-label="Healow">h</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Genesis Pain Clinic</span>
          <a href="https://www.genesispain.com/for-patients/faqs/">Disclaimer</a>
        </div>
      </footer>
    </>
  );
}

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-content">
            <h1>Increase Your Quality of Life</h1>
            <h2>The highest standard of interventional pain management in Kansas</h2>
            <p>
              Genesis Pain Clinic provides pain management care in Overland Park,
              Kansas, for patients experiencing chronic pain and other pain
              related conditions. We welcome patients from across Overland Park
              and nearby communities, including Hallbrook, Aspiria, Mission Farms,
              Deer Creek, Nall Hills, Leawood South, and Executive Hills, who are
              seeking care for their pain management needs.
            </p>
            <div className="hero-actions">
              <a className="request-button" href={appointmentUrl}>Request an Appointment</a>
              <a className="call-button" href={phoneUrl}>Call Now &amp; Schedule</a>
            </div>
          </div>
        </section>

        <section className="promotions" aria-label="Clinic news">
          <a href={appointmentUrl}>
            <Image
              src="/images/header-slide-genesis.jpg"
              alt="Genesis Pain Clinic — request an appointment"
              width={1340}
              height={450}
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </a>
          <a href={appointmentUrl}>
            <Image
              src="/images/genesis-now-offering-opioid-banner.jpg"
              alt="Now offering opioid disorder treatment"
              width={1340}
              height={450}
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </a>
        </section>

        <QuickInfo />

        <section className="welcome-section" id="welcome">
          <div className="welcome-images">
            <Image
              className="welcome-primary"
              src="/images/expect-better-cover.jpg"
              alt="Patient enjoying an active lifestyle"
              width={610}
              height={620}
              sizes="(max-width: 768px) 90vw, 34vw"
            />
            <Image
              className="welcome-secondary"
              src="/images/happy-family.jpg"
              alt="Family spending time together"
              width={610}
              height={620}
              sizes="(max-width: 768px) 70vw, 24vw"
            />
          </div>
          <div className="welcome-copy">
            <p className="eyebrow">Pain Management Clinic Overland Park, KS</p>
            <h2>Expect Better,<br /><span>Feel Better!</span></h2>
            <p>
              Genesis Pain Clinic offers diagnostic testing, fluoroscopic guided
              procedures, steroid injections, and regenerative medicine therapy.
              Our goal is to restore structure and function of damaged joint,
              nerves, and muscles to treat low back, neck, and migraine pain.
              Our mission is to have all patients living their lives with minimal pain.
            </p>
            <a className="more-link" href="https://www.genesispain.com/about-us/">
              Meet our providers <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="conditions-section" id="conditions">
          <div className="conditions-inner">
            <div className="conditions-intro">
              <h2>Conditions We Treat</h2>
              <p>
                Our providers are highly specialized in the diagnosis and
                treatment of complex pain conditions, and provide individualized
                treatment plans for every patient.
              </p>
            </div>
            <ConditionsCarousel />
          </div>
        </section>

        <section className="treatments-section" id="treatments">
          <div className="treatments-heading">
            <h2>Treatments and Procedures</h2>
            <p>
              Genesis Pain Clinic is dedicated in finding the source and cause of
              your pain and helping you achieve your normal lifestyle that has
              been lost. We help you get your life back with a variety of pain treatments.
            </p>
          </div>
          <TreatmentsCarousel />
          <div className="treatments-video">
            <iframe
              src="https://www.youtube.com/embed/FI7etzG2h6M?feature=oembed"
              title="Pedro from Balance Ketamine"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>

        <section className="insurance-section">
          <Image
            src="/images/icon-insurance.png"
            alt=""
            width={175}
            height={168}
          />
          <div>
            <h2>We accept most types of commercial insurances and Medicare</h2>
            <p>Wondering if your plan is in network? Give us a call at <a href={phoneUrl}>(913) 871-9888</a></p>
          </div>
        </section>

        <section className="doctor-section" id="providers">
          <div className="doctor-photo">
            <Image
              src="/images/dr-raza-jafri.jpg"
              alt="Dr. Raza Jafri"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="doctor-copy">
            <Image
              src="/images/kansas-top-doctors-2023.png"
              alt="Kansas Top Doctors"
              width={200}
              height={300}
            />
            <h3>Dr. Raza Jafri</h3>
            <h4>Board Certified in Anesthesiology, Sub-specialty in Pain Medicine</h4>
            <p>
              Dr. Jafri has extensive knowledge and experience in interventional
              pain management and is skilled in the use of ultrasound for both
              diagnostic and needle-guided procedures. Dr. Jafri’s interest
              and practice in regenerative medicine is a reflection of his belief
              in using a comprehensive pain management approach that utilizes
              cutting edge technology and procedures to help his patients live a
              pain-free and fulfilling life.
            </p>
            <a className="more-link" href="https://www.genesispain.com/about-us/">Find out more</a>
          </div>
        </section>

        <section className="faq-section" id="faqs">
          <div className="faq-inner">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {questions.map(({ question, answer }, index) => (
                <details key={question} open={index === 0}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="approach-section" id="approach">
          <div className="approach-grid">
            <article>
              <h2>Precise Diagnosis</h2>
              <p>
                At Genesis Pain Clinic, we listen to your pain symptoms to
                establish an accurate diagnosis. A correct diagnosis expedites
                the treatment process and provides each patient with insight
                into what they are experiencing.
              </p>
            </article>
            <article>
              <h2>Precise Treatment</h2>
              <p>
                Our team of practitioners work meticulously to craft a treatment
                plan that is best suited to address the nature and symptoms of a
                patient’s condition after a diagnosis is reached. Care is
                customized for each patient.
              </p>
            </article>
            <article>
              <h2>Precise Execution</h2>
              <p>
                We use advanced procedures and techniques to perform injections
                with high specificity. Ultrasound and fluoroscopy help us
                visualize the affected body part and provide the best possible outcomes.
              </p>
            </article>
          </div>
        </section>

        <section className="testimonials-section" id="testimonials">
          <div className="testimonials-heading">
            <p className="eyebrow">Testimonials</p>
            <h2>What our patients say</h2>
          </div>
          <TestimonialsCarousel
            activeIndex={activeTestimonial}
            setActiveIndex={setActiveTestimonial}
          />
          <div className="testimonial-dots" aria-label="Select testimonial">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name + index}
                className={index === activeTestimonial ? "active" : ""}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </section>

        <section className="team-banner">
          <div className="team-banner-copy">
            <h2>Amazing Team<br /><span>at Genesis Pain Clinic</span></h2>
            <a className="request-button" href="https://www.genesispain.com/about-us/">Meet Our Team</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
