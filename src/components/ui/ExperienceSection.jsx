"use client";

import { useState } from "react";
import { FiBriefcase } from "react-icons/fi";
import ExperienceIllustration from "./ExperienceIllustration";
import { useLanguage } from "./LanguageProvider";

function CompanyLogo({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <span className="experience-logo-fallback" aria-hidden="true">
        <FiBriefcase className="h-6 w-6" />
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-contain"
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

function formatDate(date) {
  if (!date) return "";
  const cleaned = date.split("·")[0].trim();
  return `(${cleaned})`;
}

function roleLabel(role) {
  return role.split("·")[0].trim();
}

function ExperienceCard({ item, role }) {
  const isCurrent = item.current;

  return (
    <article
      className={`experience-card group relative overflow-hidden rounded-xl p-5 sm:p-6${
        isCurrent ? " experience-card-active" : ""
      }`}
    >
      <p className="experience-date absolute right-4 top-4 font-mono text-xs sm:right-5 sm:top-5 sm:text-sm">
        {formatDate(item.date)}
      </p>

      <div className="flex items-start gap-4 pr-24 sm:gap-5 sm:pr-28">
        <div className="experience-icon experience-logo-frame flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border sm:h-16 sm:w-16">
          <CompanyLogo src={item.img} alt={item.company} />
        </div>

        <div className="min-w-0 pt-1">
          <h3 className="experience-role text-sm sm:text-base">
            {roleLabel(role)}
          </h3>
          <p className="experience-company mt-2 text-sm sm:text-[0.95rem]">{item.company}</p>
        </div>
      </div>
    </article>
  );
}

export function ExperienceSection({ items }) {
  const { t } = useLanguage();

  return (
    <section id="experience" className="experience-section relative mt-20 scroll-mt-24 sm:mt-28">
      <div className="mb-10 flex justify-center">
        <span className="experience-pill">{t.experience.pill}</span>
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <ExperienceIllustration />

        <div className="space-y-5">
          {items.map((item) => (
            <ExperienceCard
              key={item.id}
              item={item}
              role={t.experience.items[item.id]?.role ?? item.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
