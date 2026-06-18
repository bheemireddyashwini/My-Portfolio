export default function AnimatedLogo({ className = "" }) {
  return (
    <div className={`relative inline-flex shrink-0 items-center justify-center ${className}`}>
      <div className="relative h-9 w-9 sm:h-10 sm:w-10">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-500/35 to-violet-500/25 blur-md animate-pulse" />
        <div className="absolute inset-0 rounded-xl border border-sky-400/30 bg-gradient-to-br from-slate-900 to-slate-800 shadow-lg shadow-sky-950/30">
          <div className="absolute inset-[3px] rounded-[0.65rem] border border-sky-400/20" />
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl transition duration-300 group-hover:scale-105">
            <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-lg font-black text-transparent sm:text-xl">
              A
            </span>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
          </div>
        </div>
        <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-sky-400/80 animate-ping" />
        <span className="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 rounded-full bg-violet-400/60" />
      </div>
    </div>
  );
}
