import GarageERPSoftware from "@/src/views/GarageERPSoftware";

export const metadata = {
  title: "Garage ERP Software for Workshops in India | GarageSaarthi",
  description:
    "Manage workshop operations, inventory, customers, staff, finance and branches with GarageSaarthi garage ERP software. Start your 7-day free trial.",
  keywords:
    "garage ERP software, garage ERP system, ERP software for garage, ERP for garage workshop, garage workshop ERP, workshop ERP software, automobile workshop ERP software, automotive workshop ERP, auto repair ERP software, car garage ERP software, vehicle workshop ERP software, garage business ERP software, garage management ERP, workshop management ERP, auto workshop ERP software, cloud garage ERP software, cloud workshop ERP, online garage ERP software, web based garage ERP, garage ERP application, garage ERP platform, digital garage ERP software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/garage-erp-software",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage ERP Software for Automotive Workshops | GarageSaarthi",
    description:
      "Connect workshop operations, inventory, customers, employees, finances and branches with GarageSaarthi’s integrated garage ERP platform.",
    url: "https://www.garagesaarthi.com/solutions/garage-erp-software",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-garage-erp-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Garage ERP Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage ERP Software for Automotive Workshops | GarageSaarthi",
    description:
      "Connect workshop operations, inventory, customers, employees, finances and branches with GarageSaarthi’s integrated garage ERP platform.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-garage-erp-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/garage-erp-software",
      name: "Garage ERP Software for Workshops in India | GarageSaarthi",
      description:
        "Manage workshop operations, inventory, customers, staff, finance and branches with GarageSaarthi garage ERP software.",
      url: "https://www.garagesaarthi.com/solutions/garage-erp-software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/garage-erp-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/garage-erp-software#breadcrumb",
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
          name: "Garage ERP Software",
          item: "https://www.garagesaarthi.com/solutions/garage-erp-software",
        },
      ],
    },
  ],
};

export default function GarageERPSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GarageERPSoftware />
    </>
  );
}
