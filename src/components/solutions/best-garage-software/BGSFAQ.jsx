import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

const faqData = [
  {
    question: "Which is the best garage management software?",
    answer: "The best garage management software depends on your workshop's business type, number of branches, team size and required workflows. Garage owners should compare job cards, billing, GST support, inventory, CRM, service reminders, customer and vehicle records, staff management, reports, mobile access and pricing.",
  },
  {
    question: "What is the best garage management software in India?",
    answer: "When choosing garage management software in India, look for GST billing, localized workshop workflows, Android mobile app access, automated WhatsApp reminders, and multi-branch management capabilities. GarageSaarthi provides these features tailored for Indian automotive workshops.",
  },
  {
    question: "What features should the best garage software have?",
    answer: "Essential features include digital job cards, GST invoicing, spare parts inventory tracking, customer and vehicle history management, CRM lead follow-ups, automated WhatsApp service reminders, mechanic attendance & payroll, and financial business reports.",
  },
  {
    question: "Which garage management software is suitable for a small garage?",
    answer: "A small garage needs simple job card creation, quick GST billing, customer and vehicle records, and mobile app access. GarageSaarthi offers an affordable, easy-to-use solution with a 7-day free trial that scales as the garage grows.",
  },
  {
    question: "Is cloud-based garage management software better than offline software?",
    answer: "Cloud-based software allows you to access workshop records from any device (web browser or Android phone), synchronizes job status between bay floor mechanics and office staff, and prevents data loss from local PC hard drive crashes.",
  },
  {
    question: "Can GarageSaarthi manage job cards and inventory?",
    answer: "Yes. You can create digital job sheets detailing customer complaints and repair work, and deduct spare parts inventory dynamically as items are allocated to work orders.",
  },
  {
    question: "Does GarageSaarthi support GST billing?",
    answer: "Yes. GarageSaarthi generates GST-compliant invoices containing labor rates, spare parts breakdowns, customer tax details, and multiple customizable invoice series.",
  },
  {
    question: "Does GarageSaarthi send WhatsApp service reminders?",
    answer: "Yes. You can automate service due reminders and promotional messages sent directly to your customers' WhatsApp numbers.",
  },
  {
    question: "Can I manage multiple garage branches with GarageSaarthi?",
    answer: "Yes. GarageSaarthi supports multi-branch operations with centralized control, branch-level stock tracking, and consolidated financial analytics.",
  },
  {
    question: "Is GarageSaarthi available as a mobile app?",
    answer: "Yes. GarageSaarthi is available as an Android application on the Google Play Store and as a web platform accessible on any browser. (iOS app coming soon).",
  },
  {
    question: "Can I try GarageSaarthi before buying?",
    answer: "Yes. GarageSaarthi offers a 7-day free trial with full access to all features so you can test real daily workshop tasks before subscribing.",
  },
  {
    question: "How much does GarageSaarthi cost?",
    answer: "GarageSaarthi offers clear, affordable subscription packages for different plan durations (1, 3, 6, 12, or 24 months). Please visit our pricing page for current details.",
  },
];

export default function BGSFAQ() {
  return (
    <AccordionFAQ
      title="Frequently Asked Questions About Choosing"
      titleHighlight="Garage Management Software"
      faqs={faqData}
      className="bg-white"
    />
  );
}
