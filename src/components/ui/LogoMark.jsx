"use client";

import { useId } from "react";
import { motion } from "framer-motion";

export default function LogoMark({ className = "", animated = true }) {
  const gradId = useId();
  const Svg = animated ? motion.svg : "svg";

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 56"
      className={`logo-mark${animated ? " logo-mark-animated" : ""}${className ? ` ${className}` : ""}`}
      aria-hidden="true"
      {...(animated
        ? {
            initial: { opacity: 0, scale: 0.94 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          }
        : {})}
    >
      <defs>
        <linearGradient id={gradId} x1="34" y1="6" x2="82" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e40af" />
          <stop offset="0.55" stopColor="#2563eb" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <text x="32" y="44" textAnchor="middle" className="logo-mark-a" fill="var(--logo-a-color, #1e3a8a)">
        A
      </text>
      <text x="58" y="44" textAnchor="middle" className="logo-mark-b" fill={`url(#${gradId})`}>
        B
      </text>
    </Svg>
  );
}
