import UserManagementFeature from "@/src/views/features/UserManagementFeature";

export const metadata = {
  title: "Workshop Staff & User Management Software | GarageSaarthi",
  description:
    "Secure your garage billing operations and manage mechanic user access. Create staff logins, set role-based permissions, and track daily activity logs.",
  keywords:
    "user management software, user management system, user management app, employee user management software, staff management software, employee management software, employee access management, role based access control software, role management software, user roles and permissions software, access control software, permission management software, multi user software, multi user management system, multi user access software, team management software, workforce management software, workshop staff management software, garage staff management software, garage employee management software, workshop employee management software, garage user management software, workshop user management software, garage access management software, workshop access control software, employee login management software, staff login management software, workshop user access control, garage role management software, secure user management software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/user-management/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Workshop Staff & User Management Software | GarageSaarthi",
    description:
      "Secure your garage billing operations and manage mechanic user access. Create staff logins, set role-based permissions, and track daily activity logs.",
    url: "https://www.garagesaarthi.com/features/user-management/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage-staff-management-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi User Management",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workshop Staff & User Management Software | GarageSaarthi",
    description:
      "Secure your garage billing operations and manage mechanic user access. Create staff logins, set role-based permissions, and track daily activity logs.",
    images: ["https://www.garagesaarthi.com/garage-staff-management-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/features/user-management",
      "name": "Workshop Staff & User Management Software | GarageSaarthi",
      "description": "Secure your garage billing operations and manage mechanic user access. Create staff logins, set role-based permissions, and track daily activity logs.",
      "url": "https://www.garagesaarthi.com/features/user-management",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/features/user-management#software",
      "name": "Workshop Staff & User Management Software | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Secure your garage billing operations and manage mechanic user access. Create staff logins, set role-based permissions, and track daily activity logs.",
      "url": "https://www.garagesaarthi.com/features/user-management"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/user-management#breadcrumb",
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
          name: "User Management",
          item: "https://www.garagesaarthi.com/features/user-management",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I restrict staff from viewing net workshop profits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. With role-based permissions, you can block mechanics or service advisors from seeing billing collections and financial reports entirely.",
          },
        },
      ],
    },
  ],
};

export default function UserManagementPage() {
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
