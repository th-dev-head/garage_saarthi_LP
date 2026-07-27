import CRMLeadManagementFeature from "@/src/views/features/CRMLeadManagementFeature";

export const metadata = {
  title: "Garage CRM & Lead Management Software | GarageSaarthi",
  description:
    "All-in-one garage CRM & lead management software for automotive workshops in India. Manage leads, automated WhatsApp follow-ups, service due reminders, and customer records.",
  keywords:
    "garage crm software, garage crm, garage customer management software, workshop crm software, workshop crm, automobile crm software, automotive crm software, auto repair crm software, auto workshop crm software, vehicle workshop crm software, car garage crm software, garage lead management software, garage customer follow up software, garage customer tracking software, garage customer database software, garage client management software, automotive customer management software, customer relationship management software for garage, workshop customer management software, mechanic customer management software, garage customer record software, garage customer history software, garage customer communication software, garage customer engagement software, workshop lead management software, vehicle owner management software, customer retention software for garages, crm software for car workshop, crm software for auto repair shop, crm for automobile workshop",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/crm",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage CRM & Lead Management Software | GarageSaarthi",
    description:
      "Manage leads, customer records, and follow-ups with GarageSaarthi CRM software built for garages and automotive workshops.",
    url: "https://www.garagesaarthi.com/features/crm",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Garage CRM & Lead Management Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage CRM & Lead Management Software | GarageSaarthi",
    description:
      "Automated lead tracking & WhatsApp customer follow-ups for Indian auto workshops.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/crm#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.garagesaarthi.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Features",
          item: "https://www.garagesaarthi.com/features",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "CRM & Lead Management",
          item: "https://www.garagesaarthi.com/features/crm",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is garage CRM software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Garage CRM (Customer Relationship Management) software is a platform that helps auto repair workshops manage customer contact records, track repair leads, automate WhatsApp follow-ups, and send service due reminders to increase customer retention.",
          },
        },
        {
          "@type": "Question",
          name: "How does garage lead management work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When a customer calls or visits your workshop for a repair inquiry, you can log their name, mobile number, vehicle details, and promised follow-up date. The system alerts your team when a follow-up is due so no lead is forgotten.",
          },
        },
        {
          "@type": "Question",
          name: "Can I send service reminders automatically on WhatsApp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! GarageSaarthi automatically tracks vehicle service intervals (e.g. 90 days or 5,000 km) and sends automated WhatsApp reminder alerts with booking links directly to vehicle owners.",
          },
        },
      ],
    },
  ],
};

export default function CRMLeadManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CRMLeadManagementFeature />
    </>
  );
}
