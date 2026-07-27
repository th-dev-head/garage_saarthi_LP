import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function HistFAQ() {
  const faqs = [
    {
      question: "What is vehicle service history software?",
      answer: "Vehicle service history software is a digital database system designed for auto repair shops and garages to store, organize, and search repair logs, spare parts replacement history, and invoice records."
    },
    {
      question: "How long are vehicle records stored on the cloud?",
      answer: "All vehicle service records, technician remarks, invoices, and odometer readings are stored permanently and securely on the cloud. There are no date limitations or data deletion thresholds."
    },
    {
      question: "Can I search for a vehicle's history by its registration number?",
      answer: "Yes! The instant contact search lookup allows you to find any customer vehicle history in 2 seconds by typing its license registration plate number or owner's mobile number."
    },
    {
      question: "Does the system track parts replacement and labor rates?",
      answer: "Yes. Every job card links to the spare parts SKU, brand name, and labor rates charged. This helps you identify what components were previously changed and verify active warranty dates."
    },
    {
      question: "Can I share the service history report with customers?",
      answer: "Absolutely. You can generate a clean, professional vehicle service record file or summary card and share it directly with the customer via WhatsApp in one click."
    },
    {
      question: "Is my customer and vehicle database secure?",
      answer: "Yes. GarageSaarthi uses encrypted, bank-grade cloud servers. You can restrict technician permissions so that staff cannot download or copy your client database records."
    }
  ];

  return (
    <AccordionFAQ
      title="Vehicle Service History"
      titleHighlight="FAQs"
      subtitle="Got questions about tracking service records, spare parts lookups, and security? We've got answers."
      faqs={faqs}
      className="bg-slate-50"
    />
  );
}
