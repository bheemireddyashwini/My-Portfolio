"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme, ready } = useTheme();
  const isDark = !ready || theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-switch ${isDark ? "theme-switch-dark" : "theme-switch-light"}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      role="switch"
      aria-checked={!isDark}
    >
      <span className="theme-switch-track">
        <span className="theme-switch-icon theme-switch-icon-sun" aria-hidden="true">
          <FiSun className="h-3.5 w-3.5" />
        </span>
        <span className="theme-switch-icon theme-switch-icon-moon" aria-hidden="true">
          <FiMoon className="h-3.5 w-3.5" />
        </span>
        <span className="theme-switch-thumb" aria-hidden="true" />
      </span>
    </button>
  );
}
