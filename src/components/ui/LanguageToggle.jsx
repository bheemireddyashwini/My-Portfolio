"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "./LanguageProvider";

const locales = [
  { code: "en" },
  { code: "de" },
];

export default function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, right: 0 });
  const triggerRef = useRef(null);

  const current = locales.find((item) => item.code === locale) ?? locales[0];

  const updatePosition = () => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setPosition({
      top: rect.bottom + 8,
      right: window.innerWidth - rect.right,
    });
  };

  const toggleOpen = () => {
    if (!open) updatePosition();
    setOpen((value) => !value);
  };

  const selectLocale = (code) => {
    setLocale(code);
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return undefined;

    const handleReposition = () => updatePosition();
    window.addEventListener("resize", handleReposition);
    window.addEventListener("scroll", handleReposition, true);

    return () => {
      window.removeEventListener("resize", handleReposition);
      window.removeEventListener("scroll", handleReposition, true);
    };
  }, [open]);

  return (
    <>
      <div className="relative">
        <button
          ref={triggerRef}
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
      </div>

      {open &&
        createPortal(
          <>
            <button
              type="button"
              className="lang-dropdown-backdrop"
              aria-label={t.language.switchTo}
              onClick={() => setOpen(false)}
            />
            <div
              className="lang-dropdown-panel"
              style={{ top: `${position.top}px`, right: `${position.right}px` }}
              role="listbox"
              aria-label={t.language.switchTo}
            >
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
          </>,
          document.body,
        )}
    </>
  );
}
