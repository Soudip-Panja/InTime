import { useEffect } from "react";

const SEO = ({ title, description, keywords, ogTitle, ogDescription }) => {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // 2. Update Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description || "InTime Global is a leading enterprise technology partner. We empower organizations worldwide with elite SAP, Business Intelligence (BI) Analytics, and AI engineering services.");

    // 3. Update Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", keywords || "InTime Global, SAP integration, Business Intelligence, BI Analytics, AI engineering, digital transformation, IT consulting, enterprise technology");

    // 4. Update Open Graph & Twitter Cards
    const updateMetaTag = (property, value, attr = "property") => {
      if (!value) return;
      let tag = document.querySelector(`meta[${attr}="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    };

    updateMetaTag("og:title", ogTitle || title);
    updateMetaTag("og:description", ogDescription || description);
    updateMetaTag("twitter:title", ogTitle || title, "name");
    updateMetaTag("twitter:description", ogDescription || description, "name");

  }, [title, description, keywords, ogTitle, ogDescription]);

  return null;
};

export default SEO;
