"use client";

import { Bio } from "../../data/constants";
import { useLanguage } from "./LanguageProvider";

export default function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="footer-border text-muted mt-16 border-t pt-8 text-center text-sm">
      <p>
        <a href="/resume" className="resume-footer-link">
          {t.footer.resumeLink}
        </a>
      </p>
      <p className="mt-3">
        © {t.footer.copyright} {Bio.name}
      </p>
    </footer>
  );
}
