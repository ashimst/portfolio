import { useEffect } from 'react';

export default function SEO({ title, description }) {
  useEffect(() => {
    const siteName = 'Ashim Shrestha';
    document.title = title ? `${title} — ${siteName}` : `${siteName} — AI Researcher`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
}
