"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

const locales = [
  { code: "en" },
  { code: "de" },
];

export default function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const current = locales.find((item) => item.code === locale) ?? locales[0];

  const toggleOpen = () => setOpen((value) => !value);

  const selectLocale = (code) => {
    setLocale(code);
    setOpen(false);
  };

  return (
    <div className={`lang-dropdown${open ? " lang-dropdown-open" : ""}`}>
      <button
        type="button"
        className="header-utility-btn"
        onClick={toggleOpen}
        aria-label={t.language.switchTo}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="text-sm font-medium">{current.code.toUpperCase()}</span>
        <svg
          className={`header-utility-chevron ml-1 h-4 w-4${open ? " header-utility-chevron-open" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="lang-dropdown-backdrop"
            aria-label={t.language.switchTo}
            onClick={() => setOpen(false)}
          />
          <div className="lang-dropdown-panel" role="listbox" aria-label={t.language.switchTo}>
            {locales.map((item) => (
              <button
                key={item.code}
                type="button"
                role="option"
                aria-selected={locale === item.code}
                className={`lang-dropdown-item${
                  locale === item.code ? " lang-dropdown-item-active" : ""
                }`}
                onClick={() => selectLocale(item.code)}
              >
                <span>{t.language[item.code]}</span>
              </button>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
