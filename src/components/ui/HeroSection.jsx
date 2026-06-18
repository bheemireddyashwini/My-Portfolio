"use client";

import { Bio } from "../../data/constants";
import CodeBlock from "./CodeBlock";
import { useLanguage } from "./LanguageProvider";

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

export default function HeroSection() {
  const { t, locale } = useLanguage();
  const roleLabel = locale === "de" ? "Full Stack Entwicklerin" : Bio.roles[0];

  return (
    <section id="home" className="scroll-mt-24 grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
      <div>
        <h1 className="text-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          {t.hero.greeting} <br />
          {t.hero.intro} <span className="text-accent">{Bio.name.toUpperCase()}</span>, <br />
          {t.hero.rolePrefix} {roleLabel}.
        </h1>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className="btn-primary">
            {t.hero.contactMe}
          </a>
          <a href={Bio.resume} target="_blank" rel="noreferrer" className="btn-outline">
            {t.hero.getResume}
          </a>
        </div>
      </div>

      <CodeBlock title="coder.js">
        <CoderSnippet />
      </CodeBlock>
    </section>
  );
}
