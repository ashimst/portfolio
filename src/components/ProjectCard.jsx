import { Link } from 'react-router-dom';
import { ArrowRight, FolderOpen } from 'lucide-react';
import StatusBadge from './StatusBadge';
import TagList from './TagList';

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block border border-border rounded-lg overflow-hidden hover:border-border-strong transition-all duration-200"
    >
      {/* Hero area */}
      <div className="aspect-video bg-surface-alt flex items-center justify-center border-b border-border">
        {project.heroImage ? (
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <FolderOpen size={28} className="text-text-tertiary/40" />
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs text-text-tertiary">{project.year}</span>
          <StatusBadge status={project.status} />
        </div>

        <h3 className="text-sm font-semibold text-text-primary leading-snug group-hover:underline underline-offset-2">
          {project.title}
        </h3>

        <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>

        <TagList tags={project.tags?.slice(0, 3)} />

        <div className="flex items-center gap-1 text-xs text-text-tertiary group-hover:text-text-primary transition-colors pt-1">
          <span>Read more</span>
          <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
