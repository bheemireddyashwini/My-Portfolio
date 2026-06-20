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
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="experience-icon experience-logo-frame flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border sm:h-16 sm:w-16">
          <CompanyLogo src={item.img} alt={item.company} />
        </div>

        <div className="min-w-0 flex-1 pt-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <h3 className="experience-role min-w-0 text-sm leading-snug sm:text-base">
              {roleLabel(role)}
            </h3>
            <p className="experience-date font-mono text-[0.7rem] leading-snug sm:shrink-0 sm:text-right sm:text-sm">
              {formatDate(item.date)}
            </p>
          </div>
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
