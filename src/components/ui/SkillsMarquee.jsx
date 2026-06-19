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
    <div className="skills-marquee relative">
      <div className="skills-marquee-track flex w-max gap-4 sm:gap-5">
        {track.map((skill, index) => (
          <SkillItem key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}
