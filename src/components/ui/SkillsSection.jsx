"use client";

import SkillsMarquee from "./SkillsMarquee";
import { useLanguage } from "./LanguageProvider";

export default function SkillsSection({ skills }) {
  const { t } = useLanguage();

  return (
    <section id="skills" className="mt-20 scroll-mt-24 sm:mt-28">
      <span className="section-label">{t.skills.label}</span>
      <h2 className="text-heading mt-3 text-3xl font-bold sm:text-4xl">{t.skills.title}</h2>
      <p className="text-muted mt-4 max-w-2xl">{t.skills.description}</p>

      <SkillsMarquee skills={skills} />
    </section>
  );
}
