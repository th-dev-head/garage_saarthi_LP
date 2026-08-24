import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function GCFAQ() {
  const faqData = [
    {
      question: "What is garage CRM software?",
      answer: "Garage CRM software is customer relationship management software designed specifically for automotive workshops. It organizes leads, customer records, follow-ups, and vehicle histories inside a unified digital platform."
    },
    {
      question: "Why does a garage need CRM software?",
      answer: "A dedicated CRM helps garage owners track customer enquiries, schedule call backs, organize vehicle records, maintain service histories, and send service alerts for customer retention."
    },
    {
      question: "Can GarageSaarthi manage garage leads?",
      answer: "Yes. You can save incoming enquiries, phone calls, or walk-ins, log complaints, set call dates, and track conversion statuses on the dashboard."
    },
    {
      question: "Can I store customer records in GarageSaarthi?",
      answer: "Yes. Keep customer profiles, contact numbers, and invoice histories synchronized in a secure cloud database."
    },
    {
      question: "Can customer vehicles be managed in GarageSaarthi?",
      answer: "Yes. Every customer record connects directly to one or more car or bike registration profiles."
    },
    {
      question: "Does GarageSaarthi help with customer follow-ups?",
      answer: "Yes. It supports follow-up date fields, CRM status categories, and service alerts to coordinate customer communication."
    },
    {
      question: "Can car workshops use GarageSaarthi CRM?",
      answer: "Yes, it is fully optimized for multi-brand car workshops and service centers."
    },
    {
      question: "Can auto repair shops use GarageSaarthi CRM?",
      answer: "Yes, independent auto repair workshops can track diagnostic requests, mechanic tasks, and customer follow-up actions."
    },
    {
      question: "Does GarageSaarthi maintain customer service history?",
      answer: "Yes. Every invoice, part replaced, and diagnostic checklist is stored under the vehicle's permanent profile."
    },
    {
      question: "Can GarageSaarthi send service alerts?",
      answer: "Yes, you can track service calendars and coordinate next-due notifications."
    },
    {
      question: "Is GarageSaarthi CRM available on mobile?",
      answer: "Yes. We maintain a live mobile apps on Google Play Store & Apple App Store."
    },
    {
      question: "Is GarageSaarthi only a CRM software?",
      answer: "No. CRM is just one connected module of our wider garage management platform, which also handles job cards, inventory, and billing."
    },
    {
      question: "Does GarageSaarthi offer a free trial?",
      answer: "Yes. Sign up for our 7-day free trial to test all CRM and operational features with no credit card required."
    },
    {
      question: "How much does GarageSaarthi CRM cost?",
      answer: "CRM features are included in our standard quarterly and annual subscription plans. Check the pricing page for details."
    }
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Garage CRM Software"
      faqs={faqData}
    />
  );
}

