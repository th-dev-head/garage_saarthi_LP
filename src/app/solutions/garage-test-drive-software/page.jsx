import GarageTestDriveSoftware from "@/src/views/solutions/GarageTestDriveSoftware";

export const metadata = {
  title: "Garage Test Drive Software | Auto Workshop Road Test Solution India",
  description:
    "Automate workshop test drives with India's best road test software. Record starting & return odometer kilometers, track fuel gauges, map pre-drive body scratches, and capture digital touchscreen signatures.",
  keywords:
    "garage test drive software, workshop test drive management system, car repair test drive tracker, bike workshop road test log, mechanic test drive tracking app, vehicle damage blueprint software, digital driver signature workshop, garage road test audit software, auto repair shop test drive software india, garage saarthi test drive solution",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/garage-test-drive-software/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Test Drive Software | Auto Workshop Road Test Solution India",
    description:
      "Prevent unauthorized vehicle joyrides, fuel theft, odometer discrepancies, and scratch blame games. Complete road test governance for auto workshops in India.",
    url: "https://www.garagesaarthi.com/solutions/garage-test-drive-software/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Garage Test Drive Software Solution",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Test Drive Software | Auto Workshop Road Test Solution India",
    description:
      "Streamline workshop road tests, odometer distance tracking, visual damage marking, and digital driver signatures with GarageSaarthi.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/garage-test-drive-software/",
      "name": "Garage Test Drive Software | Auto Workshop Road Test Solution India",
      "description":
        "Automate workshop test drives with India's best road test software. Record starting & return odometer kilometers, track fuel gauges, map pre-drive body scratches, and capture digital touchscreen signatures.",
      "url": "https://www.garagesaarthi.com/solutions/garage-test-drive-software/",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/solutions/garage-test-drive-software/#software",
      "name": "GarageSaarthi Test Drive Management Software",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description":
        "Complete digital test drive and road test management software for auto repair shops and vehicle service centers in India.",
      "url": "https://www.garagesaarthi.com/solutions/garage-test-drive-software/"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/garage-test-drive-software/#breadcrumb",
      "itemListElement": [
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
          name: "Test Drive Software",
          item: "https://www.garagesaarthi.com/solutions/garage-test-drive-software/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does GarageSaarthi Test Drive software prevent vehicle misuse?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every road test requires recording the starting odometer, fuel gauge, assigned driver (with license number), and pre-drive scratch diagram. Upon return, the system calculates the exact distance driven and flags any unauthorized extra mileage or fuel drops.",
          },
        },
        {
          "@type": "Question",
          "name": "Can mechanics use this software on mobile phones in the workshop?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! GarageSaarthi is 100% mobile-friendly. Mechanics can inspect the vehicle, drop damage pins on the diagram, and capture digital touchscreen signatures directly on any Android smartphone or tablet.",
          },
        },
        {
          "@type": "Question",
          "name": "How does the digital vehicle damage diagram work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Technicians can tap anywhere on the 2D car schematic to drop pinpoint markers for scratches, dents, or cracks. Each marker can have custom notes. The condition report is signed electronically by the driver, providing permanent proof of pre-existing damages.",
          },
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
      <GarageTestDriveSoftware />
    </>
  );
}
