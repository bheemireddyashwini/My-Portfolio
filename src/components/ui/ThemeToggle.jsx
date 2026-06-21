"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme, ready } = useTheme();
  const { t } = useLanguage();
  const isDark = ready
    ? theme === "dark"
    : typeof document !== "undefined" &&
      document.documentElement.getAttribute("data-theme") === "dark";

  return (
    <button
      type="button"
      className="header-utility-btn header-theme-btn"
      onClick={toggleTheme}
      aria-label={t.theme.switchTo}
      title={isDark ? t.theme.light : t.theme.dark}
    >
      {isDark ? (
        <FiSun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <FiMoon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}
