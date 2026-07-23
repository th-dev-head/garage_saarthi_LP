import VehicleServiceHistorySoftware from "@/src/views/VehicleServiceHistorySoftware";

export const metadata = {
  title: "Vehicle Service History Software for Garages | GarageSaarthi",
  description:
    "Track vehicle service, repair and maintenance records digitally with GarageSaarthi vehicle service history software for garages and workshops in India.",
  keywords:
    "vehicle service history software, vehicle service history management software, vehicle service record software, vehicle service records software, car service history software, car service record software, garage service history software, workshop service history software, service history management system, vehicle repair history software, vehicle history management software, service history software India",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/vehicle-service-history-software",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Vehicle Service History Software for Garages | GarageSaarthi",
    description:
      "Keep vehicle service, repair and maintenance records organized digitally with GarageSaarthi. Access customer vehicle history and past workshop records in one place.",
    url: "https://www.garagesaarthi.com/solutions/vehicle-service-history-software",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-vehicle-service-history-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Vehicle Service History Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vehicle Service History Software for Garages | GarageSaarthi",
    description:
      "Keep vehicle service, repair and maintenance records organized digitally with GarageSaarthi. Access customer vehicle history and past workshop records in one place.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-vehicle-service-history-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/vehicle-service-history-software",
      name: "Vehicle Service History Software for Garages | GarageSaarthi",
      description:
        "Track vehicle service, repair and maintenance records digitally with GarageSaarthi vehicle service history software for garages and workshops in India.",
      url: "https://www.garagesaarthi.com/solutions/vehicle-service-history-software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/vehicle-service-history-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/vehicle-service-history-software#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.garagesaarthi.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Solutions",
          item: "https://www.garagesaarthi.com/solutions",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Vehicle Service History Software",
          item: "https://www.garagesaarthi.com/solutions/vehicle-service-history-software",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/#software",
      name: "GarageSaarthi",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Android",
      description:
        "GarageSaarthi is an all-in-one workshop management software for automobile workshops in India.",
      url: "https://www.garagesaarthi.com/",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        description: "7-day free trial. Monthly, quarterly and annual plans.",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "1250",
        "bestRating": "5",
        "worstRating": "1",
      },
    },
  ],
};

export default function VehicleServiceHistorySoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VehicleServiceHistorySoftware />
    </>
  );
}
