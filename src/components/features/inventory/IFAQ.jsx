import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function IFAQ({ className = "bg-white" }) {
  const faqs = [
    {
      question: "What is garage inventory management software?",
      answer: "Garage inventory software is an application that tracks spare parts, engine oils, and accessories in real time. It automatically deducts stock when parts are issued to job cards and alerts owners before critical items run out."
    },
    {
      question: "How does the Item Consumption & Usage History tracker work?",
      answer: "GarageSaarthi maintains a complete item-level consumption ledger. For any spare part or oil, you can view the complete chronological audit trail of which Job Cards (with vehicle & customer details) or Counter Sales consumed the item, the exact quantity deducted, billed unit price, and the assigned mechanic."
    },
    {
      question: "How does stock deduction work when creating a job card?",
      answer: "When a service advisor or mechanic adds spare parts or lubricants to a vehicle job card or counter sale invoice, the software automatically subtracts those quantities from your current stock level."
    },
    {
      question: "Can I organize inventory by physical Warehouse, Shelf/Rack, and Bin locations?",
      answer: "Yes! You can assign multi-tier storage locations (e.g., Main Workshop • Rack A-04 • Bin 102) to every spare part. Location details are printed on mechanic job sheets so technicians can find parts in seconds."
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
      subtitle="Got questions about tracking spare parts stock, storage bins, and item usage history? We've got answers."
      faqs={faqs}
      className={className}
    />
  );
}
