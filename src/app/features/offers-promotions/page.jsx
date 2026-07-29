import GarageMarketingSoftware from "@/src/views/solutions/GarageMarketingSoftware";

export const metadata = {
  title: "Workshop Offers & Promotions Marketing Software | GarageSaarthi",
  description:
    "Design and distribute custom discount coupons, loyalty programs, and promotional campaigns via SMS and WhatsApp notifications with GarageSaarthi.",
  keywords:
    "garage marketing software, workshop promotions manager, auto repair marketing, discount coupons for workshop, customer loyalty program garage",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/offers-promotions",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Workshop Offers & Promotions Marketing Software | GarageSaarthi",
    description:
      "Design and distribute custom discount coupons, loyalty programs, and promotional campaigns via SMS and WhatsApp notifications with GarageSaarthi.",
    url: "https://www.garagesaarthi.com/features/offers-promotions",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-marketing-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Offers & Promotions Marketing",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workshop Offers & Promotions Marketing Software | GarageSaarthi",
    description:
      "Design and distribute custom discount coupons, loyalty programs, and promotional campaigns via SMS and WhatsApp notifications with GarageSaarthi.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-marketing-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/features/offers-promotions",
      "name": "Workshop Offers & Promotions Marketing Software | GarageSaarthi",
      "description": "Design and distribute custom discount coupons, loyalty programs, and promotional campaigns via SMS and WhatsApp notifications with GarageSaarthi.",
      "url": "https://www.garagesaarthi.com/features/offers-promotions",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/features/offers-promotions#software",
      "name": "Workshop Offers & Promotions Marketing Software | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Design and distribute custom discount coupons, loyalty programs, and promotional campaigns via SMS and WhatsApp notifications with GarageSaarthi.",
      "url": "https://www.garagesaarthi.com/features/offers-promotions"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/offers-promotions#breadcrumb",
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
          name: "Offers & Promotions",
          item: "https://www.garagesaarthi.com/features/offers-promotions",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I target promo campaigns to inactive customers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, you can filter customer lists to select vehicles that haven't visited in 90+ days and send targeted promo offers directly.",
          },
        },
      ],
    },
  ],
};

export default function OffersPromotionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GarageMarketingSoftware />
    </>
  );
}
