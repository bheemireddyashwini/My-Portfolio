"use client";

import LogoMark from "./LogoMark";
import { useLanguage } from "./LanguageProvider";

export default function SiteLogo() {
  const { t } = useLanguage();

  return (
    <a href="#home" className="site-logo group" aria-label="Ashwini Bheemireddy, Fullstack Developer">
      <LogoMark className="site-logo-mark shrink-0" />
      <span className="site-logo-subtitle">
        <span className="site-logo-subtitle-line" aria-hidden="true" />
        <span className="site-logo-subtitle-text">{t.logo.subtitle}</span>
        <span className="site-logo-subtitle-line" aria-hidden="true" />
      </span>
    </a>
  );
}
