"use client";

import { useEffect, useRef, useState } from "react";
import { Bio } from "../../data/constants";
import {
  FiArrowRight,
  FiBriefcase,
  FiClock,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiSend,
  FiUser,
} from "react-icons/fi";

const contactDetails = [
  {
    icon: FiMapPin,
    label: "Location",
    value: "Düsseldorf, Germany",
  },
  {
    icon: FiBriefcase,
    label: "Open to",
    value: "Hybrid and remote opportunities",
  },
  {
    icon: FiClock,
    label: "Response time",
    value: "Usually within 24 to 48 hours",
  },
];

const availabilityTags = ["Full-time roles", "Freelance", "Collaboration"];

function ContactDetail({ icon: Icon, label, value }) {
  return (
    <div className="contact-detail-row">
      <div className="contact-detail-icon" aria-hidden="true">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="contact-detail-label">{label}</p>
        <p className="contact-detail-value">{value}</p>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isSent, setIsSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const reveal = () => setIsVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px 8% 0px" },
    );

    observer.observe(node);

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      reveal();
    }

    const fallback = window.setTimeout(reveal, 1000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setIsSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`contact-section experience-section relative mt-20 scroll-mt-24 sm:mt-28${
        isVisible ? " contact-section-visible" : ""
      }`}
    >
      <div className="contact-glow" aria-hidden="true" />

      <div className="mb-10 flex justify-center">
        <span className="experience-pill">Contact</span>
      </div>

      <div className="contact-layout">
        <div className="contact-intro">
          <div className="contact-illustration-wrap">
            <div className="contact-illustration-glow" aria-hidden="true" />
            <img
              src="/illustrations/contact-message.svg"
              alt=""
              className="contact-illustration"
              width={280}
              height={245}
            />
          </div>

          <div className="contact-intro-copy">
            <h2 className="contact-heading">Let&apos;s build something great</h2>
            <p className="contact-lead">
              Have a project in mind or a role to discuss? I would love to hear from you. Share a few
              details and I will get back to you soon.
            </p>
          </div>

          <div className="contact-details">
            {contactDetails.map((item) => (
              <ContactDetail key={item.label} {...item} />
            ))}
          </div>

          <div className="contact-tags">
            {availabilityTags.map((tag) => (
              <span key={tag} className="contact-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="contact-form-shell">
          <div className="contact-form-card">
            <div className="contact-form-top">
              <div className="contact-form-icon-wrap" aria-hidden="true">
                <FiSend className="h-5 w-5" />
              </div>
              <h3 className="contact-form-heading">
                Let&apos;s work <span>together</span>
              </h3>
              <p className="contact-form-subtext">
                Have a project in mind or just want to say hi? Feel free to reach out!
              </p>
            </div>

            {isSent ? (
              <div className="contact-success">
                <div className="contact-success-icon" aria-hidden="true">
                  <FiSend className="h-5 w-5" />
                </div>
                <h3 className="contact-success-title">Message ready to send</h3>
                <p className="contact-success-text">
                  Your email app should open shortly. You can also reach me directly on LinkedIn.
                </p>
                <div className="contact-success-actions">
                  <a href={Bio.linkedin} target="_blank" rel="noreferrer" className="contact-send-btn">
                    Open LinkedIn <FiArrowRight className="h-4 w-4" />
                  </a>
                  <button type="button" className="contact-send-secondary" onClick={() => setIsSent(false)}>
                    Send another
                  </button>
                </div>
              </div>
            ) : (
              <>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-field">
                    <label htmlFor="contact-name" className="contact-label">
                      Your Name
                    </label>
                    <div className="contact-input-wrap">
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="contact-input"
                      />
                      <FiUser className="contact-input-icon" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email" className="contact-label">
                      Your Email
                    </label>
                    <div className="contact-input-wrap">
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="contact-input"
                      />
                      <FiMail className="contact-input-icon" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-message" className="contact-label">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="contact-input contact-textarea resize-y"
                    />
                  </div>

                  <button type="submit" className="contact-send-btn">
                    <FiSend className="h-4 w-4" />
                    Send Message
                  </button>
                </form>

                <div className="contact-form-divider">
                  <span>OR</span>
                </div>

                <div className="contact-form-socials">
                  <a
                    href={Bio.github}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-form-social-btn"
                    aria-label="GitHub"
                  >
                    <FiGithub className="h-4 w-4" />
                  </a>
                  <a
                    href={Bio.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-form-social-btn"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={Bio.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-form-social-btn"
                    aria-label="Resume"
                  >
                    <FiMail className="h-4 w-4" />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
