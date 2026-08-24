import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

const gsiFaqData = [
  {
    question: "What is garage management software?",
    answer: "Garage management software is a digital platform that manages vehicle repair job sheets, spare parts inventory, GST invoices, customer & vehicle records, mechanic staff payroll, and business reporting for automotive workshops.",
  },
  {
    question: "Which garage management software is suitable for Indian workshops?",
    answer: "An Indian workshop requires GST billing, customizable invoice series, view-only CA access, WhatsApp service alert automations, and Android and iOS mobile app access. GarageSaarthi provides these features built specifically for Indian workshop workflows.",
  },
  {
    question: "Can GarageSaarthi manage GST billing?",
    answer: "Yes. GarageSaarthi supports GST-compliant invoice generation, custom billing series, tax breakdown calculations, and instant digital receipt sharing via WhatsApp.",
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
    question: "Can I manage spare parts inventory?",
    answer: "Yes. The Inventory module tracks spare parts stock levels, deducts parts used on job cards, alerts low stock, and handles counter sales.",
  },
  {
    question: "Can GarageSaarthi handle multi-branch garages in India?",
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

export default function GSIFAQ() {
  return (
    <AccordionFAQ
      title="Frequently Asked Questions About Garage Management Software"
      titleHighlight="in India"
      faqs={gsiFaqData}
      className="bg-white"
    />
  );
}
