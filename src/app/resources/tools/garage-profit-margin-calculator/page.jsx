import ProfitMarginCalculatorView from "@/src/views/resources/ProfitMarginCalculatorView";
import { TOOLS_DATA } from "@/src/data/resourcesData";

const tool = TOOLS_DATA.find((t) => t.slug === "garage-profit-margin-calculator");

export const metadata = {
  title: tool.seoTitle,
  description: tool.seoDescription,
  keywords: "workshop profit margin calculator, garage markup calculator, auto repair margin math, car service profitability formula",
  alternates: {
    canonical: `https://www.garagesaarthi.com/resources/tools/${tool.slug}/`,
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: tool.seoTitle,
    description: tool.seoDescription,
    url: `https://www.garagesaarthi.com/resources/tools/${tool.slug}/`,
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: tool.title,
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: tool.seoTitle,
    description: tool.seoDescription,
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": `https://www.garagesaarthi.com/resources/tools/${tool.slug}/#app`,
      "name": tool.title,
      "description": tool.description,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
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
        {
          "@type": "ListItem",
          "position": 4,
          "name": tool.shortTitle,
          "item": `https://www.garagesaarthi.com/resources/tools/${tool.slug}/`,
        },
      ],
    },
  ],
};

export default function ToolPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProfitMarginCalculatorView />
    </>
  );
}

