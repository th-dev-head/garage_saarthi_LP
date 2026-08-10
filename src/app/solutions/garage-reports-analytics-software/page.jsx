import GarageReportsAnalyticsSoftware from "@/src/views/solutions/GarageReportsAnalyticsSoftware";

export const metadata = {
  title: "Garage Reports & Analytics Software | GarageSaarthi",
  description:
    "Track garage sales, finance, inventory, services, customers and staff with GarageSaarthi reports and analytics software. Start your 7-day free trial.",
  keywords:
    "garage reports software, garage reporting software, garage analytics software, workshop reports software, workshop reporting software, workshop analytics software, garage dashboard software, garage performance reports, garage KPI software, garage MIS reports, garage business reports software, garage sales reports software, garage revenue reports software, garage profit reports software, garage financial reports software, garage inventory reports software, garage service reports software, garage customer reports software, garage employee reports software, mechanic performance reports, garage business analytics, garage business intelligence software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/garage-reports-analytics-software/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Reports & Analytics Software | GarageSaarthi",
    description:
      "Understand your garage business with organized reports for sales, finance, inventory, services, customers and workshop operations.",
    url: "https://www.garagesaarthi.com/solutions/garage-reports-analytics-software/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-garage-reports-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Garage Reports & Analytics Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Reports & Analytics Software | GarageSaarthi",
    description:
      "Understand your garage business with organized reports for sales, finance, inventory, services, customers and workshop operations.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-garage-reports-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/garage-reports-analytics-software",
      name: "Garage Reports & Analytics Software | GarageSaarthi",
      description:
        "Track garage sales, finance, inventory, services, customers and staff with GarageSaarthi reports and analytics software. Start your 7-day free trial.",
      url: "https://www.garagesaarthi.com/solutions/garage-reports-analytics-software/",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/garage-reports-analytics-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/garage-reports-analytics-software#breadcrumb",
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
          name: "Garage Reports & Analytics Software",
          item: "https://www.garagesaarthi.com/solutions/garage-reports-analytics-software",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/solutions/garage-reports-analytics-software#software",
      "name": "Garage Reports & Analytics Software | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Track garage sales, finance, inventory, services, customers and staff with GarageSaarthi reports and analytics software. Start your 7-day free trial.",
      "url": "https://www.garagesaarthi.com/solutions/garage-reports-analytics-software"
    },
  ],
};

export default function GarageReportsAnalyticsSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GarageReportsAnalyticsSoftware />
    </>
  );
}
