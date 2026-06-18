"use client";

import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import SiteLogo from "./SiteLogo";
import { useLanguage } from "./LanguageProvider";

const navHrefs = [
  { href: "#about", key: "about" },
  { href: "#experience", key: "experience" },
  { href: "#skills", key: "skills" },
  { href: "#education", key: "education" },
  { href: "#projects", key: "projects" },
  { href: "#contact", key: "contact" },
];

export default function SiteHeader() {
  const { t } = useLanguage();

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <SiteLogo />

        <div className="flex items-center gap-2 sm:gap-3">
          <nav className="hidden items-center gap-5 md:flex lg:gap-6">
            {navHrefs.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {t.nav[item.key]}
              </a>
            ))}
          </nav>

          <div className="header-utilities flex items-center gap-1 sm:gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <details className="relative md:hidden">
            <summary className="mobile-menu-trigger flex cursor-pointer list-none items-center justify-center rounded-lg p-2.5 [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Menu</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="mobile-menu-panel absolute right-0 mt-2 w-52 rounded-xl p-2 shadow-xl">
              {navHrefs.map((item) => (
                <a key={item.href} href={item.href} className="mobile-nav-link">
                  {t.nav[item.key]}
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
