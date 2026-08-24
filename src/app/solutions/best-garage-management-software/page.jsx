import BestGarageManagementSoftware from "@/src/views/solutions/BestGarageManagementSoftware";

export const metadata = {
  title: "Best Garage Management Software in India | GarageSaarthi",
  description:
    "Looking for the best garage management software in India? Compare essential features like job cards, billing, inventory, CRM, service reminders and reports.",
  keywords:
    "best garage management software, garage management software free, free garage management software, best free garage management software, best garage management software in india, best garage software, top garage management software, best garage management system, best garage management app, compare garage management software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/best-garage-management-software/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Best Garage Management Software in India | GarageSaarthi",
    description:
      "See what to look for when choosing garage management software and explore GarageSaarthi for job cards, billing, inventory, CRM, staff and workshop management.",
    url: "https://www.garagesaarthi.com/solutions/best-garage-management-software/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-best-garage-management-software-og.webp",
        width: 1200,
        height: 630,
        alt: "Best Garage Management Software in India - GarageSaarthi",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Garage Management Software in India | GarageSaarthi",
    description:
      "See what to look for when choosing garage management software and explore GarageSaarthi for job cards, billing, inventory, CRM, staff and workshop management.",
    images: [
      "https://www.garagesaarthi.com/garagesaarthi-best-garage-management-software-og.webp",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.garagesaarthi.com/solutions/best-garage-management-software",
      name: "Best Garage Management Software in India | GarageSaarthi",
      description:
        "Looking for the best garage management software in India? Compare essential features like job cards, billing, inventory, CRM, service reminders and reports.",
      url: "https://www.garagesaarthi.com/solutions/best-garage-management-software/",
      about: "Best Garage Management Software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id":
          "https://www.garagesaarthi.com/solutions/best-garage-management-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.garagesaarthi.com/solutions/best-garage-management-software#breadcrumb",
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
          name: "Best Garage Management Software",
          item:
            "https://www.garagesaarthi.com/solutions/best-garage-management-software",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which is the best garage management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best garage management software depends on your workshop's business type, number of branches, team size and required workflows. Garage owners should compare job cards, billing, GST support, inventory, CRM, service reminders, customer and vehicle records, staff management, reports, mobile access and pricing.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best garage management software in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When choosing garage management software in India, look for GST billing, localized workshop workflows, Android and iOS mobile app access, automated WhatsApp reminders, and multi-branch management capabilities. GarageSaarthi provides these features tailored for Indian automotive workshops.",
          },
        },
        {
          "@type": "Question",
          name: "What features should the best garage software have?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Essential features include digital job cards, GST invoicing, spare parts inventory tracking, customer and vehicle history management, CRM lead follow-ups, automated WhatsApp service reminders, mechanic attendance & payroll, and financial business reports.",
          },
        },
        {
          "@type": "Question",
          name: "Which garage management software is suitable for a small garage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A small garage needs simple job card creation, quick GST billing, customer and vehicle records, and mobile app access. GarageSaarthi offers an affordable, easy-to-use solution with a 7-day free trial that scales as the garage grows.",
          },
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/solutions/best-garage-management-software#software",
      "name": "Best Garage Management Software in India | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Looking for the best garage management software in India? Compare essential features like job cards, billing, inventory, CRM, service reminders and reports.",
      "url": "https://www.garagesaarthi.com/solutions/best-garage-management-software"
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
      <BestGarageManagementSoftware />
    </>
  );
}
