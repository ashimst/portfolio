const statusStyles = {
  Active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Completed: 'bg-neutral-100 text-neutral-600 border-neutral-200',
  Paused: 'bg-amber-50 text-amber-700 border-amber-200',
  Published: 'bg-neutral-100 text-neutral-600 border-neutral-200',
  Submitted: 'bg-blue-50 text-blue-700 border-blue-200',
  'Under Review': 'bg-violet-50 text-violet-700 border-violet-200',
  Accepted: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Working Paper': 'bg-orange-50 text-orange-700 border-orange-200',
  'In Preparation': 'bg-amber-50 text-amber-700 border-amber-200',
};

export default function StatusBadge({ status }) {
  const style = statusStyles[status] || 'bg-neutral-100 text-neutral-600 border-neutral-200';

  return (
    <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded border ${style}`}>
      {status}
    </span>
  );
}
