import GatePassFeature from "@/src/views/features/GatePassFeature";

export const metadata = {
  title: "Garage Gate Pass & Vehicle Release Verification Software | GarageSaarthi",
  description:
    "QR-code enabled garage gate pass software for auto repair shops & workshops in India. Zero unauthorized vehicle exits, unpaid bill prevention, thermal slip printing, and mobile guard QR scanning.",
  keywords:
    "garage gate pass software, workshop gate pass software, digital gate pass for garage, vehicle exit verification software, workshop gate pass generator, auto repair gate pass app, qr code gate pass garage, car service center gate pass, bike workshop gate pass, workshop security software, vehicle release software, thermal gate pass printer, vehicle exit ledger software, garage perimeter security app, auto workshop gate management, unpaid vehicle exit prevention",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/gate-pass/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Gate Pass & Vehicle Release Verification Software | GarageSaarthi",
    description:
      "Prevent unauthorized vehicle exits and unpaid drive-aways. Generate instant QR gate passes and verify clearance in 2 seconds with zero guard login.",
    url: "https://www.garagesaarthi.com/features/gate-pass/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Digital Gate Pass & Vehicle Release Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Gate Pass & Vehicle Release Verification Software | GarageSaarthi",
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
      "@id": "https://www.garagesaarthi.com/features/gate-pass",
      "name": "Garage Gate Pass & Vehicle Release Verification Software | GarageSaarthi",
      "description": "QR-code enabled garage gate pass software for auto repair shops & workshops in India. Zero unauthorized vehicle exits, unpaid bill prevention, thermal slip printing, and mobile guard QR scanning.",
      "url": "https://www.garagesaarthi.com/features/gate-pass",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/features/gate-pass#software",
      "name": "Garage Gate Pass & Vehicle Release Verification Software | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "QR-code enabled garage gate pass software for auto repair shops & workshops in India. Zero unauthorized vehicle exits, unpaid bill prevention, thermal slip printing, and mobile guard QR scanning.",
      "url": "https://www.garagesaarthi.com/features/gate-pass"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/gate-pass#breadcrumb",
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
          name: "Digital Gate Pass",
          item: "https://www.garagesaarthi.com/features/gate-pass",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a digital workshop gate pass and how does it work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A digital gate pass is an encrypted electronic clearance slip generated when a vehicle repair job is completed and billing is settled. It contains a unique QR code that security guards scan at the exit gate to confirm payment clearance and authorize the vehicle to leave.",
          },
        },
        {
          "@type": "Question",
          name: "Does the security guard need to log in or download an app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No! Security guards can scan the QR code using any smartphone camera or standard browser. The verification screen opens instantly without requiring any password, login credentials, or app installation.",
          },
        },
        {
          "@type": "Question",
          name: "How does the system prevent unauthorized or unpaid vehicle exits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If an invoice balance is unpaid, or if payment settlement is pending at the cashier desk, the guard's mobile screen immediately flashes a bold RED alert with 'Exit Blocked: Payment Pending' and displays the exact dues amount, preventing drive-away loss.",
          },
        },
        {
          "@type": "Question",
          name: "Can I print thermal slips for gate passes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GarageSaarthi supports 1-click thermal printing on standard 2-inch and 3-inch POS roll printers as well as full-page A4 delivery receipts.",
          },
        },
      ],
    },
  ],
};

export default function GatePassPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GatePassFeature />
    </>
  );
}
