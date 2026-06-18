export default function ProjectSnippet({ project }) {
  const role = project.category === "react" ? "Full Stack Developer" : "Frontend Developer";
  const description = project.description.replace(/'/g, " ").slice(0, 220);

  return (
    <>
      <span className="text-violet-400">const</span> project = {"{"}
      {"\n  "}name: <span className="text-emerald-400">&apos;{project.title}&apos;</span>,
      {"\n  "}tools: [
      {project.technologies.map((tool) => (
        <span key={tool}>
          {"\n    "}
          <span className="text-emerald-400">&apos;{tool}&apos;</span>,
        </span>
      ))}
      {"\n  "}],
      {"\n  "}myRole: <span className="text-emerald-400">&apos;{role}&apos;</span>,
      {"\n  "}Description:{" "}
      <span className="text-emerald-400">&apos;{description}&apos;</span>,
      {"\n  "}live: <span className="text-emerald-400">&apos;{project.link}&apos;</span>,
      {"\n  "}github: <span className="text-emerald-400">&apos;{project.github}&apos;</span>,
      {"\n}"};
    </>
  );
}
