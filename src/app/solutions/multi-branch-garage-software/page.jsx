import MultiBranchGarageSoftware from "@/src/views/MultiBranchGarageSoftware";

export const metadata = {
  title: "Multi Branch Garage Software in India | GarageSaarthi",
  description:
    "Manage multiple garage and workshop branches from one platform. Track branch operations, users, reports, inventory and finances with GarageSaarthi.",
  keywords:
    "multi branch garage software, multi branch workshop software, multi garage management software, multiple garage management software, garage chain management software, workshop chain management software, multi location garage software, multi location workshop software, branch management software for garage, branch management software for workshop, centralized garage management software, centralized workshop management software, franchise garage management software, franchise workshop software, garage branch management system, workshop branch management system, cloud based multi garage software, cloud based workshop management software, multi workshop management system, garage software for multiple locations, workshop software for multiple locations, multi outlet garage software, multi outlet workshop software, garage software for franchise business, workshop software for franchise business, branch wise garage management software, branch wise workshop management software, multi branch auto repair software, auto repair software for multiple branches, multi location auto workshop software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/multi-branch-garage-software",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Multi Branch Garage Software | GarageSaarthi",
    description:
      "Manage multiple garage locations, workshop branches, users and daily operations from one centralized GarageSaarthi platform.",
    url: "https://www.garagesaarthi.com/solutions/multi-branch-garage-software",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-multi-branch-garage-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Multi Branch Garage Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi Branch Garage Software | GarageSaarthi",
    description:
      "Manage multiple garage locations, workshop branches, users and daily operations from one centralized GarageSaarthi platform.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-multi-branch-garage-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/multi-branch-garage-software",
      name: "Multi Branch Garage Software in India | GarageSaarthi",
      description:
        "Manage multiple garage and workshop branches from one platform. Track branch operations, users, reports, inventory and finances with GarageSaarthi.",
      url: "https://www.garagesaarthi.com/solutions/multi-branch-garage-software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/multi-branch-garage-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/multi-branch-garage-software#breadcrumb",
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
          name: "Multi Branch Garage Software",
          item: "https://www.garagesaarthi.com/solutions/multi-branch-garage-software",
        },
      ],
    },
  ],
};

export default function MultiBranchGarageSoftwarePage() {
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
