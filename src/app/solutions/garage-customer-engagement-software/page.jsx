import GarageCustomerEngagementSoftware from "@/src/views/GarageCustomerEngagementSoftware";

export const metadata = {
  title: "Garage Customer Engagement Software | GarageSaarthi",
  description:
    "Manage customer follow-ups, service reminders, notifications, offers and garage relationships with GarageSaarthi customer engagement software.",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/garage-customer-engagement-software",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Customer Engagement Software | GarageSaarthi",
    description:
      "Stay connected with garage customers through organized records, service alerts, follow-ups, CRM and offers with GarageSaarthi.",
    url: "https://www.garagesaarthi.com/solutions/garage-customer-engagement-software",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-customer-engagement-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Garage Customer Engagement Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Customer Engagement Software | GarageSaarthi",
    description:
      "Stay connected with garage customers through organized records, service alerts, follow-ups, CRM and offers with GarageSaarthi.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-customer-engagement-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/garage-customer-engagement-software",
      name: "Garage Customer Engagement Software | GarageSaarthi",
      description:
        "Manage customer follow-ups, service reminders, notifications, offers and garage relationships with GarageSaarthi customer engagement software.",
      url: "https://www.garagesaarthi.com/solutions/garage-customer-engagement-software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/garage-customer-engagement-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/garage-customer-engagement-software#breadcrumb",
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
          name: "Garage Customer Engagement Software",
          item: "https://www.garagesaarthi.com/solutions/garage-customer-engagement-software",
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

export default function GarageCustomerEngagementSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GarageCustomerEngagementSoftware />
    </>
  );
}
