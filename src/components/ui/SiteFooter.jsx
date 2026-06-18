"use client";

import { Bio } from "../../data/constants";
import { useLanguage } from "./LanguageProvider";

export default function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="footer-border text-muted mt-16 border-t pt-8 text-center text-sm">
      © {t.footer.copyright} {Bio.name}
    </footer>
  );
}
