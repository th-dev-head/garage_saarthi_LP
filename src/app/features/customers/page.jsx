import CustomerManagementFeature from "@/src/views/features/CustomerManagementFeature";

export const metadata = {
  title: "Garage Customer Management Software & CRM System | GarageSaarthi",
  description:
    "Secure automotive customer database software for workshops in India. Manage profiles, service history records, WhatsApp contact logs, and follow-ups. Start a 7-day free trial.",
  keywords:
    "customer management software, garage customer management software, workshop customer management software, auto repair customer management software, automobile customer management software, garage CRM software, workshop CRM software, automotive CRM software, customer database software, garage customer database software, workshop customer database software, customer record management software, customer records software, customer information management software, garage customer tracking software, workshop customer tracking software, customer follow up software, garage customer follow up software, workshop customer follow up software, customer relationship management software, automotive customer management system, garage customer management system, workshop customer management system, customer management app, garage customer management app, workshop customer management app, customer contact management software, customer data management software, customer profile management software, customer history management software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/customers",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Customer Management Software & CRM | GarageSaarthi",
    description:
      "Maintain a 100% accurate customer records database. Track profiles, service history records, and WhatsApp follow-ups.",
    url: "https://www.garagesaarthi.com/features/customers",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Customer Management System",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Customer Management Software & CRM | GarageSaarthi",
    description:
      "Maintain secure, digital customer databases and track histories for Indian auto workshops.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/features/customers",
      "name": "Garage Customer Management Software & CRM System | GarageSaarthi",
      "description": "Secure automotive customer database software for workshops in India. Manage profiles, service history records, WhatsApp contact logs, and follow-ups. Start a 7-day free trial.",
      "url": "https://www.garagesaarthi.com/features/customers",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/features/customers#software",
      "name": "Garage Customer Management Software & CRM System | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "Secure automotive customer database software for workshops in India. Manage profiles, service history records, WhatsApp contact logs, and follow-ups. Start a 7-day free trial.",
      "url": "https://www.garagesaarthi.com/features/customers"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/customers#breadcrumb",
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
          name: "Customer Management",
          item: "https://www.garagesaarthi.com/features/customers",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is garage customer management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Garage customer management software is a cloud database designed for auto workshops to securely store vehicle owner details, contact information, service histories, outstanding dues, and diagnostic feedback logs.",
          },
        },
        {
          "@type": "Question",
          name: "How does the system link customers to vehicles?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When you create a profile, you can map multiple vehicles (cars or two-wheelers) to a single customer name. This lets you view all associated vehicle specifications and historical logs from one card.",
          },
        },
        {
          "@type": "Question",
          name: "Is my customer database secure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GarageSaarthi uses bank-grade secure cloud servers. You can customize staff access roles to restrict regular mechanics or service advisors from exporting or copying your contact database.",
          },
        },
      ],
    },
  ],
};

export default function CustomerManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CustomerManagementFeature />
    </>
  );
}
