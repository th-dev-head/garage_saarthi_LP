import GaragePayrollSoftware from "@/src/views/solutions/GaragePayrollSoftware";

export const metadata = {
  title: "Garage Payroll Software for Workshops | GarageSaarthi",
  description:
    "Manage mechanic salaries and workshop staff payroll with GarageSaarthi garage payroll software. Connect payroll, attendance and leave records in one platform.",
  keywords:
    "garage payroll software, workshop payroll software, mechanic payroll software, garage salary management software, workshop salary management software, payroll management software for garage, automobile workshop payroll software, automotive payroll software, garage employee payroll software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/garage-payroll-software/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Payroll Software for Workshops | GarageSaarthi",
    description:
      "Manage mechanic salaries, employee payroll, attendance and leave records with GarageSaarthi’s workshop payroll management software.",
    url: "https://www.garagesaarthi.com/solutions/garage-payroll-software/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage-payroll-software-og.webp",
        width: 1200,
        height: 630,
        alt: "Garage Payroll Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Payroll Software for Workshops | GarageSaarthi",
    description:
      "Manage mechanic salaries, employee payroll, attendance and leave records with GarageSaarthi’s workshop payroll management software.",
    images: ["https://www.garagesaarthi.com/garage-payroll-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/garage-payroll-software",
      name: "Garage Payroll Software for Workshops | GarageSaarthi",
      description:
        "Manage mechanic salaries and workshop staff payroll with GarageSaarthi garage payroll software. Connect payroll, attendance and leave records in one platform.",
      url: "https://www.garagesaarthi.com/solutions/garage-payroll-software/",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/garage-payroll-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/garage-payroll-software#breadcrumb",
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
          name: "Garage Payroll Software",
          item: "https://www.garagesaarthi.com/solutions/garage-payroll-software",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/solutions/garage-payroll-software#software",
      "name": "Garage Payroll Software for Workshops | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Manage mechanic salaries and workshop staff payroll with GarageSaarthi garage payroll software. Connect payroll, attendance and leave records in one platform.",
      "url": "https://www.garagesaarthi.com/solutions/garage-payroll-software"
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
      <GaragePayrollSoftware />
    </>
  );
}
