import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function BFAQ() {
  const faqs = [
    {
      question: "What is garage billing & invoicing software?",
      answer: "Garage billing software is a specialized application for auto workshops that automates tax invoice generation, calculates GST splits (CGST/SGST/IGST), records spare parts & labor charges, and tracks customer payment statuses."
    },
    {
      question: "Can I generate GST-compliant invoices with HSN codes?",
      answer: "Yes! GarageSaarthi pre-loads HSN codes for spare parts and SAC codes for labor services. It calculates exact tax percentages automatically for GST-registered workshops."
    },
    {
      question: "Can I send invoices to customers via WhatsApp?",
      answer: "Yes. You can send digital PDF tax invoices and payment confirmation receipts directly to your customer's WhatsApp in one click."
    },
    {
      question: "Does it support non-GST billing for smaller garages?",
      answer: "Yes! You can toggle between GST tax invoices and non-GST retail estimation bills depending on your business registration setup."
    },
    {
      question: "Can I track partial or advance payments on an invoice?",
      answer: "Yes. You can record advance payments taken during vehicle intake, log partial payments, and show the remaining balance due on the final invoice."
    },
    {
      question: "Can I convert job cards to invoices automatically?",
      answer: "Absolutely. With 1-click job card conversion, all spare parts issued and labor tasks recorded are instantly transferred to the final bill without re-typing."
    }
  ];

  return (
    <AccordionFAQ
      title="Garage Billing & Invoicing"
      titleHighlight="FAQs"
      subtitle="Got questions about switching from manual bill books to digital GST invoicing? We've got answers."
      faqs={faqs}
    />
  );
}
