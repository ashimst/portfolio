import { Link } from 'react-router-dom';
import { ArrowRight, Download, User, FileText, FolderOpen, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import ResearchCard from '../components/ResearchCard';
import ProjectCard from '../components/ProjectCard';
import TimelineItem from '../components/TimelineItem';
import NewsCard from '../components/NewsCard';
import ParticleField from '../components/ParticleField';
import LayoutGridLines from '../components/LayoutGridLines';
import { getIcon } from '../utils/icons.jsx';
import site from '../data/site.json';
import home from '../data/home.json';
import research from '../data/research.json';
import projects from '../data/projects.json';
import publications from '../data/publications.json';
import timeline from '../data/timeline.json';
import news from '../data/news.json';

const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

export default function Home() {
  return (
    <div className="relative w-full">
      <SEO description={site.shortBio} />
      <ParticleField />

      {/* ── Hero Wrapper with Grid Background ── */}
      <div className="relative w-full border-b border-border/60">
        <LayoutGridLines />
        <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-14 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-5"
          >
            <p className="text-[11px] sm:text-xs text-text-tertiary uppercase tracking-[0.25em] font-medium">
              {home.hero.greeting}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-[1.05]">
              {site.name}
            </h1>
            <p className="text-sm text-text-tertiary font-medium">{site.title} · {site.affiliation}</p>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xl">
              {home.hero.researchStatement}
            </p>
            <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2">
              <Link
                to={home.hero.primaryButton.path}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 text-xs font-medium bg-accent text-surface rounded-lg hover:bg-accent-hover transition-all duration-200 hover:shadow-lg hover:shadow-black/10 w-full sm:w-auto"
              >
                {home.hero.primaryButton.label}
                <ArrowRight size={13} />
              </Link>
              <a
                href={home.hero.secondaryButton.path}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 text-xs font-medium text-text-secondary border border-border rounded-lg hover:border-border-strong hover:text-text-primary transition-all duration-200 hover:shadow-md hover:shadow-black/5 w-full sm:w-auto"
              >
                <Download size={13} />
                {home.hero.secondaryButton.label}
              </a>
            </div>
          </motion.div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="hidden md:flex w-48 h-48 rounded-full border border-border bg-surface/80 backdrop-blur-sm items-center justify-center shrink-0 shadow-lg shadow-black/8 p-1"
          >
            {site.profileImage ? (
              <img
                src={site.profileImage}
                alt={site.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <User size={40} className="text-text-tertiary/30" />
            )}
          </motion.div>
        </div>

        {/* ── Quick Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 sm:mt-12"
        >
          {[
            { value: site.affiliation, label: 'Affiliation', icon: 'GraduationCap', isText: true },
            { value: projects.length, label: 'Projects', icon: 'FolderOpen' },
            { value: 'President', label: 'KUAIC', icon: 'Award', isText: true },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-4 flex items-center gap-3 min-h-22">
              <div className="w-9 h-9 rounded-lg bg-surface-alt/80 border border-border flex items-center justify-center shrink-0">
                {getIcon(stat.icon, { size: 16, className: 'text-text-tertiary' })}
              </div>
              <div>
                <div className={stat.isText ? 'text-sm font-semibold text-text-primary' : 'stat-value'}>
                  {stat.value}
                </div>
                <div className="stat-label mt-0.5">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
      </div>

      {/* ── Current Research Focus ── */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <AnimatedSection>
          <SectionHeading title={home.sectionTitles.researchFocus} />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {research.map((area, i) => (
            <AnimatedSection key={area.id} delay={i * 0.05}>
              <div className="glass-card p-5 space-y-3 h-full">
                <div className="w-9 h-9 rounded-lg bg-surface-alt/80 border border-border flex items-center justify-center">
                  {getIcon(area.icon, { size: 16, className: 'text-text-secondary' })}
                </div>
                <h3 className="text-sm font-semibold text-text-primary">{area.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{area.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-16 border-t border-border/60">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8 sm:mb-10">
            <SectionHeading title={home.sectionTitles.featuredProjects} className="mb-0" />
            <Link
              to="/projects"
              className="text-xs text-text-tertiary hover:text-text-primary transition-colors flex items-center gap-1"
            >
              All projects <ArrowRight size={12} />
            </Link>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProjects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.05}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Timeline + Latest News — Side-by-Side Grid ── */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-16 border-t border-border/60">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Timeline */}
          <div>
            <AnimatedSection>
              <SectionHeading title={home.sectionTitles.timeline} />
            </AnimatedSection>
            <AnimatedSection delay={0.05}>
              <div className="glass-card p-4 sm:p-6">
                {timeline.map((event, i) => (
                  <TimelineItem key={i} event={event} isLast={i === timeline.length - 1} />
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Latest News */}
          <div>
            <AnimatedSection>
              <SectionHeading title={home.sectionTitles.latestNews} />
            </AnimatedSection>
            <AnimatedSection delay={0.05}>
              <div className="glass-card p-4 sm:p-6">
                {news.slice(0, 6).map((item, i) => (
                  <NewsCard key={i} item={item} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
