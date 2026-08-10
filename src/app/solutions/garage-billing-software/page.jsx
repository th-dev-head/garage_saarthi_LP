import GarageBillingSoftware from "@/src/views/solutions/GarageBillingSoftware";

export const metadata = {
  title: "Garage Billing Software & Workshop Billing App | GarageSaarthi",
  description:
    "Create GST invoices, manage garage billing, track payments and connect job cards with billing using GarageSaarthi. Start your 7-day free trial.",
  keywords:
    "garage billing software, workshop billing software, garage GST billing software, garage billing app, garage billing software India, workshop billing software India, garage invoice and billing software, car garage billing software, auto repair billing software, automobile workshop billing software, automotive workshop billing software, auto workshop billing software, vehicle workshop billing software, digital billing software for garage, online garage billing software, cloud garage billing software, workshop GST billing software, garage invoice software India, workshop invoice software, workshop billing app, garage invoice app",
  alternates: {
    canonical: "https://www.garagesaarthi.com/solutions/garage-billing-software/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Billing Software for Automotive Workshops | GarageSaarthi",
    description:
      "Create professional garage invoices, manage GST billing, track payments and connect workshop billing with daily garage operations.",
    url: "https://www.garagesaarthi.com/solutions/garage-billing-software/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-garage-billing-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Garage Billing Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Billing Software for Automotive Workshops | GarageSaarthi",
    description:
      "Create professional garage invoices, manage GST billing, track payments and connect workshop billing with daily garage operations.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-garage-billing-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/solutions/garage-billing-software",
      name: "Garage Billing Software & Workshop Billing App | GarageSaarthi",
      description:
        "Create GST invoices, manage garage billing, track payments and connect job cards with billing using GarageSaarthi.",
      url: "https://www.garagesaarthi.com/solutions/garage-billing-software/",
      isPartOf: { "@id": "https://www.garagesaarthi.com/#website" },
      breadcrumb: {
        "@id": "https://www.garagesaarthi.com/solutions/garage-billing-software#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/solutions/garage-billing-software#breadcrumb",
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
          name: "Garage Billing Software",
          item: "https://www.garagesaarthi.com/solutions/garage-billing-software",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/solutions/garage-billing-software#software",
      "name": "Garage Billing Software & Workshop Billing App | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Create GST invoices, manage garage billing, track payments and connect job cards with billing using GarageSaarthi. Start your 7-day free trial.",
      "url": "https://www.garagesaarthi.com/solutions/garage-billing-software"
    },
  ],
};

export default function GarageBillingSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GarageBillingSoftware />
    </>
  );
}
