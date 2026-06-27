import { Link } from 'react-router-dom';
import site from '../data/site.json';
import socials from '../data/socials.json';
import { getIcon } from '../utils/icons.jsx';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Left */}
          <div className="space-y-1">
            <p className="text-sm text-text-primary font-medium">{site.name}</p>
            <p className="text-xs text-text-tertiary">{site.affiliation}</p>
            <p className="text-xs text-text-tertiary">
              © {year} {site.name}. All rights reserved.
            </p>
          </div>

          {/* Right — Social links */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-tertiary hover:text-text-primary transition-colors"
                aria-label={social.platform}
              >
                {getIcon(social.icon, { size: 16 })}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
