import WhatsAppAutomationFeature from "@/src/views/features/WhatsAppAutomationFeature";

export const metadata = {
  title: "Garage WhatsApp Automation & Digital Billing Software | GarageSaarthi",
  description:
    "Send automated WhatsApp job card estimates, digital PDF invoices, UPI payment links, and service due alerts directly to customers with GarageSaarthi software.",
  keywords:
    "garage WhatsApp automation software, workshop WhatsApp alerts, WhatsApp job card software, digital PDF bill WhatsApp, garage customer messaging software, workshop bill on WhatsApp, WhatsApp service reminders, auto repair shop WhatsApp alerts India",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/automation",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage WhatsApp Automation & Digital Billing Software | GarageSaarthi",
    description:
      "Send automated WhatsApp job card estimates, digital PDF invoices, UPI payment links, and service due alerts directly to customers with GarageSaarthi software.",
    url: "https://www.garagesaarthi.com/features/automation",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garagesaarthi-whatsapp-automation-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi WhatsApp Automation Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage WhatsApp Automation & Digital Billing Software | GarageSaarthi",
    description:
      "Send automated WhatsApp job card estimates, digital PDF invoices, UPI payment links, and service due alerts directly to customers with GarageSaarthi software.",
    images: ["https://www.garagesaarthi.com/garagesaarthi-whatsapp-automation-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/automation#breadcrumb",
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
          name: "WhatsApp Automation",
          item: "https://www.garagesaarthi.com/features/automation",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I send PDF invoices directly on WhatsApp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! When you click 'Share PDF' on any estimate or invoice inside GarageSaarthi, a clean downloadable PDF link is generated and attached to the WhatsApp message automatically.",
          },
        },
        {
          "@type": "Question",
          name: "Can customers pay directly through the WhatsApp message?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can attach a Razorpay payment link or UPI QR code link directly in the WhatsApp message so customers can pay electronically before picking up their vehicle.",
          },
        },
      ],
    },
  ],
};

export default function WhatsAppAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WhatsAppAutomationFeature />
    </>
  );
}
