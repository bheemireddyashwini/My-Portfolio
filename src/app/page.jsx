import { Bio } from "../data/constants";
import ProjectData from "../components/Project/ProjectData";
import EducationData from "../components/Navbar/Education/EducationData";
import Skilldata from "../components/Navbar/skills/Skilldata";
import Experiencedata from "../components/experience/Experiencedata";
import CodeBlock from "../components/ui/CodeBlock";
import SkillsMarquee from "../components/ui/SkillsMarquee";
import ProjectsSection from "../components/ui/ProjectsSection";
import ContactSection from "../components/ui/ContactSection";
import { AboutSection } from "../components/ui/AboutSection";
import { ExperienceSection } from "../components/ui/ExperienceSection";
import { EducationSection } from "../components/ui/EducationSection";
import ScrollToTop from "../components/ui/ScrollToTop";
import SiteHeader from "../components/ui/SiteHeader";

const navigation = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const coderSkills = [
  "HTML5",
  "CSS3",
  "Modern JavaScript (ES6+)",
  "React Js",
  "TypeScript",
  "Bootstrap",
  "Tailwind CSS",
  "Flutter",
  "WordPress",
  "Next.js",
  "Node Js",
  "MongoDB",
  "Directus CMS",
  "PHP",
];

const marqueeSkills = Skilldata.flatMap((group) => group.skills);

function CoderSnippet() {
  return (
    <>
      <span className="text-violet-400">const</span> coder = {"{"}
      {"\n  "}name: <span className="text-emerald-400">&apos;{Bio.name}&apos;</span>,
      {"\n  "}role: <span className="text-emerald-400">&apos;{Bio.roles[0]}&apos;</span>,
      {"\n  "}skills: [
      {coderSkills.map((skill) => (
        <span key={skill}>
          {"\n    "}
          <span className="text-emerald-400">&apos;{skill}&apos;</span>,
        </span>
      ))}
      {"\n  "}],
      {"\n  "}hardWorker: <span className="text-amber-300">true</span>,
      {"\n  "}quickLearner: <span className="text-amber-300">true</span>,
      {"\n  "}problemSolver: <span className="text-amber-300">true</span>,
      {"\n  "}hireable: <span className="text-violet-400">function</span> () {"{"}
      {"\n    "}
      <span className="text-violet-400">return</span> (
      {"\n      "}this.hardWorker &&{"\n      "}this.problemSolver &&{"\n      "}
      this.skills.length &gt;= 5{"\n    "});
      {"\n  "}
      {"}"},
      {"\n}"};
    </>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-page">
      <SiteHeader navigation={navigation} />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pt-28">
        <section id="home" className="scroll-mt-24 grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h1 className="text-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Hello, <br />
              This is <span className="text-accent">{Bio.name.toUpperCase()}</span>, <br />
              I&apos;m a Professional {Bio.roles[0]}.
            </h1>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn-primary">
                Contact me
              </a>
              <a href={Bio.resume} target="_blank" rel="noreferrer" className="btn-outline">
                Get Resume
              </a>
            </div>
          </div>

          <CodeBlock title="coder.js">
            <CoderSnippet />
          </CodeBlock>
        </section>

        <AboutSection />

        <ExperienceSection items={Experiencedata} />
        <section id="skills" className="mt-20 scroll-mt-24 sm:mt-28">
          <span className="section-label">Skills</span>
          <h2 className="text-heading mt-3 text-3xl font-bold sm:text-4xl">Skills</h2>
          <p className="text-muted mt-4 max-w-2xl">
            Technologies and tools I use across frontend, backend, and delivery work.
          </p>

          <SkillsMarquee skills={marqueeSkills} />
        </section>

        <EducationSection items={EducationData} />

        <ProjectsSection projects={ProjectData} />

        <ContactSection />

        <footer className="footer-border text-muted mt-16 border-t pt-8 text-center text-sm">
          © Developer Portfolio by {Bio.name}
        </footer>
      </div>

      <ScrollToTop />
    </main>
  );
}

