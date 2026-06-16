'use client';

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("✅ ScrollToTop MOUNTED AND RENDERING");

    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* DEBUG TEST - THIS SHOULD DEFINITELY BE VISIBLE */}
      <div
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          background: "red",
          color: "white",
          padding: "5px 10px",
          borderRadius: "4px",
          fontSize: "12px",
          zIndex: 99999,
          fontWeight: "bold",
        }}
      >
        ✅ Component Loaded!
      </div>

      {/* ACTUAL SCROLL TO TOP BUTTON */}
      {show && (
        <div
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #39a0ed 0%, #2b7fc0 100%)",
            boxShadow: "0 0 30px rgba(57, 160, 237, 0.8)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.2)";
            e.currentTarget.style.boxShadow = "0 0 50px rgba(57, 160, 237, 1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 0 30px rgba(57, 160, 237, 0.8)";
          }}
        >
          <span style={{ fontSize: "28px", color: "white", fontWeight: "bold" }}>↑</span>
        </div>
      )}
    </>
  );
}
