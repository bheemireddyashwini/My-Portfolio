"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getTranslation } from "../../i18n";

const LanguageContext = createContext(null);

function getPreferredLocale() {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("locale");
  if (stored === "en" || stored === "de") return stored;
  const browser = navigator.language?.toLowerCase() ?? "";
  return browser.startsWith("de") ? "de" : "en";
}

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initial = getPreferredLocale();
    setLocaleState(initial);
    document.documentElement.lang = initial;
    setReady(true);
  }, []);

  const setLocale = (next) => {
    if (next !== "en" && next !== "de") return;
    document.documentElement.lang = next;
    localStorage.setItem("locale", next);
    setLocaleState(next);
  };

  const t = getTranslation(locale);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, ready }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
