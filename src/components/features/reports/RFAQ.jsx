import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function RFAQ() {
  const faqs = [
    {
      question: "Can I export reports to Excel and PDF formats?",
      answer: "Yes! All reports in GarageSaarthi—including sales registers, inventory velocity, GST tax summaries, and P&L statements—can be exported in 1 click to Excel (.xlsx) and PDF formats."
    },
    {
      question: "Are GST tax reports formatted for Chartered Accountant (CA) filing?",
      answer: "Yes. GSTR-1, GSTR-3B, and tax breakdown reports separate CGST, SGST, and IGST components accurately, making monthly CA tax filing simple."
    },
    {
      question: "Can I track mechanic labor efficiency and individual sales?",
      answer: "Yes! You can view detailed technician productivity reports showing labor revenue earned, completed job counts, and commission payouts."
    },
    {
      question: "Is real-time analytics accessible from mobile phones?",
      answer: "Yes. You can monitor live daily sales, cash drawer totals, and workshop KPIs from anywhere on the GarageSaarthi mobile app."
    },
    {
      question: "Are Reports & Analytics included in the 7-day free trial?",
      answer: "Yes! Full access to all financial, inventory, mechanic, and customer reports is included during your 7-day free trial."
    }
  ];

  return (
    <AccordionFAQ
      title="Garage Reports & Analytics"
      titleHighlight="FAQs"
      subtitle="Everything you need to know about GarageSaarthi reporting & analytics software."
      faqs={faqs}
      className="bg-white"
    />
  );
}
