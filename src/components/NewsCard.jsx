import { formatDate } from '../utils/helpers';

export default function NewsCard({ item }) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 py-3 border-b border-border last:border-b-0">
      <span className="text-[11px] text-text-tertiary font-mono whitespace-nowrap pt-0.5 w-20 shrink-0">
        {formatDate(item.date)}
      </span>
      <div>
        <h4 className="text-sm font-medium text-text-primary">{item.title}</h4>
        <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}
