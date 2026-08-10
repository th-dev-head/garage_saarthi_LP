import AutomobileWorkshop from "@/src/views/solutions/AutomobileWorkshop";

export const metadata = {
  title: "Automobile Workshop Software in India | GarageSaarthi",
  description:
    "Manage job cards, billing, inventory, customers, vehicles, staff and service reminders with GarageSaarthi automobile workshop software. Start a 7-day free trial.",
  keywords:
    "automobile workshop software, automobile workshop management software, automobile workshop management system, software for automobile workshop, best automobile workshop software, automobile workshop software India, automobile workshop ERP software, digital automobile workshop software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/automobile-workshop-software/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Automobile Workshop Software for Modern Workshops | GarageSaarthi",
    description:
      "Manage automobile workshop jobs, inventory, customers, billing, staff and service follow-ups from one powerful GarageSaarthi platform.",
    url: "https://www.garagesaarthi.com/solutions/automobile-workshop-software/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Automobile Workshop Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automobile Workshop Software for Modern Workshops | GarageSaarthi",
    description:
      "Manage automobile workshop jobs, inventory, customers, billing, staff and service follow-ups from one powerful GarageSaarthi platform.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/automobile-workshop-software",
      name: "Automobile Workshop Software in India | GarageSaarthi",
      description:
        "Manage job cards, billing, inventory, customers, vehicles, staff and service reminders with GarageSaarthi automobile workshop software.",
      url: "https://www.garagesaarthi.com/solutions/automobile-workshop-software/",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/automobile-workshop-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/automobile-workshop-software#breadcrumb",
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
          name: "Automobile Workshop Software",
          item: "https://www.garagesaarthi.com/solutions/automobile-workshop-software",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is automobile workshop software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Automobile workshop software is a digital platform that helps automobile workshop owners manage job cards, inventory, billing, staff, customers, and service follow-ups from one place.",
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
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/solutions/automobile-workshop-software#software",
      "name": "Automobile Workshop Software in India | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Manage job cards, billing, inventory, customers, vehicles, staff and service reminders with GarageSaarthi automobile workshop software. Start a 7-day free trial.",
      "url": "https://www.garagesaarthi.com/solutions/automobile-workshop-software"
    },
  ],
};

export default function AutomobileWorkshopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AutomobileWorkshop />
    </>
  );
}
