import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

const wsiFaqData = [
  {
    question: "What is workshop software in India?",
    answer: "Workshop software in India is a digital management system that helps automobile workshops handle job cards, spare parts inventory, GST billing, customer & vehicle service histories, staff payroll, and service alerts.",
  },
  {
    question: "How does GarageSaarthi help Indian workshops?",
    answer: "GarageSaarthi replaces paper job sheets, manual registers, and scattered Excel sheets with one unified web and mobile platform built for Indian workshop operations.",
  },
  {
    question: "Does GarageSaarthi support GST billing?",
    answer: "Yes. GarageSaarthi generates GST-compliant invoices with custom numbering series, labor rates, spare parts breakdowns, and WhatsApp invoice sharing.",
  },
  {
    question: "Can I manage spare parts inventory?",
    answer: "Yes. The Inventory module tracks spare parts stock levels, deducts parts used on job cards, alerts low stock, and handles counter sales.",
  },
  {
    question: "Can my accountant or CA access GarageSaarthi?",
    answer: "Yes. GarageSaarthi includes a view-only CA access portal that lets your accountant log in and download monthly sales, purchases, and GST tax ledgers.",
  },
  {
    question: "Does GarageSaarthi support WhatsApp service reminders?",
    answer: "Yes. You can automate service due reminders and promotional messages sent directly to your customers' WhatsApp numbers.",
  },
  {
    question: "Can I use GarageSaarthi on an Android mobile phone?",
    answer: "Yes. GarageSaarthi is available as an Android app on the Google Play Store & Apple App Store, and as a cloud web platform on any browser.",
  },
  {
    question: "Can GarageSaarthi handle multi-branch workshops?",
    answer: "Yes. You can manage multiple workshop branches under one account, transfer inventory between locations, and restrict user access per branch.",
  },
  {
    question: "Does GarageSaarthi offer a free trial?",
    answer: "Yes. GarageSaarthi offers a 7-day free trial with full access to all features so you can evaluate real workshop operations before subscribing.",
  },
  {
    question: "How much does GarageSaarthi cost in India?",
    answer: "GarageSaarthi offers clear, affordable subscription packages for different plan durations (1, 3, 6, 12, or 24 months). Please visit our pricing page for current details.",
  },
];

export default function WSIFAQ() {
  return (
    <AccordionFAQ
      title="Frequently Asked Questions About Workshop Software"
      titleHighlight="in India"
      faqs={wsiFaqData}
      className="bg-slate-50"
    />
  );
}
