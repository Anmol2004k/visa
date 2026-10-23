import React, { useEffect } from 'react';
import { PageId } from '../types';
import { getDynamicSeoData } from '../utils/seoStructuredData';

interface SEOHeadProps {
  activePage: PageId;
  selectedCountryId?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ activePage, selectedCountryId }) => {
  useEffect(() => {
    const seoData = getDynamicSeoData(activePage, selectedCountryId);

    // 1. Update Document Title
    document.title = seoData.title;

    // 2. Helper to set or create meta tag
    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let meta = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attributeName, attributeValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Helper to set canonical URL
    const setCanonical = (url: string) => {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    };

    // 3. Update Standard Meta Tags & Directives
    setMetaTag('name', 'description', seoData.description);
    setMetaTag('name', 'keywords', seoData.keywords);
    setMetaTag('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setCanonical(seoData.canonicalUrl);

    // 4. Update OpenGraph & Twitter Tags
    setMetaTag('property', 'og:title', seoData.title);
    setMetaTag('property', 'og:description', seoData.description);
    setMetaTag('property', 'og:url', seoData.canonicalUrl);
    setMetaTag('property', 'og:site_name', 'JSR World Visas');
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', seoData.title);
    setMetaTag('name', 'twitter:description', seoData.description);

    // 5. Update Dynamic JSON-LD Structured Data Script
    const SCRIPT_ID = 'dynamic-seo-jsonld';
    let scriptTag = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = SCRIPT_ID;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    // Embed combined graph schema
    const structuredDataGraph = {
      '@context': 'https://schema.org',
      '@graph': seoData.jsonLd
    };
    scriptTag.textContent = JSON.stringify(structuredDataGraph, null, 2);

    return () => {
      // Cleanup is optional as next render will update textContent
    };
  }, [activePage, selectedCountryId]);

  return null;
};
