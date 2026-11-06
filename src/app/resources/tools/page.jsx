import ToolsListView from "@/src/views/resources/ToolsListView";

export const metadata = {
  title: "Free Workshop Calculators & Financial Tools | GarageSaarthi",
  description:
    "Free calculators for auto garages and mechanics: compute profit margins, parts markups, technician hourly rates, and overhead absorption in seconds.",
  keywords:
    "workshop calculators, auto repair profit margin calculator, garage hourly rate calculator, mechanic markup tool, automotive repair math",
  alternates: {
    canonical: "https://www.garagesaarthi.com/resources/tools/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Free Workshop Calculators & Financial Tools | GarageSaarthi",
    description: "Free calculators for auto garages: profit margins, parts markup, and technician hourly rates.",
    url: "https://www.garagesaarthi.com/resources/tools/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Workshop Calculators",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Workshop Calculators & Financial Tools | GarageSaarthi",
    description: "Free calculators for auto garages: profit margins, parts markup, and technician hourly rates.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.garagesaarthi.com/resources/tools/#webpage",
      "url": "https://www.garagesaarthi.com/resources/tools/",
      "name": "Free Workshop Calculators & Financial Tools | GarageSaarthi",
      "description":
        "Free calculators for auto garages and mechanics: compute profit margins, parts markups, technician hourly rates, and overhead absorption.",
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
          "name": "Tools",
          "item": "https://www.garagesaarthi.com/resources/tools/",
        },
      ],
    },
  ],
};

export default function ToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolsListView />
    </>
  );
}

