import { getIcon } from '../utils/icons.jsx';

export default function ResearchCard({ area }) {
  return (
    <div className="border border-border rounded-lg p-5 space-y-3 hover:border-border-strong transition-colors">
      <div className="w-8 h-8 rounded-md bg-surface-alt border border-border flex items-center justify-center">
        {getIcon(area.icon, { size: 16, className: 'text-text-secondary' })}
      </div>
      <h3 className="text-sm font-semibold text-text-primary">{area.title}</h3>
      <p className="text-xs text-text-secondary leading-relaxed">{area.description}</p>
    </div>
  );
}
