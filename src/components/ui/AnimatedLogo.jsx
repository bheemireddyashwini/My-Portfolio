import LogoMark from "./LogoMark";

export default function AnimatedLogo({ className = "" }) {
  return (
    <div className={`logo-mark-wrap ${className}`.trim()}>
      <LogoMark className="site-logo-mark" />
    </div>
  );
}
