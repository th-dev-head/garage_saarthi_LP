import CarDetailingSoftware from "@/src/views/solutions/CarDetailingSoftware";

export const metadata = {
  title: "Car Detailing Software for Detailing Shops | GarageSaarthi",
  description:
    "Manage detailing jobs, customers, vehicles, billing, inventory, staff and service follow-ups with GarageSaarthi car detailing software. Start a 7-day free trial.",
  keywords:
    "car detailing software, car detailing management software, detailing shop software, auto detailing software, automobile detailing software, vehicle detailing software, detailing workshop software, detailing garage software, detailing management system, car detailing system, detailing shop management software, auto detailing management software, detailing workshop management system, car detailing software India, detailing software India, detailing app, car detailing app",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/car-detailing-software/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Car Detailing Software for Modern Detailing Businesses | GarageSaarthi",
    description:
      "Manage detailing jobs, customers, vehicles, billing, inventory, staff and daily operations with GarageSaarthi.",
    url: "https://www.garagesaarthi.com/solutions/car-detailing-software/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-car-detailing-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Car Detailing Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Detailing Software for Modern Detailing Businesses | GarageSaarthi",
    description:
      "Manage detailing jobs, customers, vehicles, billing, inventory, staff and daily operations with GarageSaarthi.",
    images: [
      "https://www.garagesaarthi.com/garagesaarthi-car-detailing-software-og.webp",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/car-detailing-software",
      name: "Car Detailing Software for Detailing Shops | GarageSaarthi",
      description:
        "Manage detailing jobs, customers, vehicles, billing, inventory, staff and service follow-ups with GarageSaarthi car detailing software. Start a 7-day free trial.",
      url: "https://www.garagesaarthi.com/solutions/car-detailing-software/",
      about: "Car detailing software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id":
          "https://www.garagesaarthi.com/solutions/car-detailing-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.garagesaarthi.com/solutions/car-detailing-software#breadcrumb",
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
          name: "Car Detailing Software",
          item: "https://www.garagesaarthi.com/solutions/car-detailing-software",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is car detailing software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Car detailing software is a specialized business tool that helps detailing shops and studios manage daily operations such as job orders, customer records, vehicle database, coating and polishing inventory, staff attendance, invoicing and reminders.",
          },
        },
        {
          "@type": "Question",
          name: "Can GarageSaarthi be used by car detailing shops?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GarageSaarthi is an excellent fit for car detailing studios, auto detailing businesses, coating centers, and paint protection film (PPF) shops.",
          },
        },
        {
          "@type": "Question",
          name: "Can I manage detailing jobs with GarageSaarthi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can generate digital job cards to list detailing packages (interior wash, ceramic coating, paint polishing), assign tasks to specific detailers and monitor execution status.",
          },
        },
        {
          "@type": "Question",
          name: "Can I manage detailing customers and their vehicles?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can maintain complete profiles of clients, organize their vehicle logs, and track full service history for returning visits.",
          },
        },
        {
          "@type": "Question",
          name: "Does GarageSaarthi have CRM for detailing businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The built-in CRM Leads module allows detailing shops to log customer enquiries (e.g. ceramic coating quotes) and schedule follow-ups to close sales.",
          },
        },
        {
          "@type": "Question",
          name: "Can I create bills and invoices for detailing services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GarageSaarthi supports professional GST invoices, custom invoice numbering series, partial payments, and counter sales for retail detailing sprays or microfibers.",
          },
        },
        {
          "@type": "Question",
          name: "Can I manage detailing product inventory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can keep track of shampoos, waxes, polishing pads, ceramic solutions, and other consumables, deducting stock as they are assigned to job cards.",
          },
        },
        {
          "@type": "Question",
          name: "Can GarageSaarthi send service reminders to customers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. It supports custom automated alerts (like wash follow-ups or coating inspections) sent directly to customers on WhatsApp.",
          },
        },
        {
          "@type": "Question",
          name: "Can I manage detailing staff attendance and payroll?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can track daily staff attendance, leaves, mechanic/detailer payroll, and calculate job-based commissions.",
          },
        },
        {
          "@type": "Question",
          name: "Can I manage multiple detailing branches?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GarageSaarthi lets you manage multiple detailing studios with a centralized portal, branch-wise stock checks, and consolidated revenue reports.",
          },
        },
        {
          "@type": "Question",
          name: "Is GarageSaarthi available as a car detailing app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We offer an Android application on the Play Store, plus a web app accessible on any mobile, tablet or PC browser.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a free trial for GarageSaarthi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We offer a 7-day free trial with full access to all features to let you check if it fits your detailing shop operations.",
          },
        },
        {
          "@type": "Question",
          name: "How much does car detailing software cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing is structured in clear, affordable subscription packages. You can find detailed information on our pricing page.",
          },
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/solutions/car-detailing-software#software",
      "name": "Car Detailing Software for Detailing Shops | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Manage detailing jobs, customers, vehicles, billing, inventory, staff and service follow-ups with GarageSaarthi car detailing software. Start a 7-day free trial.",
      "url": "https://www.garagesaarthi.com/solutions/car-detailing-software"
    },
  ],
};

export default function CarDetailingSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CarDetailingSoftware />
    </>
  );
}
