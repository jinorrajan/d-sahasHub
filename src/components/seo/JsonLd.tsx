import React from "react";
import { siteConfig } from "@/config/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://dsahashub.com/#person",
        "name": siteConfig.name,
        "jobTitle": "Tactical Leadership Management Coach",
        "description": siteConfig.description,
        "worksFor": {
          "@id": "https://dsahashub.com/#organization",
        },
        "knowsAbout": [
          "Leadership Coaching",
          "Management Consulting",
          "Family Business Advisory",
          "Life Skills",
          "Reiki Healing",
        ],
        "award": "55-Hour Marathon Longest Life-Skills Webinar (Elite World Records)",
      },
      {
        "@type": "Organization",
        "@id": "https://dsahashub.com/#organization",
        "name": siteConfig.umbrella,
        "url": siteConfig.url,
        "logo": "https://dsahashub.com/images/client/logo/d-sahas-hub-logo.jpg",
        "founder": {
          "@id": "https://dsahashub.com/#person",
        },
        "slogan": siteConfig.tagline,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": siteConfig.contact.phone,
          "contactType": "customer service",
          "email": siteConfig.contact.primaryEmail,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://dsahashub.com/#service",
        "name": "Dr. P. V. Devi Seshadri - Leadership & Management Coaching",
        "provider": {
          "@id": "https://dsahashub.com/#person",
        },
        "areaServed": "Global",
        "serviceType": "Executive Coaching & Business Consulting",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

