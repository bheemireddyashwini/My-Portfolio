"use client";

import SkillsMarquee from "./SkillsMarquee";
import { useLanguage } from "./LanguageProvider";

export default function SkillsSection({ skills }) {
  const { t } = useLanguage();

  return (
    <section id="skills" className="experience-section relative mt-20 scroll-mt-24 sm:mt-28">
      <div className="mb-8 flex flex-col items-center gap-4 sm:mb-10">
        <span className="experience-pill">{t.skills.pill}</span>
        <p className="text-muted max-w-2xl text-center text-sm leading-7 sm:text-base">
          {t.skills.description}
        </p>
      </div>

      <SkillsMarquee skills={skills} />
    </section>
  );
}
