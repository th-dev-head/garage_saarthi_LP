import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function GACProblem() {
  const comparisons = [
    { label: "Payments", manual: "Separate payment registers or sheets", digital: "Organized pending payment tracking logs" },
    { label: "Expenses", manual: "Manual paper registers for expenses", digital: "Digital, categorized business expense records" },
    { label: "Invoicing", manual: "Scattered invoice slips and carbon bills", digital: "GST-compliant invoicing and invoice series profiles" },
    { label: "Ecosystem", manual: "Workshop data separate from finance files", digital: "Connected garage operations in one platform" },
    { label: "Loans & EMI", manual: "Manual tracking of EMI schedules", digital: "Dedicated Loan module and installment records" },
    { label: "CA Access", manual: "Sharing files manually via emails or USB", digital: "Restricted read-only CA Access dashboard" },
    { label: "Reports", manual: "Compiling reports manually from files", digital: "Real-time dashboard summaries & reports" }
  ];

  return (
    <ComparisonTable
      title="Stop Managing Garage Accounts Across"
      titleHighlight="Registers, Excel and Separate Tools"
      subtitle="Switch to a unified digital workspace. Maintain a single source of truth for payments, bills, and reports."
      manualHeader="Manual Garage Accounting"
      digitalHeader="With GarageSaarthi"
      comparisons={comparisons}
    />
  );
}
