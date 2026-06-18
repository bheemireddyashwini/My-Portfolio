import { Bio } from "../../data/constants";
import AboutProfilePhoto from "./AboutProfilePhoto";
import Experiencedata from "../experience/Experiencedata";
import ProjectData from "../Project/ProjectData";
import Skilldata from "../Navbar/skills/Skilldata";
import {
  FiCode,
  FiCpu,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiTarget,
  FiHeart,
} from "react-icons/fi";

const directionTags = [
  { label: "React", type: "stack" },
  { label: "Next.js", type: "stack" },
  { label: "Tailwind CSS", type: "stack" },
  { label: "Exploring AI", type: "ai" },
  { label: "Learning AI tools", type: "ai" },
  { label: "Automation", type: "stack" },
];

const strengths = [
  "Clean, responsive UI systems",
  "React / Next.js product delivery",
  "API and headless CMS integration",
  "Testing, automation, and debugging",
];

export function AboutSection() {
  const stats = [
    { value: `${Experiencedata.length}+`, label: "Experience roles" },
    { value: `${ProjectData.length}+`, label: "Projects shipped" },
    { value: `${Skilldata.length}`, label: "Skill groups" },
  ];

  return (
    <section id="about" className="experience-section relative mt-20 scroll-mt-24 sm:mt-28">
      <div className="mb-10 flex justify-center">
        <span className="experience-pill">About me</span>
      </div>

      <div className="about-layout-grid">
        <div className="about-left-column">
          <article className="about-intro-card">
            <span className="about-role-badge">{Bio.roles[0].toUpperCase()}</span>
            <h2 className="text-heading mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Who I am?
            </h2>
            <p className="text-body mt-5 text-base leading-8 sm:text-lg">
              {Bio.description.trim()}
            </p>
          </article>

          <div className="about-build-value-grid">
            <article className="about-highlight-card about-highlight-build">
              <div className="about-highlight-icon" aria-hidden="true">
                <FiCode className="h-4 w-4" />
              </div>
              <div className="about-highlight-content">
                <p className="about-highlight-title">What I build</p>
                <p className="about-highlight-text">
                  Responsive interfaces, reusable components, and production-ready UI that feels
                  polished on every screen size.
                </p>
              </div>
            </article>

            <article className="about-highlight-card about-highlight-value">
              <div className="about-highlight-icon" aria-hidden="true">
                <FiHeart className="h-4 w-4" />
              </div>
              <div className="about-highlight-content">
                <p className="about-highlight-title">What I value</p>
                <p className="about-highlight-text">
                  Clarity, smooth interactions, and layout rhythm. Design choices that feel
                  intentional, not noisy.
                </p>
              </div>
            </article>
          </div>

          <article className="about-direction-card">
            <div className="about-direction-header">
              <div className="about-direction-icon about-direction-icon-ai" aria-hidden="true">
                <FiCpu className="h-4 w-4" />
              </div>
              <div>
                <p className="about-direction-title">Current direction</p>
                <p className="about-direction-subtitle">
                  Building with modern frontend stacks and starting to explore AI in development.
                </p>
              </div>
            </div>

            <p className="about-direction-note">
              I am still learning the basics of AI. Right now I am getting a first look at how AI
              tools and APIs could support real projects in the future.
            </p>

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
              Resume
            </a>
            <a href={Bio.linkedin} target="_blank" rel="noreferrer" className="btn-outline">
              <FiLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        <aside className="about-profile-card">
          <div className="about-profile-header">
            <div>
              <p className="about-profile-label">Profile</p>
              <h3 className="text-heading text-xl font-bold sm:text-2xl">{Bio.name}</h3>
            </div>
            <div className="about-status-badge" aria-label="Open to opportunities">
              <span className="about-status-glow" aria-hidden="true" />
              <span className="about-status-dot" aria-hidden="true" />
              <span className="about-status-text">Open to opportunities</span>
            </div>
          </div>

          <AboutProfilePhoto />

          <div className="about-highlight-grid">
            <div className="about-highlight-card about-highlight-focus">
              <div className="about-highlight-icon" aria-hidden="true">
                <FiTarget className="h-4 w-4" />
              </div>
              <div className="about-highlight-content">
                <p className="about-highlight-title">Focus</p>
                <p className="about-highlight-text">
                  Frontend systems, interface polish, CMS workflows, and collaboration with product
                  and backend teams.
                </p>
              </div>
            </div>

            <div className="about-highlight-card about-highlight-style">
              <div className="about-highlight-icon" aria-hidden="true">
                <FiLayers className="h-4 w-4" />
              </div>
              <div className="about-highlight-content">
                <p className="about-highlight-title">Style</p>
                <p className="about-highlight-text">
                  Practical, responsive, and intentionally detailed, with clear structure and no
                  visual noise.
                </p>
              </div>
            </div>
          </div>

          <div className="about-info-box">
            <p className="about-info-title">Core strengths</p>
            <ul className="about-strengths">
              {strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
