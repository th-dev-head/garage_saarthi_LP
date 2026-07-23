import GarageFinanceManagementSoftware from "@/src/views/GarageFinanceManagementSoftware";

export const metadata = {
  title: "Garage Finance Management Software | GarageSaarthi",
  description:
    "Track garage income, expenses, payments, loans and financial reports with GarageSaarthi garage finance management software. Start a 7-day free trial.",
  keywords:
    "garage finance management software, garage finance software, workshop finance management software, workshop finance software, automobile workshop finance software, auto repair finance software, garage expense management software, garage income and expense software, garage accounting software, workshop accounting software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/garage-finance-management-software",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Finance Management Software | GarageSaarthi",
    description:
      "Organize garage income, expenses, payments, loans and financial records with GarageSaarthi's workshop finance management software.",
    url: "https://www.garagesaarthi.com/solutions/garage-finance-management-software",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage-finance-management-software-og.webp",
        width: 1200,
        height: 630,
        alt: "Garage Finance Management Software Dashboard",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Finance Management Software | GarageSaarthi",
    description:
      "Organize garage income, expenses, payments, loans and financial records with GarageSaarthi's workshop finance management software.",
    images: ["https://www.garagesaarthi.com/garage-finance-management-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/garage-finance-management-software",
      name: "Garage Finance Management Software | GarageSaarthi",
      description:
        "Track garage income, expenses, payments, loans and financial reports with GarageSaarthi garage finance management software. Start a 7-day free trial.",
      url: "https://www.garagesaarthi.com/solutions/garage-finance-management-software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/garage-finance-management-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/garage-finance-management-software#breadcrumb",
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
          name: "Garage Finance Management Software",
          item: "https://www.garagesaarthi.com/solutions/garage-finance-management-software",
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

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GarageFinanceManagementSoftware />
    </>
  );
}
