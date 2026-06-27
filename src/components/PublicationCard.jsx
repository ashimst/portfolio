import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Copy, Check } from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function PublicationCard({ publication }) {
  const [showAbstract, setShowAbstract] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyBibtex = (e) => {
    e.stopPropagation();
    if (publication.bibtex) {
      navigator.clipboard.writeText(publication.bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="border border-border rounded-lg p-5 space-y-3">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <h3 className="text-sm font-semibold text-text-primary leading-snug flex-1">
          {publication.title}
        </h3>
        <StatusBadge status={publication.status} />
      </div>

      {/* Authors */}
      <p className="text-xs text-text-secondary">
        {publication.authors.join(', ')}
      </p>

      {/* Venue + Year */}
      <p className="text-xs text-text-tertiary">
        {publication.venue && <span className="italic">{publication.venue}</span>}
        {publication.venue && publication.year && <span> · </span>}
        {publication.year && <span>{publication.year}</span>}
      </p>

      {/* Abstract toggle */}
      {publication.abstract && (
        <div>
          <button
            onClick={() => setShowAbstract(!showAbstract)}
            className="flex items-center gap-1 text-xs text-text-tertiary hover:text-text-primary transition-colors"
          >
            {showAbstract ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            <span>Abstract</span>
          </button>
          {showAbstract && (
            <p className="mt-2 text-xs text-text-secondary leading-relaxed border-l-2 border-border pl-3">
              {publication.abstract}
            </p>
          )}
        </div>
      )}

      {/* Action links */}
      <div className="flex flex-wrap items-center gap-3 pt-1">
        {publication.pdf && (
          <a
            href={publication.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-text-tertiary hover:text-text-primary transition-colors"
          >
            <ExternalLink size={11} />
            <span>PDF</span>
          </a>
        )}
        {publication.code && (
          <a
            href={publication.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-text-tertiary hover:text-text-primary transition-colors"
          >
            <ExternalLink size={11} />
            <span>Code</span>
          </a>
        )}
        {publication.doi && (
          <a
            href={`https://doi.org/${publication.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-text-tertiary hover:text-text-primary transition-colors"
          >
            <ExternalLink size={11} />
            <span>DOI</span>
          </a>
        )}
        {publication.bibtex && (
          <button
            onClick={handleCopyBibtex}
            className="flex items-center gap-1 text-xs text-text-tertiary hover:text-text-primary transition-colors"
          >
            {copied ? <Check size={11} /> : <Copy size={11} />}
            <span>{copied ? 'Copied' : 'BibTeX'}</span>
          </button>
        )}
      </div>
    </div>
  );
}
