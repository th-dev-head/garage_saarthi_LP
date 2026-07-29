import ServiceReminderSoftware from "@/src/views/solutions/ServiceReminderSoftware";

export const metadata = {
  title: "Service Reminder Software for Garages | GarageSaarthi",
  description:
    "Automate vehicle service reminders and customer follow-ups with GarageSaarthi service reminder software. Send WhatsApp reminders and track due services.",
  keywords:
    "service reminder software, vehicle service reminder software, car service reminder software, garage service reminder software, workshop service reminder software, service reminder system, WhatsApp service reminder software, service reminder app, automated service reminder software, customer reminder software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/service-reminder-software",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Service Reminder Software for Garages | GarageSaarthi",
    description:
      "Track upcoming vehicle services, manage customer follow-ups and send WhatsApp service reminders with GarageSaarthi.",
    url: "https://www.garagesaarthi.com/solutions/service-reminder-software",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-service-reminder-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Service Reminder Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Reminder Software for Garages | GarageSaarthi",
    description:
      "Track upcoming vehicle services, manage customer follow-ups and send WhatsApp service reminders with GarageSaarthi.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-service-reminder-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/service-reminder-software",
      name: "Service Reminder Software for Garages | GarageSaarthi",
      description:
        "Automate vehicle service reminders and customer follow-ups with GarageSaarthi service reminder software. Send WhatsApp reminders and track due services.",
      url: "https://www.garagesaarthi.com/solutions/service-reminder-software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/service-reminder-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/service-reminder-software#breadcrumb",
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
          name: "Service Reminder Software",
          item: "https://www.garagesaarthi.com/solutions/service-reminder-software",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/solutions/service-reminder-software#software",
      "name": "Service Reminder Software for Garages | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Automate vehicle service reminders and customer follow-ups with GarageSaarthi service reminder software. Send WhatsApp reminders and track due services.",
      "url": "https://www.garagesaarthi.com/solutions/service-reminder-software"
    },
  ],
};

export default function ServiceReminderSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceReminderSoftware />
    </>
  );
}
