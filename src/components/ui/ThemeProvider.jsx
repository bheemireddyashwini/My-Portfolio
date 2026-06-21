"use client";

import { createContext, useContext, useLayoutEffect, useState } from "react";

const ThemeContext = createContext(null);

function syncThemeColor(mode) {
  const color = mode === "dark" ? "#0f172a" : "#ffffff";
  let meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "theme-color");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", color);
}

function applyTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  document.documentElement.style.colorScheme = mode;
  syncThemeColor(mode);
}

function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function readStoredTheme() {
  if (typeof window === "undefined") return "light";

  try {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // Private browsing can block storage.
  }

  return getSystemTheme();
}

function persistTheme(mode) {
  try {
    localStorage.setItem("theme", mode);
  } catch {
    // Ignore storage errors; DOM theme still updates.
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const initial = readStoredTheme();
    applyTheme(initial);
    setTheme(initial);
    setReady(true);
  }, []);

  const toggleTheme = () => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      persistTheme(next);
      return next;
    });
  };

  const setThemeMode = (mode) => {
    if (mode !== "light" && mode !== "dark") return;
    applyTheme(mode);
    persistTheme(mode);
    setTheme(mode);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setThemeMode, ready }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
