import GarageInsuranceClaimSoftware from "@/src/views/solutions/GarageInsuranceClaimSoftware";

export const metadata = {
  title: "Garage Insurance Claim Management Software India | Bodyshop & Cashless Claims | GarageSaarthi",
  description:
    "Automate accidental job cards, surveyor estimates, IRDAI depreciation calculation, and cashless insurance reimbursement tracking for auto workshops in India.",
  keywords:
    "garage insurance software, bodyshop management software, cashless car claim software, garage accidental claim software, auto repair insurance estimate software, workshop insurance settlement india",
  alternates: {
    canonical: "/solutions/garage-insurance-claim-software/",
  },
  openGraph: {
    title: "Garage Insurance Claim Management Software India | Bodyshop & Cashless Claims",
    description:
      "Automate accidental repairs, surveyor approvals, depreciation splits, and cashless insurance settlements with GarageSaarthi.",
    url: "/solutions/garage-insurance-claim-software/",
    type: "website",
  },
};

export default function GarageInsuranceClaimSoftwarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "GarageSaarthi Insurance Claim Management Software",
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
            "name": "Solutions",
            "item": "https://garagesaarthi.com/solutions/",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Garage Insurance Claim Software",
            "item": "https://garagesaarthi.com/solutions/garage-insurance-claim-software/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does GarageSaarthi streamline accidental insurance claims for workshops?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GarageSaarthi automates the complete claim lifecycle: customer policy recording, initial photo inspection, digital surveyor estimate sharing, IRDAI depreciation computation, and insurer payment reconciliation.",
            },
          },
          {
            "@type": "Question",
            "name": "Can I manage claims across all Indian general insurance companies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The platform supports tie-ups and non-cashless processing for ICICI Lombard, HDFC ERGO, Bajaj Allianz, Tata AIG, Go Digit, New India Assurance, and all other IRDAI-registered insurers.",
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
      <GarageInsuranceClaimSoftware />
    </>
  );
}
