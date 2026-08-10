import GarageAttendanceSoftware from "@/src/views/solutions/GarageAttendanceSoftware";

export const metadata = {
  title: "Garage Attendance Management Software for Workshops | GarageSaarthi",
  description:
    "Track mechanic and workshop staff attendance digitally with GarageSaarthi. Log check-in, check-out, leaves, and mechanic work hours from one platform.",
  keywords:
    "garage attendance software, workshop attendance management, mechanic attendance app, garage staff attendance tracking, employee attendance software for garage, mechanic check in software India, garage leave and attendance manager",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/attendance/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Attendance Management Software for Workshops | GarageSaarthi",
    description:
      "Manage mechanic and workshop staff attendance digitally with GarageSaarthi. Keep attendance, leave and payroll operations organized in one platform.",
    url: "https://www.garagesaarthi.com/features/attendance/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage-attendance-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Attendance Management Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Attendance Management Software for Workshops | GarageSaarthi",
    description:
      "Manage mechanic and workshop staff attendance digitally with GarageSaarthi. Keep attendance, leave and payroll operations organized in one platform.",
    images: ["https://www.garagesaarthi.com/garage-attendance-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/features/attendance",
      "name": "Garage Attendance Management Software for Workshops | GarageSaarthi",
      "description": "Track mechanic and workshop staff attendance digitally with GarageSaarthi. Log check-in, check-out, leaves, and mechanic work hours from one platform.",
      "url": "https://www.garagesaarthi.com/features/attendance",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/features/attendance#software",
      "name": "Garage Attendance Management Software for Workshops | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Track mechanic and workshop staff attendance digitally with GarageSaarthi. Log check-in, check-out, leaves, and mechanic work hours from one platform.",
      "url": "https://www.garagesaarthi.com/features/attendance"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/attendance#breadcrumb",
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
          name: "Attendance Management",
          item: "https://www.garagesaarthi.com/features/attendance",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does mechanic attendance tracking work in GarageSaarthi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mechanics can check in and check out using the mobile app or workshop tablet. GarageSaarthi logs exact working hours, present days, and overtime.",
          },
        },
        {
          "@type": "Question",
          name: "Does attendance sync automatically with monthly salary payroll?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Attendance logs directly feed into monthly payroll and mechanic commission payouts, eliminating salary disputes.",
          },
        },
      ],
    },
  ],
};

export default function AttendancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GarageAttendanceSoftware />
    </>
  );
}
