import TemplatesListView from "@/src/views/resources/TemplatesListView";

export const metadata = {
  title: "Free Workshop Templates, Job Cards & Checklists | GarageSaarthi",
  description:
    "Download free auto garage templates: 40-point vehicle inspection checklist, car repair job card format, and customer handover sheets.",
  keywords:
    "workshop templates, vehicle inspection checklist PDF, car repair job card format, garage work order excel, auto service intake sheet",
  alternates: {
    canonical: "https://www.garagesaarthi.com/resources/templates/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Free Workshop Templates, Job Cards & Checklists | GarageSaarthi",
    description: "Download free auto garage templates: 40-point vehicle inspection checklist, and job card formats.",
    url: "https://www.garagesaarthi.com/resources/templates/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Workshop Templates",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Workshop Templates, Job Cards & Checklists | GarageSaarthi",
    description: "Download free auto garage templates: 40-point vehicle inspection checklist, and job card formats.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.garagesaarthi.com/resources/templates/#webpage",
      "url": "https://www.garagesaarthi.com/resources/templates/",
      "name": "Free Workshop Templates, Job Cards & Checklists | GarageSaarthi",
      "description":
        "Download free auto garage templates: 40-point vehicle inspection checklist, car repair job card format, and customer handover sheets.",
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
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Templates",
          "item": "https://www.garagesaarthi.com/resources/templates/",
        },
      ],
    },
  ],
};

export default function TemplatesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TemplatesListView />
    </>
  );
}

