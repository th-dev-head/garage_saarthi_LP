import VehicleServiceHistoryFeature from "@/src/views/features/VehicleServiceHistoryFeature";

export const metadata = {
  title: "Vehicle Service History Software for Garages & Workshops | GarageSaarthi",
  description:
    "Track vehicle service, repair, and maintenance records digitally with GarageSaarthi. Manage customer vehicle service history database files, Odometer logs, and details on cloud.",
  keywords:
    "vehicle service history software, vehicle service history management software, vehicle service record software, vehicle service records software, car service history software, car service record software, garage service history software, workshop service history software, service history management system, vehicle repair history software, vehicle history management software, service history software India, digital vehicle service records software, customer vehicle tracking software, cloud vehicle management software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/service-history",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Vehicle Service History Software for Garages & Workshops | GarageSaarthi",
    description:
      "Keep vehicle service, repair, and maintenance records organized digitally with GarageSaarthi. Access customer vehicle history and past workshop records in one place.",
    url: "https://www.garagesaarthi.com/features/service-history",
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
    title: "Vehicle Service History Software for Garages & Workshops | GarageSaarthi",
    description:
      "Keep vehicle service, repair, and maintenance records organized digitally with GarageSaarthi. Access customer vehicle history and past workshop records in one place.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-vehicle-service-history-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/service-history#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.garagesaarthi.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Features",
          item: "https://www.garagesaarthi.com/features",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Vehicle Service History",
          item: "https://www.garagesaarthi.com/features/service-history",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is vehicle service history software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vehicle service history software is a digital database system designed for auto repair shops and garages to store, organize, and search repair logs, spare parts replacement history, and invoice records.",
          },
        },
        {
          "@type": "Question",
          name: "Can I search for a vehicle's history by its registration number?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! The instant contact search lookup allows you to find any customer vehicle history in 2 seconds by typing its license registration plate number or owner's mobile number.",
          },
        },
      ],
    },
  ],
};

export default function VehicleServiceHistoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VehicleServiceHistoryFeature />
    </>
  );
}
