import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function JCMFAQ() {
  const faqs = [
    {
      question: "What is a digital job card software?",
      answer: "A digital job card software is a mobile and web application that replaces paper repair registers in auto workshops. It allows service advisors to create repair orders, log customer complaints, attach inspection photos, assign mechanics, and send estimates via WhatsApp."
    },
    {
      question: "How do digital job cards save time in daily garage operations?",
      answer: "Digital job cards eliminate manual handwriting and redundant data entry. Searching past customer or vehicle service records takes just 2 seconds by registration number, and completing job cards automatically converts them into GST invoices in 1 click."
    },
    {
      question: "Can I send job card estimates to customers on WhatsApp?",
      answer: "Yes! GarageSaarthi allows you to generate a professional PDF job card and estimate link that can be shared directly with your customer's WhatsApp number for instant review and approval."
    },
    {
      question: "Can I assign mechanics to specific repair tasks on a job card?",
      answer: "Yes. You can assign one or more mechanics to specific line items on a job card, set estimated completion times, and track their progress on the shop floor."
    },
    {
      question: "Does the job card software automatically deduct spare parts from inventory?",
      answer: "Absolutely. As soon as spare parts or lubricants are issued to a job card, the quantities are automatically deducted from your central stock levels."
    },
    {
      question: "Can I attach before and after repair photos to a job card?",
      answer: "Yes! You can capture and upload vehicle inspection photos, scratch diagrams, and completed repair photos directly using the Android mobile app or web portal."
    }
  ];

  return (
    <AccordionFAQ
      title="Digital Job Card Management"
      titleHighlight="FAQs"
      subtitle="Got questions about switching from paper registers to digital repair orders? We've got answers."
      faqs={faqs}
    />
  );
}
