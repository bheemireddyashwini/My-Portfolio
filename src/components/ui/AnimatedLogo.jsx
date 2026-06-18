export default function AnimatedLogo({ className = "" }) {
  return (
    <div className={`relative inline-flex shrink-0 items-center justify-center ${className}`}>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-500/25 to-violet-500/15 blur-md" />
      <img
        src="/logo-mark.png"
        alt=""
        width={44}
        height={44}
        className="relative site-logo-mark"
      />
    </div>
  );
}
