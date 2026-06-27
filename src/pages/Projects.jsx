import { useState, useMemo } from 'react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';
import FilterBar from '../components/FilterBar';
import projects from '../data/projects.json';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category));
    // Also add tag-based categories
    projects.forEach((p) => p.tags?.forEach((t) => cats.add(t)));
    return ['All', ...Array.from(cats).sort()];
  }, []);

  const filtered = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter(
      (p) => p.category === filter || p.tags?.includes(filter)
    );
  }, [filter]);

  return (
    <>
      <SEO title="Projects" description="Research projects and implementations in AI, reinforcement learning, computer vision, and more." />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-14 sm:pt-16 pb-16 sm:pb-20">
        <AnimatedSection>
          <SectionHeading
            title="Projects"
            subtitle={`${projects.length} projects across research and implementation.`}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <FilterBar categories={categories} active={filter} onChange={setFilter} />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.04}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-sm text-text-tertiary text-center py-12">
            No projects found for "{filter}".
          </p>
        )}
      </section>
    </>
  );
}
