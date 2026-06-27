import { Download } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import ExperienceCard from '../components/ExperienceCard';
import EducationCard from '../components/EducationCard';
import site from '../data/site.json';
import experience from '../data/experience.json';
import education from '../data/education.json';
import research from '../data/research.json';

export default function CV() {
  return (
    <>
      <SEO title="CV" description="Curriculum Vitae — education, experience, research, and skills." />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-14 sm:pt-16 pb-16 sm:pb-20">
        <AnimatedSection>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-10">
            <SectionHeading title="Curriculum Vitae" className="mb-0" />
            <a
              href={site.resumeUrl}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-text-secondary border border-border rounded-md hover:border-border-strong hover:text-text-primary transition-colors"
            >
              <Download size={12} />
              Download PDF
            </a>
          </div>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection delay={0.05}>
          <div className="mb-12">
            <h3 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-4">Education</h3>
            <div className="space-y-3">
              {education.map((edu) => (
                <EducationCard key={edu.id} education={edu} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Experience */}
        <AnimatedSection delay={0.1}>
          <div className="mb-12">
            <h3 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-4">Experience</h3>
            <div className="space-y-3">
              {experience.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Research Interests */}
        <AnimatedSection delay={0.15}>
          <div className="mb-12">
            <h3 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-4">Research Interests</h3>
            <div className="flex flex-wrap gap-2">
              {research.map((area) => (
                <span
                  key={area.id}
                  className="text-xs text-text-secondary bg-surface-alt px-3 py-1.5 rounded border border-border"
                >
                  {area.title}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
