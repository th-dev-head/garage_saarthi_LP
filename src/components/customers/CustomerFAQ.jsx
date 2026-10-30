"use client";

import React from "react";
import AccordionFAQ from "@/src/components/common/AccordionFAQ";

export default function CustomerFAQ() {
  const faqs = [
    {
      question: "How does GarageSaarthi verify customer stories and performance metrics?",
      answer: "Every featured story and quote is derived from active, subscribed workshop accounts with explicit permission. Performance metrics—such as time saved on job card creation or reduction in spare part slippage—are corroborated using real operational workflow logs before publication.",
    },
    {
      question: "Are my garage's customer phone numbers and pricing margins safe?",
      answer: "Absolutely. Your data belongs exclusively to you. GarageSaarthi enforces strict multi-tenant isolation with 256-bit encryption. We never sell, share, or monetize your customer database or supplier costs with any third parties or insurance agencies.",
    },
    {
      question: "Can our mechanics and desk managers use it on basic mobile phones?",
      answer: "Yes. GarageSaarthi is fully mobile-responsive and accessible from any smartphone, tablet, laptop, or desktop via standard browsers as well as our Android app. Floor mechanics can clock in, upload intake photos, and update job cards without needing a dedicated computer.",
    },
    {
      question: "Can I test GarageSaarthi with my own workshop data before paying?",
      answer: "Yes. We offer an unrestricted 7-day free trial that gives you complete access to digital job cards, GST billing, inventory tracking, gate pass control, and WhatsApp alerts. No credit card is required to begin.",
    },
    {
      question: "How can our workshop submit a review or be featured in a case study?",
      answer: "We welcome authentic feedback from all active users. You can reach out directly to your assigned account specialist or email us at support@garagesaarthi.com to share your operational feedback or schedule an interview.",
    },
    {
      question: "Do I need special hardware to scan spare parts or print invoices?",
      answer: "No expensive hardware is mandatory. You can scan barcodes directly using any mobile phone camera, and invoices can be printed on standard laser, inkjet, or thermal POS receipt printers.",
    },
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked Questions"
      titleHighlight="About Customer Proof"
      subtitle="Transparent answers regarding customer privacy, review integrity, and trial access."
      faqs={faqs}
      className="bg-slate-50"
    />
  );
}
