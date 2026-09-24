import TestDriveFeature from "@/src/views/features/TestDriveFeature";

export const metadata = {
  title: "Garage Test Drive & Road Test Management Software | GarageSaarthi",
  description:
    "Digital test drive management software for automobile workshops in India. Log odometer kilometers, fuel levels, mark vehicle body scratches on 2D diagrams, and capture digital driver signatures.",
  keywords:
    "garage test drive software, workshop test drive management, digital test drive logbook, auto repair road test tracking, odometer distance tracking garage, vehicle body damage marking software, digital signature pad for garage, mechanic test drive app, workshop road test inspection, pre delivery road test software, car garage test drive tracker, bike workshop test drive log, vehicle misuse prevention garage, garage saarthi test drive",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/test-drive/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Test Drive & Road Test Management Software | GarageSaarthi",
    description:
      "Eliminate unauthorized joyrides, fuel theft, odometer discrepancies, and scratch blame games with digital test drive logs, vehicle body damage mapping, and electronic driver signatures.",
    url: "https://www.garagesaarthi.com/features/test-drive/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Test Drive & Road Test Management Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Test Drive & Road Test Management Software | GarageSaarthi",
    description:
      "Log starting & return odometer readings, fuel gauges, vehicle body scratch diagrams, and touchscreen driver signatures for Indian auto workshops.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/features/test-drive/",
      "name": "Garage Test Drive & Road Test Management Software | GarageSaarthi",
      "description":
        "Digital test drive management software for automobile workshops in India. Log odometer kilometers, fuel levels, mark vehicle body scratches on 2D diagrams, and capture digital driver signatures.",
      "url": "https://www.garagesaarthi.com/features/test-drive/",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/features/test-drive/#software",
      "name": "Garage Test Drive & Road Test Management Software | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description":
        "Digital test drive management software for automobile workshops in India. Log odometer kilometers, fuel levels, mark vehicle body scratches on 2D diagrams, and capture digital driver signatures.",
      "url": "https://www.garagesaarthi.com/features/test-drive/"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/test-drive/#breadcrumb",
      "itemListElement": [
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
          name: "Test Drive Management",
          item: "https://www.garagesaarthi.com/features/test-drive/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is digital test drive tracking in GarageSaarthi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital test drive tracking is an integrated module in GarageSaarthi that logs every vehicle road test conducted by mechanics, technicians, or customers. It records starting and return odometer readings, fuel gauges, pre-drive scratch/dent blueprint markings, driver authorization, and electronic digital signatures to prevent joyrides, mileage tampering, fuel disputes, and damage blame games.",
          },
        },
        {
          "@type": "Question",
          "name": "How does the system calculate distance driven automatically?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When a test drive is initiated, the supervisor inputs the current start odometer reading. Upon return, entering the return odometer automatically computes the exact kilometers driven (Distance = Return Odometer - Start Odometer). If distance exceeds standard road test limits, it is clearly highlighted for management review.",
          },
        },
        {
          "@type": "Question",
          "name": "How does visual vehicle damage mapping protect my workshop?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Technicians use an interactive 2D vehicle blueprint to tap and place coordinate pins for any existing scratches, dents, cracks, or paint chips before handing over the vehicle keys. By capturing the driver's signature on this condition report, the workshop has indisputable proof of pre-existing vehicle defects.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I record driving license numbers and driver contact details?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! GarageSaarthi allows you to categorize drivers as Staff, Customer, or Other Driver. You can record their full name, mobile number, and government Driving License (DL) number, ensuring legal compliance and driver accountability in case of traffic violations or road incidents.",
          },
        },
        {
          "@type": "Question",
          "name": "How does the digital signature feature work during key handover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The system includes an HTML5 touchscreen digital signature pad. Drivers and supervisors can sign directly using their finger on a smartphone/tablet or using a mouse on counter PCs. The signature is encrypted and permanently stamped on the test drive record.",
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
      <TestDriveFeature />
    </>
  );
}
