import { getIcon } from '../utils/icons.jsx';

export default function TimelineItem({ event, isLast }) {
  return (
    <div className="flex gap-3 sm:gap-4">
      {/* Line + dot */}
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full border border-border bg-surface flex items-center justify-center shrink-0">
          {getIcon(event.icon, { size: 14, className: 'text-text-secondary' })}
        </div>
        {!isLast && <div className="w-px flex-1 bg-border mt-1" />}
      </div>

      {/* Content */}
      <div className={`pb-8 ${isLast ? 'pb-0' : ''}`}>
        <span className="text-[11px] text-text-tertiary font-mono">{event.date}</span>
        <h4 className="text-sm font-medium text-text-primary mt-0.5">{event.title}</h4>
        <p className="text-xs text-text-secondary mt-1 leading-relaxed">{event.description}</p>
      </div>
    </div>
  );
}
