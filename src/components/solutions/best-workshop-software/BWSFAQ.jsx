import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

const bwsFaqData = [
  {
    question: "Which is the best workshop management software in India?",
    answer: "There is no single software that is automatically best for every workshop. The right choice depends on business type, required features, number of branches and daily workflow. Compare job cards, billing, inventory, customer records, service alerts, staff management, and reports.",
  },
  {
    question: "What should I look for in workshop management software?",
    answer: "Key features include digital job sheets, GST billing & invoice series, spare parts stock tracking, customer & vehicle history, CRM leads, automated WhatsApp reminders, mechanic attendance & payroll, and financial reports.",
  },
  {
    question: "Is GarageSaarthi suitable for small workshops?",
    answer: "Yes. GarageSaarthi provides simple job cards, billing, inventory, and mobile app access for small and independent workshops, with scalable options as your business expands.",
  },
  {
    question: "Can GarageSaarthi manage digital job cards?",
    answer: "Yes. You can create digital job cards recording customer complaints, labor estimates, assigned mechanics, and repair status updates.",
  },
  {
    question: "Does GarageSaarthi support GST billing?",
    answer: "Yes. GarageSaarthi generates GST-compliant invoices containing labor rates, spare parts breakdowns, customer tax details, and multiple invoice series.",
  },
  {
    question: "Can I manage spare parts inventory?",
    answer: "Yes. The Inventory module tracks spare parts stock levels, deducts parts used on job cards, alerts low stock, and handles counter sales.",
  },
  {
    question: "Can GarageSaarthi maintain vehicle service history?",
    answer: "Yes. Every job card and parts replacement is automatically logged to the vehicle's history file for quick lookup during future visits.",
  },
  {
    question: "Does GarageSaarthi support service reminders?",
    answer: "Yes. You can schedule periodic maintenance due dates and trigger automated WhatsApp alerts directly to your customers' mobile phones.",
  },
  {
    question: "Can I manage workshop employees and mechanics?",
    answer: "Yes. Manage staff attendance, leave applications, role-based user access, and performance commissions calculated directly from completed job cards.",
  },
  {
    question: "Can GarageSaarthi manage multiple workshop branches?",
    answer: "Yes. The platform supports multiple workshop locations with centralized control, branch-wise stock mapping, and consolidated financial reports.",
  },
  {
    question: "Is GarageSaarthi cloud-based and available on mobile?",
    answer: "Yes. GarageSaarthi runs on secure cloud servers accessible via desktop web browsers and our native Android & iOS mobile apps on the Google Play Store.",
  },
  {
    question: "Does GarageSaarthi offer a free trial?",
    answer: "Yes. GarageSaarthi offers a 7-day free trial with full access to all features so you can evaluate real workshop operations before subscribing.",
  },
];

export default function BWSFAQ() {
  return (
    <AccordionFAQ
      title="Frequently Asked Questions About Choosing"
      titleHighlight="Workshop Management Software"
      faqs={bwsFaqData}
      className="bg-white"
    />
  );
}
