import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceSchema {
  name: string;
  description: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  faqItems?: FAQItem[];
  serviceSchema?: ServiceSchema;
  canonical?: string;
}

const BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "New England Pavers & Stone",
  "telephone": "(617) 697-3456",
  "url": "https://www.newenglandpaversandstone.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Wakefield",
    "addressRegion": "MA",
    "postalCode": "01880",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.5065,
    "longitude": -71.0529
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "07:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": "87"
  },
  "areaServed": [
    "Wakefield, MA", "Melrose, MA", "Stoneham, MA", "Reading, MA", "Saugus, MA",
    "Lynnfield, MA", "Woburn, MA", "Winchester, MA", "Burlington, MA", "Medford, MA",
    "Malden, MA", "Arlington, MA", "Lexington, MA", "Belmont, MA", "Cambridge, MA",
    "Somerville, MA", "Peabody, MA", "Danvers, MA", "North Reading, MA", "Wilmington, MA",
    "Beverly, MA", "Salem, MA", "Marblehead, MA", "Newton, MA", "Brookline, MA"
  ],
  "image": "https://www.newenglandpaversandstone.com/og-image.jpg",
  "description": "Licensed masonry and hardscape contractor in Wakefield, MA serving Greater Boston since 2008. Patios, walls, walkways, driveways, outdoor living spaces. Free estimates.",
  "foundingDate": "2008",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 5,
    "maxValue": 15
  },
  "knowsAbout": [
    "Paver Patio Installation", "Retaining Wall Construction", "Walkway Installation",
    "Driveway Installation", "Outdoor Kitchen Construction", "Fire Pit Installation",
    "Stone Veneer Installation", "Chimney Repair", "Masonry Repair"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Masonry & Hardscape Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paver Patio Installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Retaining Wall Construction" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Walkway Installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Driveway Installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Outdoor Living Spaces" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fire Pit & Fireplace Installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stone Veneer Installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Chimney Repair & Rebuild" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hardscape & Masonry Repair" } }
    ]
  }
};

const SEOHead = ({ title, description, breadcrumbs, faqItems, serviceSchema, canonical }: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("og:locale", "en_US", true);
    setMeta("og:site_name", "New England Pavers & Stone", true);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // Remove old schema scripts
    document.querySelectorAll('script[data-seo-head]').forEach(el => el.remove());

    const addSchema = (data: object) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-head", "true");
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    };

    // LocalBusiness
    addSchema(BUSINESS_SCHEMA);

    // BreadcrumbList
    addSchema({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": b.name,
        "item": b.url
      }))
    });

    // FAQPage
    if (faqItems && faqItems.length > 0) {
      addSchema({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      });
    }

    // Service
    if (serviceSchema) {
      addSchema({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": serviceSchema.name,
        "description": serviceSchema.description,
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "New England Pavers & Stone",
          "telephone": "(617) 697-3456",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Wakefield",
            "addressRegion": "MA",
            "addressCountry": "US"
          }
        },
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 42.5065,
            "longitude": -71.0529
          },
          "geoRadius": "48280"
        }
      });
    }

    return () => {
      document.querySelectorAll('script[data-seo-head]').forEach(el => el.remove());
    };
  }, [title, description, breadcrumbs, faqItems, serviceSchema, canonical]);

  return null;
};

export default SEOHead;
