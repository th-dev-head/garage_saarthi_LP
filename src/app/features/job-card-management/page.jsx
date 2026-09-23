import JobCardManagementFeature from "@/src/views/features/JobCardManagementFeature";

export const metadata = {
  title: "Digital Job Card & Mechanic Time Tracking Software | GarageSaarthi",
  description:
    "All-in-one digital job card and mechanic time tracking software for auto workshops in India. Live task stopwatch, work & break clocking, WhatsApp estimates, and auto invoice conversion.",
  keywords:
    "garage job card software, mechanic time tracking software, garage mechanic clocking software, workshop job card management, digital job card software, garage repair order software, mechanic break tracking app, technician productivity tracker garage, job card software for workshops, digital repair orders for garages, auto repair job card maker, car garage job card software, bike workshop job card app, digital job card app for android, mechanic repair order manager, workshop job card system in India, garage job card format pdf, digital vehicle inspection checklist, job card with whatsapp estimation, garage estimate and job card maker, vehicle repair history job card software, job card software with spare parts allocation, multi-stage vehicle repair tracking software, job card edit history software, garage audit log tracking, workshop job card audit trail, customer complaint solution tracking, vehicle inward acknowledgement receipt, job card acknowledgement receipt pdf, whatsapp vehicle check-in slip, garage tamper proof job cards, complaint to repair action mapping, job card internal team chat, workshop team discussion @mention, job card activity timeline log",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/job-card-management/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Digital Job Card & Mechanic Time Tracking Software | GarageSaarthi",
    description:
      "Create digital job cards in under 60 seconds. Track live mechanic labor hours, log breaks (lunch/tea/parts waiting), send WhatsApp estimates, and convert job cards to GST invoices.",
    url: "https://www.garagesaarthi.com/features/job-card-management/",
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
    title: "Digital Job Card & Mechanic Time Tracking Software | GarageSaarthi",
    description:
      "All-in-one digital job card software with live mechanic clocking & WhatsApp estimates for Indian auto repair workshops.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/features/job-card-management",
      "name": "Digital Job Card & Mechanic Time Tracking Software | GarageSaarthi",
      "description": "All-in-one digital job card and mechanic time tracking software for auto workshops, car garages & bike repair centers in India. Create repair orders, track live task stopwatch, log breaks, and send WhatsApp estimates.",
      "url": "https://www.garagesaarthi.com/features/job-card-management",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/features/job-card-management#software",
      "name": "Digital Job Card & Mechanic Time Tracking Software | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "All-in-one digital job card and mechanic time tracking software for auto workshops, car garages & bike repair centers in India. Create repair orders, track live task stopwatch, log breaks, and send WhatsApp estimates.",
      "url": "https://www.garagesaarthi.com/features/job-card-management"
    },
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
          name: "How does Mechanic Work & Break Time Clocking work in GarageSaarthi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Technicians can start live stopwatch timers on specific job card labour tasks or the whole repair order. When pausing for lunch, tea, parts waiting, or customer approval, the break duration is logged and subtracted from total elapsed time to record 100% accurate active working hours.",
          },
        },
        {
          "@type": "Question",
          name: "Can workshop team members chat and mention each other on a job card?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Every job card has a private 'Activity & Discussion' drawer. Service advisors, mechanics, and admins can chat, use @mentions (e.g., @Detailer) to notify colleagues, and view live status changes in one shared thread.",
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
          name: "Can I attach before and after repair photos to a job card?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! You can capture and upload vehicle inspection photos, scratch diagrams, and completed repair photos directly using the Android mobile app or web portal.",
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
