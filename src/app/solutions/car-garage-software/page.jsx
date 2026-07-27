import CarGarageSoftware from "@/src/views/solutions/CarGarageSoftware";

export const metadata = {
  title: "Car Garage Management Software in India | GarageSaarthi",
  description:
    "Manage job cards, car service history, inventory, billing, customers, staff and service alerts with GarageSaarthi car garage management software.",
  keywords:
    "car garage management software, auto repair shop software, automobile workshop software, garage management software, vehicle workshop software, workshop management software, garage management system, car garage software India",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/car-garage-software",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Car Garage Management Software | GarageSaarthi",
    description:
      "Manage your car garage with digital job cards, inventory, customer records, billing, service alerts, staff management and reports.",
    url: "https://www.garagesaarthi.com/solutions/car-garage-software",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-car-garage-management-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Car Garage Management Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Garage Management Software | GarageSaarthi",
    description:
      "Manage your car garage with digital job cards, inventory, customer records, billing, service alerts, staff management and reports.",
    images: [
      "https://www.garagesaarthi.com/garagesaarthi-car-garage-management-software-og.webp",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/car-garage-software",
      name: "Car Garage Management Software in India | GarageSaarthi",
      description:
        "Manage job cards, car service history, inventory, billing, customers, staff and service alerts with GarageSaarthi car garage management software.",
      url: "https://www.garagesaarthi.com/solutions/car-garage-software",
      about: "Car garage management software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id":
          "https://www.garagesaarthi.com/solutions/car-garage-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.garagesaarthi.com/solutions/car-garage-software#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.garagesaarthi.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Solutions",
          item: "https://www.garagesaarthi.com/solutions",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Car Garage Software",
          item: "https://www.garagesaarthi.com/solutions/car-garage-software",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is car garage management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Car garage management software is a digital platform that helps car garage owners manage daily operations from a single system. It covers job cards, customer vehicle records, spare parts inventory, GST billing, service reminders, staff attendance, and financial reporting — replacing paper registers and disconnected tools.",
          },
        },
        {
          "@type": "Question",
          name: "How does GarageSaarthi help manage a car garage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GarageSaarthi helps car garages manage the complete workflow — from recording a customer vehicle on arrival and creating a digital job card, to tracking repair progress, generating a GST invoice, processing payments, and sending an automated service reminder when the vehicle is next due.",
          },
        },
        {
          "@type": "Question",
          name: "Can I create digital job cards for car repairs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GarageSaarthi replaces paper job cards with fast digital records. You can log the customer's name, vehicle registration number, complaints, mechanic assignment, parts used, and delivery estimate — all from a web browser or the Android app.",
          },
        },
        {
          "@type": "Question",
          name: "Does GarageSaarthi offer a free trial?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GarageSaarthi offers a 7-day free trial with full access to all features. No credit card is required to register and start using the platform for your car garage.",
          },
        },
      ],
    },
  ],
};

export default function CarGarageSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CarGarageSoftware />
    </>
  );
}
