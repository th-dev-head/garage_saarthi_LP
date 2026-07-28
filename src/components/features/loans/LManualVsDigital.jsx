import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function LManualVsDigital() {
  const comparisonData = [
    {
      label: "EMI Payment Reminders",
      manual: "Relying on memory or paper calendar notes (frequent missed dates)",
      digital: "Automated WhatsApp & push alerts sent 3 days before bank debit date"
    },
    {
      label: "Bank Bounce Charges",
      manual: "Paying ₹500 - ₹1,000 in bank bounce fees & penal interest monthly",
      digital: "Zero bounce fees by monitoring account balance ahead of deduction"
    },
    {
      label: "Loan Portfolio Visibility",
      manual: "Scattered bank passbooks, loan agreements, and physical receipts",
      digital: "Unified dashboard displaying total outstanding debt & loan balances"
    },
    {
      label: "Interest Expenses Audit",
      manual: "Manual interest calculation errors during yearly CA audit",
      digital: "Instant export of principal vs interest ledger breakdown for tax filing"
    }
  ];

  return (
    <ComparisonTable
      title="Manual EMI Diaries vs"
      titleHighlight="Digital Loan Management"
      subtitle="Compare paper EMI diary notes with automated garage loan repayment tracking."
      manualHeader="Paper Diary & Memory"
      digitalHeader="GarageSaarthi Loan System"
      comparisons={comparisonData}
      bgClass="bg-slate-50"
    />
  );
}
