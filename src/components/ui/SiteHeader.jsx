"use client";

import { FiMenu } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader({ navigation }) {
  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="site-logo truncate text-sm font-bold tracking-[0.18em] sm:text-base">
          ASHWINI BHEEMIREDDY
        </a>

        <div className="flex items-center gap-3 sm:gap-4">
          <nav className="hidden items-center gap-5 md:flex lg:gap-6">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <ThemeToggle />

          <details className="relative md:hidden">
            <summary className="mobile-menu-trigger flex cursor-pointer list-none items-center justify-center rounded-lg p-2.5 [&::-webkit-details-marker]:hidden">
              <FiMenu className="h-5 w-5" />
            </summary>
            <div className="mobile-menu-panel absolute right-0 mt-2 w-52 rounded-xl p-2 shadow-xl">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="mobile-nav-link">
                  {item.label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
