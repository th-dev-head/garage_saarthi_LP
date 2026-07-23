import GarageAutomationSoftware from "@/src/views/GarageAutomationSoftware";

export const metadata = {
  title: "Garage Automation Software in India | GarageSaarthi",
  description:
    "Automate job cards, GST billing, inventory, customer management, service reminders and garage operations with GarageSaarthi. Start a 7-day free trial.",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/garage-automation-software",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Automation Software for Modern Workshops | GarageSaarthi",
    description:
      "Digitize and automate daily garage operations with GarageSaarthi. Manage job cards, billing, inventory, customers, service reminders and reports from one platform.",
    url: "https://www.garagesaarthi.com/solutions/garage-automation-software",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-garage-automation-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Garage Automation Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Automation Software for Modern Workshops | GarageSaarthi",
    description:
      "Digitize and automate daily garage operations with GarageSaarthi. Manage job cards, billing, inventory, customers, service reminders and reports from one platform.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-garage-automation-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/garage-automation-software",
      name: "Garage Automation Software in India | GarageSaarthi",
      description:
        "Automate job cards, GST billing, inventory, customer management, service reminders and garage operations with GarageSaarthi.",
      url: "https://www.garagesaarthi.com/solutions/garage-automation-software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/garage-automation-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/garage-automation-software#breadcrumb",
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
          name: "Garage Automation Software",
          item: "https://www.garagesaarthi.com/solutions/garage-automation-software",
        },
      ],
    },
  ],
};

export default function GarageAutomationSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GarageAutomationSoftware />
    </>
  );
}
