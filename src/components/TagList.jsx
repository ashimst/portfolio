export default function TagList({ tags, className = '' }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-[11px] text-text-tertiary bg-surface-alt px-2 py-0.5 rounded border border-border"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
