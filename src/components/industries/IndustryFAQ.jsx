import React from "react";
import AccordionFAQ from "../common/AccordionFAQ";

export default function IndustryFAQ({ className = "bg-slate-50" }) {
  const faqs = [
    {
      question: "What types of automotive businesses can use GarageSaarthi?",
      answer: "GarageSaarthi is built for a wide variety of automotive service businesses across India, including multi-brand car workshops, independent car garages, two-wheeler bike service centres, commercial truck workshops, EV repair garages, detailing studios, auto repair shops, and fleet maintenance operations. You can explore each specific industry card on this page to view relevant workflows.",
    },
    {
      question: "Can GarageSaarthi help manage job cards and billing?",
      answer: "Yes. GarageSaarthi provides complete digital job card management—allowing service advisors to log customer complaints, mark vehicle scratches on 2D diagrams, allocate mechanics, and track job progress. When repairs are finished, generate GST-compliant invoices and counter sale receipts in just one click.",
    },
    {
      question: "Can I manage customer and vehicle service records?",
      answer: "Yes. Every customer interaction, vehicle service history, previous invoice, replaced spare part, and odometer reading is systematically organized in a digital vehicle dossier. You can retrieve complete historical service records instantly by searching the vehicle registration number or customer phone number.",
    },
    {
      question: "Does GarageSaarthi support multiple branches?",
      answer: "Yes. GarageSaarthi offers multi-branch management capabilities designed for expanding workshop chains and multi-outlet businesses. Centralized dashboards allow owners to monitor inventory stock levels, staff attendance, active job cards, and daily revenue across all locations from a single admin account.",
    },
    {
      question: "How do I find the right GarageSaarthi solution for my business?",
      answer: "You can click on any of the industry cards on this page to review specific capabilities tailored to your automotive segment (e.g., car workshops, bike centers, or fleet operations). Alternatively, you can start a free 7-day trial or contact our support team to get personalized guidance for your workshop setup.",
    },
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked"
      titleHighlight="Questions"
      subtitle="Everything you need to know about GarageSaarthi's automotive industry solutions and workshop management fit."
      faqs={faqs}
      className={className}
    />
  );
}
