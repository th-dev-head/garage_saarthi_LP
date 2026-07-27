import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function CSFAQ() {
  const faqs = [
    {
      question: "What is counter sales software for garages?",
      answer: "Counter sales software (or garage POS) is a billing system designed for auto repair shops and spare parts stores to sell parts, lubricants, and accessories directly to walk-in buyers without opening a vehicle job card."
    },
    {
      question: "Does counter sales automatically update inventory stock?",
      answer: "Yes! Every time a counter sale invoice is generated, the sold parts and lubricants are deducted immediately from your central garage inventory levels."
    },
    {
      question: "Can I generate GST invoices for counter sales?",
      answer: "Yes! GarageSaarthi pre-loads HSN codes, SAC categories, and GST rates (CGST, SGST, IGST), generating fully compliant retail GST bills automatically."
    },
    {
      question: "Can I send counter sales receipts via WhatsApp?",
      answer: "Yes! You can send digital PDF invoices directly to your customer's WhatsApp number in one click."
    },
    {
      question: "Does it support barcode scanning for fast checkout?",
      answer: "Yes. You can scan barcodes on spare parts packaging or search by part SKU/name to pull up pricing and stock instantly."
    },
    {
      question: "Can I track multiple payment modes like UPI and Cash?",
      answer: "Yes. You can log payments made via UPI (GPay, PhonePe, Paytm), Cash, Credit/Debit Cards, or Bank Transfer."
    }
  ];

  return (
    <AccordionFAQ
      title="Garage Counter Sales & POS"
      titleHighlight="FAQs"
      subtitle="Got questions about over-the-counter spare parts billing and inventory sync? We've got answers."
      faqs={faqs}
      className="bg-slate-50"
    />
  );
}
