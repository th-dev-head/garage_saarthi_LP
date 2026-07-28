import LoanManagementFeature from "@/src/views/features/LoanManagementFeature";

export const metadata = {
  title: "Garage Loan & EMI Management Software | GarageSaarthi",
  description:
    "Track garage business loans, equipment financing, monthly EMI schedules, bank mandate auto-debits, and interest calculations with GarageSaarthi loan tracker.",
  keywords:
    "loan management software, garage loan management software, workshop loan management software, loan tracking software, EMI management software, debt management software, EMI tracker software, loan EMI tracker, loan repayment tracker, installment management software, garage loan EMI tracker",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/loans",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Loan & EMI Management Software | GarageSaarthi",
    description:
      "Track garage business loans, equipment financing, monthly EMI schedules, bank mandate auto-debits, and interest calculations with GarageSaarthi loan tracker.",
    url: "https://www.garagesaarthi.com/features/loans",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-loan-management-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Loan & EMI Management Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Loan & EMI Management Software | GarageSaarthi",
    description:
      "Track garage business loans, equipment financing, monthly EMI schedules, bank mandate auto-debits, and interest calculations with GarageSaarthi loan tracker.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-loan-management-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/loans#breadcrumb",
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
          name: "Loan Management",
          item: "https://www.garagesaarthi.com/features/loans",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does GarageSaarthi help prevent bank EMI bounce charges?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GarageSaarthi sends automated advance WhatsApp and push notifications 3 days before your bank loan auto-debit dates, reminding you to ensure sufficient account balance.",
          },
        },
        {
          "@type": "Question",
          name: "Can I track equipment financing like hydraulic lifts and OBD scanners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! You can log machinery loans, equipment financing agreements, principal amounts, interest rates, and monthly EMI schedules separately.",
          },
        },
      ],
    },
  ],
};

export default function LoanManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LoanManagementFeature />
    </>
  );
}
