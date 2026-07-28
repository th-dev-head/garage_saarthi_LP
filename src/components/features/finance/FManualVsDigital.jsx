import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function FManualVsDigital() {
  const comparisonData = [
    {
      label: "Cash & Payment Tracking",
      manual: "Paper notebooks with frequent calculation mistakes and unrecorded cash",
      digital: "Automated cash drawer & digital UPI ledger synced to invoices"
    },
    {
      label: "Vendor Credit Ledger",
      manual: "Disputes with spare parts dealers over unpaid bills and credit terms",
      digital: "1-Click supplier ledger showing exact pending payables & purchase bills"
    },
    {
      label: "Daily P&L Visibility",
      manual: "Calculating monthly profits at month-end based on guesswork",
      digital: "Real-time daily Profit & Loss dashboard after spare parts & labor costs"
    },
    {
      label: "Tax & GST Preparation",
      manual: "Days wasted gathering paper invoices for chartered accountants",
      digital: "Instant GSTR-1 & GSTR-3B tax report exports ready for CA filing"
    }
  ];

  return (
    <ComparisonTable
      title="Paper Notebooks vs"
      titleHighlight="Digital Finance Management"
      subtitle="Compare manual paper ledgers with automated garage financial accounting."
      manualHeader="Paper Ledgers & Diaries"
      digitalHeader="GarageSaarthi Finance System"
      comparisons={comparisonData}
      bgClass="bg-slate-50"
    />
  );
}
