export default function SiteLogo() {
  return (
    <a href="#home" className="site-logo group" aria-label="Ashwini Bheemireddy">
      <img
        src="/logo-mark.png"
        alt=""
        width={44}
        height={44}
        className="site-logo-mark shrink-0 transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <span className="site-logo-copy min-w-0">
        <span className="site-logo-name block truncate">ASHWINI BHEEMIREDDY</span>
        <span className="site-logo-subtitle">
          <span className="site-logo-subtitle-line" aria-hidden="true" />
          <span>WEB DEVELOPER</span>
          <span className="site-logo-subtitle-line" aria-hidden="true" />
        </span>
      </span>
    </a>
  );
}
