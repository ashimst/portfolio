export function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatMonthYear(dateStr) {
  if (!dateStr) return '';
  if (dateStr === 'Present') return 'Present';
  const parts = dateStr.split('-');
  if (parts.length === 1) return parts[0];
  const date = new Date(parts[0], parseInt(parts[1]) - 1);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

export function groupBy(array, key) {
  return array.reduce((groups, item) => {
    const value = item[key];
    if (!groups[value]) groups[value] = [];
    groups[value].push(item);
    return groups;
  }, {});
}
