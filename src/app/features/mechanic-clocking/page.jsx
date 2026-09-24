import MechanicClockingFeature from "@/src/views/features/MechanicClockingFeature";

export const metadata = {
  title: "Mechanic Clocking & Labor Time Tracking Software | GarageSaarthi",
  description:
    "Track mechanic hours, bay productivity, estimated vs actual labor times, and parts-waiting pauses in real time with GarageSaarthi.",
  keywords:
    "mechanic clocking software, auto repair labor time tracker, garage bay management, technician productivity software, workshop mechanic efficiency, garage time clock app, job card labor tracking",
  alternates: {
    canonical: "/features/mechanic-clocking/",
  },
  openGraph: {
    title: "Mechanic Clocking & Labor Time Tracking Software | GarageSaarthi",
    description:
      "Track mechanic hours, bay productivity, estimated vs actual labor times, and technician incentives with GarageSaarthi.",
    url: "/features/mechanic-clocking/",
    type: "website",
  },
};

export default function MechanicClockingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "GarageSaarthi Mechanic Clocking & Labor Tracking",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, Android, iOS",
        "description":
          "Task-wise mechanic clocking, live bay stopwatches, pause reason tracking, and labor productivity analytics for auto workshops.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR",
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://garagesaarthi.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Features",
            "item": "https://garagesaarthi.com/features/",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Mechanic Clocking",
            "item": "https://garagesaarthi.com/features/mechanic-clocking/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do mechanics clock into job card services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mechanics log in through mobile app or workshop bay tablet and tap 'Clock In' to start the live timer against their assigned job task.",
            },
          },
          {
            "@type": "Question",
            "name": "What happens when a technician needs to pause for parts or lunch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The mechanic taps 'Pause' and selects a reason like 'Parts Waiting', 'Lathe Turning', or 'Lunch Break', separating active wrench time from non-productive idle time.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MechanicClockingFeature />
    </>
  );
}
