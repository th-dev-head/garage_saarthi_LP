import GarageCRMSoftware from "@/src/views/GarageCRMSoftware";

export const metadata = {
  title: "Garage CRM Software for Workshops in India | GarageSaarthi",
  description:
    "Manage garage leads, customers, follow-ups and customer records with GarageSaarthi CRM software for automotive workshops. Start a 7-day free trial.",
  keywords:
    "garage crm software, garage crm, garage customer management software, workshop crm software, workshop crm, automobile crm software, automotive crm software, auto repair crm software, auto workshop crm software, vehicle workshop crm software, car garage crm software, garage lead management software, garage customer follow up software, garage customer tracking software, garage customer database software, garage client management software, automotive customer management software, customer relationship management software for garage, workshop customer management software, mechanic customer management software, garage customer record software, garage customer history software, garage customer communication software, garage customer engagement software, workshop lead management software, vehicle owner management software, customer retention software for garages, crm software for car workshop, crm software for auto repair shop, crm for automobile workshop",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/garage-crm-software",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage CRM Software for Automotive Workshops | GarageSaarthi",
    description:
      "Manage leads, customer records and follow-ups with GarageSaarthi CRM software built for garages and automotive workshops.",
    url: "https://www.garagesaarthi.com/solutions/garage-crm-software",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-garage-crm-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Garage CRM Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage CRM Software for Automotive Workshops | GarageSaarthi",
    description:
      "Manage leads, customer records and follow-ups with GarageSaarthi CRM software built for garages and automotive workshops.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-garage-crm-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/garage-crm-software",
      name: "Garage CRM Software for Workshops in India | GarageSaarthi",
      description:
        "Manage garage leads, customers, follow-ups and customer records with GarageSaarthi CRM software for automotive workshops.",
      url: "https://www.garagesaarthi.com/solutions/garage-crm-software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/garage-crm-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/garage-crm-software#breadcrumb",
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
          name: "Garage CRM Software",
          item: "https://www.garagesaarthi.com/solutions/garage-crm-software",
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

export default function GarageCRMSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GarageCRMSoftware />
    </>
  );
}
