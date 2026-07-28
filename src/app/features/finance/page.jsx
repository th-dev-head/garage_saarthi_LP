import FinanceManagementFeature from "@/src/views/features/FinanceManagementFeature";

export const metadata = {
  title: "Garage Finance Management & Cash Flow Accounting Software | GarageSaarthi",
  description:
    "Track daily workshop revenue, counter cash, UPI settlements, vendor credit dues, mechanic commissions, and real-time net profit margins with GarageSaarthi.",
  keywords:
    "garage finance management software, workshop cash flow software, garage ledger software, auto repair shop P&L tracker, vendor credit management garage, garage GST accounting software India, workshop income expense manager",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/finance",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Finance Management & Cash Flow Accounting Software | GarageSaarthi",
    description:
      "Track daily workshop revenue, counter cash, UPI settlements, vendor credit dues, mechanic commissions, and real-time net profit margins with GarageSaarthi.",
    url: "https://www.garagesaarthi.com/features/finance",
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
