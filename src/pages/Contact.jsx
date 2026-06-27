import { Mail } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import { getIcon } from '../utils/icons.jsx';
import site from '../data/site.json';
import socials from '../data/socials.json';

export default function Contact() {
  return (
    <>
      <SEO title="Contact" description="Get in touch — email, social profiles, and academic links." />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-14 sm:pt-16 pb-16 sm:pb-20">
        <AnimatedSection>
          <SectionHeading
            title="Contact"
            subtitle="Feel free to reach out for collaborations, questions, or just to say hello."
          />
        </AnimatedSection>

        {/* Email */}
        <AnimatedSection delay={0.05}>
          <div className="border border-border rounded-lg p-4 sm:p-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-surface-alt border border-border flex items-center justify-center">
                <Mail size={16} className="text-text-secondary" />
              </div>
              <div>
                <p className="text-xs text-text-tertiary">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-text-primary hover:underline underline-offset-2"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Social / Academic Links */}
        <AnimatedSection delay={0.1}>
          <h3 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-4">Profiles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {socials
              .filter((s) => s.platform !== 'Email')
              .map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 sm:p-4 border border-border rounded-lg hover:border-border-strong transition-colors group"
                >
                  <div className="w-8 h-8 rounded-md bg-surface-alt border border-border flex items-center justify-center">
                    {getIcon(social.icon, { size: 14, className: 'text-text-secondary' })}
                  </div>
                  <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                    {social.platform}
                  </span>
                </a>
              ))}
          </div>
        </AnimatedSection>

        {/* Location */}
        <AnimatedSection delay={0.15}>
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-xs text-text-tertiary">
              Based in {site.location} · {site.affiliation}
            </p>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
