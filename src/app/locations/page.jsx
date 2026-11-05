import LocationIndexView from "@/src/views/locations/LocationIndexView";

export const dynamic = "force-static";

export const metadata = {
  title: "Global Garage Management Software | Multi-Country Workshop System",
  description:
    "Cloud-based garage management software supported across UAE, Saudi Arabia, India, USA, UK, Australia, Canada, and New Zealand. Localized tax invoicing, multi-currency support, and digital job card operations.",
  keywords:
    "global garage management software, international workshop management system, garage software UAE, garage software Saudi Arabia, auto workshop software UK, car repair software USA, garage billing software Australia, workshop software Canada",
  alternates: {
    canonical: "https://www.garagesaarthi.com/locations/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Global Garage Management Software | Multi-Country Workshop System",
    description:
      "Cloud-based auto repair workshop software for global garages. Localized tax compliance, digital job cards, and parts inventory.",
    url: "https://www.garagesaarthi.com/locations/",
    siteName: "GarageSaarthi",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Garage Management Software | Multi-Country Workshop System",
    description:
      "Cloud-based auto repair workshop software for global garages. Localized tax compliance, digital job cards, and parts inventory.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/locations/#webpage",
      name: "Global Garage Management Software | GarageSaarthi",
      description:
        "Cloud-based garage management software supported across UAE, Saudi Arabia, India, USA, UK, Australia, Canada, and New Zealand.",
      url: "https://www.garagesaarthi.com/locations/",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/locations/#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/locations/#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.garagesaarthi.com/" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.garagesaarthi.com/locations/" },
      ],
    },
  ],
};

export default function LocationsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocationIndexView />
    </>
  );
}

