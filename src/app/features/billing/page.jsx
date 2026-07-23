import BillingInvoicingFeature from "@/src/views/BillingInvoicingFeature";

export const metadata = {
  title: "Garage Billing & GST Invoicing Software | GarageSaarthi",
  description:
    "All-in-one GST billing and invoicing software for auto repair shops & workshops in India. Fast 1-click job card conversion, HSN codes, WhatsApp PDF bills, and multi-mode payment logs.",
  keywords:
    "garage billing software, workshop invoicing software, GST billing software for garage, auto repair invoice maker, garage invoice software India, digital workshop billing app, garage estimate and invoice maker, spare parts invoicing software, WhatsApp invoice for garage",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/billing",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Billing & Invoicing Software | GarageSaarthi",
    description:
      "Create professional GST invoices in seconds. Convert job cards to bills in 1 click, itemize spare parts and labor rates, and send WhatsApp PDF bills.",
    url: "https://www.garagesaarthi.com/features/billing",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi GST Billing & Invoicing Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Billing & GST Invoicing Software | GarageSaarthi",
    description:
      "Express GST invoicing for Indian auto workshops. Send WhatsApp PDF bills & convert job cards in 1 click.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/billing#breadcrumb",
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
          name: "Billing & Invoicing",
          item: "https://www.garagesaarthi.com/features/billing",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is garage billing & invoicing software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Garage billing software is a specialized application for auto workshops that automates tax invoice generation, calculates GST splits (CGST/SGST/IGST), records spare parts & labor charges, and tracks customer payment statuses.",
          },
        },
        {
          "@type": "Question",
          name: "Can I generate GST-compliant invoices with HSN codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! GarageSaarthi pre-loads HSN codes for spare parts and SAC codes for labor services. It calculates exact tax percentages automatically for GST-registered workshops.",
          },
        },
        {
          "@type": "Question",
          name: "Can I send invoices to customers via WhatsApp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can send digital PDF tax invoices and payment confirmation receipts directly to your customer's WhatsApp in one click.",
          },
        },
      ],
    },
  ],
};

export default function BillingInvoicingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BillingInvoicingFeature />
    </>
  );
}
