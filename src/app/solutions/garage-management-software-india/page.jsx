import GarageManagementSoftwareIndia from "@/src/views/GarageManagementSoftwareIndia";

export const metadata = {
  title: "Garage Management Software India | GarageSaarthi",
  description:
    "GarageSaarthi is garage management software built for Indian workshops. Manage job cards, GST billing, inventory, customers, staff and finances. Start a 7-day free trial.",
  keywords:
    "garage management software india, garage software india, garage management system india, workshop management software india, workshop software india, garage erp software india, garage management app india",
  alternates: {
    canonical:
      "https://www.garagesaarthi.com/solutions/garage-management-software-india",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Management Software for Indian Workshops | GarageSaarthi",
    description:
      "Manage job cards, billing, inventory, customers, vehicles, mechanics, service alerts and finances with GarageSaarthi.",
    url:
      "https://www.garagesaarthi.com/solutions/garage-management-software-india",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-garage-management-software-india-og.webp",
        width: 1200,
        height: 630,
        alt: "Garage Management Software for Indian Workshops - GarageSaarthi",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Management Software for Indian Workshops | GarageSaarthi",
    description:
      "Manage job cards, billing, inventory, customers, vehicles, mechanics, service alerts and finances with GarageSaarthi.",
    images: [
      "https://www.garagesaarthi.com/garagesaarthi-garage-management-software-india-og.webp",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.garagesaarthi.com/solutions/garage-management-software-india",
      name: "Garage Management Software India | GarageSaarthi",
      description:
        "GarageSaarthi is garage management software built for Indian workshops. Manage job cards, GST billing, inventory, customers, staff and finances. Start a 7-day free trial.",
      url:
        "https://www.garagesaarthi.com/solutions/garage-management-software-india",
      about: "Garage Management Software India",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id":
          "https://www.garagesaarthi.com/solutions/garage-management-software-india#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.garagesaarthi.com/solutions/garage-management-software-india#breadcrumb",
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
          name: "Garage Management Software India",
          item:
            "https://www.garagesaarthi.com/solutions/garage-management-software-india",
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
        "GarageSaarthi is complete garage management software designed specifically for Indian workshops, supporting GST billing, CA access, digital job cards, spare parts inventory, mechanic attendance, and WhatsApp service reminders.",
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
          name: "What is garage management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Garage management software is a digital platform that manages vehicle repair job sheets, spare parts inventory, GST invoices, customer & vehicle records, mechanic staff payroll, and business reporting for automotive workshops.",
          },
        },
        {
          "@type": "Question",
          name: "Which garage management software is suitable for Indian workshops?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An Indian workshop requires GST billing, customizable invoice series, view-only CA access, WhatsApp service alert automations, and Android mobile app access. GarageSaarthi provides these features built specifically for Indian workshop workflows.",
          },
        },
        {
          "@type": "Question",
          name: "Can GarageSaarthi manage GST billing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GarageSaarthi supports GST-compliant invoice generation, custom billing series, tax breakdown calculations, and instant digital receipt sharing via WhatsApp.",
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
      <GarageManagementSoftwareIndia />
    </>
  );
}
