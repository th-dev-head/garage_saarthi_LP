import InventoryManagementFeature from "@/src/views/features/InventoryManagementFeature";

export const metadata = {
  title: "Garage Spare Parts & Inventory Management Software | GarageSaarthi",
  description:
    "All-in-one spare parts and inventory management software for auto repair workshops & garages in India. Real-time stock deduction, low-stock alerts, barcode lookup, and vendor purchase logs.",
  keywords:
    "garage inventory software, workshop spare parts management, auto repair stock tracker, spare parts inventory management software, garage stock control software India, low stock alert garage app, auto parts barcode inventory, garage inventory tracking software, workshop inventory tracking software, spare parts tracking software for garage, garage spare parts software, automotive inventory management software, garage parts management software, workshop parts inventory system, garage stock management software, spare parts stock tracker for workshop, auto parts stock control software, garage inventory management app, workshop spare parts inventory app, cloud garage inventory software, barcode spare parts inventory software, multi branch garage inventory software, warehouse storage location management, workshop rack bin tracking software, spare parts shelf locator, auto parts bin management software, spare parts usage history software, garage item consumption tracker, job card part consumption history, counter sale stock audit",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/inventory/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Spare Parts & Inventory Management Software | GarageSaarthi",
    description:
      "Track spare parts and lubricants in real time. Audit item usage across job cards, eliminate stock theft, get automated low-stock alerts, and track storage bin locations.",
    url: "https://www.garagesaarthi.com/features/inventory/",
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
      "Real-time spare parts stock tracking, item usage history & low-stock alerts for Indian auto workshops.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/features/inventory",
      "name": "Garage Spare Parts & Inventory Management Software | GarageSaarthi",
      "description": "All-in-one spare parts and inventory management software for auto repair workshops & garages in India. Real-time stock deduction, item usage history, low-stock alerts, barcode lookup, and vendor purchase logs.",
      "url": "https://www.garagesaarthi.com/features/inventory",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/features/inventory#software",
      "name": "Garage Spare Parts & Inventory Management Software | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "All-in-one spare parts and inventory management software for auto repair workshops & garages in India. Real-time stock deduction, item usage history, low-stock alerts, barcode lookup, and vendor purchase logs.",
      "url": "https://www.garagesaarthi.com/features/inventory"
    },
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
          name: "How does the Item Consumption & Usage History tracker work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GarageSaarthi maintains a complete item-level consumption ledger. For any spare part or oil, you can view the complete chronological audit trail of which Job Cards (with vehicle & customer details) or Counter Sales consumed the item, the exact quantity deducted, billed unit price, and the assigned mechanic.",
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
