import { Bio } from "../data/constants";
import ProjectData from "../components/Project/ProjectData";
import EducationData from "../components/Navbar/Education/EducationData";
import Skilldata from "../components/Navbar/skills/Skilldata";
import Experiencedata from "../components/experience/Experiencedata";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiBriefcase,
  FiGithub,
  FiLinkedin,
  FiLayers,
  FiStar,
} from "react-icons/fi";

const navigation = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const heroTags = ["React", "Next.js", "Tailwind CSS", "APIs", "Automation"];

const stats = [
  { value: `${Experiencedata.length}+`, label: "Experience roles" },
  { value: `${ProjectData.length}+`, label: "Projects shipped" },
  { value: `${Skilldata.length}`, label: "Skill groups" },
];

const coreStrengths = [
  "Clean, responsive UI systems",
  "React and Next.js application architecture",
  "API integration and content-driven frontend work",
];

const panelClass =
  "rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_30px_100px_rgba(2,6,23,0.45)] backdrop-blur-2xl ring-1 ring-white/5";

const chipClass =
  "inline-flex items-center rounded-full border border-sky-400/15 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-100 transition hover:border-sky-300/30 hover:bg-sky-300/15";

function SectionHeading({ eyebrow, title, description, icon: Icon }) {
  return (
    <div className="mb-10 max-w-3xl">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
        {Icon ? <Icon className="h-4 w-4" /> : null}
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-display max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function HeaderLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-slate-300 transition hover:text-white hover:drop-shadow-[0_0_18px_rgba(125,211,252,0.35)]"
    >
      {children}
    </a>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/[0.03] px-4 py-4 shadow-lg shadow-sky-950/10">
      <div className="font-display text-2xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
        {label}
      </div>
    </div>
  );
}

function ExperienceCard({ data, index }) {
  return (
    <article
      className={`${panelClass} bg-gradient-to-br from-white/[0.08] to-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:shadow-[0_30px_90px_rgba(56,189,248,0.12)]`}
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-lg shadow-sky-950/20 lg:h-20 lg:w-20">
          <img
            src={data.img}
            alt={`${data.company} logo`}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-display text-xl font-semibold text-white">
                {data.role}
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                {data.company}
                {data.location ? ` · ${data.location}` : ""}
                {data.date ? ` · ${data.date}` : ""}
              </p>
            </div>

            {data.current ? (
              <span className="inline-flex w-fit items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                Current
              </span>
            ) : null}
          </div>

          {data.specialization ? (
            <p className="mt-4 text-sm leading-7 text-slate-300">
              <span className="font-semibold text-white">Specialization:</span>{" "}
              {data.specialization}
            </p>
          ) : null}

          {data.desc ? (
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              {data.desc.map((item, itemIndex) => (
                <li key={itemIndex} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {data.skills ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {data.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className={chipClass}>
                  {skill}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={`${panelClass} group overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:shadow-[0_30px_90px_rgba(56,189,248,0.12)]`}>
      <div className="relative overflow-hidden border-b border-white/10">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-100 backdrop-blur">
          {project.category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-slate-400">{project.date}</p>
          </div>
          <FiStar className="mt-1 h-5 w-5 shrink-0 text-sky-300" />
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className={chipClass}>
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Live Demo
            <FiArrowUpRight />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-400/30 hover:bg-white/10"
          >
            GitHub
            <FiGithub />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const totalSkills = Skilldata.reduce((count, group) => count + group.skills.length, 0);

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
        <div className="absolute left-[-8%] top-[-6%] h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-[-8%] top-40 h-[28rem] w-[28rem] rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-25" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/55 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
            A.Portfolio
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <HeaderLink key={item.href} href={item.href}>
                {item.label}
              </HeaderLink>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:-translate-y-0.5 hover:brightness-110"
          >
            View Work
            <FiArrowUpRight />
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 pb-24 pt-[88px] sm:px-6 lg:px-8">
        <section id="home" className="grid items-center gap-12 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:pt-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
              <FiBriefcase className="h-4 w-4" />
              {Bio.roles?.[0] || "Full Stack Developer"}
            </div>

            <h1 className="font-display max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[0.95]">
              Building practical digital products with <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent">clean code</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:text-xl">
              {Bio.description.trim()}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={Bio.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:brightness-110"
              >
                GitHub
                <FiGithub />
              </a>
              <a
                href={Bio.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-sky-400/30 hover:bg-white/10"
              >
                Resume
                <FiArrowUpRight />
              </a>
              <a
                href={Bio.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400/30 hover:bg-white/10"
              >
                LinkedIn
                <FiLinkedin />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {heroTags.map((tag) => (
                <span key={tag} className={chipClass}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-sky-400/20 blur-3xl" />
            <div className={`${panelClass} relative overflow-hidden p-0`}>
              <div className="border-b border-white/10 bg-gradient-to-br from-sky-500/20 via-white/5 to-transparent p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Profile</p>
                    <h2 className="mt-2 font-display text-2xl font-semibold text-white">
                      Ashwini Bheemireddy
                    </h2>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                    Open to opportunities
                  </div>
                </div>
              </div>

              <div className="grid gap-6 p-6">
                <div className="mx-auto overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-sky-950/20 ring-1 ring-white/5">
                  <img
                    src="/profilepic.avif"
                    alt="Ashwini Bheemireddy portrait"
                    className="h-[20rem] w-full object-cover sm:h-[24rem]"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Focus</div>
                    <p className="mt-2 text-sm leading-7 text-slate-200">
                      Frontend systems, interface polish, and content-driven product work.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Style</div>
                    <p className="mt-2 text-sm leading-7 text-slate-200">
                      Practical, responsive, accessible, and intentionally detailed.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Core strengths</div>
                  <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-300">
                    {coreStrengths.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-24 scroll-mt-28 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className={panelClass}>
            <SectionHeading
              eyebrow="About"
              title="A focused developer profile with practical delivery"
              description="I design and build responsive web applications with modern JavaScript, React, APIs, and thoughtful UI details that improve user experience."
              icon={FiStar}
            />
            <p className="text-sm leading-7 text-slate-300">
              {Bio.description.trim()}
            </p>
          </div>

          <div className={`${panelClass} grid gap-4 sm:grid-cols-2`}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs uppercase tracking-[0.18em] text-slate-400">What I build</div>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                Responsive interfaces, reusable components, and reliable frontend flows that are easy to scan and easy to maintain.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs uppercase tracking-[0.18em] text-slate-400">What I value</div>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                Clarity, smooth interactions, strong layout rhythm, and a clean handoff from design to implementation.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
              <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Current direction</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {heroTags.map((tag) => (
                  <span key={tag} className={chipClass}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mt-24 scroll-mt-28">
          <SectionHeading
            eyebrow="Skills"
            title="A broad stack organized by real usage"
            description="The stack below reflects the tools and languages I use across frontend, backend, and delivery work."
            icon={FiLayers}
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {Skilldata.map((group) => (
              <div key={group.title} className={panelClass}>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {group.title}
                  </h3>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                    {group.skills.length} items
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill.name} className={chipClass}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="mt-24 scroll-mt-28">
          <SectionHeading
            eyebrow="Education"
            title="Academic and professional foundation"
            description="A look at the education milestones that shaped my technical background."
            icon={FiBookOpen}
          />

          <div className="relative mx-auto max-w-5xl pl-8 sm:pl-10">
            <div className="absolute left-3 top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b from-transparent via-sky-400/80 to-transparent sm:left-4" />

            <div className="space-y-6">
              {EducationData.map((item) => (
                <article
                  key={item.id}
                  className={`${panelClass} relative transition duration-300 hover:-translate-y-1 hover:border-sky-400/30`}
                >
                  <span className="absolute -left-6 top-6 h-4 w-4 rounded-full border-2 border-slate-950 bg-sky-400 shadow-[0_0_0_6px_rgba(56,189,248,0.12)] sm:-left-7 sm:top-7" />

                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-lg shadow-sky-950/20">
                      <img src={item.img} alt={item.school} className="h-full w-full object-cover" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="font-display text-xl font-semibold text-white">
                            {item.school}
                          </h3>
                          <p className="mt-1 text-sm text-slate-400">{item.date}</p>
                        </div>
                        <span className="inline-flex w-fit items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-200">
                          {item.degree}
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-slate-300">{item.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mt-24 scroll-mt-28">
          <SectionHeading
            eyebrow="Experience"
            title="A concise view of my internships and roles"
            description="Structured in a clean card layout so the timeline is easy to read on every screen size."
            icon={FiBriefcase}
          />

          <div className="grid gap-6">
            {Experiencedata.map((item, index) => (
              <ExperienceCard key={`${item.company}-${index}`} data={item} index={index} />
            ))}
          </div>
        </section>

        <section id="projects" className="mt-24 scroll-mt-28">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work with practical UI and product focus"
            description="A few projects that show the kind of interfaces and flows I like building."
            icon={FiStar}
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {ProjectData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="contact" className="mt-24 scroll-mt-28">
          <div className={`${panelClass} overflow-hidden`}>
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                  <FiLinkedin className="h-4 w-4" />
                  Contact
                </div>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Let&apos;s work together on a clean, responsive product.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  I am open to full-time roles, internships, and freelance opportunities. If you have an idea or a position in mind, feel free to reach out.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a
                  href={Bio.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400/30 hover:bg-white/10"
                >
                  GitHub
                  <FiGithub />
                </a>
                <a
                  href={Bio.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400/30 hover:bg-white/10"
                >
                  LinkedIn
                  <FiLinkedin />
                </a>
                <a
                  href={Bio.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
                >
                  Resume
                  <FiArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-16 pb-8 text-center text-sm text-slate-500">
          Built with Next.js and Tailwind CSS.
        </footer>
      </div>
    </main>
  );
}
