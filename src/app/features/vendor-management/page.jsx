import VendorManagementFeature from "@/src/views/features/VendorManagementFeature";

export const metadata = {
  title: "Vendor & Supplier Management Software for Garages | GarageSaarthi",
  description:
    "Manage spare parts suppliers, purchase bills, payment ledgers, vendor outstanding balances, and export PDF/Excel statements with GarageSaarthi.",
  keywords:
    "garage vendor management software, spare parts supplier ledger, auto workshop procurement, supplier statement export, workshop purchase bills tracking, auto parts vendor payments, garage accounting software",
  alternates: {
    canonical: "/features/vendor-management/",
  },
  openGraph: {
    title: "Vendor & Supplier Management Software for Garages | GarageSaarthi",
    description:
      "Manage spare parts suppliers, purchase bills, payment ledgers, and vendor outstanding balances with GarageSaarthi.",
    url: "/features/vendor-management/",
    type: "website",
  },
};

export default function VendorManagementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "GarageSaarthi Vendor & Supplier Management",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, Android, iOS",
        "description":
          "Spare parts procurement, purchase invoice logging, supplier payment tracking, and audit-ready PDF statement exports for auto repair workshops.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR",
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://garagesaarthi.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Features",
            "item": "https://garagesaarthi.com/features/",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Vendor Management",
            "item": "https://garagesaarthi.com/features/vendor-management/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does GarageSaarthi track spare parts supplier statements?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Whenever you inward a purchase bill, the system logs the debit entry and updates inventory stock. Payments log credit entries, calculating a live running balance ledger automatically.",
            },
          },
          {
            "@type": "Question",
            "name": "Can I export vendor account statements to PDF and Excel?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. You can select any date range and export complete statement ledgers formatted with invoice numbers, payment modes, notes, and closing balances in 1 click.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VendorManagementFeature />
    </>
  );
}
