import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function GACFAQ() {
  const data = [
    {
      question: "What is garage accounting software?",
      answer: "Garage accounting software is a specialized financial tracking module built to help automotive workshops, car garages, and bike repair centers log daily check-ins, record working hours, monitor leave logs, and keep staff lists organized online."
    },
    {
      question: "What accounting features does GarageSaarthi provide?",
      answer: "We support payments tracking, income and expense records management, GST-compliant billing, custom invoice series formats, EMIs schedules tracking in our Loans module, and Restricted CA Access."
    },
    {
      question: "Can I track garage income and expenses with GarageSaarthi?",
      answer: "Yes, you can record daily cash inflow (from services, repairs, and counter sales) and operating expenses (like spare parts orders, rent, salaries, and utility bills)."
    },
    {
      question: "Does GarageSaarthi support GST billing?",
      answer: "Yes, you can generate detailed tax invoices specifying CGST, SGST, or IGST breakdowns with custom invoice series formats. We do not support direct GST return filing."
    },
    {
      question: "Can I give my CA access to GarageSaarthi?",
      answer: "Yes, you can invite your Chartered Accountant or accountant to access your dashboard using a restricted read-only profile to review and download financial records."
    },
    {
      question: "Is GarageSaarthi a replacement for Tally or complete accounting software?",
      answer: "GarageSaarthi is primarily an operational workshop management platform that includes finance, payments, GST billing, and CA Access tools. For complex audit filings, tax returns, or balance sheet configurations, you or your CA should continue to use Tally or standard corporate accounting tools alongside GarageSaarthi."
    },
    {
      question: "Can car and bike workshops use GarageSaarthi for financial management?",
      answer: "Yes. Every job card is linked to payment and labor allocation records, making it ideal for multi-brand car and bike service centers."
    },
    {
      question: "Can I use GarageSaarthi for multiple garage branches?",
      answer: "Yes, you can switch branches on the dashboard to check localized cash balances, collections, and expense ledgers centrally."
    },
    {
      question: "Is GarageSaarthi available online and on mobile?",
      answer: "Yes, we maintain a secure cloud web dashboard and a live mobile apps on Google Play Store & Apple App Store. iOS apps are fully available."
    },
    {
      question: "Does GarageSaarthi offer a free trial?",
      answer: "Yes, we offer a 7-day free trial containing full access to billing, invoicing, finance, and report tools with no credit card required."
    },
    {
      question: "How much does GarageSaarthi cost?",
      answer: "Invoicing and accounting features are part of our standard subscription packages. Please check the pricing page for the detailed plans."
    }
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Garage Accounting Software"
      faqs={data}
    />
  );
}
