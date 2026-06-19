"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiArrowUp } from "react-icons/fi";

function getScrollY() {
  return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const onScroll = () => setVisible(getScrollY() > 200);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`scroll-to-top-btn${visible ? " is-visible" : ""}`}
      aria-label="Scroll to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <FiArrowUp className="scroll-to-top-icon" aria-hidden="true" />
    </button>,
    document.body,
  );
}
