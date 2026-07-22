import GarageInventorySoftware from "@/src/views/GarageInventorySoftware";

export const metadata = {
  title: "Garage Inventory Software for Workshops | GarageSaarthi",
  description:
    "Manage spare parts, workshop stock and automotive inventory with GarageSaarthi garage inventory software. Track your garage inventory from one platform.",
  keywords:
    "Garage Inventory Software, Workshop Inventory Software, Auto Parts Inventory Software, Spare Parts Inventory Software, Spare Parts Management Software, Garage Stock Management Software, Workshop Stock Management Software, Automotive Inventory Software, Auto Workshop Inventory Software, Automobile Inventory Management Software, Garage Spare Parts Management System, Spare Parts Stock Management Software, Vehicle Spare Parts Inventory Software, Mechanic Inventory Management Software, Car Workshop Inventory Software, Bike Workshop Inventory Software, Garage Inventory Management System, Workshop Inventory Management System, Garage Spare Parts Software, Auto Spare Parts Management Software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/garage-inventory-software",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Inventory Software for Automotive Workshops",
    description:
      "Manage garage stock, spare parts and workshop inventory with GarageSaarthi. Keep your automotive inventory organized from one platform.",
    url: "https://www.garagesaarthi.com/solutions/garage-inventory-software",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-garage-inventory-software.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Garage Inventory Software Dashboard",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Inventory Software for Automotive Workshops",
    description:
      "Manage garage stock, spare parts and workshop inventory with GarageSaarthi. Keep your automotive inventory organized from one platform.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-garage-inventory-software.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/garage-inventory-software",
      name: "Garage Inventory Software for Workshops | GarageSaarthi",
      description:
        "Manage spare parts, workshop stock and automotive inventory with GarageSaarthi garage inventory software.",
      url: "https://www.garagesaarthi.com/solutions/garage-inventory-software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/garage-inventory-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/garage-inventory-software#breadcrumb",
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
          name: "Garage Inventory Software",
          item: "https://www.garagesaarthi.com/solutions/garage-inventory-software",
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

export default function GarageInventorySoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GarageInventorySoftware />
    </>
  );
}
