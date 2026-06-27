import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import TagList from './TagList';
import { formatDate } from '../utils/helpers';

export default function NoteCard({ note }) {
  return (
    <Link
      to={`/notes/${note.slug}`}
      className="group block border border-border rounded-lg p-5 space-y-3 hover:border-border-strong transition-colors"
    >
      <div className="flex items-center gap-2">
        <FileText size={14} className="text-text-tertiary" />
        <span className="text-[11px] text-text-tertiary font-mono">{formatDate(note.date)}</span>
      </div>

      <h3 className="text-sm font-semibold text-text-primary leading-snug group-hover:underline underline-offset-2">
        {note.title}
      </h3>

      <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
        {note.description}
      </p>

      <TagList tags={note.tags?.slice(0, 3)} />

      <div className="flex items-center gap-1 text-xs text-text-tertiary group-hover:text-text-primary transition-colors pt-1">
        <span>Read note</span>
        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
      </div>
    </Link>
  );
}
