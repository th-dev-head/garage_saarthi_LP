import CarWorkshopSoftware from "@/src/views/CarWorkshopSoftware";

export const metadata = {
  title: "Car Workshop Software in India | GarageSaarthi",
  description:
    "Manage job cards, car service history, inventory, billing, customers, mechanics and service reminders with GarageSaarthi car workshop software.",
  keywords:
    "car workshop software, car workshop management software, car workshop management system, car workshop management app, software for car workshop, workshop software for cars, car garage workshop software, garage software for car workshop, car repair workshop software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/car-workshop-software",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Car Workshop Management Software | GarageSaarthi",
    description:
      "Manage your car workshop digitally with job cards, vehicle records, inventory, billing, service alerts, staff management and workshop reports.",
    url: "https://www.garagesaarthi.com/solutions/car-workshop-software",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/car-workshop-software-og.webp",
        width: 1200,
        height: 630,
        alt: "Car Workshop Software Dashboard",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Workshop Management Software | GarageSaarthi",
    description:
      "Manage your car workshop digitally with job cards, vehicle records, inventory, billing, service alerts, staff management and workshop reports.",
    images: ["https://www.garagesaarthi.com/car-workshop-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/car-workshop-software",
      name: "Car Workshop Software in India | GarageSaarthi",
      description:
        "Manage job cards, car service history, inventory, billing, customers, mechanics and service reminders with GarageSaarthi car workshop software.",
      url: "https://www.garagesaarthi.com/solutions/car-workshop-software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/car-workshop-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/car-workshop-software#breadcrumb",
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
          name: "Car Workshop Software",
          item: "https://www.garagesaarthi.com/solutions/car-workshop-software",
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

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CarWorkshopSoftware />
    </>
  );
}
