"use client";

import { useEffect, useRef, useState } from "react";
import { FiGithub } from "react-icons/fi";
import ProjectSnippet from "./ProjectSnippet";

function ProjectAccordionItem({ project, index, isOpen, onToggle, itemRef }) {
  const fileName = `${project.title.toLowerCase().replace(/\s+/g, "-")}.js`;
  const panelId = `project-panel-${project.id}`;

  return (
    <article
      ref={itemRef}
      className={`project-accordion-item${isOpen ? " is-open" : ""}`}
      style={{ "--item-index": String(index) }}
    >
      <button
        type="button"
        id={`project-header-${project.id}`}
        className="project-accordion-header"
        onClick={() => onToggle(project.id)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <div className="project-stack-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="project-stack-title">{project.title}</p>
        <span className="project-stack-file font-mono">{fileName}</span>
      </button>

      <div
        id={panelId}
        className="project-accordion-panel"
        role="region"
        aria-labelledby={`project-header-${project.id}`}
        aria-hidden={!isOpen}
      >
        <div className="project-accordion-panel-inner">
          <pre className="project-stack-code font-mono">
            <code>
              <ProjectSnippet project={project} />
            </code>
          </pre>

          <div className="project-stack-actions">
            <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary text-sm">
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-outline text-sm"
              onClick={(event) => event.stopPropagation()}
            >
              <FiGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection({ projects }) {
  const sectionRef = useRef(null);
  const itemRefs = useRef({});
  const [isVisible, setIsVisible] = useState(false);
  const [openId, setOpenId] = useState(null);

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
      { threshold: 0.08, rootMargin: "0px 0px 10% 0px" },
    );

    observer.observe(node);

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      reveal();
    }

    const fallback = window.setTimeout(reveal, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (openId === null) return;

    const frame = window.requestAnimationFrame(() => {
      itemRefs.current[openId]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [openId]);

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`projects-section experience-section relative mt-20 scroll-mt-24 sm:mt-28${
        isVisible ? " projects-section-visible" : ""
      }`}
    >
      <div className="mb-10 flex justify-center">
        <span className="experience-pill">Projects</span>
      </div>

      <div className="projects-accordion">
        {projects.map((project, index) => (
          <ProjectAccordionItem
            key={project.id}
            project={project}
            index={index}
            isOpen={openId === project.id}
            onToggle={handleToggle}
            itemRef={(node) => {
              itemRefs.current[project.id] = node;
            }}
          />
        ))}
      </div>
    </section>
  );
}
