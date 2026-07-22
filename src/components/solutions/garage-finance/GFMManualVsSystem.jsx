import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function GFMManualVsSystem() {
  const comparisons = [
    { label: "Expenses", manual: "Separate expense register in notebook", digital: "Organized expense records by category" },
    { label: "Income", manual: "Scattered income notes and bills", digital: "Centralized digital income records" },
    { label: "Payments", manual: "Manual payment tracking on sheets", digital: "Structured pending payment tracking" },
    { label: "Loans", manual: "Separate loan details maintained manually", digital: "Organized loan records & EMI schedules" },
    { label: "Tax & CA", manual: "Repeated manual files shared with CA", digital: "Restricted read-only CA Access profile" },
    { label: "Integration", manual: "Disconnected operational/financial records", digital: "Finance auto-linked to job cards and stock" },
    { label: "Reporting", manual: "Manual register compiling for reports", digital: "Instant reports and business graphs" }
  ];

  return (
    <ComparisonTable
      title="Move Beyond Manual"
      titleHighlight="Garage Finance Records"
      subtitle="Review how switching to a digital workspace helps structure your bookkeeping registers and saves daily tracking effort."
      manualHeader="Manual Finance Management"
      digitalHeader="With GarageSaarthi"
      comparisons={comparisons}
    />
  );
}
