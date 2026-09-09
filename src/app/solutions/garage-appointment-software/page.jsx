import GarageAppointmentSoftware from "@/src/views/solutions/GarageAppointmentSoftware";

export const metadata = {
  title: "Garage Appointment & Pickup-Drop Software | GarageSaarthi",
  description:
    "End-to-end appointment scheduling, doorstep vehicle pickup & delivery logistics, and driver Google Maps navigation software for auto workshops & car garages in India.",
  keywords:
    "garage appointment software, workshop booking system, car service pickup drop software, auto repair appointment booking app, garage appointment scheduling India, mechanic pickup and drop app, doorstep vehicle repair booking, workshop calendar management software, car garage booking software, online garage appointment system",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/garage-appointment-software/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Appointment & Doorstep Pickup-Drop Software | GarageSaarthi",
    description:
      "Manage customer service appointments, dispatch drivers with 1-click Google Maps links, and convert bookings into job cards in 1-click.",
    url: "https://www.garagesaarthi.com/solutions/garage-appointment-software/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Garage Appointment & Pickup-Drop Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Appointment & Doorstep Pickup-Drop Software | GarageSaarthi",
    description:
      "Manage customer service appointments, dispatch drivers with 1-click Google Maps links, and convert bookings into job cards in 1-click.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/garage-appointment-software",
      "name": "Garage Appointment & Pickup-Drop Software | GarageSaarthi",
      "description":
        "End-to-end appointment scheduling, doorstep vehicle pickup & delivery logistics, and driver Google Maps navigation software for auto workshops & car garages in India.",
      "url": "https://www.garagesaarthi.com/solutions/garage-appointment-software",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/solutions/garage-appointment-software#software",
      "name": "GarageSaarthi Appointment & Doorstep Pickup-Drop Software",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description":
        "End-to-end appointment scheduling, doorstep vehicle pickup & delivery logistics, and driver Google Maps navigation software for auto workshops & car garages in India.",
      "url": "https://www.garagesaarthi.com/solutions/garage-appointment-software",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/garage-appointment-software#breadcrumb",
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
          name: "Garage Appointment Software",
          item: "https://www.garagesaarthi.com/solutions/garage-appointment-software",
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
      <GarageAppointmentSoftware />
    </>
  );
}
