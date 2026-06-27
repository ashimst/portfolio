import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { formatMonthYear } from '../utils/helpers';

export default function ExperienceCard({ experience }) {
  return (
    <div className="border border-border rounded-lg p-5 space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-text-primary">{experience.title}</h3>
          <p className="text-xs text-text-secondary mt-0.5">{experience.organization}</p>
        </div>
        <div className="sm:text-right shrink-0">
          <p className="text-[11px] text-text-tertiary font-mono">
            {formatMonthYear(experience.startDate)} — {formatMonthYear(experience.endDate)}
          </p>
          <p className="text-[11px] text-text-tertiary flex items-center justify-end gap-1 mt-0.5">
            <MapPin size={10} />
            {experience.location}
          </p>
        </div>
      </div>

      <p className="text-xs text-text-secondary leading-relaxed">{experience.description}</p>

      {experience.highlights && experience.highlights.length > 0 && (
        <ul className="space-y-1">
          {experience.highlights.map((highlight, i) => (
            <li key={i} className="text-xs text-text-secondary flex gap-2">
              <span className="text-text-tertiary shrink-0">·</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
