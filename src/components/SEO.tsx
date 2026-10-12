import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: string;
  ogImage?: string;
}

const BASE_URL = "https://www.bigbullinvestment.online";
const DEFAULT_IMAGE = `${BASE_URL}/Gallery/Image1.jpeg`;

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalPath = "",
  ogType = "website",
  ogImage = DEFAULT_IMAGE,
}) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper function to safely update or create meta tags
    const setMetaTag = (selector: string, attr: "name" | "property", key: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Primary Meta Tags
    setMetaTag('meta[name="description"]', "name", "description", description);
    if (keywords) {
      setMetaTag('meta[name="keywords"]', "name", "keywords", keywords);
    }

    // 3. Canonical Link Tag
    const fullCanonicalUrl = canonicalPath.startsWith("http") 
      ? canonicalPath 
      : `${BASE_URL}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`;

    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", fullCanonicalUrl);

    // 4. Open Graph Social Meta Tags
    setMetaTag('meta[property="og:title"]', "property", "og:title", title);
    setMetaTag('meta[property="og:description"]', "property", "og:description", description);
    setMetaTag('meta[property="og:url"]', "property", "og:url", fullCanonicalUrl);
    setMetaTag('meta[property="og:type"]', "property", "og:type", ogType);
    setMetaTag('meta[property="og:image"]', "property", "og:image", ogImage);

    // 5. Twitter Card Meta Tags
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMetaTag('meta[name="twitter:image"]', "name", "twitter:image", ogImage);

    // 6. Enforce Real Big Bull Favicon in Browser Tab across all Routes
    let linkFaviconSvg = document.querySelector('link[rel="icon"][type="image/svg+xml"]') as HTMLLinkElement | null;
    if (!linkFaviconSvg) {
      linkFaviconSvg = document.createElement("link");
      linkFaviconSvg.rel = "icon";
      linkFaviconSvg.type = "image/svg+xml";
      document.head.appendChild(linkFaviconSvg);
    }
    linkFaviconSvg.href = "/favicon.svg";

    let linkFaviconIco = document.querySelector('link[rel="icon"][type="image/x-icon"]') as HTMLLinkElement | null;
    if (!linkFaviconIco) {
      linkFaviconIco = document.createElement("link");
      linkFaviconIco.rel = "icon";
      linkFaviconIco.type = "image/x-icon";
      document.head.appendChild(linkFaviconIco);
    }
    linkFaviconIco.href = "/favicon.ico";
  }, [title, description, keywords, canonicalPath, ogType, ogImage]);

  return null;
};

export default SEO;
