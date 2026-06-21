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
      className={`theme-switch${isDark ? " theme-switch-dark" : " theme-switch-light"}`}
      onClick={toggleTheme}
      aria-label={t.theme.switchTo}
      title={isDark ? t.theme.light : t.theme.dark}
      role="switch"
      aria-checked={isDark}
    >
      <span className="theme-switch-track">
        <FiSun className="theme-switch-icon theme-switch-icon-sun" aria-hidden="true" />
        <FiMoon className="theme-switch-icon theme-switch-icon-moon" aria-hidden="true" />
        <span className="theme-switch-thumb" aria-hidden="true" />
      </span>
    </button>
  );
}
