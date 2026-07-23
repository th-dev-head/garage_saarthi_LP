import GarageJobCards from "@/src/views/GarageJobCards";

export const metadata = {
  title: "Garage Job Card Software for Workshops | GarageSaarthi",
  description:
    "Create digital job cards, manage repair work orders and track garage jobs with GarageSaarthi. Built for car, bike and automotive workshops in India.",
  keywords:
    "garage job card software, garage job card system, garage job card app, digital garage job card, garage work order software, garage repair order software, workshop job card software, mechanic job card software, vehicle job card software, repair order management software, garage job sheet software, repair job tracking software, car garage job card software, car workshop job card software, vehicle repair job card software, car service job card software, paperless garage job card, online garage job card software, cloud garage job card software, garage job card management software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/garage-job-card-software",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Digital Garage Job Card Software | GarageSaarthi",
    description:
      "Create digital job cards, organize repair work and track workshop jobs with GarageSaarthi’s garage job card system.",
    url: "https://www.garagesaarthi.com/solutions/garage-job-card-software",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-garage-job-card-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Garage Job Card Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Garage Job Card Software | GarageSaarthi",
    description:
      "Create digital job cards, organize repair work and track workshop jobs with GarageSaarthi’s garage job card system.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-garage-job-card-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/garage-job-card-software",
      name: "Garage Job Card Software for Workshops | GarageSaarthi",
      description:
        "Create digital job cards, manage repair work orders and track garage jobs with GarageSaarthi.",
      url: "https://www.garagesaarthi.com/solutions/garage-job-card-software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/garage-job-card-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/garage-job-card-software#breadcrumb",
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
          name: "Garage Job Card Software",
          item: "https://www.garagesaarthi.com/solutions/garage-job-card-software",
        },
      ],
    },
  ],
};

export default function GarageJobCardSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GarageJobCards />
    </>
  );
}
