import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function GICFAQ({ className = "bg-slate-50" }) {
  const faqs = [
    {
      question: "How does GarageSaarthi streamline accidental insurance claims for workshops?",
      answer: "GarageSaarthi automates the complete claim lifecycle: customer policy recording, initial photo inspection, digital surveyor estimate sharing, IRDAI depreciation computation, and insurer payment reconciliation.",
    },
    {
      question: "Can I manage claims across all Indian general insurance companies?",
      answer: "Yes. The platform supports tie-ups and non-cashless processing for ICICI Lombard, HDFC ERGO, Bajaj Allianz, Tata AIG, Go Digit, New India Assurance, United India, and all other IRDAI-registered insurers.",
    },
    {
      question: "How does the system handle Zero-Depreciation (Nil Dep) policies?",
      answer: "With a single click on Zero-Depreciation mode, the system sets 0% depreciation on parts while correctly calculating compulsory excess and non-covered consumables as customer liability.",
    },
    {
      question: "Can we submit supplementary estimates if more damage is found?",
      answer: "Yes. Once the vehicle is dismantled in the bay, you can add supplementary parts and labor items with high-resolution photos and export an updated approval request for the surveyor.",
    },
    {
      question: "How does GarageSaarthi help track delayed cashless payments?",
      answer: "Our specialized Insurance Payment Aging ledger categorizes pending payouts by insurer, claims officer, and age buckets, allowing you to follow up on overdue payments effortlessly.",
    },
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked"
      titleHighlight="Questions"
      subtitle="Everything you need to know about GarageSaarthi Bodyshop &amp; Cashless Claim Management Software."
      faqs={faqs}
      className={className}
    />
  );
}
