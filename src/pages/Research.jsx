import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import ResearchCard from '../components/ResearchCard';
import { getIcon } from '../utils/icons.jsx';
import { ArrowRight } from 'lucide-react';
import research from '../data/research.json';
import projects from '../data/projects.json';
import notes from '../data/notes.json';

export default function Research() {
  return (
    <>
      <SEO title="Research" description="Research areas and interests in AI, reinforcement learning, computer vision, and graph neural networks." />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-14 sm:pt-16 pb-16 sm:pb-20">
        <AnimatedSection>
          <SectionHeading
            title="Research"
            subtitle="Areas of active investigation and interest."
          />
        </AnimatedSection>

        <div className="space-y-12">
          {research.map((area, i) => {
            const areaProjects = projects.filter((p) =>
              area.associatedProjects.includes(p.slug)
            );
            const areaNotes = notes.filter((n) =>
              area.associatedNotes.includes(n.slug)
            );

            return (
              <AnimatedSection key={area.id} delay={i * 0.05}>
                <div className="border border-border rounded-lg p-4 sm:p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-md bg-surface-alt border border-border flex items-center justify-center shrink-0">
                      {getIcon(area.icon, { size: 16, className: 'text-text-secondary' })}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text-primary">{area.title}</h3>
                      <p className="text-xs text-text-secondary mt-1 leading-relaxed">{area.description}</p>
                    </div>
                  </div>

                  {/* Associated projects */}
                  {areaProjects.length > 0 && (
                    <div className="pt-2 border-t border-border">
                      <p className="text-[11px] text-text-tertiary font-medium uppercase tracking-wider mb-2">Projects</p>
                      <div className="space-y-1.5">
                        {areaProjects.map((p) => (
                          <Link
                            key={p.slug}
                            to={`/projects/${p.slug}`}
                            className="flex items-center gap-2 text-xs text-text-secondary hover:text-text-primary transition-colors group"
                          >
                            <ArrowRight size={10} className="text-text-tertiary group-hover:translate-x-0.5 transition-transform" />
                            <span>{p.title}</span>
                            <span className="text-text-tertiary">({p.year})</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Associated notes */}
                  {areaNotes.length > 0 && (
                    <div className="pt-2 border-t border-border">
                      <p className="text-[11px] text-text-tertiary font-medium uppercase tracking-wider mb-2">Notes</p>
                      <div className="space-y-1.5">
                        {areaNotes.map((n) => (
                          <Link
                            key={n.slug}
                            to={`/notes/${n.slug}`}
                            className="flex items-center gap-2 text-xs text-text-secondary hover:text-text-primary transition-colors group"
                          >
                            <ArrowRight size={10} className="text-text-tertiary group-hover:translate-x-0.5 transition-transform" />
                            <span>{n.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>
    </>
  );
}
