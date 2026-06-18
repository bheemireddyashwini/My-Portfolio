export default function CodeBlock({ title = "snippet.js", children, className = "" }) {
  return (
    <div className={`code-block ${className}`}>
      <div className="code-block-header">
        <span className="h-3 w-3 rounded-full bg-red-400/90" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/90" />
        <span className="h-3 w-3 rounded-full bg-green-400/90" />
        <span className="code-block-title">{title}</span>
      </div>
      <pre className="code-block-body">
        <code>{children}</code>
      </pre>
    </div>
  );
}
