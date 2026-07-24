import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function CustFAQ() {
  const faqs = [
    {
      question: "What is garage customer management software?",
      answer: "Garage customer management software is a cloud database designed for auto workshops to securely store vehicle owner details, contact information, service histories, outstanding dues, and diagnostic feedback logs."
    },
    {
      question: "How does the system link customers to vehicles?",
      answer: "When you create a profile, you can map multiple vehicles (cars or two-wheelers) to a single customer name. This lets you view all associated vehicle specifications and historical logs from one card."
    },
    {
      question: "Is my customer database secure?",
      answer: "Yes. GarageSaarthi uses bank-grade secure cloud servers. You can customize staff access roles to restrict regular mechanics or service advisors from exporting or copying your contact database."
    },
    {
      question: "Can I track customer credit and payment histories?",
      answer: "Absolutely. The integrated customer ledger tracks outstanding credit balances, partial payments, advance deposits, and complete invoice histories for each client."
    },
    {
      question: "Does it support automated WhatsApp engagement?",
      answer: "Yes! You can message customers, send PDF quotes, invoices, delivery updates, and auto-reminders directly to their WhatsApp with a single click."
    },
    {
      question: "Can I collect Google Reviews from the customer profile?",
      answer: "Yes. Once payment is logged, the system can trigger an automated feedback link to the customer's WhatsApp, encouraging happy clients to leave a 5-star Google review."
    }
  ];

  return (
    <AccordionFAQ
      title="Garage Customer Management"
      titleHighlight="FAQs"
      subtitle="Got questions about managing customer profiles, securing contact databases, and tracking history? We've got answers."
      faqs={faqs}
    />
  );
}
