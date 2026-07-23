import GarageAccountingSoftware from "@/src/views/GarageAccountingSoftware";

export const metadata = {
  title: "Garage Accounting Software for Workshops | GarageSaarthi",
  description:
    "Manage garage payments, expenses, finances, GST billing and records with GarageSaarthi garage accounting software. Give your CA access and start a free trial.",
  keywords:
    "garage accounting software, workshop accounting software, auto workshop accounting software, automobile workshop accounting software, car garage accounting software, accounting software for garage, accounting software for workshops, garage finance management software, garage expense management software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/garage-accounting-software",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Accounting Software for Automotive Workshops | GarageSaarthi",
    description:
      "Organize garage payments, expenses, financial records, GST billing and CA access with GarageSaarthi’s workshop-focused accounting and finance tools.",
    url: "https://www.garagesaarthi.com/solutions/garage-accounting-software",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage-accounting-software-og.webp",
        width: 1200,
        height: 630,
        alt: "Garage Accounting Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Accounting Software for Automotive Workshops | GarageSaarthi",
    description:
      "Organize garage payments, expenses, financial records, GST billing and CA access with GarageSaarthi’s workshop-focused accounting and finance tools.",
    images: ["https://www.garagesaarthi.com/garage-accounting-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/garage-accounting-software",
      name: "Garage Accounting Software for Workshops | GarageSaarthi",
      description:
        "Manage garage payments, expenses, finances, GST billing and records with GarageSaarthi garage accounting software. Give your CA access and start a free trial.",
      url: "https://www.garagesaarthi.com/solutions/garage-accounting-software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/garage-accounting-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/garage-accounting-software#breadcrumb",
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
          name: "Garage Accounting Software",
          item: "https://www.garagesaarthi.com/solutions/garage-accounting-software",
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
      <GarageAccountingSoftware />
    </>
  );
}
