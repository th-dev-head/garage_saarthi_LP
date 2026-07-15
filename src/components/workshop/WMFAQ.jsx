import React from "react";
import AccordionFAQ from "../common/AccordionFAQ";

const faqs = [
  {
    question: "What is workshop management software?",
    answer: "Workshop management software is a digital platform that helps automobile workshop owners manage their daily operations — including job cards, inventory, billing, staff, customer records, and service follow-ups — from one centralized system instead of using paper or spreadsheets.",
  },
  {
    question: "Is GarageSaarthi a workshop management software?",
    answer: "Yes, GarageSaarthi is an all-in-one workshop management software built specifically for automobile workshops in India. It covers job card management, spare parts inventory, GST billing, staff attendance, service reminders, multi-branch control, and business reporting.",
  },
  {
    question: "Who can use GarageSaarthi workshop management software?",
    answer: "GarageSaarthi is designed for car garages, bike workshops, EV service centers, truck workshops, fleet workshops, car detailing studios, tyre shops, and multi-branch workshop chains across India.",
  },
  {
    question: "How does digital job card management work?",
    answer: "When a vehicle arrives, you open a digital job card in under 60 seconds — entering the vehicle registration, customer details, complaints, assigned mechanic, and required spare parts. The job card is tracked through each stage from inspection to delivery and linked to the final invoice.",
  },
  {
    question: "Can GarageSaarthi manage spare parts inventory?",
    answer: "Yes. GarageSaarthi tracks your entire parts inventory in real time. When parts are added to a job card, they are automatically deducted from stock. You receive low-stock alerts so you can reorder before running out.",
  },
  {
    question: "Does GarageSaarthi generate GST invoices?",
    answer: "Yes, GarageSaarthi generates professional, GST-compliant invoices in seconds. You can share invoices with customers via WhatsApp link, print them, or download them as PDFs.",
  },
  {
    question: "Is GarageSaarthi available on mobile?",
    answer: "Yes, GarageSaarthi is available as an Android mobile application in addition to the web-based dashboard. Mechanics can track job status from the shop floor while owners manage billing and reports from the office.",
  },
  {
    question: "Can I manage multiple workshop branches with GarageSaarthi?",
    answer: "Yes. GarageSaarthi's multi-branch module lets you manage all your workshop locations from a single centralized dashboard. You can view branch-wise reports, transfer inventory between branches, and assign role-based access to managers and staff at each location.",
  },
  {
    question: "How does GarageSaarthi handle staff and mechanic management?",
    answer: "GarageSaarthi tracks staff and mechanic attendance (check-in/check-out), logs leaves, manages advances, and auto-calculates monthly payroll based on working days. All records are digital and dispute-free.",
  },
  {
    question: "Does GarageSaarthi send service reminders to customers?",
    answer: "Yes. You can set next service due dates for each vehicle. GarageSaarthi automatically sends service reminder notifications to customers, helping you bring them back before they forget.",
  },
  {
    question: "Can my CA access GarageSaarthi for accounting?",
    answer: "Yes. GarageSaarthi allows you to give your chartered accountant read-only access to financial reports, invoices, and expense data — making tax filing and audits smooth and paperless.",
  },
  {
    question: "Is GarageSaarthi cloud-based?",
    answer: "Yes, GarageSaarthi is fully cloud-based. All your data is securely backed up and accessible in real-time from any device — whether you are at the workshop, at home, or travelling.",
  },
  {
    question: "Does GarageSaarthi offer a free trial?",
    answer: "Yes, GarageSaarthi offers a 7-day free trial with full access to all features. No credit card is required to start.",
  },
  {
    question: "How much does GarageSaarthi workshop management software cost?",
    answer: "GarageSaarthi offers affordable monthly, quarterly, and annual subscription plans designed for different workshop sizes. Visit our pricing page for detailed rates and plan comparisons.",
  },
];

export default function WMFAQ() {
  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Workshop Management Software."
      subtitle="Everything you need to know about GarageSaarthi and workshop management software for automobile workshops."
      faqs={faqs}
    />
  );
}
