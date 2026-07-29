import GarageAttendanceSoftware from "@/src/views/solutions/GarageAttendanceSoftware";

export const metadata = {
  title: "Garage Attendance Software for Workshops | GarageSaarthi",
  description:
    "Track mechanic and staff attendance with GarageSaarthi garage attendance software. Manage daily attendance, leave and payroll records from one platform.",
  keywords:
    "garage attendance software, workshop attendance software, mechanic attendance software, mechanic attendance app, attendance management software for garage, employee attendance software for garage, garage employee attendance system",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/garage-attendance-software",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Attendance Software for Workshops | GarageSaarthi",
    description:
      "Manage mechanic and workshop staff attendance digitally with GarageSaarthi. Keep attendance, leave and payroll operations organized in one platform.",
    url: "https://www.garagesaarthi.com/solutions/garage-attendance-software",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage-attendance-software-og.webp",
        width: 1200,
        height: 630,
        alt: "Garage Attendance Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Attendance Software for Workshops | GarageSaarthi",
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
      "@id": "https://www.garagesaarthi.com/solutions/garage-attendance-software",
      name: "Garage Attendance Software for Workshops | GarageSaarthi",
      description:
        "Track mechanic and staff attendance with GarageSaarthi garage attendance software. Manage daily attendance, leave and payroll records from one platform.",
      url: "https://www.garagesaarthi.com/solutions/garage-attendance-software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/garage-attendance-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/garage-attendance-software#breadcrumb",
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
          name: "Garage Attendance Software",
          item: "https://www.garagesaarthi.com/solutions/garage-attendance-software",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/solutions/garage-attendance-software#software",
      "name": "Garage Attendance Software for Workshops | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Track mechanic and staff attendance with GarageSaarthi garage attendance software. Manage daily attendance, leave and payroll records from one platform.",
      "url": "https://www.garagesaarthi.com/solutions/garage-attendance-software"
    },
  ],
};

export default function page() {
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
