import AutoRepairShop from "@/src/views/AutoRepairShop";

export const metadata = {
  title: "Auto Repair Shop Software in India | GarageSaarthi",
  description:
    "Manage job cards, repairs, inventory, GST billing, customers, vehicles and service reminders with GarageSaarthi auto repair shop software. Start a 7-day free trial.",
  keywords:
    "auto repair shop software, auto repair software, auto repair management software, auto repair workshop software, automobile repair shop software, automotive repair software, car repair shop software, repair shop management software, auto repair shop management system, automotive service management software, vehicle repair shop software, mechanic shop software, mechanic workshop software, repair garage software, garage repair software, workshop repair software, automotive workshop management software, vehicle workshop management software, digital auto repair software, auto repair software India, auto workshop software India, automotive workshop software India, best auto repair software, best auto repair shop software, best software for auto repair shop, best car repair software, cloud auto repair software, online auto repair software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/auto-repair-shop-software",
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Auto Repair Shop Software for Modern Repair Workshops",
    description:
      "Manage repair jobs, digital job cards, spare parts, billing, customers and service follow-ups with GarageSaarthi.",
    url: "https://www.garagesaarthi.com/solutions/auto-repair-shop-software",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-auto-repair-shop-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Auto Repair Shop Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Repair Shop Software for Modern Repair Workshops",
    description:
      "Manage repair jobs, digital job cards, spare parts, billing, customers and service follow-ups with GarageSaarthi.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-auto-repair-shop-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/auto-repair-shop-software",
      name: "Auto Repair Shop Software in India | GarageSaarthi",
      description:
        "Manage job cards, repairs, inventory, GST billing, customers, vehicles and service reminders with GarageSaarthi auto repair shop software.",
      url: "https://www.garagesaarthi.com/solutions/auto-repair-shop-software",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/auto-repair-shop-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/auto-repair-shop-software#breadcrumb",
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
          name: "Auto Repair Shop Software",
          item: "https://www.garagesaarthi.com/solutions/auto-repair-shop-software",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/#software",
      name: "GarageSaarthi",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Android",
      url: "https://www.garagesaarthi.com/",
      description:
        "Complete Cloud-Based Garage and Workshop Management Software with GST billing, digital job cards, and automated service reminders.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        description: "7-Day Free Trial Available",
      },
    },
  ],
};

export default function AutoRepairShopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AutoRepairShop />
    </>
  );
}
