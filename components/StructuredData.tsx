export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://kualitek.com",
    name: "Kualitek - Alarmas Barcelona",
    alternateName: "Kualitek Sistemas de Seguridad",
    description:
      "Instalación profesional de alarmas, cámaras de seguridad y sistemas CCTV en Barcelona, Madrid y toda España. Más de 15 años de experiencia.",
    url: "https://kualitek.com",
    telephone: "+34-XXX-XXX-XXX",
    priceRange: "€€",
    image: "https://kualitek.com/logos/logoalarmasbarcelona.png",
    logo: "https://kualitek.com/logos/logoalarmasbarcelona.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressRegion: "Cataluña",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.3874,
      longitude: 2.1686,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Barcelona",
      },
      {
        "@type": "City",
        name: "Madrid",
      },
      {
        "@type": "Country",
        name: "España",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      // Agregar redes sociales cuando estén disponibles
      // "https://www.facebook.com/kualitek",
      // "https://www.instagram.com/kualitek",
      // "https://www.linkedin.com/company/kualitek",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Instalación de Alarmas",
        description:
          "Instalación profesional de sistemas de alarmas para hogares y negocios",
        category: "Seguridad",
      },
      {
        "@type": "Offer",
        name: "Instalación de Cámaras CCTV",
        description:
          "Sistemas de videovigilancia CCTV con cámaras IP/HD y acceso remoto",
        category: "Videovigilancia",
      },
      {
        "@type": "Offer",
        name: "Sistemas de Seguridad Integrados",
        description:
          "Soluciones completas de seguridad con alarmas, cámaras y sensores",
        category: "Seguridad Integral",
      },
    ],
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://kualitek.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Servicios",
        item: "https://kualitek.com#servicios",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Nosotros",
        item: "https://kualitek.com#nosotros",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contacto",
        item: "https://kualitek.com#contacto",
      },
    ],
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Instalación de Sistemas de Seguridad",
    provider: {
      "@type": "LocalBusiness",
      name: "Kualitek",
    },
    areaServed: {
      "@type": "Country",
      name: "España",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Seguridad",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Instalación de Cámaras de Seguridad CCTV",
            description:
              "Instalación profesional de sistemas de videovigilancia con cámaras IP, HD y acceso remoto 24/7",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Instalación de Alarmas",
            description:
              "Sistemas de alarmas para hogares, negocios y comunidades con monitoreo 24/7",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mantenimiento de Sistemas de Seguridad",
            description:
              "Servicio técnico y mantenimiento preventivo de sistemas CCTV y alarmas",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
    </>
  );
}
