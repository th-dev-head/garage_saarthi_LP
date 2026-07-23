import TruckWorkshopSoftware from "@/src/views/TruckWorkshopSoftware";

export const metadata = {
  title: "Truck Workshop Software in India | GarageSaarthi",
  description:
    "Manage truck job cards, vehicle records, inventory, billing, staff and workshop operations with GarageSaarthi truck workshop software. Start a 7-day free trial.",
  keywords:
    "truck workshop software, truck garage software, truck workshop management software, truck garage management software, truck repair shop software, heavy vehicle workshop software, heavy vehicle garage software, commercial vehicle workshop software, commercial vehicle garage software, truck service management software, truck service software, truck maintenance software, truck maintenance management software, truck workshop ERP, truck garage ERP",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/truck-workshop-software",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Truck Workshop Software for Heavy Vehicle Workshops | GarageSaarthi",
    description:
      "Manage truck repair jobs, commercial vehicle records, spare parts, billing, staff and daily workshop operations with GarageSaarthi.",
    url: "https://www.garagesaarthi.com/solutions/truck-workshop-software",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-truck-workshop-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Truck Workshop Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Truck Workshop Software for Heavy Vehicle Workshops | GarageSaarthi",
    description:
      "Manage truck repair jobs, commercial vehicle records, spare parts, billing, staff and daily workshop operations with GarageSaarthi.",
    images: [
      "https://www.garagesaarthi.com/garagesaarthi-truck-workshop-software-og.webp",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/truck-workshop-software",
      name: "Truck Workshop Software in India | GarageSaarthi",
      description:
        "Manage truck job cards, vehicle records, inventory, billing, staff and workshop operations with GarageSaarthi truck workshop software. Start a 7-day free trial.",
      url: "https://www.garagesaarthi.com/solutions/truck-workshop-software",
      about: "Truck workshop software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id":
          "https://www.garagesaarthi.com/solutions/truck-workshop-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.garagesaarthi.com/solutions/truck-workshop-software#breadcrumb",
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
          name: "Truck Workshop Software",
          item: "https://www.garagesaarthi.com/solutions/truck-workshop-software",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is truck workshop software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Truck workshop software is a digital system used to manage repair jobs, vehicle records, inventory, billing, customers, staff and daily workshop operations.",
          },
        },
        {
          "@type": "Question",
          name: "Can GarageSaarthi be used by heavy vehicle workshops?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GarageSaarthi is highly adaptable and can be configured to manage heavy vehicle garages, commercial workshops and truck repair hubs, handling large parts inventory and multi-branch jobs.",
          },
        },
        {
          "@type": "Question",
          name: "Can I create digital job cards for truck repairs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can replace paper registers with digital job cards to log vehicles, detail repair issues, assign jobs to mechanics and monitor job status.",
          },
        },
        {
          "@type": "Question",
          name: "Can I manage truck spare parts and workshop inventory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can manage specialized heavy truck parts, track stock levels, assign parts to active job cards, and perform direct counter sales billing.",
          },
        },
        {
          "@type": "Question",
          name: "Does GarageSaarthi support GST billing for truck workshops?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. It supports GST billing, customized invoice series, payment tracking, and lets you generate clean invoices for transport fleets and commercial clients.",
          },
        },
        {
          "@type": "Question",
          name: "Can I maintain truck repair and service history?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. It automatically records every repair task and spare part used on a vehicle, building a digital service timeline for future reference.",
          },
        },
        {
          "@type": "Question",
          name: "Can GarageSaarthi send WhatsApp service alerts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can set service intervals and send service due reminders or invoice updates directly to your clients on WhatsApp.",
          },
        },
        {
          "@type": "Question",
          name: "Can I manage mechanics and staff with GarageSaarthi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can manage team attendance, track leave records, define role-based access, and automatically compute salaries and commissions.",
          },
        },
        {
          "@type": "Question",
          name: "Can I manage multiple truck workshop branches?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GarageSaarthi supports multi-branch controls, allowing you to check inventory across branches and view consolidated business analytics.",
          },
        },
        {
          "@type": "Question",
          name: "Is GarageSaarthi available as a truck workshop app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GarageSaarthi offers a mobile Android app available on the Play Store as well as a cloud-based web application for tablets and computers.",
          },
        },
        {
          "@type": "Question",
          name: "How much does truck workshop software cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GarageSaarthi offers transparent, affordable pricing options depending on your setup. Please refer to our pricing page for details.",
          },
        },
        {
          "@type": "Question",
          name: "Does GarageSaarthi offer a free trial?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We offer a 7-day free trial with no card required, giving you access to all features to test with your daily truck repair workflow.",
          },
        },
      ],
    },
  ],
};

export default function TruckWorkshopSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TruckWorkshopSoftware />
    </>
  );
}
