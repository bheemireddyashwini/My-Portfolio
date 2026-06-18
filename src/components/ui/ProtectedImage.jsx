"use client";

export default function ProtectedImage({ src, alt, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`protected-image ${className}`.trim()}
      draggable={false}
      loading="lazy"
      decoding="async"
      onContextMenu={(event) => event.preventDefault()}
      onDragStart={(event) => event.preventDefault()}
    />
  );
}
