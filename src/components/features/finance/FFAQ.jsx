import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function FFAQ() {
  const faqs = [
    {
      question: "Do I need accounting knowledge like Tally to use GarageSaarthi finance?",
      answer: "Not at all! GarageSaarthi is designed specifically for garage owners. Incomes and expenses are automatically logged as you create job cards, buy spare parts, or collect payments."
    },
    {
      question: "Can I track customer pending balances (Udhar)?",
      answer: "Yes. You can record partial payments and log customer balance dues. You can also send automated WhatsApp payment reminders with payment links."
    },
    {
      question: "Can I manage spare parts distributor credit accounts?",
      answer: "Yes! You can maintain vendor ledger accounts, record purchase invoices, and track outstanding supplier balances."
    },
    {
      question: "Can I create custom categories and subcategories for expenses and income?",
      answer: "Yes! GarageSaarthi allows you to create custom parent categories (e.g., Spare Parts, Staff Welfare, Scrap) and infinite subcategories (e.g., Engine Oils, Brake Pads, Tea & Snacks) directly on the fly while recording entries."
    },
    {
      question: "How do category analytics help reduce workshop losses?",
      answer: "The interactive category analytics dashboard gives you instant percentage breakdowns, donut charts, and monthly trends. You can immediately pinpoint which suppliers or operational heads account for the largest share of your expenses."
    },
    {
      question: "Does it support GST tax calculations?",
      answer: "Yes. GarageSaarthi separates tax amounts into CGST, SGST, and IGST breakdowns, allowing you to export clean monthly reports for your CA."
    },
    {
      question: "Is Finance Management available during the 7-day free trial?",
      answer: "Yes! You get full access to cashbooks, expense logs, P&L reports, category analytics, and vendor ledger tools during your 7-day free trial."
    }
  ];

  return (
    <AccordionFAQ
      title="Garage Finance Management"
      titleHighlight="FAQs"
      subtitle="Everything you need to know about GarageSaarthi financial tracking."
      faqs={faqs}
      className="bg-slate-50"
    />
  );
}
