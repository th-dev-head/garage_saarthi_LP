import { getLocationBySlug } from "@/src/data/locationsData";
import LocationDetailView from "@/src/views/locations/LocationDetailView";

export const dynamic = "force-static";

const location = getLocationBySlug("india");

export const metadata = {
  title: location.seo.title,
  description: location.seo.description,
  keywords: location.seo.keywords,
  alternates: {
    canonical: `https://www.garagesaarthi.com/locations/${location.slug}/`,
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: location.seo.title,
    description: location.seo.description,
    url: `https://www.garagesaarthi.com/locations/${location.slug}/`,
    siteName: "GarageSaarthi",
    locale: location.locale || "en_US",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-og.webp",
        width: 1200,
        height: 630,
        alt: `GarageSaarthi Auto Workshop Software in ${location.countryName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: location.seo.title,
    description: location.seo.description,
    images: ["https://www.garagesaarthi.com/garagesaarthi-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `https://www.garagesaarthi.com/locations/${location.slug}/#webpage`,
      name: location.seo.title,
      description: location.seo.description,
      url: `https://www.garagesaarthi.com/locations/${location.slug}/`,
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": `https://www.garagesaarthi.com/locations/${location.slug}/#breadcrumb`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `https://www.garagesaarthi.com/locations/${location.slug}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.garagesaarthi.com/" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.garagesaarthi.com/locations/" },
        { "@type": "ListItem", position: 3, name: location.countryName, item: `https://www.garagesaarthi.com/locations/${location.slug}/` },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `https://www.garagesaarthi.com/locations/${location.slug}/#software`,
      name: `GarageSaarthi - ${location.countryName} Edition`,
      operatingSystem: "Web, iOS, Android",
      applicationCategory: "BusinessApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: location.currency,
        description: "7-day free trial, no credit card required",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "1280",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `https://www.garagesaarthi.com/locations/${location.slug}/#faq`,
      mainEntity: (location.faqs || []).map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
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
      <LocationDetailView location={location} />
    </>
  );
}
