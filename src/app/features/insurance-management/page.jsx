import InsuranceManagementFeature from "@/src/views/features/InsuranceManagementFeature";

export const metadata = {
  title: "Garage Insurance & Cashless Claim Management Software | GarageSaarthi",
  description:
    "Streamline bodyshop accidental claims, surveyor estimate approvals, IRDAI depreciation calculation, and cashless insurance payout tracking with GarageSaarthi.",
  keywords:
    "garage insurance software, bodyshop claim management, cashless car insurance claim, auto repair surveyor estimate, garage accidental job card, IRDAI depreciation calculator garage, workshop insurance settlement",
  alternates: {
    canonical: "/features/insurance-management/",
  },
  openGraph: {
    title: "Garage Insurance & Cashless Claim Management Software | GarageSaarthi",
    description:
      "Automate accidental repairs, surveyor approvals, depreciation splits, and cashless insurance settlements with GarageSaarthi.",
    url: "/features/insurance-management/",
    type: "website",
  },
};

export default function InsuranceManagementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "GarageSaarthi Insurance Claim Management",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, Android, iOS",
        "description":
          "End-to-end bodyshop insurance claim management, surveyor coordination, IRDAI depreciation calculations, and cashless payout tracking for auto workshops.",
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
            "name": "Insurance Management",
            "item": "https://garagesaarthi.com/features/insurance-management/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does GarageSaarthi calculate material depreciation on accidental parts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GarageSaarthi incorporates standard IRDAI insurance guidelines: 50% for rubber/nylon, 30% for fiberglass, 0% for glass, and age-based depreciation for metal parts, with full support for Zero-Depreciation policies.",
            },
          },
          {
            "@type": "Question",
            "name": "Can I manage cashless claims from all insurance companies in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. You can manage claims from private insurers like ICICI Lombard, HDFC ERGO, Bajaj Allianz, Tata AIG, Go Digit, as well as PSU insurance providers.",
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
      <InsuranceManagementFeature />
    </>
  );
}
