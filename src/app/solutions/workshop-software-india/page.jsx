import WorkshopSoftwareIndia from "@/src/views/WorkshopSoftwareIndia";

export const metadata = {
  title: "Workshop Software India | GarageSaarthi",
  description:
    "Manage job cards, GST billing, inventory, customers, vehicles, staff and service reminders with GarageSaarthi workshop software in India. Start a 7-day free trial.",
  keywords:
    "workshop software india, workshop management software india, workshop software for automobile workshops in india, car workshop software india, bike workshop software india, auto workshop software india",
  alternates: {
    canonical:
      "https://www.garagesaarthi.com/solutions/workshop-software-india",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Workshop Software for Automobile Workshops in India | GarageSaarthi",
    description:
      "Manage job cards, GST billing, inventory, customer history, staff payroll, and service reminders with GarageSaarthi.",
    url:
      "https://www.garagesaarthi.com/solutions/workshop-software-india",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-workshop-software-india-og.webp",
        width: 1200,
        height: 630,
        alt: "Workshop Software India - GarageSaarthi",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workshop Software for Automobile Workshops in India | GarageSaarthi",
    description:
      "Manage job cards, GST billing, inventory, customer history, staff payroll, and service reminders with GarageSaarthi.",
    images: [
      "https://www.garagesaarthi.com/garagesaarthi-workshop-software-india-og.webp",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.garagesaarthi.com/solutions/workshop-software-india",
      name: "Workshop Software India | GarageSaarthi",
      description:
        "Manage job cards, GST billing, inventory, customers, vehicles, staff and service reminders with GarageSaarthi workshop software in India. Start a 7-day free trial.",
      url:
        "https://www.garagesaarthi.com/solutions/workshop-software-india",
      about: "Workshop Software India",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id":
          "https://www.garagesaarthi.com/solutions/workshop-software-india#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.garagesaarthi.com/solutions/workshop-software-india#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.garagesaarthi.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Solutions",
          item: "https://www.garagesaarthi.com/solutions",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Workshop Software India",
          item:
            "https://www.garagesaarthi.com/solutions/workshop-software-india",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/#software",
      name: "GarageSaarthi",
      operatingSystem: "Web, Android",
      applicationCategory: "BusinessApplication",
      description:
        "GarageSaarthi is complete workshop software built for Indian automobile workshops, managing job cards, GST billing, spare parts inventory, CRM, staff attendance & payroll, and service reminders.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        description: "7-Day Free Trial Available",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "1250",
        "bestRating": "5",
        "worstRating": "1",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is workshop software in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Workshop software in India is a digital management system that helps automobile workshops handle job cards, spare parts inventory, GST billing, customer & vehicle service histories, staff payroll, and service alerts.",
          },
        },
        {
          "@type": "Question",
          name: "How does GarageSaarthi help Indian workshops?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GarageSaarthi replaces paper job sheets, manual registers, and scattered Excel sheets with one unified web and mobile platform built for Indian workshop operations.",
          },
        },
        {
          "@type": "Question",
          name: "Does GarageSaarthi support GST billing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GarageSaarthi generates GST-compliant invoices with custom numbering series, labor rates, spare parts breakdowns, and WhatsApp invoice sharing.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WorkshopSoftwareIndia />
    </>
  );
}
