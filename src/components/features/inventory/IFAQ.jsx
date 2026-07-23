import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function IFAQ() {
  const faqs = [
    {
      question: "What is garage inventory management software?",
      answer: "Garage inventory software is an application that tracks spare parts, engine oils, and accessories in real time. It automatically deducts stock when parts are issued to job cards and alerts owners before critical items run out."
    },
    {
      question: "How does stock deduction work when creating a job card?",
      answer: "When a service advisor or mechanic adds spare parts or lubricants to a vehicle job card or counter sale invoice, the software automatically subtracts those quantities from your current stock level."
    },
    {
      question: "Can I get notifications when spare parts are running low?",
      answer: "Yes! You can define minimum reorder threshold levels for each spare part. When stock falls below that number, GarageSaarthi sends an automatic low-stock alert."
    },
    {
      question: "Does it support barcode scanning for spare parts?",
      answer: "Yes. You can connect a USB or Bluetooth barcode scanner to quickly scan product barcodes during vendor purchase intake and customer checkout."
    },
    {
      question: "Can I track vendor purchases and supplier payments?",
      answer: "Yes! You can log vendor purchase bills, track cost price variations over time, and maintain pending payment balances for all your spare parts suppliers."
    },
    {
      question: "Can I view total inventory stock valuation?",
      answer: "Yes. The inventory dashboard calculates the total monetary value of your current stock based on purchase cost and potential retail margin."
    }
  ];

  return (
    <AccordionFAQ
      title="Garage Inventory Management"
      titleHighlight="FAQs"
      subtitle="Got questions about tracking spare parts stock and preventing inventory leaks? We've got answers."
      faqs={faqs}
    />
  );
}
