import ServiceRemindersFeature from "@/src/views/features/ServiceRemindersFeature";

export const metadata = {
  title: "Automated Garage Service Reminders & WhatsApp Alerts | GarageSaarthi",
  description:
    "Never miss a vehicle maintenance due date. Automatically send WhatsApp service reminders, oil change due alerts, and booking links with GarageSaarthi software.",
  keywords:
    "garage service reminder software, vehicle service reminder software, automated service reminders, car service due alerts, bike service reminder software, workshop service reminders, WhatsApp service reminders India, customer retention software for garages, vehicle maintenance alerts",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/service-reminders/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Automated Garage Service Reminders & WhatsApp Alerts | GarageSaarthi",
    description:
      "Never miss a vehicle maintenance due date. Automatically send WhatsApp service reminders, oil change due alerts, and booking links with GarageSaarthi software.",
    url: "https://www.garagesaarthi.com/features/service-reminders/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-service-reminders-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Automated Service Reminders Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automated Garage Service Reminders & WhatsApp Alerts | GarageSaarthi",
    description:
      "Never miss a vehicle maintenance due date. Automatically send WhatsApp service reminders, oil change due alerts, and booking links with GarageSaarthi software.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-service-reminders-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/features/service-reminders",
      "name": "Automated Garage Service Reminders & WhatsApp Alerts | GarageSaarthi",
      "description": "Never miss a vehicle maintenance due date. Automatically send WhatsApp service reminders, oil change due alerts, and booking links with GarageSaarthi software.",
      "url": "https://www.garagesaarthi.com/features/service-reminders",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/features/service-reminders#software",
      "name": "Automated Garage Service Reminders & WhatsApp Alerts | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Never miss a vehicle maintenance due date. Automatically send WhatsApp service reminders, oil change due alerts, and booking links with GarageSaarthi software.",
      "url": "https://www.garagesaarthi.com/features/service-reminders"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/service-reminders#breadcrumb",
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
          name: "Service Reminders",
          item: "https://www.garagesaarthi.com/features/service-reminders",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does GarageSaarthi calculate service due dates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GarageSaarthi calculates next service dates automatically whenever a job card is closed or invoice generated. You can configure standard intervals like 3 months, 6 months, or specific KM readings.",
          },
        },
        {
          "@type": "Question",
          name: "Can I customize the WhatsApp message sent to customers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! You can fully customize message text templates, insert custom discount codes, add booking links, and attach garage contact details.",
          },
        },
      ],
    },
  ],
};

export default function ServiceRemindersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceRemindersFeature />
    </>
  );
}
