import WorkshopManagementDashboardFeature from "@/src/views/features/WorkshopManagementDashboardFeature";

export const metadata = {
  title: "Workshop Management Dashboard & Analytics Software | GarageSaarthi",
  description:
    "All-in-one workshop management dashboard software for garage owners. Track garage KPIs, live job cards, mechanic efficiency, daily revenue, and inventory stock in real time.",
  keywords:
    "garage management dashboard, workshop management dashboard, garage dashboard software, workshop dashboard software, garage software dashboard, workshop software dashboard, automotive workshop dashboard, auto repair dashboard, auto repair shop dashboard, repair shop dashboard software, garage business dashboard, workshop business dashboard, mechanic dashboard software, service center dashboard software, vehicle service dashboard, garage KPI dashboard, workshop KPI dashboard, garage performance dashboard, workshop analytics dashboard, automotive business dashboard, garage operations dashboard, workshop operations dashboard, dashboard for garage management software, dashboard for workshop management software, garage owner dashboard, workshop owner dashboard",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/workshop-management-dashboard",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Workshop Management Dashboard Software | GarageSaarthi",
    description:
      "Real-time workshop management dashboard for auto repair shop owners. Monitor job cards, daily revenue, mechanic KPIs, and spare parts stock from one screen.",
    url: "https://www.garagesaarthi.com/features/workshop-management-dashboard",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Workshop Management Dashboard Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workshop Management Dashboard & Analytics Software | GarageSaarthi",
    description:
      "All-in-one garage management dashboard software. Track real-time repair orders, mechanic KPIs, and daily revenue.",
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.garagesaarthi.com/features/workshop-management-dashboard",
      "name": "Workshop Management Dashboard & Analytics Software | GarageSaarthi",
      "description": "All-in-one workshop management dashboard software for garage owners. Track garage KPIs, live job cards, mechanic efficiency, daily revenue, and inventory stock in real time.",
      "url": "https://www.garagesaarthi.com/features/workshop-management-dashboard",
      "isPartOf": { "@id": "https://www.garagesaarthi.com/#website" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.garagesaarthi.com/features/workshop-management-dashboard#software",
      "name": "Workshop Management Dashboard & Analytics Software | GarageSaarthi",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android",
      "description": "All-in-one workshop management dashboard software for garage owners. Track garage KPIs, live job cards, mechanic efficiency, daily revenue, and inventory stock in real time.",
      "url": "https://www.garagesaarthi.com/features/workshop-management-dashboard"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/workshop-management-dashboard#breadcrumb",
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
          name: "Workshop Management Dashboard",
          item: "https://www.garagesaarthi.com/features/workshop-management-dashboard",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a workshop management dashboard software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A workshop management dashboard software is a centralized digital analytics platform for garage and auto repair shop owners to aggregate live job cards, daily revenue collections, mechanic performance, spare parts stock levels, and customer credit balances onto a single real-time screen.",
          },
        },
        {
          "@type": "Question",
          name: "How does the garage owner dashboard improve daily operations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The garage owner dashboard gives real-time visibility into active repair orders, vehicle statuses, staff attendance, and pending payments, allowing workshop owners to eliminate bottlenecks and speed up vehicle delivery.",
          },
        },
        {
          "@type": "Question",
          name: "Is the workshop analytics dashboard updated in real-time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Every time a service advisor opens a job card, a mechanic updates a repair stage on the Android mobile app, or a spare part is sold, the central dashboard updates immediately without requiring manual refresh.",
          },
        },
      ],
    },
  ],
};

export default function WorkshopManagementDashboardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WorkshopManagementDashboardFeature />
    </>
  );
}
