import TrustPage from "@/src/views/TrustPage";

export const metadata = {
  title: "GarageSaarthi Trust Centre | Security, Privacy & Data Protection",
  description:
    "Learn how GarageSaarthi protects workshop data with 256-bit SSL encryption, zero third-party data selling, role-based staff privacy, and automated cloud backups.",
  keywords:
    "garage software data security, workshop management privacy, automotive CRM data protection, cloud garage software security India, workshop data ownership, garage software backup",
  alternates: {
    canonical: "https://www.garagesaarthi.com/trust/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "GarageSaarthi Trust Centre | Enterprise Data Security for Workshops",
    description:
      "Your customer database and profit margins are 100% yours. Discover our multi-tenant cloud isolation, bank-grade encryption, and data ownership principles.",
    url: "https://www.garagesaarthi.com/trust/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Trust Centre, Security and Data Protection",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "GarageSaarthi Trust Centre | Enterprise Data Security for Workshops",
    description:
      "Your customer database and profit margins are 100% yours. Discover our multi-tenant cloud isolation, bank-grade encryption, and data ownership principles.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/trust",
      "name": "GarageSaarthi Trust Centre | Security, Privacy & Data Protection",
      "description":
        "Learn how GarageSaarthi protects workshop data with 256-bit SSL encryption, zero third-party data selling, role-based staff privacy, and automated cloud backups.",
      "url": "https://www.garagesaarthi.com/trust",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/trust#software",
      "name": "GarageSaarthi Cloud Security & Trust Framework",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description":
        "Bank-grade 256-bit SSL encryption, multi-tenant cloud isolation, and zero third-party data monetization for automobile workshops.",
      "url": "https://www.garagesaarthi.com/trust",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/trust#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.garagesaarthi.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Trust Centre",
          item: "https://www.garagesaarthi.com/trust",
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TrustPage />
    </>
  );
}
