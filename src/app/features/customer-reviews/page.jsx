import CustomerReviewsFeature from "@/src/views/features/CustomerReviewsFeature";

export const metadata = {
  title: "Automated Garage Google Review Collection Software | GarageSaarthi",
  description:
    "Turn happy customers into Google 5-star reviews automatically. Send WhatsApp feedback links post-invoice, shield negative ratings, and rank #1 in local workshop searches.",
  keywords:
    "garage Google review software, workshop customer review collection, auto repair shop rating growth, WhatsApp review links garage, Google 5 star reviews garage India, garage reputation management, local SEO workshop software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/customer-reviews",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Automated Garage Google Review Collection Software | GarageSaarthi",
    description:
      "Turn happy customers into Google 5-star reviews automatically. Send WhatsApp feedback links post-invoice, shield negative ratings, and rank #1 in local workshop searches.",
    url: "https://www.garagesaarthi.com/features/customer-reviews",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-customer-reviews-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Customer Review Collection Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automated Garage Google Review Collection Software | GarageSaarthi",
    description:
      "Turn happy customers into Google 5-star reviews automatically. Send WhatsApp feedback links post-invoice, shield negative ratings, and rank #1 in local workshop searches.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-customer-reviews-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/features/customer-reviews",
      "name": "Automated Garage Google Review Collection Software | GarageSaarthi",
      "description": "Turn happy customers into Google 5-star reviews automatically. Send WhatsApp feedback links post-invoice, shield negative ratings, and rank #1 in local workshop searches.",
      "url": "https://www.garagesaarthi.com/features/customer-reviews",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/features/customer-reviews#software",
      "name": "Automated Garage Google Review Collection Software | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Turn happy customers into Google 5-star reviews automatically. Send WhatsApp feedback links post-invoice, shield negative ratings, and rank #1 in local workshop searches.",
      "url": "https://www.garagesaarthi.com/features/customer-reviews"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/customer-reviews#breadcrumb",
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
          name: "Customer Review Collection",
          item: "https://www.garagesaarthi.com/features/customer-reviews",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does GarageSaarthi collect Google reviews automatically?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When an invoice is marked as paid or vehicle is delivered, GarageSaarthi automatically queues a friendly thank-you WhatsApp message containing your direct Google Maps review link.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if a customer wants to give a 1-star or 2-star review?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GarageSaarthi includes a smart feedback filter. Lower rating submissions are routed privately to the garage owner or manager so you can resolve the customer's complaint directly before it reaches Google.",
          },
        },
      ],
    },
  ],
};

export default function CustomerReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CustomerReviewsFeature />
    </>
  );
}
