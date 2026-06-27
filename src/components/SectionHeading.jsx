export default function SectionHeading({ title, subtitle, className = '' }) {
  return (
    <div className={`mb-8 sm:mb-10 ${className}`}>
      <h2 className="text-lg font-semibold text-text-primary tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-1 text-sm text-text-tertiary">{subtitle}</p>
      )}
    </div>
  );
}
