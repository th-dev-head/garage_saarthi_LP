import TemplateDetailView from "@/src/views/resources/TemplateDetailView";
import { TEMPLATES_DATA } from "@/src/data/resourcesData";

const template = TEMPLATES_DATA.find((t) => t.slug === "garage-job-card-template");

export const metadata = {
  title: template.seoTitle,
  description: template.seoDescription,
  keywords: "garage job card template PDF, workshop work order format excel, car repair estimate format, auto repair job card download",
  alternates: {
    canonical: `https://www.garagesaarthi.com/resources/templates/${template.slug}/`,
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: template.seoTitle,
    description: template.seoDescription,
    url: `https://www.garagesaarthi.com/resources/templates/${template.slug}/`,
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: template.title,
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: template.seoTitle,
    description: template.seoDescription,
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DigitalDocument",
      "@id": `https://www.garagesaarthi.com/resources/templates/${template.slug}/#doc`,
      "name": template.title,
      "description": template.description,
      "fileFormat": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
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
          "name": "Templates",
          "item": "https://www.garagesaarthi.com/resources/templates/",
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": template.shortTitle,
          "item": `https://www.garagesaarthi.com/resources/templates/${template.slug}/`,
        },
      ],
    },
  ],
};

export default function JobCardTemplatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TemplateDetailView template={template} />
    </>
  );
}

