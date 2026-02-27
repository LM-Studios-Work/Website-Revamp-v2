import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
}

export const DEFAULT_TITLE = "Web Design Midrand & Johannesburg | LM Studios";
export const DEFAULT_DESCRIPTION =
  "LM Studios builds affordable, SEO-optimized websites and automated booking systems for South African businesses. Based in Midrand, Gauteng. Get found on Google and start closing more leads.";
export const DEFAULT_URL = "https://lmstudios.co.za/";

function setMetaContent(selector: string, content: string) {
  const el = document.querySelector<HTMLMetaElement>(selector);
  if (el) el.setAttribute("content", content);
}

export const usePageMeta = ({
  title,
  description,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogUrl,
}: PageMeta) => {
  useEffect(() => {
    document.title = title;
    setMetaContent('meta[name="description"]', description);

    // Open Graph
    setMetaContent('meta[property="og:title"]', ogTitle ?? title);
    setMetaContent('meta[property="og:description"]', ogDescription ?? description);
    if (ogUrl ?? canonicalUrl) {
      setMetaContent('meta[property="og:url"]', (ogUrl ?? canonicalUrl)!);
    }

    // Twitter Card
    setMetaContent('meta[name="twitter:title"]', ogTitle ?? title);
    setMetaContent('meta[name="twitter:description"]', ogDescription ?? description);

    // Canonical
    if (canonicalUrl) {
      const link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (link) link.setAttribute("href", canonicalUrl);
    }

    return () => {
      document.title = DEFAULT_TITLE;
      setMetaContent('meta[name="description"]', DEFAULT_DESCRIPTION);
      setMetaContent('meta[property="og:title"]', DEFAULT_TITLE);
      setMetaContent('meta[property="og:description"]', DEFAULT_DESCRIPTION);
      setMetaContent('meta[property="og:url"]', DEFAULT_URL);
      setMetaContent('meta[name="twitter:title"]', DEFAULT_TITLE);
      setMetaContent('meta[name="twitter:description"]', DEFAULT_DESCRIPTION);
      const link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (link) link.setAttribute("href", DEFAULT_URL);
    };
  }, [title, description, canonicalUrl, ogTitle, ogDescription, ogUrl]);
};
