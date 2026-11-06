import ResourcesHubView from "@/src/views/resources/ResourcesHubView";

export const metadata = {
  title: "Automotive Workshop Resources, Free Tools & Guides | GarageSaarthi",
  description:
    "Free practical guides, profit margin calculators, vehicle inspection checklists, and job card templates designed for auto repair garages and workshop managers.",
  keywords:
    "garage management resources, auto repair profit calculator, workshop job card template, vehicle inspection checklist, car repair business guides, garage billing guide",
  alternates: {
    canonical: "https://www.garagesaarthi.com/resources/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Automotive Workshop Resources, Free Tools & Guides | GarageSaarthi",
    description:
      "Free practical guides, profit margin calculators, vehicle inspection checklists, and job card templates designed for auto repair garages and workshop managers.",
    url: "https://www.garagesaarthi.com/resources/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Workshop Resources",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automotive Workshop Resources, Free Tools & Guides | GarageSaarthi",
    description:
      "Free practical guides, profit margin calculators, vehicle inspection checklists, and job card templates for modern garages.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/resources/#webpage",
      "url": "https://www.garagesaarthi.com/resources/",
      "name": "Automotive Workshop Resources, Free Tools & Guides | GarageSaarthi",
      "description":
        "Free practical guides, profit margin calculators, vehicle inspection checklists, and job card templates designed for auto repair garages and workshop managers.",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.garagesaarthi.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Resources",
          "item": "https://www.garagesaarthi.com/resources/",
        },
      ],
    },
  ],
};

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ResourcesHubView />
    </>
  );
}

