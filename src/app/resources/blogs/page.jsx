import BlogsListView from "@/src/views/resources/BlogsListView";

export const metadata = {
  title: "Garage Management Blog & Workshop Growth Articles | GarageSaarthi",
  description:
    "Expert articles on auto repair shop management, pricing strategies, mechanic productivity, job card workflows, and spare parts inventory control.",
  keywords:
    "garage management blog, auto repair articles, workshop business growth, mechanic shop tips, car repair billing guide, garage management insights",
  alternates: {
    canonical: "https://www.garagesaarthi.com/resources/blogs/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Management Blog & Workshop Growth Articles | GarageSaarthi",
    description:
      "Expert articles on auto repair shop management, pricing strategies, mechanic productivity, job card workflows, and spare parts inventory control.",
    url: "https://www.garagesaarthi.com/resources/blogs/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Blog & Articles",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Management Blog & Workshop Growth Articles | GarageSaarthi",
    description: "Expert articles on auto repair shop management, pricing strategies, and mechanic productivity.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.garagesaarthi.com/resources/blogs/#webpage",
      "url": "https://www.garagesaarthi.com/resources/blogs/",
      "name": "Garage Management Blog & Workshop Growth Articles | GarageSaarthi",
      "description":
        "Expert articles on auto repair shop management, pricing strategies, mechanic productivity, job card workflows, and spare parts inventory control.",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.garagesaarthi.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Resources",
          "item": "https://www.garagesaarthi.com/resources/",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Blogs",
          "item": "https://www.garagesaarthi.com/resources/blogs/",
        },
      ],
    },
  ],
};

export default function BlogsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogsListView />
    </>
  );
}

