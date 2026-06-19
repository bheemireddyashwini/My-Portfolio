"use client";

import { useState } from "react";
import { FiBookOpen } from "react-icons/fi";
import { useLanguage } from "./LanguageProvider";

function EducationIcon({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <span className="education-icon-fallback" aria-hidden="true">
        <FiBookOpen className="h-7 w-7" />
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

function degreeLabel(degree) {
  return degree.trim();
}

function EducationCard({ item, degree }) {
  const isCurrent = item.current;

  return (
    <article
      className={`experience-card group relative overflow-hidden rounded-xl p-5 sm:p-6${
        isCurrent ? " experience-card-active" : ""
      }`}
    >
      <p className="experience-date absolute right-4 top-4 font-mono text-xs sm:right-5 sm:top-5 sm:text-sm">
        {item.date}
      </p>

      <div className="flex items-start gap-4 pr-24 sm:gap-5 sm:pr-28">
        <div className="experience-icon flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border p-2 sm:h-16 sm:w-16">
          <EducationIcon src={item.img} alt={item.school} />
        </div>

        <div className="min-w-0 pt-1">
          <h3 className="experience-role text-sm sm:text-base">
            {degreeLabel(degree)}
          </h3>
          <p className="experience-company mt-2 text-sm sm:text-[0.95rem]">{item.school}</p>
        </div>
      </div>
    </article>
  );
}

function EducationIllustration() {
  return (
    <div className="experience-illustration-wrap relative mx-auto flex w-full max-w-md items-center justify-center py-6 lg:max-w-none lg:py-0">
      <div className="experience-illustration-glow absolute inset-0 rounded-3xl" aria-hidden="true" />
      <div className="experience-illustration-float relative w-full max-w-[360px] lg:max-w-[420px]">
        <img
          src="/illustrations/education-learning.svg"
          alt="Education and learning illustration"
          className="h-auto w-full drop-shadow-[0_24px_48px_rgba(236,72,153,0.2)]"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

export function EducationSection({ items }) {
  const { t } = useLanguage();

  return (
    <section id="education" className="experience-section relative mt-20 scroll-mt-24 sm:mt-28">
      <div className="mb-10 flex justify-center">
        <span className="experience-pill">{t.education.pill}</span>
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <EducationIllustration />

        <div className="space-y-5">
          {items.map((item) => (
            <EducationCard
              key={item.id}
              item={item}
              degree={t.education.items[item.id]?.degree ?? item.degree}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
