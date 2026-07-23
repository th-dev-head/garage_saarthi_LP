import GarageManagementApp from "@/src/views/GarageManagementApp";

export const metadata = {
  title: "Garage Management App for Workshops in India | GarageSaarthi",
  description:
    "Manage job cards, customers, vehicles, inventory, staff, finance and service alerts with the GarageSaarthi garage management app. Start your 7-day free trial.",
  keywords:
    "garage management app, workshop management app, auto repair shop app, garage management mobile app, automobile workshop app, garage app, workshop app, mechanic app, garage software app, mechanic management app",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/garage-management-app",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Management App for Modern Workshops | GarageSaarthi",
    description:
      "Manage daily garage operations from the GarageSaarthi app. Handle job cards, customers, vehicles, inventory, staff, finance and service alerts.",
    url: "https://www.garagesaarthi.com/solutions/garage-management-app",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-garage-management-app-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Garage Management App",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Management App for Modern Workshops | GarageSaarthi",
    description:
      "Manage daily garage operations from the GarageSaarthi app. Handle job cards, customers, vehicles, inventory, staff, finance and service alerts.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-garage-management-app-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/garage-management-app",
      name: "Garage Management App for Workshops in India | GarageSaarthi",
      description:
        "Manage job cards, customers, vehicles, inventory, staff, finance and service alerts with the GarageSaarthi garage management app.",
      url: "https://www.garagesaarthi.com/solutions/garage-management-app",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/garage-management-app#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/garage-management-app#breadcrumb",
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
          name: "Garage Management App",
          item: "https://www.garagesaarthi.com/solutions/garage-management-app",
        },
      ],
    },
  ],
};

export default function GarageManagementAppPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GarageManagementApp />
    </>
  );
}
