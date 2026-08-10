import CounterSalesFeature from "@/src/views/features/CounterSalesFeature";

export const metadata = {
  title: "Garage Counter Sales & Spare Parts POS Billing Software | GarageSaarthi",
  description:
    "All-in-one counter sales and POS billing software for auto repair shops & spare parts retailers in India. Fast GST invoicing, instant inventory deduction, barcode scanning, and WhatsApp bills.",
  keywords:
    "counter sales software, garage counter sales software, workshop counter sales software, auto workshop counter sales software, automobile counter sales software, spare parts counter sales software, garage POS software, workshop POS software, auto repair POS software, garage billing POS software, retail billing software for garage, spare parts billing software, garage sales management software, workshop sales management software, counter billing software for garage, garage invoice software, workshop invoice software, GST billing software for garage, auto parts billing software, spare parts POS software, auto parts POS software, garage retail software, workshop retail software, garage cash counter software, workshop cash billing software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/counter-sales/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Counter Sales & Spare Parts POS Software | GarageSaarthi",
    description:
      "Sell spare parts and lubricants to walk-in buyers without a job card. Instant GST retail billing, auto stock deduction, and WhatsApp receipts.",
    url: "https://www.garagesaarthi.com/features/counter-sales/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Counter Sales & Spare Parts POS Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Counter Sales & Spare Parts POS Billing Software | GarageSaarthi",
    description:
      "Express over-the-counter spare parts billing for Indian auto workshops. Fast GST invoicing & automatic inventory sync.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/features/counter-sales",
      "name": "Garage Counter Sales & Spare Parts POS Billing Software | GarageSaarthi",
      "description": "All-in-one counter sales and POS billing software for auto repair shops & spare parts retailers in India. Fast GST invoicing, instant inventory deduction, barcode scanning, and WhatsApp bills.",
      "url": "https://www.garagesaarthi.com/features/counter-sales",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/features/counter-sales#software",
      "name": "Garage Counter Sales & Spare Parts POS Billing Software | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "All-in-one counter sales and POS billing software for auto repair shops & spare parts retailers in India. Fast GST invoicing, instant inventory deduction, barcode scanning, and WhatsApp bills.",
      "url": "https://www.garagesaarthi.com/features/counter-sales"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/counter-sales#breadcrumb",
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
          name: "Counter Sales",
          item: "https://www.garagesaarthi.com/features/counter-sales",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is counter sales software for garages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Counter sales software (or garage POS) is a billing system designed for auto repair shops and spare parts stores to sell parts, lubricants, and accessories directly to walk-in buyers without opening a vehicle job card.",
          },
        },
        {
          "@type": "Question",
          name: "Does counter sales automatically update inventory stock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Every time a counter sale invoice is generated, the sold parts and lubricants are deducted immediately from your central garage inventory levels.",
          },
        },
        {
          "@type": "Question",
          name: "Can I generate GST invoices for counter sales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! GarageSaarthi pre-loads HSN codes, SAC categories, and GST rates (CGST, SGST, IGST), generating fully compliant retail GST bills automatically.",
          },
        },
      ],
    },
  ],
};

export default function CounterSalesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CounterSalesFeature />
    </>
  );
}
