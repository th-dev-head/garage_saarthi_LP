import FleetWorkshopSoftware from "@/src/views/solutions/FleetWorkshopSoftware";

export const metadata = {
  title: "Fleet Workshop Management Software | GarageSaarthi",
  description:
    "Manage fleet workshop repairs, job cards, vehicle service records, inventory, staff and maintenance operations with GarageSaarthi fleet workshop software. Start a 7-day free trial.",
  keywords:
    "fleet workshop management software, fleet workshop software, fleet maintenance software, fleet repair software, fleet service management software, fleet management software, fleet service software, fleet repair management software, fleet maintenance management software, vehicle fleet maintenance software, commercial fleet maintenance software, fleet garage software, fleet workshop management system, workshop software for fleet management, fleet vehicle workshop software, fleet repair shop software, fleet maintenance management system, vehicle maintenance software for fleets",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/fleet-workshop-software/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Fleet Workshop Management Software | GarageSaarthi",
    description:
      "Manage fleet repairs, maintenance workflows, job cards, vehicle records, inventory and workshop operations from one platform.",
    url: "https://www.garagesaarthi.com/solutions/fleet-workshop-software/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-fleet-workshop-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Fleet Workshop Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fleet Workshop Management Software | GarageSaarthi",
    description:
      "Manage fleet repairs, maintenance workflows, job cards, vehicle records, inventory and workshop operations from one platform.",
    images: [
      "https://www.garagesaarthi.com/garagesaarthi-fleet-workshop-software-og.webp",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/fleet-workshop-software",
      name: "Fleet Workshop Management Software | GarageSaarthi",
      description:
        "Manage fleet workshop repairs, job cards, vehicle service records, inventory, staff and maintenance operations with GarageSaarthi fleet workshop software. Start a 7-day free trial.",
      url: "https://www.garagesaarthi.com/solutions/fleet-workshop-software/",
      about: "Fleet workshop management software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id":
          "https://www.garagesaarthi.com/solutions/fleet-workshop-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.garagesaarthi.com/solutions/fleet-workshop-software#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.garagesaarthi.com/",
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
          name: "Fleet Workshop Software",
          item: "https://www.garagesaarthi.com/solutions/fleet-workshop-software",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is fleet workshop management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fleet workshop management software is a digital system used to manage repair jobs, vehicle records, inventory, billing, customers, staff and daily workshop operations for a fleet of vehicles.",
          },
        },
        {
          "@type": "Question",
          name: "What can I manage with GarageSaarthi fleet workshop software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can manage the entire maintenance cycle — from creating repair job cards, vehicle service logs, and scheduled maintenance due lists, to parts stock inventory, mechanics payroll, and payment tracking.",
          },
        },
        {
          "@type": "Question",
          name: "Can GarageSaarthi manage fleet vehicle service records?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. It creates a centralized profile for every vehicle, showing past repair details, mechanics assigned, and spare parts used over time.",
          },
        },
        {
          "@type": "Question",
          name: "Can I create digital job cards for fleet vehicle repairs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can generate digital job cards to record maintenance logs, track repair statuses, and document parts assigned to work orders.",
          },
        },
        {
          "@type": "Question",
          name: "Does GarageSaarthi help manage fleet maintenance reminders?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can schedule periodic maintenance and trigger automated alerts or updates on WhatsApp to fleet contacts or vehicle managers.",
          },
        },
        {
          "@type": "Question",
          name: "Can I manage spare parts inventory for a fleet workshop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Inventory module lets you track spare parts levels, record consumption per vehicle job card, and handle counter sales for retail transactions.",
          },
        },
        {
          "@type": "Question",
          name: "Can GarageSaarthi manage workshop mechanics and employees?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can manage employee attendance, log leave applications, define custom user access permissions, and track payroll and performance-based commissions.",
          },
        },
        {
          "@type": "Question",
          name: "Can GarageSaarthi manage multiple fleet workshop branches?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The platform supports multiple workshop locations with centralized control, branch-wise stock mapping, and consolidated financial reports.",
          },
        },
        {
          "@type": "Question",
          name: "Is GarageSaarthi GPS fleet tracking software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. GarageSaarthi is focused on fleet workshop, vehicle repair, service and maintenance operations. It does not position itself as a GPS vehicle tracking or route management platform.",
          },
        },
        {
          "@type": "Question",
          name: "Is GarageSaarthi available on mobile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. It is available as an mobile apps on Google Play Store and Apple App Store and as a web platform accessible on any device.",
          },
        },
        {
          "@type": "Question",
          name: "Does GarageSaarthi offer a free trial?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GarageSaarthi offers a 7-day free trial with full access to all features to let you check if it fits your fleet maintenance operations.",
          },
        },
        {
          "@type": "Question",
          name: "How much does GarageSaarthi cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing options are clear and affordable. Please refer to our pricing page for subscription packages.",
          },
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/solutions/fleet-workshop-software#software",
      "name": "Fleet Workshop Management Software | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Manage fleet workshop repairs, job cards, vehicle service records, inventory, staff and maintenance operations with GarageSaarthi fleet workshop software. Start a 7-day free trial.",
      "url": "https://www.garagesaarthi.com/solutions/fleet-workshop-software"
    },
  ],
};

export default function FleetWorkshopSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FleetWorkshopSoftware />
    </>
  );
}
