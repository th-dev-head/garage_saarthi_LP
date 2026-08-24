import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function GFMFAQ() {
  const data = [
    {
      question: "What is garage finance management software?",
      answer: "Garage finance management software is a specialized digital system built to help automotive workshops, bike repair shops, and EV service outlets track daily income, operating expenses, customer invoice payments, active loans, and overall business collections under a single cloud dashboard."
    },
    {
      question: "Can GarageSaarthi track garage income and expenses?",
      answer: "Yes. Our Finance module provides direct features to log daily workshop income (from service packages, vehicle repairs, and spare part bills) alongside daily operating expenses."
    },
    {
      question: "Can I record workshop expenses in GarageSaarthi?",
      answer: "Yes, you can easily log recurring workshop expenses, including utility bills, rent, machinery upkeep costs, staff commissions, salaries, and wholesale spare parts purchases."
    },
    {
      question: "Does GarageSaarthi help track garage payments?",
      answer: "Yes. Every invoice created has its payment status tracked. You can view pending customer balances, outstanding supplier dues, and log payment modes like Cash, Card, UPI, or Bank Transfer."
    },
    {
      question: "Is GarageSaarthi garage accounting software?",
      answer: "GarageSaarthi helps garage owners organize day-to-day financial operations like payments, expenses, invoicing, billing, and reports, and provides CA Access. However, it is primarily an operational workshop management platform and should not be used as a full statutory accounting or tax filing replacement."
    },
    {
      question: "Does GarageSaarthi support GST billing?",
      answer: "Yes, you can generate detailed tax bills with custom invoice series, specifying SGST, CGST, or IGST rates. Please note that return filing on the official government GST portal is not supported."
    },
    {
      question: "Can I manage garage loans in GarageSaarthi?",
      answer: "Yes, you can track loan EMIs, repayment dates, and outstanding liabilities in our dedicated Loans module. We are not a lender, broker, or financial institution."
    },
    {
      question: "Can my CA access GarageSaarthi?",
      answer: "Yes, you can invite your Chartered Accountant or accountant to access your account using a restricted read-only permission profile to view and download reports."
    },
    {
      question: "Can GarageSaarthi generate garage financial reports?",
      answer: "Yes, you can view operational finance reports including daily collection summaries, payments mode journals, and expense ledger statistics."
    },
    {
      question: "Can I manage finances for multiple garage branches?",
      answer: "Yes. Switch between registered branches on the dashboard to review localized income, expenses, and collections files."
    },
    {
      question: "Is GarageSaarthi available on mobile?",
      answer: "Yes. We maintain a secure web dashboard and a live mobile apps on Google Play Store & Apple App Store. iOS apps are fully available."
    },
    {
      question: "Does GarageSaarthi offer a free trial?",
      answer: "Yes, we provide a 7-day free trial containing full access to billing, invoicing, finance, and report tools with no credit card required."
    },
    {
      question: "How much does GarageSaarthi cost?",
      answer: "Finance and accounts features are part of our standard subscription packages. Please check the pricing page for the detailed plans."
    }
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Garage Finance Management Software"
      faqs={data}
    />
  );
}
