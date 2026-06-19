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

  return (
    <section id="home" className="hero-section scroll-mt-24 grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.12, delayChildren: 0.05 },
          },
        }}
      >
        <motion.h1
          className="hero-title text-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {t.hero.headline}{" "}
          <span className="text-accent">{Bio.name}</span>.
        </motion.h1>

        <motion.p
          className="hero-description text-body mt-4 max-w-xl text-base leading-8 sm:mt-5 sm:text-lg"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <RotatingRole roles={t.hero.rotatingRoles} />
        </motion.div>

        <motion.div
          className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row"
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <a href="#contact" className="btn-primary hero-btn">
            {t.hero.contactMe}
          </a>
        </motion.div>
      </motion.div>

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
