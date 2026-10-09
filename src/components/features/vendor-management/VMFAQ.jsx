import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function VMFAQ({ className = "bg-white" }) {
  const faqs = [
    {
      question: "How does GarageSaarthi track spare parts supplier statements?",
      answer: "Whenever you inward a purchase bill from a supplier, the system logs the debit entry and updates your inventory stock. When you make payments (Cash, UPI, Cheque, or NEFT), it logs credit entries and calculates a running balance ledger automatically.",
    },
    {
      question: "Can I record partial payments against multiple purchase bills?",
      answer: "Yes! You can record lump-sum or partial payments towards a supplier's overall ledger balance or allocate amounts against specific purchase invoices.",
    },
    {
      question: "Can I export vendor account statements to PDF and Excel?",
      answer: "Yes. You can select any date range (this month, last quarter, financial year) and export comprehensive statement ledgers formatted with invoice numbers, payment modes, notes, and closing balances in 1 click.",
    },
    {
      question: "How are purchase returns and damaged parts handled?",
      answer: "When defective parts or wrong shipments are returned to the supplier, you can issue a debit note. The return value is automatically deducted from your payable balance.",
    },
    {
      question: "Does supplier payment sync with our workshop bank and cash accounts?",
      answer: "Yes. Payments recorded in Supplier Management automatically update your Financial Management cash drawers and bank ledgers, ensuring accurate overall accounting.",
    },
    {
      question: "Can we manage suppliers across multiple workshop branches?",
      answer: "Yes. GarageSaarthi allows you to manage centralized suppliers across all branches or assign branch-specific local vendors with separate purchase tracking.",
    },
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked"
      titleHighlight="Questions"
      subtitle="Everything you need to know about Vendor & Supplier Management in GarageSaarthi."
      faqs={faqs}
      className={className}
    />
  );
}
