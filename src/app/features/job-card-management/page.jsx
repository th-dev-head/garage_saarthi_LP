import JobCardManagementFeature from "@/src/views/JobCardManagementFeature";

export const metadata = {
  title: "Digital Job Card Software & Repair Order Management | GarageSaarthi",
  description:
    "All-in-one digital job card software for auto workshops, car garages & bike repair centers in India. Create repair orders, log complaints, attach photos, and send WhatsApp estimates.",
  keywords:
    "garage job card software, workshop job card management, digital job card software, garage repair order software, job card software for workshops, digital repair orders for garages, auto repair job card maker, car garage job card software, bike workshop job card app, digital job card app for android, mechanic repair order manager, workshop job card system in India, garage job card format pdf, digital vehicle inspection checklist, job card with whatsapp estimation, garage estimate and job card maker, vehicle repair history job card software, job card software with spare parts allocation, multi-stage vehicle repair tracking software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/job-card-management",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Digital Job Card Management Software | GarageSaarthi",
    description:
      "Create professional digital job cards in under 60 seconds. Track vehicle repair orders, log complaints, attach photos, assign mechanics, and send WhatsApp estimates.",
    url: "https://www.garagesaarthi.com/features/job-card-management",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Digital Job Card Management Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Job Card Software & Repair Order Management | GarageSaarthi",
    description:
      "All-in-one digital job card software for auto repair shops in India. Send WhatsApp estimates & convert job cards to GST invoices.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/job-card-management#breadcrumb",
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
          name: "Job Card Management",
          item: "https://www.garagesaarthi.com/features/job-card-management",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a digital job card software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A digital job card software is a mobile and web application that replaces paper repair registers in auto workshops. It allows service advisors to create repair orders, log customer complaints, attach inspection photos, assign mechanics, and send estimates via WhatsApp.",
          },
        },
        {
          "@type": "Question",
          name: "How do digital job cards save time in daily garage operations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digital job cards eliminate manual handwriting and redundant data entry. Searching past customer or vehicle service records takes just 2 seconds by registration number, and completing job cards automatically converts them into GST invoices in 1 click.",
          },
        },
        {
          "@type": "Question",
          name: "Can I send job card estimates to customers on WhatsApp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! GarageSaarthi allows you to generate a professional PDF job card and estimate link that can be shared directly with your customer's WhatsApp number for instant review and approval.",
          },
        },
      ],
    },
  ],
};

export default function JobCardManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <JobCardManagementFeature />
    </>
  );
}
