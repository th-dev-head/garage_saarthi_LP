import AppointmentsFeature from "@/src/views/features/AppointmentsFeature";

export const metadata = {
  title: "Workshop Appointment & Doorstep Pickup-Drop Software | GarageSaarthi",
  description:
    "Smart appointment scheduling and doorstep vehicle pickup & drop software for auto garages and workshops in India. Google Maps driver navigation, WhatsApp alerts & 1-click job cards.",
  keywords:
    "garage appointment booking software, workshop pickup and drop software, vehicle doorstep pickup app, mechanic booking system, auto service scheduling software India, garage calendar booking, doorstep car repair pickup driver tracking, workshop time slot booking app, garage customer booking software, auto repair pickup delivery software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/appointments/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Workshop Appointments & Doorstep Pickup-Drop Software | GarageSaarthi",
    description:
      "Schedule service appointments, manage doorstep vehicle pickup & drop, dispatch drivers with Google Maps navigation, and convert bookings to job cards in 1-click.",
    url: "https://www.garagesaarthi.com/features/appointments/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Workshop Appointment & Pickup-Drop Management Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workshop Appointments & Doorstep Pickup-Drop Software | GarageSaarthi",
    description:
      "Schedule service appointments, manage doorstep vehicle pickup & drop, and dispatch drivers with Google Maps navigation.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/features/appointments",
      "name": "Workshop Appointment & Doorstep Pickup-Drop Software | GarageSaarthi",
      "description":
        "Smart appointment scheduling and doorstep vehicle pickup & drop software for auto garages and workshops in India. Google Maps driver navigation, WhatsApp alerts & 1-click job cards.",
      "url": "https://www.garagesaarthi.com/features/appointments",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/features/appointments#software",
      "name": "GarageSaarthi Appointments & Pickup-Drop Management Software",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description":
        "Smart appointment scheduling and doorstep vehicle pickup & drop software for auto garages and workshops in India.",
      "url": "https://www.garagesaarthi.com/features/appointments",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/appointments#breadcrumb",
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
          name: "Appointments & Pickup-Drop",
          item: "https://www.garagesaarthi.com/features/appointments",
        },
      ],
    },
  ],
};

export default function AppointmentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AppointmentsFeature />
    </>
  );
}
