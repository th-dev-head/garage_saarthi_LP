import FinanceManagementFeature from "@/src/views/features/FinanceManagementFeature";

export const metadata = {
  title: "Garage Finance Management & Cash Flow Accounting Software | GarageSaarthi",
  description:
    "Track daily workshop revenue, counter cash, UPI settlements, vendor credit dues, mechanic commissions, and real-time net profit margins with GarageSaarthi.",
  keywords:
    "garage finance management software, workshop cash flow software, garage expense category analytics, garage subcategory expense tracker, garage ledger software, auto repair shop P&L tracker, vendor credit management garage, garage GST accounting software India, workshop income expense manager",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/finance/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Finance Management & Cash Flow Accounting Software | GarageSaarthi",
    description:
      "Track daily workshop revenue, counter cash, UPI settlements, vendor credit dues, mechanic commissions, and real-time net profit margins with GarageSaarthi.",
    url: "https://www.garagesaarthi.com/features/finance/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-finance-management-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Finance Management Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Finance Management & Cash Flow Accounting Software | GarageSaarthi",
    description:
      "Track daily workshop revenue, counter cash, UPI settlements, vendor credit dues, mechanic commissions, and real-time net profit margins with GarageSaarthi.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-finance-management-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/features/finance",
      "name": "Garage Finance Management & Cash Flow Accounting Software | GarageSaarthi",
      "description": "Track daily workshop revenue, counter cash, UPI settlements, vendor credit dues, mechanic commissions, and real-time net profit margins with GarageSaarthi.",
      "url": "https://www.garagesaarthi.com/features/finance",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/features/finance#software",
      "name": "Garage Finance Management & Cash Flow Accounting Software | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Track daily workshop revenue, counter cash, UPI settlements, vendor credit dues, mechanic commissions, and real-time net profit margins with GarageSaarthi.",
      "url": "https://www.garagesaarthi.com/features/finance"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/finance#breadcrumb",
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
          name: "Finance Management",
          item: "https://www.garagesaarthi.com/features/finance",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need accounting knowledge like Tally to use GarageSaarthi finance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not at all! GarageSaarthi is designed specifically for garage owners. Incomes and expenses are automatically logged as you create job cards, buy spare parts, or collect payments.",
          },
        },
        {
          "@type": "Question",
          name: "Can I create custom categories and subcategories for expenses and income?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! GarageSaarthi allows you to create custom parent categories (e.g., Spare Parts, Staff Welfare, Scrap) and infinite subcategories (e.g., Engine Oils, Brake Pads, Tea & Snacks) directly on the fly while recording entries.",
          },
        },
        {
          "@type": "Question",
          name: "How do category analytics help reduce workshop losses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The interactive category analytics dashboard gives you instant percentage breakdowns, donut charts, and monthly trends. You can immediately pinpoint which suppliers or operational heads account for the largest share of your expenses.",
          },
        },
        {
          "@type": "Question",
          name: "Can I track spare parts distributor credit accounts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! You can maintain vendor ledger accounts, record purchase invoices, and track outstanding supplier balances.",
          },
        },
      ],
    },
  ],
};

export default function FinanceManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FinanceManagementFeature />
    </>
  );
}
