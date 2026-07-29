import VehicleManagementFeature from "@/src/views/features/VehicleManagementFeature";

export const metadata = {
  title: "Garage Vehicle Management Software & Record Database | GarageSaarthi",
  description:
    "Secure workshop vehicle record management software for garages in India. Track Odometer KM logs, diagnostics checkups, service history logs, damage records, and parts history. Start a 7-day free trial.",
  keywords:
    "vehicle management software, vehicle management system, vehicle tracking software for workshops, workshop vehicle management software, garage vehicle management software, automotive vehicle management software, vehicle record management software, vehicle database management software, customer vehicle management software, vehicle information management software, vehicle history management software, vehicle service history software, vehicle maintenance history software, vehicle repair history software, vehicle maintenance record software, vehicle service record software, vehicle service records management, digital vehicle records, vehicle profile management, vehicle details management software, software to manage customer vehicles, software to track vehicle service history, software for vehicle maintenance records, garage software for vehicle records, workshop software for vehicle history, digital vehicle service records software, customer vehicle tracking software, vehicle service management software, workshop vehicle records management, cloud vehicle management software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/vehicles",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Vehicle Management Software & Database | GarageSaarthi",
    description:
      "Maintain secure digital vehicle records. Track service histories, chassis details, odometer logs, and body damage logs.",
    url: "https://www.garagesaarthi.com/features/vehicles",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Vehicle Management Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Vehicle Management Software & Database | GarageSaarthi",
    description:
      "Digital vehicle service records and Odometer tracking for automotive workshops.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/features/vehicles",
      "name": "Garage Vehicle Management Software & Record Database | GarageSaarthi",
      "description": "Secure workshop vehicle record management software for garages in India. Track Odometer KM logs, diagnostics checkups, service history logs, damage records, and parts history. Start a 7-day free trial.",
      "url": "https://www.garagesaarthi.com/features/vehicles",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/features/vehicles#software",
      "name": "Garage Vehicle Management Software & Record Database | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Secure workshop vehicle record management software for garages in India. Track Odometer KM logs, diagnostics checkups, service history logs, damage records, and parts history. Start a 7-day free trial.",
      "url": "https://www.garagesaarthi.com/features/vehicles"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/vehicles#breadcrumb",
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
          name: "Vehicle Management",
          item: "https://www.garagesaarthi.com/features/vehicles",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is workshop vehicle management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Workshop vehicle management software is a cloud-based system that allows garages to track complete vehicle records, including diagnostic history logs, past repair sheets, Odometer/KM readings, engine codes, and parts replaced.",
          },
        },
        {
          "@type": "Question",
          name: "Can I track the full service history of returning customer vehicles?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Every repair, part replacement, and billing transaction is saved permanently under the vehicle's registration plate number, allowing you to access complete service histories in 2 seconds.",
          },
        },
        {
          "@type": "Question",
          name: "Does it support Odometer and KM logging?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can record vehicle Odometer/KM readings during intake. This helps calculate upcoming service targets and intervals, which triggers automated service reminders.",
          },
        },
      ],
    },
  ],
};

export default function VehicleManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VehicleManagementFeature />
    </>
  );
}
