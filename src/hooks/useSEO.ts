import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export function useSEO({ title, description, canonical }: SEOProps) {
  useEffect(() => {
    // Update <title>
    document.title = title;

    // Update <meta name="description">
    let descTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', description);
    }

    // Update og:title
    let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    // Update og:description
    let ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Update twitter:title
    let twTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', title);

    // Update twitter:description
    let twDesc = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', description);

    // Update canonical URL
    if (canonical) {
      let canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (canonicalTag) canonicalTag.setAttribute('href', canonical);
    }
  }, [title, description, canonical]);
}
