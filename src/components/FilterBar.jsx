export default function FilterBar({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-1.5 mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-3 py-1.5 text-xs rounded-md border transition-colors ${
            active === cat
              ? 'bg-accent text-surface border-accent'
              : 'bg-surface text-text-secondary border-border hover:border-border-strong hover:text-text-primary'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
