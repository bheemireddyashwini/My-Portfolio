"use client";

import { useEffect, useState } from "react";
import ExperienceIllustration from "./ExperienceIllustration";

const VARIANTS = ["workspace", "setup"];

export default function HeroIllustration() {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let loadedCount = 0;

    VARIANTS.forEach((variant) => {
      const img = new Image();
      const done = () => {
        loadedCount += 1;
        if (loadedCount === VARIANTS.length) {
          setReady(true);
        }
      };

      img.onload = done;
      img.onerror = done;
      img.src = `/illustrations/experience-${variant}.svg`;
    });
  }, []);

  useEffect(() => {
    if (!ready) return undefined;

    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % VARIANTS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [ready]);

  return (
    <div className="hero-visual-inner">
      {ready ? (
        <ExperienceIllustration variant={VARIANTS[index]} />
      ) : (
        <div className="hero-illustration-loading" aria-hidden="true" />
      )}
    </div>
  );
}
