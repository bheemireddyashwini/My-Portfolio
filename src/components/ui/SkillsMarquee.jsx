"use client";

import { useState } from "react";

function SkillIcon({ name, image }) {
  const [failed, setFailed] = useState(false);
  const initial = name.trim().charAt(0).toUpperCase();

  return (
    <div className="skill-icon-shell">
      {!failed ? (
        <img
          src={image}
          alt=""
          className="skill-icon-image"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="skill-icon-fallback" aria-hidden="true">
          {initial}
        </span>
      )}
    </div>
  );
}

function SkillItem({ skill }) {
  return (
    <div className="skill-card">
      <SkillIcon name={skill.name} image={skill.image} />
      <span className="skill-card-label">{skill.name}</span>
    </div>
  );
}

export default function SkillsMarquee({ skills }) {
  const track = [...skills, ...skills];

  return (
    <div className="skills-marquee relative mt-8 overflow-hidden">
      <div className="skills-marquee-fade-left pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24" />
      <div className="skills-marquee-fade-right pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24" />

      <div className="skills-marquee-track flex w-max gap-4 sm:gap-5">
        {track.map((skill, index) => (
          <SkillItem key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}
