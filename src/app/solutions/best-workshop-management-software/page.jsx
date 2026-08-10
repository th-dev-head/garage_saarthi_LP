import BestWorkshopManagementSoftware from "@/src/views/solutions/BestWorkshopManagementSoftware";

export const metadata = {
  title: "Best Workshop Management Software in India | GarageSaarthi",
  description:
    "Looking for the best workshop management software in India? Compare essential features and see how GarageSaarthi manages job cards, billing, inventory, CRM and more.",
  keywords:
    "best workshop management software, best workshop software, best workshop management software in India, best automotive workshop management software, best car workshop management software, compare workshop management software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/best-workshop-management-software/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Best Workshop Management Software for Modern Garages | GarageSaarthi",
    description:
      "See what to look for in workshop management software and explore how GarageSaarthi helps manage job cards, billing, inventory, customers, staff and workshop operations.",
    url: "https://www.garagesaarthi.com/solutions/best-workshop-management-software/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-best-workshop-management-software-og.webp",
        width: 1200,
        height: 630,
        alt: "Best Workshop Management Software in India - GarageSaarthi",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Workshop Management Software for Modern Garages | GarageSaarthi",
    description:
      "See what to look for in workshop management software and explore how GarageSaarthi helps manage job cards, billing, inventory, customers, staff and workshop operations.",
    images: [
      "https://www.garagesaarthi.com/garagesaarthi-best-workshop-management-software-og.webp",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.garagesaarthi.com/solutions/best-workshop-management-software",
      name: "Best Workshop Management Software in India | GarageSaarthi",
      description:
        "Looking for the best workshop management software in India? Compare essential features and see how GarageSaarthi manages job cards, billing, inventory, CRM and more.",
      url: "https://www.garagesaarthi.com/solutions/best-workshop-management-software/",
      about: "Best Workshop Management Software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id":
          "https://www.garagesaarthi.com/solutions/best-workshop-management-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.garagesaarthi.com/solutions/best-workshop-management-software#breadcrumb",
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
          name: "Best Workshop Management Software",
          item:
            "https://www.garagesaarthi.com/solutions/best-workshop-management-software",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which is the best workshop management software in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no single software that is automatically best for every workshop. The right choice depends on business type, required features, number of branches and daily workflow. Compare job cards, billing, inventory, customer records, service alerts, staff management, and reports.",
          },
        },
        {
          "@type": "Question",
          name: "What should I look for in workshop management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Key features include digital job sheets, GST billing & invoice series, spare parts stock tracking, customer & vehicle history, CRM leads, automated WhatsApp reminders, mechanic attendance & payroll, and financial reports.",
          },
        },
        {
          "@type": "Question",
          name: "Is GarageSaarthi suitable for small workshops?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GarageSaarthi provides simple job cards, billing, inventory, and mobile app access for small and independent workshops, with scalable options as your business expands.",
          },
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/solutions/best-workshop-management-software#software",
      "name": "Best Workshop Management Software in India | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Looking for the best workshop management software in India? Compare essential features and see how GarageSaarthi manages job cards, billing, inventory, CRM and more.",
      "url": "https://www.garagesaarthi.com/solutions/best-workshop-management-software"
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
      <BestWorkshopManagementSoftware />
    </>
  );
}
