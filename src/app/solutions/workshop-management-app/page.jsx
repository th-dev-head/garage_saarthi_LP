import WorkshopManagementApp from "@/src/views/WorkshopManagementApp";

export const metadata = {
  title: "Workshop Management App for Garages | GarageSaarthi",
  description:
    "Manage job cards, inventory, customers, vehicles, staff and service alerts with the GarageSaarthi workshop management app. Start a 7-day free trial.",
  keywords:
    "workshop management app, garage management app, garage app, workshop app, auto workshop app, automobile workshop app, automotive workshop app, workshop management mobile app, garage management mobile app, workshop management app India, garage management app India, workshop management software app, car workshop app, car garage app, workshop management Android app, garage management Android app, best workshop management app, best garage management app",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/workshop-management-app",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Workshop Management App for Garages | GarageSaarthi",
    description:
      "Manage daily workshop operations from your mobile with GarageSaarthi. Handle job cards, customers, vehicles, inventory, staff and service alerts in one app.",
    url: "https://www.garagesaarthi.com/solutions/workshop-management-app",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-workshop-management-app-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Workshop Management App",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workshop Management App for Garages | GarageSaarthi",
    description:
      "Manage daily workshop operations from your mobile with GarageSaarthi. Handle job cards, customers, vehicles, inventory, staff and service alerts in one app.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-workshop-management-app-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/workshop-management-app",
      name: "Workshop Management App for Garages | GarageSaarthi",
      description:
        "Manage job cards, inventory, customers, vehicles, staff and service alerts with the GarageSaarthi workshop management app.",
      url: "https://www.garagesaarthi.com/solutions/workshop-management-app",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/workshop-management-app#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/workshop-management-app#breadcrumb",
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
          name: "Workshop Management App",
          item: "https://www.garagesaarthi.com/solutions/workshop-management-app",
        },
      ],
    },
  ],
};

export default function WorkshopManagementAppPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WorkshopManagementApp />
    </>
  );
}
