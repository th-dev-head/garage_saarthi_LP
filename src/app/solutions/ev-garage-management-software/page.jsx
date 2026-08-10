import EVGarageSoftware from "@/src/views/solutions/EVGarageSoftware";

export const metadata = {
  title: "EV Garage Management Software in India | GarageSaarthi",
  description:
    "Manage EV job cards, inventory, customers, vehicles, billing, staff and service alerts with GarageSaarthi EV garage management software. Start a 7-day free trial.",
  keywords:
    "EV Garage Management Software, EV Workshop Management Software, Electric Vehicle Garage Management Software, Electric Vehicle Workshop Management Software, EV Repair Shop Software, EV Workshop Software, EV Garage Software, EV Service Center Management Software, EV Service Station Software, EV Repair Workshop Software, EV Service Management Software, EV Workshop ERP Software, EV Garage ERP Software, EV Garage CRM Software, EV Workshop CRM",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/ev-garage-management-software/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "EV Garage Management Software for Modern EV Workshops | GarageSaarthi",
    description:
      "Manage your EV workshop operations with GarageSaarthi. Handle job cards, inventory, customers, vehicles, staff, finance and service alerts from one platform.",
    url: "https://www.garagesaarthi.com/solutions/ev-garage-management-software/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-ev-garage-management-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi EV Garage Management Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "EV Garage Management Software for Modern EV Workshops | GarageSaarthi",
    description:
      "Manage your EV workshop operations with GarageSaarthi. Handle job cards, inventory, customers, vehicles, staff, finance and service alerts from one platform.",
    images: [
      "https://www.garagesaarthi.com/garagesaarthi-ev-garage-management-software-og.webp",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/ev-garage-management-software",
      name: "EV Garage Management Software in India | GarageSaarthi",
      description:
        "Manage EV job cards, inventory, customers, vehicles, billing, staff and service alerts with GarageSaarthi EV garage management software. Start a 7-day free trial.",
      url: "https://www.garagesaarthi.com/solutions/ev-garage-management-software/",
      about: "EV garage management software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id":
          "https://www.garagesaarthi.com/solutions/ev-garage-management-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.garagesaarthi.com/solutions/ev-garage-management-software#breadcrumb",
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
          name: "EV Garage Management Software",
          item: "https://www.garagesaarthi.com/solutions/ev-garage-management-software",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is EV garage management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EV garage management software is a digital system that helps electric vehicle workshops manage operational processes such as job cards, customers, vehicle records, inventory, billing, staff and service follow-ups.",
          },
        },
        {
          "@type": "Question",
          name: "Can GarageSaarthi be used by EV workshops?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GarageSaarthi supports the workflows of EV workshops and electric vehicle service centres, allowing you to manage customer vehicles, job cards, parts stock, billing, and staff operations.",
          },
        },
        {
          "@type": "Question",
          name: "Can I create digital job cards for EV service jobs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GarageSaarthi allows you to create digital job cards for electric scooters, bikes, and cars, listing general service tasks, electrical checks, or battery installations.",
          },
        },
        {
          "@type": "Question",
          name: "Can I manage EV customer and vehicle records?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can store complete profiles of EV owners, details of their vehicle makes and models, and review service histories automatically.",
          },
        },
        {
          "@type": "Question",
          name: "Does GarageSaarthi support EV workshop inventory management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can manage spare parts, consumables, charging accessories, and other products in stock, tracking them from checkout to customer billing.",
          },
        },
        {
          "@type": "Question",
          name: "Can I create GST bills for my EV workshop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GarageSaarthi allows you to generate GST-compliant billing, set custom invoice prefixes, log payments, and track workshop expenses.",
          },
        },
        {
          "@type": "Question",
          name: "Can GarageSaarthi send EV service reminders on WhatsApp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. It supports custom service due reminders that you can send directly to customer phones via WhatsApp.",
          },
        },
        {
          "@type": "Question",
          name: "Does GarageSaarthi include CRM for EV workshops?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. It has a Leads module where you can record enquiries from EV clients and schedule follow-ups to convert them.",
          },
        },
        {
          "@type": "Question",
          name: "Can I manage EV workshop employees?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. It features mechanic tracking, daily attendance, leave records, salary computations, and custom permissions for staff roles.",
          },
        },
        {
          "@type": "Question",
          name: "Can I manage multiple EV workshop branches?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The platform provides multi-branch controls so you can manage inventory and view centralized sales reports for all locations.",
          },
        },
        {
          "@type": "Question",
          name: "Is GarageSaarthi available as an EV workshop app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. It is accessible on computers through a web browser and offers a native Android app on Google Play Store.",
          },
        },
        {
          "@type": "Question",
          name: "Does GarageSaarthi diagnose EV batteries or BMS faults?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. GarageSaarthi is workshop management software designed to help manage garage operations such as job cards, customers, vehicles, inventory, billing, staff, CRM, service alerts and reports. EV diagnostics and battery or BMS fault scanning require dedicated diagnostic equipment and tools.",
          },
        },
        {
          "@type": "Question",
          name: "Does GarageSaarthi offer a free trial for EV garages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can test all features of GarageSaarthi for 7 days with our free trial. No credit card is required to register.",
          },
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/solutions/ev-garage-management-software#software",
      "name": "EV Garage Management Software in India | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Manage EV job cards, inventory, customers, vehicles, billing, staff and service alerts with GarageSaarthi EV garage management software. Start a 7-day free trial.",
      "url": "https://www.garagesaarthi.com/solutions/ev-garage-management-software"
    },
  ],
};

export default function EVGarageSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EVGarageSoftware />
    </>
  );
}
