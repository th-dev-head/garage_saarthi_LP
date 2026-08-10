import MultiBranchGarageSoftware from "@/src/views/solutions/MultiBranchGarageSoftware";

export const metadata = {
  title: "Multi-Branch Garage & Workshop Management Software | GarageSaarthi",
  description:
    "Manage inventory, employee permissions, billing operations, and consolidated sales dashboards across multiple workshop branch locations with GarageSaarthi.",
  keywords:
    "multi branch garage software, multi location workshop management, central garage software, chain workshop management, multi store garage app, centralized garage database",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/branches/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Multi-Branch Garage & Workshop Management Software | GarageSaarthi",
    description:
      "Manage inventory, employee permissions, billing operations, and consolidated sales dashboards across multiple workshop branch locations with GarageSaarthi.",
    url: "https://www.garagesaarthi.com/features/branches/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-multi-branch-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Multi-Branch Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Branch Garage & Workshop Management Software | GarageSaarthi",
    description:
      "Manage inventory, employee permissions, billing operations, and consolidated sales dashboards across multiple workshop branch locations with GarageSaarthi.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-multi-branch-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/features/branches",
      "name": "Multi-Branch Garage & Workshop Management Software | GarageSaarthi",
      "description": "Manage inventory, employee permissions, billing operations, and consolidated sales dashboards across multiple workshop branch locations with GarageSaarthi.",
      "url": "https://www.garagesaarthi.com/features/branches",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/features/branches#software",
      "name": "Multi-Branch Garage & Workshop Management Software | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Manage inventory, employee permissions, billing operations, and consolidated sales dashboards across multiple workshop branch locations with GarageSaarthi.",
      "url": "https://www.garagesaarthi.com/features/branches"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/branches#breadcrumb",
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
          name: "Multi-Branch Management",
          item: "https://www.garagesaarthi.com/features/branches",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I transfer spare parts inventory between workshop branches?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, GarageSaarthi supports seamless internal stock transfers and audits between branch locations.",
          },
        },
      ],
    },
  ],
};

export default function BranchesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MultiBranchGarageSoftware />
    </>
  );
}
