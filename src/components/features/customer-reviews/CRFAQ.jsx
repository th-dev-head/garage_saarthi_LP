import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function CRFAQ() {
  const faqs = [
    {
      question: "How does GarageSaarthi collect Google reviews automatically?",
      answer: "When an invoice is marked as paid or vehicle is delivered, GarageSaarthi automatically queues a friendly thank-you WhatsApp message containing your direct Google Maps review link."
    },
    {
      question: "What happens if a customer wants to give a 1-star or 2-star review?",
      answer: "GarageSaarthi includes a smart feedback filter. Lower rating submissions are routed privately to the garage owner or manager so you can resolve the customer's complaint directly before it reaches Google."
    },
    {
      question: "Can I use custom QR code standees at my billing counter?",
      answer: "Yes! You can generate and print custom QR code standees from your GarageSaarthi dashboard to collect instant ratings from walk-in customers at your reception."
    },
    {
      question: "Does collecting more Google reviews help my garage rank higher?",
      answer: "Yes! Google Local Pack algorithm prioritizes workshops with high ratings, fresh reviews, and quick customer responses."
    },
    {
      question: "Is review collection feature included in the 7-day free trial?",
      answer: "Yes! During your 7-day free trial, you can test review request templates, link generation, and feedback workflows."
    }
  ];

  return (
    <AccordionFAQ
      title="Customer Review Collection"
      titleHighlight="FAQs"
      subtitle="Everything you need to know about GarageSaarthi automated review collection."
      faqs={faqs}
      className="bg-white"
    />
  );
}
