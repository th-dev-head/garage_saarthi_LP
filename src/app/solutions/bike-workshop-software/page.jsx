import BikeWorkshopSoftware from "@/src/views/BikeWorkshopSoftware";

export const metadata = {
  title: "Bike Workshop Software in India | GarageSaarthi",
  description:
    "Manage bike job cards, spare parts, customers, service records, billing, staff and service alerts with GarageSaarthi bike workshop software. Try it free for 7 days.",
  keywords:
    "bike workshop software, bike garage software, bike workshop management software, bike repair shop software, bike service center software, bike service management software, bike workshop management system, bike garage management system, motorcycle workshop software, motorcycle garage software, motorcycle repair shop software, two wheeler workshop software, two wheeler garage software, two wheeler service center software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/bike-workshop-software",
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Bike Workshop Software for Two-Wheeler Garages | GarageSaarthi",
    description:
      "Manage bike service jobs, spare parts, customers, vehicles, staff, billing and service follow-ups with GarageSaarthi.",
    url: "https://www.garagesaarthi.com/solutions/bike-workshop-software",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-bike-workshop-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Bike Workshop Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bike Workshop Software for Two-Wheeler Garages | GarageSaarthi",
    description:
      "Manage bike service jobs, spare parts, customers, vehicles, staff, billing and service follow-ups with GarageSaarthi.",
    images: [
      "https://www.garagesaarthi.com/garagesaarthi-bike-workshop-software-og.webp",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/bike-workshop-software",
      name: "Bike Workshop Software in India | GarageSaarthi",
      description:
        "Manage bike job cards, spare parts, customers, service records, billing, staff and service alerts with GarageSaarthi bike workshop software. Try it free for 7 days.",
      url: "https://www.garagesaarthi.com/solutions/bike-workshop-software",
      about: "Bike workshop software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id":
          "https://www.garagesaarthi.com/solutions/bike-workshop-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.garagesaarthi.com/solutions/bike-workshop-software#breadcrumb",
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
          name: "Bike Workshop Software",
          item: "https://www.garagesaarthi.com/solutions/bike-workshop-software",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/#software",
      name: "GarageSaarthi",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Bike Workshop Software",
      operatingSystem: "Android, Web",
      url: "https://www.garagesaarthi.com/solutions/bike-workshop-software",
      description:
        "GarageSaarthi is a workshop management software for managing bike job cards, customer records, vehicle database, spare parts inventory, GST billing, and service follow-ups.",
      featureList: [
        "Digital Job Cards",
        "Customer Management",
        "Vehicle Management",
        "Service History",
        "Inventory Management",
        "Counter Sales",
        "GST Billing",
        "Payments",
        "Finance",
        "CRM",
        "Service Alerts",
        "Attendance",
        "Leave Management",
        "Payroll",
        "User Management",
        "Reports",
        "Dashboard",
        "CA Access",
        "Branch Management",
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        description: "7-Day Free Trial Available",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is bike workshop software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bike workshop software helps organize workshop operations such as job cards, customers, bikes, service records, inventory, billing, staff and reports.",
          },
        },
        {
          "@type": "Question",
          name: "Can GarageSaarthi be used by motorcycle garages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GarageSaarthi supports all types of motorcycle garages and two-wheeler workshops. You can manage spare parts inventory, generate bike job cards, track mechanic attendance and send customer notifications.",
          },
        },
        {
          "@type": "Question",
          name: "Is GarageSaarthi suitable for two-wheeler service centres?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. It is fully suitable for multi-bay two-wheeler service centres, allowing you to manage customer service records, bike repair status and technician assignments.",
          },
        },
        {
          "@type": "Question",
          name: "Can I create digital job cards for bike servicing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GarageSaarthi allows you to quickly generate digital job cards for two-wheelers on customer arrival, recording complaints and mechanic assignments.",
          },
        },
        {
          "@type": "Question",
          name: "Can I manage bike spare parts inventory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can log all parts, track stock levels, assign spares to active job cards, and manage direct counter sales.",
          },
        },
        {
          "@type": "Question",
          name: "Can GarageSaarthi maintain bike service history?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. It stores customer and bike history automatically, allowing you to see past repair details and parts used on returning visits.",
          },
        },
        {
          "@type": "Question",
          name: "Does GarageSaarthi support GST billing for bike workshops?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. It allows you to create GST-compliant bills and bills with multiple invoice series, saving financial summaries for easy tax computation.",
          },
        },
        {
          "@type": "Question",
          name: "Can I send bike service reminders on WhatsApp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GarageSaarthi has built-in service due notifications that you can trigger directly to customers on WhatsApp.",
          },
        },
        {
          "@type": "Question",
          name: "Can I manage mechanic attendance and payroll?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can track daily attendance, leaves, and calculate salaries and mechanic commissions based on active job card performance.",
          },
        },
        {
          "@type": "Question",
          name: "Can I manage multiple bike workshop branches?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GarageSaarthi features central multi-branch controls with role-based permissions and consolidated financial reporting.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a bike workshop management app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GarageSaarthi is available as an Android app on Google Play Store and as a web platform accessible on any device.",
          },
        },
        {
          "@type": "Question",
          name: "Is GarageSaarthi bike workshop software available in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. It is custom-made for workshops in India with INR pricing, WhatsApp integrations, and GST invoice settings.",
          },
        },
        {
          "@type": "Question",
          name: "Can I try GarageSaarthi before paying?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We offer a 7-day free trial with access to all features. You can sign up without any credit card.",
          },
        },
      ],
    },
  ],
};

export default function BikeWorkshopSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BikeWorkshopSoftware />
    </>
  );
}
