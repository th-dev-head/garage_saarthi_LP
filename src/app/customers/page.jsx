import CustomersPage from "@/src/views/CustomersPage";

export const metadata = {
  title: "GarageSaarthi Customer Stories & Reviews | Real Workshop Results",
  description:
    "Discover how Indian automobile workshops, bike service centers, and detailing studios streamline job cards, plug spare part leakage, and boost revenue with GarageSaarthi.",
  keywords:
    "garage software reviews, workshop management case studies, auto repair shop software proof, GarageSaarthi customers, car garage testimonials, garage management results India",
  alternates: {
    canonical: "https://www.garagesaarthi.com/customers/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "GarageSaarthi Customer Stories & Reviews | Proven Workshop Results",
    description:
      "Real workshops, measurable outcomes. See how garages across India run faster job cards, stop billing leakage, and delight vehicle owners.",
    url: "https://www.garagesaarthi.com/customers/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Customer Stories and Verified Workshop Reviews",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "GarageSaarthi Customer Stories & Reviews | Proven Workshop Results",
    description:
      "Real workshops, measurable outcomes. See how garages across India run faster job cards, stop billing leakage, and delight vehicle owners.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/customers",
      "name": "GarageSaarthi Customer Stories & Reviews | Real Workshop Results",
      "description":
        "Discover how Indian automobile workshops, bike service centers, and detailing studios streamline job cards, plug spare part leakage, and boost revenue with GarageSaarthi.",
      "url": "https://www.garagesaarthi.com/customers",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/customers#software",
      "name": "GarageSaarthi Workshop Management Software",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description":
        "Complete garage management software for job cards, GST billing, inventory, technician attendance, and WhatsApp automation.",
      "url": "https://www.garagesaarthi.com/customers",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/customers#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.garagesaarthi.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Customers",
          item: "https://www.garagesaarthi.com/customers",
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
      <CustomersPage />
    </>
  );
}
