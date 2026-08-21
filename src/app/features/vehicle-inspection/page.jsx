import VehicleInspectionFeature from "@/src/views/features/VehicleInspectionFeature";

export const metadata = {
  title: "Digital Vehicle Inspection Software & Health Cards | GarageSaarthi",
  description:
    "Generate 100+ checkpoint digital vehicle inspection reports in minutes. Send color-coded health cards with photos and remarks instantly via WhatsApp to your customers.",
  keywords:
    "vehicle inspection software, digital health card for cars, garage inspection app, workshop inspection software, digital vehicle checklist, car inspection report software, bike inspection app, 100 point vehicle check, multi-point inspection software, auto repair inspection software, vehicle health report maker, whatsapp vehicle inspection report, mechanic inspection tool, garage repair estimates, service reminder software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/vehicle-inspection/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Digital Vehicle Inspection Software | GarageSaarthi",
    description:
      "Transform your garage with 100-point digital inspection reports. Send color-coded health cards with photos and mechanic remarks to customers instantly.",
    url: "https://www.garagesaarthi.com/features/vehicle-inspection/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Vehicle Inspection Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Vehicle Inspection Software & Health Cards | GarageSaarthi",
    description:
      "Generate beautiful color-coded vehicle inspection reports with photos and mechanic remarks. Share with customers on WhatsApp.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/features/vehicle-inspection",
      "name": "Digital Vehicle Inspection Software & Health Cards | GarageSaarthi",
      "description": "Generate 100+ checkpoint digital vehicle inspection reports in minutes. Send color-coded health cards with photos and remarks instantly via WhatsApp to your customers.",
      "url": "https://www.garagesaarthi.com/features/vehicle-inspection",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/features/vehicle-inspection#software",
      "name": "Digital Vehicle Inspection Software & Health Cards | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Generate 100+ checkpoint digital vehicle inspection reports in minutes. Send color-coded health cards with photos and remarks instantly via WhatsApp to your customers.",
      "url": "https://www.garagesaarthi.com/features/vehicle-inspection"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/vehicle-inspection#breadcrumb",
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
          name: "Vehicle Inspection",
          item: "https://www.garagesaarthi.com/features/vehicle-inspection",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is digital vehicle inspection software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digital vehicle inspection software allows mechanics to perform multi-point vehicle checks using a tablet or smartphone, recording statuses (Good/Average/Bad) and remarks for various components like engines, brakes, and tires.",
          },
        },
        {
          "@type": "Question",
          name: "Can I share the inspection report with customers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! You can instantly share a color-coded digital health card with your customers via WhatsApp, complete with mechanic remarks and photos to build trust.",
          },
        },
        {
          "@type": "Question",
          name: "Does it support custom inspection categories?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. GarageSaarthi lets you inspect predefined categories (like Exterior, Interior, Underhood) and record detailed readings and comments for every single part.",
          },
        },
      ],
    },
  ],
};

export default function VehicleInspectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VehicleInspectionFeature />
    </>
  );
}
