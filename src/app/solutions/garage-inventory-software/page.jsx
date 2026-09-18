import GarageInventorySoftware from "@/src/views/solutions/GarageInventorySoftware";

export const metadata = {
  title: "Garage Inventory & Godown Stock Management Software | GarageSaarthi",
  description:
    "Manage spare parts, godown warehouse stock, and automotive inventory with GarageSaarthi garage inventory software. Seamless inter-location stock transfers, barcode tracking, and low stock alerts.",
  keywords:
    "Garage Inventory Software, Workshop Inventory Software, Godown Stock Management Software, Warehouse Stock Transfer Software, Auto Parts Inventory Software, Spare Parts Inventory Software, Spare Parts Management Software, Garage Stock Management Software, Workshop Stock Management Software, Automotive Inventory Software, Auto Workshop Inventory Software, Automobile Inventory Management Software, Garage Spare Parts Management System, Spare Parts Stock Management Software, Vehicle Spare Parts Inventory Software, Mechanic Inventory Management Software, Car Workshop Inventory Software, Bike Workshop Inventory Software, Garage Inventory Management System, Workshop Inventory Management System, Garage Spare Parts Software, Auto Spare Parts Management Software, Warehouse Storage Location Software, Spare Parts Rack Bin Management, Auto Parts Shelf Tracker",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/garage-inventory-software/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Inventory & Godown Stock Management Software | GarageSaarthi",
    description:
      "Manage garage stock, godown warehouse inventory, and workshop spare parts with GarageSaarthi. Keep your automotive inventory organized from one platform.",
    url: "https://www.garagesaarthi.com/solutions/garage-inventory-software/",
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
    title: "Garage Inventory & Godown Stock Management Software | GarageSaarthi",
    description:
      "Manage garage stock, godown warehouse inventory, and workshop spare parts with GarageSaarthi. Keep your automotive inventory organized from one platform.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-garage-inventory-software.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/garage-inventory-software",
      name: "Garage Inventory & Godown Stock Management Software | GarageSaarthi",
      description:
        "Manage spare parts, godown warehouse stock, and automotive inventory with GarageSaarthi garage inventory software.",
      url: "https://www.garagesaarthi.com/solutions/garage-inventory-software/",
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
      "@id": "https://www.garagesaarthi.com/solutions/garage-inventory-software#software",
      "name": "Garage Inventory & Godown Stock Management Software | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Manage spare parts, godown warehouse stock, and automotive inventory with GarageSaarthi garage inventory software. Track your garage inventory from one platform.",
      "url": "https://www.garagesaarthi.com/solutions/garage-inventory-software"
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
