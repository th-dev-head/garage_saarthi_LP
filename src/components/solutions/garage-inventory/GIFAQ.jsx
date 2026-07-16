import React from "react";
import Link from "next/link";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function GIFAQ() {
  const faqData = [
    {
      question: "What is garage inventory software?",
      answer: (
        <>
          Garage inventory software helps workshops organize and manage spare parts and stock records digitally. It eliminates reliance on manual books, scattered spreadsheets, or memorized counts, integrating stock movements directly with job cards, counter sales, and customer invoices for a clear view of your garage assets.
        </>
      )
    },
    {
      question: "How does GarageSaarthi help manage spare parts inventory?",
      answer: (
        <>
          GarageSaarthi allows you to build a structured digital catalog of spare parts with details like pricing, rack locations, and vendor info. The system updates stock levels automatically whenever a part is consumed on a job card or sold through counter sales.
        </>
      )
    },
    {
      question: "Can I use GarageSaarthi for workshop stock management?",
      answer: (
        <>
          Yes, you can track exact current stock quantities, set up low-stock re-order thresholds, receive alerts, log manual adjustments, and monitor item consumption statistics directly.
        </>
      )
    },
    {
      question: "Is GarageSaarthi suitable for car workshop inventory management?",
      answer: (
        <>
          Yes, GarageSaarthi is fully designed for car workshops. You can easily manage bulk passenger car spares, lubricants, filters, and other vehicle parts. See our{" "}
          <Link href="/solutions/car-garage-software" className="text-primary hover:underline font-semibold">
            Car Garage Software
          </Link>{" "}
          page for more information.
        </>
      )
    },
    {
      question: "Can bike workshops manage spare parts with GarageSaarthi?",
      answer: (
        <>
          Absolutely. Two-wheeler workshops can track specialized bike spares like spark plugs, drive chains, cables, and clutch plates. Explore details on our{" "}
          <Link href="/solutions/bike-workshop-software" className="text-primary hover:underline font-semibold">
            Bike Workshop Software
          </Link>{" "}
          page.
        </>
      )
    },
    {
      question: "Can I manage auto parts inventory with GarageSaarthi?",
      answer: (
        <>
          Yes. You can manage auto parts inventories of all types, matching part descriptions, brand configurations, and GST taxes in one dashboard.
        </>
      )
    },
    {
      question: "Does GarageSaarthi inventory connect with job cards?",
      answer: (
        <>
          Yes, when an advisor adds a spare part to a digital job card, the stock count reduces immediately, ensuring that billing updates seamlessly.
        </>
      )
    },
    {
      question: "Can GarageSaarthi manage inventory for multiple garage branches?",
      answer: (
        <>
          Yes, you can monitor branch-level inventory stocks and search for parts across different outlets from one central profile.
        </>
      )
    },
    {
      question: "Can I access garage inventory from a mobile app?",
      answer: (
        <>
          Yes, you can manage inventory logs directly from our live Android application. An iOS app is currently in development and will be released on the Apple App Store soon.
        </>
      )
    },
    {
      question: "Does GarageSaarthi offer a free trial?",
      answer: (
        <>
          Yes, we offer a 7-day free trial with no credit card required to explore all features.
        </>
      )
    },
    {
      question: "How much does GarageSaarthi inventory software cost?",
      answer: (
        <>
          We offer flexible monthly, quarterly, and annual subscription plans. Please visit our{" "}
          <Link href="/pricing" className="text-primary hover:underline font-semibold">
            Pricing
          </Link>{" "}
          page for details.
        </>
      )
    }
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Garage Inventory Software"
      subtitle="Find answers to common questions about managing spare parts, stock levels, and automotive inventory with GarageSaarthi."
      faqs={faqData}
      className="bg-slate-200"
    />
  );
}

