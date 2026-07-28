import LeaveManagementFeature from "@/src/views/features/LeaveManagementFeature";

export const metadata = {
  title: "Garage Staff Leave Management Software | GarageSaarthi",
  description:
    "All-in-one employee leave management software for automotive workshops & garages in India. Track mechanic leave requests, approval workflows, annual leave records, and digital leave tracking.",
  keywords:
    "leave management software, employee leave management software, staff leave management software, leave management system, leave management app, online leave management system, employee leave tracking software, leave tracking software, leave request management software, employee leave tracker, staff leave tracker, leave approval software, leave approval system, annual leave management software, employee absence management software, absence management software, leave and attendance management software, employee leave application software, leave record management software, digital leave management system, cloud leave management software, leave management software for workshops, leave management software for garages, garage employee leave management, workshop staff leave management",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/leave-management",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Staff Leave Management Software | GarageSaarthi",
    description:
      "Track mechanic leave requests, approval workflows, annual leave records, and digital leave tracking for Indian auto repair workshops.",
    url: "https://www.garagesaarthi.com/features/leave-management",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage-attendance-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Leave Management Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Staff Leave Management Software | GarageSaarthi",
    description:
      "Track mechanic leave requests, approval workflows, annual leave records, and digital leave tracking for Indian auto repair workshops.",
    images: ["https://www.garagesaarthi.com/garage-attendance-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/leave-management#breadcrumb",
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
          name: "Leave Management",
          item: "https://www.garagesaarthi.com/features/leave-management",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How can mechanics request leave in GarageSaarthi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mechanics can apply for sick leave, casual leave, or earned leave directly through the mobile app or request approval from the garage manager.",
          },
        },
        {
          "@type": "Question",
          name: "Does leave management auto-adjust monthly payroll salaries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Approved and unapproved leaves automatically adjust present days and paid leave balances in monthly salary calculations.",
          },
        },
      ],
    },
  ],
};

export default function LeaveManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LeaveManagementFeature />
    </>
  );
}
