import UserManagementFeature from "@/src/views/features/UserManagementFeature";

export const metadata = {
  title: "Role-Based Access Control Software for Garages | GarageSaarthi",
  description:
    "Protect your workshop's sensitive financial data. Set role-based access configurations for admin managers, cashiers, technicians, and mechanics.",
  keywords:
    "role based access control software, role management software, user roles and permissions software, access control software, permission management software, secure user management software, staff login management software, workshop user access control, garage role management software, employee access management",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/role-based-access/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Role-Based Access Control Software for Garages | GarageSaarthi",
    description:
      "Protect your workshop's sensitive financial data. Set role-based access configurations for admin managers, cashiers, technicians, and mechanics.",
    url: "https://www.garagesaarthi.com/features/role-based-access/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage-staff-management-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Role-Based Access Control",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Role-Based Access Control Software for Garages | GarageSaarthi",
    description:
      "Protect your workshop's sensitive financial data. Set role-based access configurations for admin managers, cashiers, technicians, and mechanics.",
    images: ["https://www.garagesaarthi.com/garage-staff-management-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/features/role-based-access",
      "name": "Role-Based Access Control Software for Garages | GarageSaarthi",
      "description": "Protect your workshop",
      "url": "https://www.garagesaarthi.com/features/role-based-access",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/features/role-based-access#software",
      "name": "Role-Based Access Control Software for Garages | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Protect your workshop",
      "url": "https://www.garagesaarthi.com/features/role-based-access"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/role-based-access#breadcrumb",
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
          name: "Role-Based Access",
          item: "https://www.garagesaarthi.com/features/role-based-access",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What levels of user permissions can I define?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can restrict billing edits, stock updates, cash drawer balance views, and reports viewing individually for each workshop role.",
          },
        },
      ],
    },
  ],
};

export default function RoleBasedAccessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UserManagementFeature />
    </>
  );
}
