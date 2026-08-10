import ReportsAnalyticsFeature from "@/src/views/features/ReportsAnalyticsFeature";

export const metadata = {
  title: "Garage Reports & Analytics Software | GarageSaarthi",
  description:
    "Track daily workshop revenue trends, spare parts inventory turnover, technician labor productivity, and GST profit statements with GarageSaarthi analytics.",
  keywords:
    "garage reports software, workshop analytics software, auto repair shop performance reports, garage revenue tracker, spare parts velocity report, mechanic productivity analytics, workshop P&L report, GST tax reports garage, garage business reports, workshop financial report software, auto repair reporting software, garage sales analytics, workshop profit reports, garage audit trail logs, export garage reports for CA",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/reports/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Reports & Analytics Software | GarageSaarthi",
    description:
      "Track daily workshop revenue trends, spare parts inventory turnover, technician labor productivity, and GST profit statements with GarageSaarthi analytics.",
    url: "https://www.garagesaarthi.com/features/reports/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-reports-analytics-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Reports & Analytics Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Reports & Analytics Software | GarageSaarthi",
    description:
      "Track daily workshop revenue trends, spare parts inventory turnover, technician labor productivity, and GST profit statements with GarageSaarthi analytics.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-reports-analytics-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/features/reports",
      "name": "Garage Reports & Analytics Software | GarageSaarthi",
      "description": "Track daily workshop revenue trends, spare parts inventory turnover, technician labor productivity, and GST profit statements with GarageSaarthi analytics.",
      "url": "https://www.garagesaarthi.com/features/reports",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/features/reports#software",
      "name": "Garage Reports & Analytics Software | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Track daily workshop revenue trends, spare parts inventory turnover, technician labor productivity, and GST profit statements with GarageSaarthi analytics.",
      "url": "https://www.garagesaarthi.com/features/reports"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/reports#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.garagesaarthi.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Features",
          item: "https://www.garagesaarthi.com/features",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Reports & Analytics",
          item: "https://www.garagesaarthi.com/features/reports",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I export reports to Excel and PDF formats?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! All reports in GarageSaarthi—including sales registers, inventory velocity, GST tax summaries, and P&L statements—can be exported in 1 click to Excel (.xlsx) and PDF formats.",
          },
        },
        {
          "@type": "Question",
          name: "Are GST tax reports formatted for Chartered Accountant (CA) filing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GSTR-1, GSTR-3B, and tax breakdown reports separate CGST, SGST, and IGST components accurately, making monthly CA tax filing simple.",
          },
        },
      ],
    },
  ],
};

export default function ReportsAnalyticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReportsAnalyticsFeature />
    </>
  );
}
