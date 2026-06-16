import Bio from "./Bio";
import { useEffect, useState } from "react";

export default function Herosection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % Bio.roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative w-full px-5 py-8 overflow-hidden md:px-5 md:py-16 lg:py-20">
      {/* Glow Shape - Top Right */}
      <div className="absolute w-[520px] h-[520px] rounded-full -top-56 -right-44 bg-gradient-to-b from-blue-400/20 to-transparent pointer-events-none blur-3xl"></div>
      
      {/* Glow Shape - Bottom Left */}
      <div className="absolute w-[400px] h-[400px] rounded-full -bottom-32 -left-40 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none blur-3xl"></div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.9fr] gap-12 lg:gap-16 items-start relative z-10">
        {/* Left Column - Intro */}
        <div className="animate-fadeUp space-y-6 lg:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-md hover:bg-blue-500/15 transition-all duration-300 w-fit">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs lg:text-sm font-semibold text-blue-300 tracking-wider uppercase">
              Open to opportunities
            </span>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Building{" "}
              <span className="relative inline-block">
                <span className="relative z-10">beautiful</span>
                <span className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></span>
              </span>
              {" "}digital products
            </h1>
          </div>

          {/* Animated Role */}
          <div className="h-12 lg:h-14">
            <p className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent animate-fadeUp">
              {Bio.roles[currentRoleIndex]}
            </p>
          </div>

          {/* Description */}
          <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl font-light">
            I craft responsive web experiences with{" "}
            <span className="text-blue-300 font-semibold">clean, modern code</span>. 
            Specialized in React, JavaScript, and building interfaces that users love.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={Bio.github}
              target="_blank"
              rel="noreferrer"
              className="group relative px-8 py-3.5 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300"></div>
              <div className="relative flex items-center gap-2">
                <span>View My Work</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </a>

            <a
              href={Bio.resume}
              target="_blank"
              rel="noreferrer"
              className="group relative px-8 py-3.5 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-md"
            >
              <div className="absolute inset-0 border border-blue-400/50 group-hover:border-blue-300 rounded-lg transition-colors"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent group-hover:from-blue-500/10"></div>
              <div className="relative flex items-center gap-2">
                <span>Download CV</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19v-7m0 0V5m0 7H5m7 0h7" />
                </svg>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-4 text-gray-400">
            <a href={Bio.github} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href={Bio.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column - Portrait Card */}
        <div className="hidden lg:flex justify-end w-full animate-fadeUp [animation-delay:0.2s]">
          <div className="relative group">
            {/* Gradient Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-blue-600/50 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* Card */}
            <div className="relative rounded-2xl overflow-hidden border border-blue-400/20 bg-gradient-to-br from-blue-900/20 to-blue-950/20 backdrop-blur-md shadow-2xl hover:border-blue-400/40 transition-all duration-500">
              <img
                src="/profilepic.avif"
                alt={`${Bio.name} portrait`}
                className="w-full h-auto aspect-[3/4] object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-16 lg:mt-24 animate-bounce">
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
