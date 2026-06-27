import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, FileText, Download, FolderOpen } from 'lucide-react';
import { Github } from '../utils/icons.jsx';

import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';
import StatusBadge from '../components/StatusBadge';
import TagList from '../components/TagList';
import MarkdownRenderer from '../components/MarkdownRenderer';
import projects from '../data/projects.json';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
        <p className="text-sm text-text-tertiary">Project not found.</p>
        <Link to="/projects" className="text-xs text-text-secondary hover:text-text-primary mt-4 inline-block">
          ← Back to projects
        </Link>
      </div>
    );
  }

  const resources = [
    { label: 'GitHub', url: project.github, icon: Github },
    { label: 'Paper', url: project.paper, icon: FileText },
    { label: 'Website', url: project.website, icon: ExternalLink },
    { label: 'Poster', url: project.poster, icon: FileText },
    { label: 'Presentation', url: project.presentation, icon: ExternalLink },
    { label: 'Video', url: project.video, icon: ExternalLink },
  ].filter((r) => r.url);

  return (
    <>
      <SEO title={project.title} description={project.shortDescription} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 sm:pt-12 pb-16 sm:pb-20">
        {/* Back */}
        <AnimatedSection>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs text-text-tertiary hover:text-text-primary transition-colors mb-8"
          >
            <ArrowLeft size={12} />
            All projects
          </Link>
        </AnimatedSection>

        {/* Hero */}
        <AnimatedSection delay={0.05}>
          <div className="space-y-4 mb-10">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-xs text-text-tertiary font-mono">{project.year}</span>
              <StatusBadge status={project.status} />
              {project.category && (
                <span className="text-[11px] text-text-tertiary">{project.category}</span>
              )}
            </div>

            <h1 className="text-2xl font-bold text-text-primary tracking-tight">{project.title}</h1>

            {project.subtitle && (
              <p className="text-sm text-text-secondary">{project.subtitle}</p>
            )}

            <TagList tags={project.tags} />
          </div>
        </AnimatedSection>

        {/* Hero image */}
        <AnimatedSection delay={0.1}>
          <div className="aspect-[16/9] bg-surface-alt rounded-lg border border-border flex items-center justify-center mb-10">
            {project.heroImage ? (
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full rounded-lg object-cover"
              />
            ) : (
              <FolderOpen size={36} className="text-text-tertiary/30" />
            )}
          </div>
        </AnimatedSection>

        {/* Long description (Markdown) */}
        <AnimatedSection delay={0.15}>
          <MarkdownRenderer content={project.longDescription} />
        </AnimatedSection>

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <AnimatedSection delay={0.2}>
            <div className="mt-10 sm:mt-12 pt-8 border-t border-border">
              <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-[11px] text-text-secondary bg-surface-alt px-2.5 py-1 rounded border border-border">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Dataset */}
        {project.dataset && (
          <AnimatedSection delay={0.22}>
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">Dataset</h3>
              <p className="text-xs text-text-secondary">{project.dataset}</p>
            </div>
          </AnimatedSection>
        )}

        {/* Resources */}
        {resources.length > 0 && (
          <AnimatedSection delay={0.25}>
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-3">Resources</h3>
              <div className="flex flex-wrap gap-2">
                {resources.map((r) => (
                  <a
                    key={r.label}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-text-secondary border border-border rounded-md hover:border-border-strong hover:text-text-primary transition-colors"
                  >
                    <r.icon size={12} />
                    {r.label}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Downloads */}
        {project.downloads && project.downloads.length > 0 && (
          <AnimatedSection delay={0.28}>
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-3">Downloads</h3>
              <div className="space-y-2">
                {project.downloads.map((dl, i) => (
                  <a
                    key={i}
                    href={dl.url}
                    className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <Download size={12} />
                    {dl.label}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}
      </article>
    </>
  );
}
