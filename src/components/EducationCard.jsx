import { GraduationCap, MapPin } from 'lucide-react';

export default function EducationCard({ education }) {
  return (
    <div className="border border-border rounded-lg p-5 space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-text-primary">{education.degree}</h3>
          <p className="text-xs text-text-secondary mt-0.5">{education.institution}</p>
        </div>
        <div className="sm:text-right shrink-0">
          <p className="text-[11px] text-text-tertiary font-mono">
            {education.startDate} — {education.endDate}
          </p>
          <p className="text-[11px] text-text-tertiary flex items-center justify-end gap-1 mt-0.5">
            <MapPin size={10} />
            {education.location}
          </p>
        </div>
      </div>

      {education.description && (
        <p className="text-xs text-text-secondary leading-relaxed">{education.description}</p>
      )}

      {education.coursework && education.coursework.length > 0 && (
        <div>
          <p className="text-[11px] text-text-tertiary font-medium mb-1.5">Relevant Coursework</p>
          <div className="flex flex-wrap gap-1.5">
            {education.coursework.map((course) => (
              <span
                key={course}
                className="text-[11px] text-text-tertiary bg-surface-alt px-2 py-0.5 rounded border border-border"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
