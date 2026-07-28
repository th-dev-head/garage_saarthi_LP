import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function CAFAQ() {
  const faqs = [
    {
      question: "Can my Chartered Accountant edit or delete my garage invoices?",
      answer: "No. The CA Access role is strictly 100% read-only. Your accountant can view, search, and export financial data, but cannot create, edit, or delete any invoices or garage settings."
    },
    {
      question: "What report formats can my accountant download?",
      answer: "Your CA can export sales registers, purchase ledgers, expense logs, and GST reports in Excel (.xlsx), CSV, and PDF formats ready for GSTR filing."
    },
    {
      question: "Can I add multiple accountants or tax consultants?",
      answer: "Yes! GarageSaarthi allows multi-user role access, so you can invite both your internal bookkeeper and your external Chartered Accountant."
    },
    {
      question: "Does CA Access separate B2B and B2C sales for GST return filing?",
      answer: "Yes. Invoices with customer GSTIN are automatically categorized under B2B GST sales, while retail counter bills are classified under B2C sales for accurate GSTR-1 preparation."
    },
    {
      question: "Is CA Access included in the 7-day free trial?",
      answer: "Yes! Full CA & Accountant Access portal functionality is included during your 7-day free trial."
    }
  ];

  return (
    <AccordionFAQ
      title="Garage CA & Accountant Access"
      titleHighlight="FAQs"
      subtitle="Everything you need to know about GarageSaarthi accountant portal & CA login access."
      faqs={faqs}
      className="bg-white"
    />
  );
}
