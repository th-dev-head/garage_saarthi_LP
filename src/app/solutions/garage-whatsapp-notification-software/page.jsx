import GarageWhatsAppNotificationSoftware from "@/src/views/GarageWhatsAppNotificationSoftware";

export const metadata = {
  title: "Garage WhatsApp Notification Software | GarageSaarthi",
  description:
    "Send WhatsApp service reminders, service due alerts and customer notifications with GarageSaarthi. Automate garage follow-ups and stay connected with customers.",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/garage-whatsapp-notification-software",
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Garage WhatsApp Notification Software | GarageSaarthi",
    description:
      "Manage service reminders, customer notifications and garage follow-ups with GarageSaarthi's WhatsApp notification system.",
    url: "https://www.garagesaarthi.com/solutions/garage-whatsapp-notification-software",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-garage-whatsapp-notification-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Garage WhatsApp Notification Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage WhatsApp Notification Software | GarageSaarthi",
    description:
      "Manage service reminders, customer notifications and garage follow-ups with GarageSaarthi's WhatsApp notification system.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-garage-whatsapp-notification-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/garage-whatsapp-notification-software",
      name: "Garage WhatsApp Notification Software | GarageSaarthi",
      description:
        "Send WhatsApp service reminders, service due alerts and customer notifications with GarageSaarthi. Automate garage follow-ups and stay connected with customers.",
      url: "https://www.garagesaarthi.com/solutions/garage-whatsapp-notification-software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/garage-whatsapp-notification-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/garage-whatsapp-notification-software#breadcrumb",
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
          name: "Garage WhatsApp Notification Software",
          item: "https://www.garagesaarthi.com/solutions/garage-whatsapp-notification-software",
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
  ],
};

export default function GarageWhatsAppNotificationSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GarageWhatsAppNotificationSoftware />
    </>
  );
}
