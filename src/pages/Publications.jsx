import { useMemo } from 'react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import PublicationCard from '../components/PublicationCard';
import publications from '../data/publications.json';

const STATUS_ORDER = ['Published', 'Accepted', 'Submitted', 'Under Review', 'Working Paper', 'In Preparation'];

export default function Publications() {
  const grouped = useMemo(() => {
    const groups = {};
    publications.forEach((pub) => {
      if (!groups[pub.status]) groups[pub.status] = [];
      groups[pub.status].push(pub);
    });
    return groups;
  }, []);

  const orderedStatuses = STATUS_ORDER.filter((s) => grouped[s]);

  return (
    <>
      <SEO title="Publications" description="Research publications, papers, and manuscripts." />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-14 sm:pt-16 pb-16 sm:pb-20">
        <AnimatedSection>
          <SectionHeading
            title="Publications"
            subtitle={`${publications.length} publications and manuscripts.`}
          />
        </AnimatedSection>

        <div className="space-y-12">
          {orderedStatuses.map((status) => (
            <AnimatedSection key={status}>
              <div>
                <h3 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-4">
                  {status}
                </h3>
                <div className="space-y-3">
                  {grouped[status].map((pub) => (
                    <PublicationCard key={pub.id} publication={pub} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
