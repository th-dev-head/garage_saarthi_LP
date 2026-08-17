import VehicleServiceHistoryFeature from "@/src/views/features/VehicleServiceHistoryFeature";

export const metadata = {
  title: "Garage Service History Tracking Software for Auto Repair Shops | GarageSaarthi",
  description:
    "Track vehicle service, repair, and maintenance records digitally with GarageSaarthi workshop software. Manage customer vehicle history databases, odometer logs, and details on cloud.",
  keywords:
    "garage service history software, vehicle repair history tracker, workshop service history software, customer vehicle tracking software, auto repair history system, car service record software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/service-history/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Service History Tracking Software for Auto Repair Shops",
    description:
      "Track customer vehicle service, repair, and maintenance records digitally with GarageSaarthi workshop software. Manage databases on cloud.",
    url: "https://www.garagesaarthi.com/features/service-history/",
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
    title: "Garage Service History Tracking Software for Auto Repair Shops",
    description:
      "Track customer vehicle service, repair, and maintenance records digitally with GarageSaarthi workshop software. Manage databases on cloud.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-vehicle-service-history-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/features/service-history",
      "name": "Garage Service History Tracking Software for Auto Repair Shops | GarageSaarthi",
      "description": "Track vehicle service, repair, and maintenance records digitally with GarageSaarthi workshop software. Manage customer vehicle history databases, odometer logs, and details on cloud.",
      "url": "https://www.garagesaarthi.com/features/service-history",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/features/service-history#software",
      "name": "Garage Service History Tracking Software for Auto Repair Shops | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Track vehicle service, repair, and maintenance records digitally with GarageSaarthi workshop software. Manage customer vehicle history databases, odometer logs, and details on cloud.",
      "url": "https://www.garagesaarthi.com/features/service-history"
    },
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
