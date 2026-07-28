import GaragePayrollSoftware from "@/src/views/solutions/GaragePayrollSoftware";

export const metadata = {
  title: "Garage Payroll & Mechanic Salary Management Software | GarageSaarthi",
  description:
    "Automate mechanic salaries, labor commission payouts, salary advances, and monthly wage slips with GarageSaarthi payroll management software.",
  keywords:
    "garage payroll software, workshop salary management software, mechanic commission payout software, garage wage slip generator, workshop employee payroll system India, auto repair staff salary software",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/payroll",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: "Garage Payroll & Mechanic Salary Management Software | GarageSaarthi",
    description:
      "Automate mechanic salaries, labor commission payouts, salary advances, and monthly wage slips with GarageSaarthi payroll management software.",
    url: "https://www.garagesaarthi.com/features/payroll",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage-payroll-software-og.webp",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Payroll Management Software",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Payroll & Mechanic Salary Management Software | GarageSaarthi",
    description:
      "Automate mechanic salaries, labor commission payouts, salary advances, and monthly wage slips with GarageSaarthi payroll management software.",
    images: ["https://www.garagesaarthi.com/garage-payroll-software-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.garagesaarthi.com/features/payroll#breadcrumb",
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
          name: "Payroll Management",
          item: "https://www.garagesaarthi.com/features/payroll",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I calculate mechanic commissions per job card?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! GarageSaarthi automatically tracks labor amounts assigned to each mechanic and calculates exact commission percentages.",
          },
        },
        {
          "@type": "Question",
          name: "Can I issue salary slips to workshop staff?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Professional PDF salary slips can be generated and shared via WhatsApp with one click.",
          },
        },
      ],
    },
  ],
};

export default function PayrollPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GaragePayrollSoftware />
    </>
  );
}
