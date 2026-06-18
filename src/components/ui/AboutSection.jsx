"use client";

import { Bio } from "../../data/constants";
import AboutProfilePhoto from "./AboutProfilePhoto";
import Experiencedata from "../experience/Experiencedata";
import ProjectData from "../Project/ProjectData";
import Skilldata from "../Navbar/skills/Skilldata";
import { useLanguage } from "./LanguageProvider";
import {
  FiCode,
  FiCpu,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiTarget,
  FiHeart,
} from "react-icons/fi";

const stackTags = [
  { label: "HTML5", type: "stack" },
  { label: "CSS3", type: "stack" },
  { label: "ES6+", type: "stack" },
  { label: "React", type: "stack" },
  { label: "Next.js", type: "stack" },
  { label: "Tailwind CSS", type: "stack" },
];

export function AboutSection() {
  const { t } = useLanguage();

  const directionTags = [
    ...stackTags,
    { label: t.about.exploringAi, type: "ai" },
    { label: t.about.learningAi, type: "ai" },
  ];

  const stats = [
    { value: `${Experiencedata.length}+`, label: t.about.experienceRoles },
    { value: `${ProjectData.length}+`, label: t.about.projectsShipped },
    { value: `${Skilldata.length}`, label: t.about.skillGroups },
  ];

  return (
    <section id="about" className="experience-section relative mt-20 scroll-mt-24 sm:mt-28">
      <div className="mb-10 flex justify-center">
        <span className="experience-pill">{t.about.pill}</span>
      </div>

      <div className="about-layout-grid">
        <div className="about-left-column">
          <article className="about-intro-card">
            <span className="about-role-badge">{t.about.roleBadge}</span>
            <h2 className="text-heading mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              {t.about.whoAmI}
            </h2>
            <p className="text-body mt-5 text-base leading-8 sm:text-lg">
              {t.about.description}
            </p>
          </article>

          <div className="about-build-value-grid">
            <article className="about-highlight-card about-highlight-build">
              <div className="about-highlight-icon" aria-hidden="true">
                <FiCode className="h-4 w-4" />
              </div>
              <div className="about-highlight-content">
                <p className="about-highlight-title">{t.about.whatIBuild}</p>
                <p className="about-highlight-text">{t.about.whatIBuildText}</p>
              </div>
            </article>

            <article className="about-highlight-card about-highlight-value">
              <div className="about-highlight-icon" aria-hidden="true">
                <FiHeart className="h-4 w-4" />
              </div>
              <div className="about-highlight-content">
                <p className="about-highlight-title">{t.about.whatIValue}</p>
                <p className="about-highlight-text">{t.about.whatIValueText}</p>
              </div>
            </article>
          </div>

          <article className="about-direction-card">
            <div className="about-direction-header">
              <div className="about-direction-icon about-direction-icon-ai" aria-hidden="true">
                <FiCpu className="h-4 w-4" />
              </div>
              <div>
                <p className="about-direction-title">{t.about.currentDirection}</p>
                <p className="about-direction-subtitle">{t.about.currentDirectionSubtitle}</p>
              </div>
            </div>

            <p className="about-direction-note">{t.about.currentDirectionNote}</p>

            <div className="about-direction-tags">
              {directionTags.map((tag) => (
                <span
                  key={tag.label}
                  className={`about-direction-tag${
                    tag.type === "ai" ? " about-direction-tag-ai" : ""
                  }`}
                >
                  {tag.type === "ai" ? <span className="about-direction-spark" aria-hidden="true" /> : null}
                  {tag.label}
                </span>
              ))}
            </div>
          </article>

          <div className="about-stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="about-stat">
                <p className="about-stat-value">{stat.value}</p>
                <p className="about-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="about-actions">
            <a href={Bio.github} target="_blank" rel="noreferrer" className="btn-primary">
              <FiGithub /> GitHub
            </a>
            <a href={Bio.resume} target="_blank" rel="noreferrer" className="btn-outline">
              {t.about.resume}
            </a>
            <a href={Bio.linkedin} target="_blank" rel="noreferrer" className="btn-outline">
              <FiLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        <aside className="about-profile-card">
          <div className="about-profile-header">
            <div>
              <p className="about-profile-label">{t.about.profile}</p>
              <h3 className="text-heading text-xl font-bold sm:text-2xl">{Bio.name}</h3>
            </div>
            <div className="about-status-badge" aria-label="Open to opportunities">
              <span className="about-status-glow" aria-hidden="true" />
              <span className="about-status-dot" aria-hidden="true" />
              <span className="about-status-text">{t.about.openToOpportunities}</span>
            </div>
          </div>

          <AboutProfilePhoto />

          <div className="about-highlight-grid">
            <div className="about-highlight-card about-highlight-focus">
              <div className="about-highlight-icon" aria-hidden="true">
                <FiTarget className="h-4 w-4" />
              </div>
              <div className="about-highlight-content">
                <p className="about-highlight-title">{t.about.focus}</p>
                <p className="about-highlight-text">{t.about.focusText}</p>
              </div>
            </div>

            <div className="about-highlight-card about-highlight-style">
              <div className="about-highlight-icon" aria-hidden="true">
                <FiLayers className="h-4 w-4" />
              </div>
              <div className="about-highlight-content">
                <p className="about-highlight-title">{t.about.style}</p>
                <p className="about-highlight-text">{t.about.styleText}</p>
              </div>
            </div>
          </div>

          <div className="about-info-box">
            <p className="about-info-title">{t.about.coreStrengths}</p>
            <ul className="about-strengths">
              {t.about.strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
