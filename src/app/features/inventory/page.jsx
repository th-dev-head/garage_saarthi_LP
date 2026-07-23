import InventoryManagementFeature from "@/src/views/InventoryManagementFeature";

export const metadata = {
  title: "Garage Spare Parts & Inventory Management Software | GarageSaarthi",
  description:
    "All-in-one spare parts and inventory management software for auto repair workshops & garages in India. Real-time stock deduction, low-stock alerts, barcode lookup, and vendor purchase logs.",
  keywords:
    "garage inventory software, workshop spare parts management, auto repair stock tracker, spare parts inventory management software, garage stock control software India, low stock alert garage app, auto parts barcode inventory, garage inventory tracking software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/inventory",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Spare Parts & Inventory Management Software | GarageSaarthi",
    description:
      "Track spare parts and lubricants in real time. Eliminate stock theft, get automated low-stock alerts, and track vendor purchase invoices.",
    url: "https://www.garagesaarthi.com/features/inventory",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Spare Parts Inventory Management Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Spare Parts & Inventory Management Software | GarageSaarthi",
    description:
      "Real-time spare parts stock tracking & low-stock alerts for Indian auto workshops.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/inventory#breadcrumb",
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
          name: "Inventory Management",
          item: "https://www.garagesaarthi.com/features/inventory",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is garage inventory management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Garage inventory software is an application that tracks spare parts, engine oils, and accessories in real time. It automatically deducts stock when parts are issued to job cards and alerts owners before critical items run out.",
          },
        },
        {
          "@type": "Question",
          name: "How does stock deduction work when creating a job card?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When a service advisor or mechanic adds spare parts or lubricants to a vehicle job card or counter sale invoice, the software automatically subtracts those quantities from your current stock level.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get notifications when spare parts are running low?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! You can define minimum reorder threshold levels for each spare part. When stock falls below that number, GarageSaarthi sends an automatic low-stock alert.",
          },
        },
      ],
    },
  ],
};

export default function InventoryManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InventoryManagementFeature />
    </>
  );
}
