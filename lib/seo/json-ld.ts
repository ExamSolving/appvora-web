import { siteConfig } from "./site-config";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.png`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    department: [
      {
        "@type": "EducationalOrganization",
        name: `${siteConfig.name} - Computer Training Institute`,
        description:
          "Professional IT training programs in Flutter, Android, Web Development, React, Next.js, Java, Python, AI & Machine Learning, Full Stack Development and UI/UX Design with placement assistance.",
        url: `${siteConfig.url}/#training`,
      },
      {
        "@type": "Organization",
        name: `${siteConfig.name} - Software Development`,
        description:
          "Custom software development services including web, mobile (Android/iOS/Flutter), SaaS, ERP/CRM, AI solutions, and cloud engineering for startups, SMEs, and enterprises.",
        url: `${siteConfig.url}/#software-services`,
      },
    ],
  };
}
