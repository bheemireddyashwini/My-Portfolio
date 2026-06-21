const ILLUSTRATIONS = {
  workspace: {
    src: "/illustrations/experience-workspace.svg",
    alt: "Modern developer workspace with laptop and code",
  },
  setup: {
    src: "/illustrations/experience-setup.svg",
    alt: "Modern developer desk setup illustration",
  },
  monitor: {
    src: "/illustrations/experience-monitor.svg",
    alt: "Modern monitor and laptop illustration",
  },
};

export default function ExperienceIllustration({ variant = "workspace" }) {
  const illustration = ILLUSTRATIONS[variant] ?? ILLUSTRATIONS.workspace;

  return (
    <div className="experience-illustration-wrap relative mx-auto flex w-full max-w-md items-center justify-center py-6 lg:max-w-none lg:py-0">
      <div className="experience-illustration-glow absolute inset-0 rounded-3xl" aria-hidden="true" />
      <div className="experience-illustration-float relative w-full max-w-[360px] lg:max-w-[420px]">
        <img
          src={illustration.src}
          alt={illustration.alt}
          className="portfolio-illustration h-auto w-full drop-shadow-[0_24px_48px_rgba(30,64,175,0.14)]"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
}
