import VehicleManagementFeature from "@/src/views/features/VehicleManagementFeature";

export const metadata = {
  title: "Garage Vehicle Management Software & Record Database | GarageSaarthi",
  description:
    "Secure workshop vehicle record management software for garages in India. Track Odometer KM logs, diagnostics checkups, service history logs, damage records, and parts history. Start a 7-day free trial.",
  keywords:
    "vehicle management software, vehicle management system, vehicle tracking software for workshops, workshop vehicle management software, garage vehicle management software, automotive vehicle management software, vehicle record management software, vehicle database management software, customer vehicle management software, vehicle information management software, vehicle history management software, vehicle service history software, vehicle maintenance history software, vehicle repair history software, vehicle maintenance record software, vehicle service record software, vehicle service records management, digital vehicle records, vehicle profile management, vehicle details management software, software to manage customer vehicles, software to track vehicle service history, software for vehicle maintenance records, garage software for vehicle records, workshop software for vehicle history, digital vehicle service records software, customer vehicle tracking software, vehicle service management software, workshop vehicle records management, cloud vehicle management software, garage amc management software, vehicle amc contract tracker, vehicle documents locker software, rc insurance puc locker garage, split insurance od tp expiry tracker",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/vehicles/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Vehicle Management Software & Database | GarageSaarthi",
    description:
      "Maintain secure digital vehicle records. Track service histories, chassis details, odometer logs, AMC contracts, and digital document locker.",
    url: "https://www.garagesaarthi.com/features/vehicles/",
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
      "Digital vehicle service records, AMC contract tracking, and digital document locker for automotive workshops.",
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
      "description": "Secure workshop vehicle record management software for garages in India. Track Odometer KM logs, diagnostics checkups, service history logs, damage records, AMC contracts, and digital document locker. Start a 7-day free trial.",
      "url": "https://www.garagesaarthi.com/features/vehicles",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/features/vehicles#software",
      "name": "Garage Vehicle Management Software & Record Database | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Secure workshop vehicle record management software for garages in India. Track Odometer KM logs, diagnostics checkups, service history logs, damage records, AMC contracts, and digital document locker. Start a 7-day free trial.",
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
          name: "How does AMC (Annual Maintenance Contract) management work in GarageSaarthi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "During vehicle intake or editing, you can record a 4-digit AMC contract number, contract start date, and end date. The system automatically tags the vehicle as active AMC, allowing advisors and mechanics to honor maintenance benefits and schedule timely checkups.",
          },
        },
        {
          "@type": "Question",
          name: "Can I store RC copies, insurance policies, and PUC certificates digitally?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Every vehicle has a dedicated Digital Document Locker. You can upload PDFs or images of Vehicle RC (Front/Back), Insurance Policies, Driving Licenses, PUC Certificates, and PAN cards up to 15MB each for lifetime access.",
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
