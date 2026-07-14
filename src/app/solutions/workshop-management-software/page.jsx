import WorkshopManagement from "@/src/views/WorkshopManagement";

export const metadata = {
  title: "Workshop Management Software in India | GarageSaarthi",
  description:
    "Manage job cards, inventory, customers, billing, staff and workshop operations with GarageSaarthi workshop management software. Start a 7-day free trial.",
  keywords:
    "workshop management software, workshop software, workshop management system, workshop management app, automobile workshop software, automotive workshop software, auto workshop software, digital workshop management, workshop management software India",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/workshop-management-software",
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Workshop Management Software for Automotive Workshops | GarageSaarthi",
    description:
      "Digitize and manage daily workshop operations with GarageSaarthi. Handle job cards, inventory, customers, staff, finance and service follow-ups from one platform.",
    url: "https://www.garagesaarthi.com/solutions/workshop-management-software",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Workshop Management Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workshop Management Software for Automotive Workshops | GarageSaarthi",
    description:
      "Digitize and manage daily workshop operations with GarageSaarthi. Handle job cards, inventory, customers, staff, finance and service follow-ups from one platform.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/workshop-management-software",
      name: "Workshop Management Software in India | GarageSaarthi",
      description:
        "Manage job cards, inventory, customers, billing, staff and workshop operations with GarageSaarthi workshop management software.",
      url: "https://www.garagesaarthi.com/solutions/workshop-management-software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/workshop-management-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/workshop-management-software#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.garagesaarthi.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Solutions",
          item: "https://www.garagesaarthi.com/solutions/workshop-management-software",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Workshop Management Software",
          item: "https://www.garagesaarthi.com/solutions/workshop-management-software",
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
        description: "7-day free trial. Monthly, quarterly and annual plans.",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is workshop management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Workshop management software is a digital platform that helps automobile workshop owners manage job cards, inventory, billing, staff, customers, and service follow-ups from one place.",
          },
        },
        {
          "@type": "Question",
          name: "Does GarageSaarthi offer a free trial?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, GarageSaarthi offers a 7-day free trial with full access to all features.",
          },
        },
      ],
    },
  ],
};

export default function WorkshopManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WorkshopManagement />
    </>
  );
}
