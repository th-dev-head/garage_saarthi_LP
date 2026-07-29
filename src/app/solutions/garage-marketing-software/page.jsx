import GarageMarketingSoftware from "@/src/views/solutions/GarageMarketingSoftware";

export const metadata = {
  title: "Garage Marketing Software for Workshops | GarageSaarthi",
  description:
    "Engage garage customers, share offers, manage follow-ups and send WhatsApp promotions with GarageSaarthi garage marketing software. Start a 7-day free trial.",
  keywords:
    "garage marketing software, auto repair shop marketing software, workshop marketing software, automotive marketing software, garage customer marketing software, garage promotion software, workshop promotion software, garage customer engagement software, garage customer retention software, garage WhatsApp marketing software, workshop WhatsApp marketing software, garage follow up software",
  alternates: {
    canonical:
      "https://www.garagesaarthi.com/solutions/garage-marketing-software",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Marketing Software for Automotive Workshops | GarageSaarthi",
    description:
      "Engage customers, manage garage promotions, send WhatsApp communication and improve customer follow-ups with GarageSaarthi.",
    url:
      "https://www.garagesaarthi.com/solutions/garage-marketing-software",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage-marketing-software-garagesaarthi.webp",
        width: 1200,
        height: 630,
        alt: "Garage Marketing Software - GarageSaarthi",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Marketing Software for Automotive Workshops | GarageSaarthi",
    description:
      "Engage customers, manage garage promotions, send WhatsApp communication and improve customer follow-ups with GarageSaarthi.",
    images: [
      "https://www.garagesaarthi.com/garage-marketing-software-garagesaarthi.webp",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.garagesaarthi.com/solutions/garage-marketing-software",
      name: "Garage Marketing Software for Workshops | GarageSaarthi",
      description:
        "Engage garage customers, share offers, manage follow-ups and send WhatsApp promotions with GarageSaarthi garage marketing software. Start a 7-day free trial.",
      url:
        "https://www.garagesaarthi.com/solutions/garage-marketing-software",
      about: "Garage Marketing Software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id":
          "https://www.garagesaarthi.com/solutions/garage-marketing-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.garagesaarthi.com/solutions/garage-marketing-software#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.garagesaarthi.com",
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
          name: "Garage Marketing Software",
          item:
            "https://www.garagesaarthi.com/solutions/garage-marketing-software",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is garage marketing software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Garage marketing software is software used by garages and automotive workshops to organize customer marketing, promotions, offers, WhatsApp communication, CRM lead follow-ups, and customer engagement activities.",
          },
        },
        {
          "@type": "Question",
          name: "How can GarageSaarthi help market my garage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GarageSaarthi helps you manage offers & promotions, WhatsApp customer communication, CRM lead tracking, organized customer & vehicle records, and service alerts to encourage repeat workshop visits.",
          },
        },
        {
          "@type": "Question",
          name: "Is GarageSaarthi a digital marketing tool?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. GarageSaarthi is not an advertising agency or SEO tool. It is customer marketing and engagement software connected directly to your workshop's daily operations and customer records.",
          },
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/solutions/garage-marketing-software#software",
      "name": "Garage Marketing Software for Workshops | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Engage garage customers, share offers, manage follow-ups and send WhatsApp promotions with GarageSaarthi garage marketing software. Start a 7-day free trial.",
      "url": "https://www.garagesaarthi.com/solutions/garage-marketing-software"
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GarageMarketingSoftware />
    </>
  );
}
