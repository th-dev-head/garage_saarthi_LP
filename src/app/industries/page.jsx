import IndustriesHub from "@/src/views/industries/IndustriesHub";

export const metadata = {
  title: "Industries We Serve | GarageSaarthi",
  description:
    "Explore GarageSaarthi solutions for car and bike workshops, truck workshops, EV garages, fleet workshops and other automotive service businesses.",
  keywords:
    "automotive workshop software, car workshop software, bike garage management, truck repair software, ev garage software, fleet workshop software, car detailing billing, auto repair shop app, garage saarthi industries",
  alternates: {
    canonical: "https://www.garagesaarthi.com/industries/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Industries We Serve | GarageSaarthi",
    description:
      "Explore GarageSaarthi solutions for car and bike workshops, truck workshops, EV garages, fleet workshops and other automotive service businesses.",
    url: "https://www.garagesaarthi.com/industries/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Automotive Industry Solutions",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | GarageSaarthi",
    description:
      "Explore GarageSaarthi solutions for car and bike workshops, truck workshops, EV garages, fleet workshops and other automotive service businesses.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/industries/",
      "name": "Industries We Serve | GarageSaarthi",
      "description":
        "Explore GarageSaarthi solutions for car and bike workshops, truck workshops, EV garages, fleet workshops and other automotive service businesses.",
      "url": "https://www.garagesaarthi.com/industries/",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/industries/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.garagesaarthi.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Industries",
          "item": "https://www.garagesaarthi.com/industries/"
        }
      ]
    }
  ]
};

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndustriesHub />
    </>
  );
}
