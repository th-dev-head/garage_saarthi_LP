import CAAccessFeature from "@/src/views/features/CAAccessFeature";

export const metadata = {
  title: "Garage CA Access & Accountant Portal Software | GarageSaarthi",
  description:
    "Grant read-only accountant access to your garage financial reports, GSTR filing data, expense ledgers, and profit statements with GarageSaarthi CA portal.",
  keywords:
    "accountant access for garage software, garage accounting software, garage GST software, garage financial reports software, workshop accounting software, workshop GST software, accountant login for garage software, accountant portal for garage, garage tax management software, garage bookkeeping software, garage accounting management, workshop bookkeeping software, GST report software for garage, accountant dashboard for garage, financial statement software for garage, garage profit and loss reports, garage balance sheet software, garage GST return reports, export garage reports for CA, accountant access to garage reports, read only accountant access, multi user accounting access, garage expense reports software, workshop financial management software, accountant friendly garage software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/ca-access",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage CA Access & Accountant Portal Software | GarageSaarthi",
    description:
      "Grant read-only accountant access to your garage financial reports, GSTR filing data, expense ledgers, and profit statements with GarageSaarthi CA portal.",
    url: "https://www.garagesaarthi.com/features/ca-access",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-ca-access-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi CA Access & Accountant Portal",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage CA Access & Accountant Portal Software | GarageSaarthi",
    description:
      "Grant read-only accountant access to your garage financial reports, GSTR filing data, expense ledgers, and profit statements with GarageSaarthi CA portal.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-ca-access-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/ca-access#breadcrumb",
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
          name: "CA Access",
          item: "https://www.garagesaarthi.com/features/ca-access",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can my Chartered Accountant edit or delete my garage invoices?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The CA Access role is strictly 100% read-only. Your accountant can view, search, and export financial data, but cannot create, edit, or delete any invoices or garage settings.",
          },
        },
        {
          "@type": "Question",
          name: "What report formats can my accountant download?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your CA can export sales registers, purchase ledgers, expense logs, and GST reports in Excel (.xlsx), CSV, and PDF formats ready for GSTR filing.",
          },
        },
      ],
    },
  ],
};

export default function CAAccessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CAAccessFeature />
    </>
  );
}
