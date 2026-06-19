"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Bio } from "../../data/constants";
import { useLanguage } from "./LanguageProvider";
import HeroIllustration from "./HeroIllustration";

function RotatingRole({ roles }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (roles.length <= 1) return undefined;

    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [roles]);

  if (!roles.length) return null;

  return (
    <div className="hero-role-loop" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          className="hero-role-loop-text"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function HeroSection() {
  const { t } = useLanguage();
  const [firstName, ...lastNameParts] = Bio.name.split(" ");
  const lastName = lastNameParts.join(" ");

  return (
    <section id="home" className="hero-section scroll-mt-[8.5rem] grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
      <div className="hero-copy">
        <p className="hero-greeting">{t.hero.headline}</p>

        <h1 className="hero-name-display">
          <span className="hero-name-line">
            <span className="hero-name-first">{firstName}</span>
            {lastName ? <span className="hero-name-last">{lastName}</span> : null}
            <span className="hero-name-period">.</span>
          </span>
        </h1>

        <p className="hero-description text-body mt-4 max-w-xl text-base leading-8 sm:mt-5 sm:text-lg">
          {t.hero.description}
        </p>

        <div className="hero-role-wrap">
          <RotatingRole roles={t.hero.rotatingRoles} />
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
          <a href="#contact" className="btn-primary hero-btn">
            {t.hero.contactMe}
          </a>
        </div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        <HeroIllustration />
      </motion.div>
    </section>
  );
}
