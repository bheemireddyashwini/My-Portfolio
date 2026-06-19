"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Bio } from "../../data/constants";
import Experiencedata from "../experience/Experiencedata";
import EducationData from "../Navbar/Education/EducationData";
import { useLanguage } from "./LanguageProvider";
import LanguageToggle from "./LanguageToggle";
import { FiArrowLeft, FiPrinter } from "react-icons/fi";

export default function ResumePage() {
  const { t, locale } = useLanguage();
  const r = t.resume;
  const portfolioUrl = "https://my-portfolio-ky55.onrender.com";

  useEffect(() => {
    document.title = r.documentTitle;
  }, [r.documentTitle]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-page">
      <div className="resume-toolbar">
        <Link href="/" className="resume-toolbar-btn">
          <FiArrowLeft aria-hidden="true" />
          {r.backToSite}
        </Link>
        <div className="resume-toolbar-actions">
          <LanguageToggle />
          <button type="button" className="resume-toolbar-btn resume-toolbar-btn-primary" onClick={handlePrint}>
            <FiPrinter aria-hidden="true" />
            {r.print}
          </button>
        </div>
      </div>

      <p className="resume-print-hint">{r.printHint}</p>

      <article className="resume-sheet" aria-label={r.pageTitle}>
        <header className="resume-header">
          <h1 className="resume-name">{Bio.name}</h1>
          <p className="resume-subtitle">{r.subtitle}</p>
          <ul className="resume-contact">
            <li>{r.contact.location}</li>
            <li>
              <a href={`mailto:${r.contact.email}`}>{r.contact.email}</a>
            </li>
            <li>
              <a href={portfolioUrl} target="_blank" rel="noreferrer">
                {r.contact.portfolioLabel}: {portfolioUrl.replace("https://", "")}
              </a>
            </li>
            <li>
              <a href={Bio.linkedin} target="_blank" rel="noreferrer">
                {r.contact.linkedinLabel}
              </a>
            </li>
            <li>
              <a href={Bio.github} target="_blank" rel="noreferrer">
                {r.contact.githubLabel}
              </a>
            </li>
            <li>{r.availability}</li>
          </ul>
        </header>

        <section className="resume-section">
          <h2 className="resume-section-title">{locale === "de" ? "Profil" : "Summary"}</h2>
          <p className="resume-summary">{r.summary}</p>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">{r.sections.experience}</h2>
          <div className="resume-stack">
            {Experiencedata.map((item) => {
              const copy = t.experience.items[item.id];
              if (!copy) return null;

              return (
                <div key={item.id} className="resume-entry">
                  <div className="resume-entry-head">
                    <h3 className="resume-entry-title">{copy.role}</h3>
                    <p className="resume-entry-meta">
                      {item.company} · {item.date}
                    </p>
                    {item.location ? <p className="resume-entry-location">{item.location}</p> : null}
                  </div>
                  <ul className="resume-bullets">
                    {copy.desc.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  {item.skills?.length ? (
                    <p className="resume-tags">
                      <strong>{locale === "de" ? "Technologien:" : "Tech:"}</strong> {item.skills.join(", ")}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">{r.sections.skills}</h2>
          <div className="resume-stack">
            {r.skillGroups.map((group) => (
              <div key={group.title} className="resume-skill-group">
                <h3 className="resume-skill-title">{group.title}</h3>
                <p className="resume-skill-items">{group.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">{r.sections.projects}</h2>
          <div className="resume-stack">
            {r.featuredProjects.map((project) => (
              <div key={project.title} className="resume-entry">
                <div className="resume-entry-head">
                  <h3 className="resume-entry-title">{project.title}</h3>
                  <p className="resume-entry-meta">{project.date}</p>
                </div>
                <ul className="resume-bullets">
                  {project.bullets.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">{r.sections.education}</h2>
          <div className="resume-stack">
            {EducationData.map((item) => {
              const copy = t.education.items[item.id];
              if (!copy) return null;

              return (
                <div key={item.id} className="resume-entry">
                  <div className="resume-entry-head">
                    <h3 className="resume-entry-title">{copy.degree}</h3>
                    <p className="resume-entry-meta">
                      {item.school} · {item.date}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="resume-section resume-section-split">
          <div>
            <h2 className="resume-section-title">{r.sections.certifications}</h2>
            <ul className="resume-cert-list">
              {r.certifications.map((cert) => (
                <li key={cert.name}>
                  <strong>{cert.name}</strong>
                  <span>
                    {cert.issuer} · {cert.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="resume-section-title">{r.sections.languages}</h2>
            <ul className="resume-cert-list">
              {r.languageList.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
}
