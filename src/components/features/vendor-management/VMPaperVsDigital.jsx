import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function VMPaperVsDigital() {
  const comparisonData = [
    {
      label: "Purchase Bill Logging",
      manual: "Paper bills stacked in drawers; missing invoices cause GST credit loss.",
      digital: "Instant digital purchase entry with automatic inventory stock addition & HSN tracking.",
    },
    {
      label: "Supplier Balance Tracking",
      manual: "Hand-written diaries with frequent disputes on who owes how much.",
      digital: "Live running balance ledger updated instantly with every purchase and payment.",
    },
    {
      label: "Payment Reconciliation",
      manual: "Cash slips and UPI screenshots scattered across manager mobile phones.",
      digital: "Centralized payment receipts linked to specific bank/cash accounts and bills.",
    },
    {
      label: "Account Statement Sharing",
      manual: "Tedious manual calculation required whenever a vendor requests ledger proof.",
      digital: "1-Click PDF and Excel statement export with date-range filters and payment notes.",
    },
    {
      label: "Returns & Credit Notes",
      manual: "Defective parts returned to suppliers forgotten without credit adjustments.",
      digital: "Track returned items, debit notes, and credit balances against future purchases.",
    },
  ];

  return (
    <ComparisonTable
      title="Manual Vendor Diaries vs"
      titleHighlight="GarageSaarthi Vendor Ledger"
      subtitle="See how digital supplier management eliminates payment disputes, secures GST input tax credits, and builds trusted vendor partnerships:"
      manualHeader="Manual Paper & Diary Ledgers"
      digitalHeader="GarageSaarthi Digital Vendor Management"
      comparisons={comparisonData}
      bgClass="bg-slate-50"
    />
  );
}
