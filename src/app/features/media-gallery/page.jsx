import MediaGalleryFeature from "@/src/views/features/MediaGalleryFeature";

export const metadata = {
  title: "Workshop Media Gallery & Photo Management Software | GarageSaarthi",
  description:
    "Document car repair and service history with photos. Upload before & after repair images, scratch logs, and damage files directly to job cards.",
  keywords:
    "garage photo management software, workshop photo management software, vehicle photo management software, repair photo management software, garage media gallery software, workshop media gallery software, before and after photo software, before after vehicle photos, car repair photo software, workshop repair photos software, vehicle inspection photo software, garage inspection photo software, service photos management software, vehicle service photo management, digital vehicle inspection photos, workshop image management software, garage image management software, car service photo software, damage photo management software, garage documentation software, workshop documentation software, vehicle repair documentation software, vehicle condition photo software, car damage photo tracking software, workshop photo records software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/media-gallery",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Workshop Media Gallery & Photo Management Software | GarageSaarthi",
    description:
      "Document car repair and service history with photos. Upload before & after repair images, scratch logs, and damage files directly to job cards.",
    url: "https://www.garagesaarthi.com/features/media-gallery",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-media-gallery-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Media Gallery",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workshop Media Gallery & Photo Management Software | GarageSaarthi",
    description:
      "Document car repair and service history with photos. Upload before & after repair images, scratch logs, and damage files directly to job cards.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-media-gallery-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/features/media-gallery",
      "name": "Workshop Media Gallery & Photo Management Software | GarageSaarthi",
      "description": "Document car repair and service history with photos. Upload before & after repair images, scratch logs, and damage files directly to job cards.",
      "url": "https://www.garagesaarthi.com/features/media-gallery",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/features/media-gallery#software",
      "name": "Workshop Media Gallery & Photo Management Software | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Document car repair and service history with photos. Upload before & after repair images, scratch logs, and damage files directly to job cards.",
      "url": "https://www.garagesaarthi.com/features/media-gallery"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/media-gallery#breadcrumb",
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
          name: "Media Gallery",
          item: "https://www.garagesaarthi.com/features/media-gallery",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I share vehicle repair photos with the customer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, you can share diagnostic images or finished service photos with customers directly on WhatsApp for transparency and approval.",
          },
        },
      ],
    },
  ],
};

export default function MediaGalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MediaGalleryFeature />
    </>
  );
}
