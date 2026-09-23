import GarageGatePassSoftware from "@/src/views/solutions/GarageGatePassSoftware";

export const metadata = {
  title: "Garage Gate Pass Software & Vehicle Release Verification App | GarageSaarthi",
  description:
    "QR-code enabled garage gate pass software for auto repair shops & workshops in India. Zero unauthorized vehicle exits, unpaid bill prevention, thermal slip printing, and mobile guard QR scanning.",
  keywords:
    "garage gate pass software, workshop gate pass software, digital gate pass for garage, vehicle exit verification software, workshop gate pass generator, auto repair gate pass app, qr code gate pass garage, car service center gate pass, bike workshop gate pass, workshop security software, vehicle release software, thermal gate pass printer, vehicle exit ledger software, garage perimeter security app, auto workshop gate management, unpaid vehicle exit prevention",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/garage-gate-pass-software/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Gate Pass Software & Vehicle Release App | GarageSaarthi",
    description:
      "Prevent unauthorized vehicle exits and unpaid drive-aways. Generate instant QR gate passes and verify clearance in 2 seconds with zero guard login.",
    url: "https://www.garagesaarthi.com/solutions/garage-gate-pass-software/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Garage Gate Pass Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Gate Pass Software & Vehicle Release Verification App | GarageSaarthi",
    description:
      "Cryptographic QR gate passes, thermal roll printing, and zero-login guard exit verification for Indian auto workshops.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/garage-gate-pass-software",
      name: "Garage Gate Pass Software & Vehicle Release Verification App | GarageSaarthi",
      description:
        "QR-code enabled garage gate pass software for auto repair shops & workshops in India. Zero unauthorized vehicle exits, unpaid bill prevention, thermal slip printing, and mobile guard QR scanning.",
      url: "https://www.garagesaarthi.com/solutions/garage-gate-pass-software/",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/garage-gate-pass-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/garage-gate-pass-software#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.garagesaarthi.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Solutions",
          item: "https://www.garagesaarthi.com/solutions",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Garage Gate Pass Software",
          item: "https://www.garagesaarthi.com/solutions/garage-gate-pass-software",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/solutions/garage-gate-pass-software#software",
      name: "Garage Gate Pass Software & Vehicle Release Verification App | GarageSaarthi",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Android",
      description: "QR-code enabled garage gate pass software for auto repair shops & workshops in India. Zero unauthorized vehicle exits, unpaid bill prevention, thermal slip printing, and mobile guard QR scanning.",
      url: "https://www.garagesaarthi.com/solutions/garage-gate-pass-software"
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is garage gate pass software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Garage gate pass software is a vehicle release and perimeter security system designed for auto repair workshops. It issues digital QR-coded clearance slips upon job completion and payment settlement, enabling security guards to verify release eligibility on mobile devices.",
          },
        },
        {
          "@type": "Question",
          name: "How does QR gate pass verification work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When a customer pays their invoice, a unique cryptographic QR pass is created. The security guard points any smartphone camera at the printed slip or customer's WhatsApp screen to verify payment status in 2 seconds and authorize exit.",
          },
        },
      ],
    },
  ],
};

export default function GarageGatePassSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GarageGatePassSoftware />
    </>
  );
}
