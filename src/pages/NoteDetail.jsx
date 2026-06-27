import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';
import TagList from '../components/TagList';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { formatDate } from '../utils/helpers';
import notes from '../data/notes.json';

export default function NoteDetail() {
  const { slug } = useParams();
  const note = notes.find((n) => n.slug === slug);

  if (!note) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
        <p className="text-sm text-text-tertiary">Note not found.</p>
        <Link to="/notes" className="text-xs text-text-secondary hover:text-text-primary mt-4 inline-block">
          ← Back to notes
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO title={note.title} description={note.description} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 sm:pt-12 pb-16 sm:pb-20">
        <AnimatedSection>
          <Link
            to="/notes"
            className="inline-flex items-center gap-1.5 text-xs text-text-tertiary hover:text-text-primary transition-colors mb-8"
          >
            <ArrowLeft size={12} />
            All notes
          </Link>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div className="space-y-3 mb-10">
            <span className="text-[11px] text-text-tertiary font-mono">{formatDate(note.date)}</span>
            <h1 className="text-2xl font-bold text-text-primary tracking-tight">{note.title}</h1>
            <p className="text-sm text-text-secondary">{note.description}</p>
            <TagList tags={note.tags} />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="border-t border-border pt-8">
            <MarkdownRenderer content={note.content} />
          </div>
        </AnimatedSection>
      </article>
    </>
  );
}
