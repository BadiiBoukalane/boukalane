export default function StructuredData({ locale }: { locale: string }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Badii Boukalane",
    jobTitle: "Full-Stack Developer",
    description: "Professional full-stack developer specializing in React, Next.js, Node.js, and modern web technologies",
    url: `https://axon.dev/${locale}`,
    sameAs: [
      "https://github.com/your-username",
      "https://linkedin.com/in/your-profile",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Web Development",
      "Full-Stack Development",
      "E-commerce Development"
    ],
    worksFor: {
      "@type": "Organization",
      name: "AXON"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AXON - Badii Boukalane Portfolio",
    url: `https://axon.dev/${locale}`,
    description: "Professional web development services - websites, e-commerce, and complex applications",
    inLanguage: locale,
    author: {
      "@type": "Person",
      name: "Badii Boukalane"
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AXON Web Development",
    description: "Professional web development services including websites, e-commerce platforms, and complex web applications",
    provider: {
      "@type": "Person",
      name: "Badii Boukalane"
    },
    areaServed: ["Morocco", "Germany", "France", "Worldwide"],
    serviceType: ["Web Development", "E-commerce Development", "Full-Stack Development", "API Development"],
    priceRange: "€€",
    url: `https://axon.dev/${locale}`
  };

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "Web Development Services",
    description: "Professional web development packages from basic websites to complex applications",
    priceCurrency: "EUR",
    price: "650",
    priceValidUntil: "2025-12-31",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Person",
      name: "Badii Boukalane"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
    </>
  );
}
