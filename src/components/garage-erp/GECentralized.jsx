import React from "react";
import ComparisonTable from "../common/ComparisonTable";

export default function GECentralized() {
  const comparisonData = [
    { label: "Job Cards", manual: "Paper logs, physical card binders, lost complaints", digital: "Structured digital job card records, mechanic logs" },
    { label: "Inventory", manual: "Manual register notebooks, stock mismatch", digital: "Centralized spare parts inventory & low-stock warnings" },
    { label: "CRM", manual: "Scattered diary notes, forgotten customer details", digital: "Unified customer database & automated reminder workflows" },
    { label: "Vehicles", manual: "Vehicle records disconnected from jobs", digital: "Linked profiles tracking detailed service histories" },
    { label: "Attendance", manual: "Manual sign-in sheets, calculation disputes", digital: "Digital employee clock-in & leave management dashboard" },
    { label: "Payroll", manual: "Complex commission logs, excel files", digital: "Attendance-linked automated payroll calculations" },
    { label: "Finance & Payments", manual: "Unpaid invoices tracked on notebooks", digital: "Connected payment tracking & GST billing records" },
    { label: "Branches", manual: "Daily calling to check sales, zero visibility", digital: "Centralized multi-branch control & performance reports" },
    { label: "Reports", manual: "Scattered paperwork, manual calculations", digital: "Aggregated reports & real-time analytics graphs" }
  ];

  return (
    <ComparisonTable
      title="Replace Disconnected Garage Records with"
      titleHighlight="One Centralized Platform"
      subtitle="See how an integrated garage ERP platform saves hours of manual work and administrative confusion compared to traditional paper operations."
      manualHeader="Disconnected Manual records"
      digitalHeader="GarageSaarthi Connected ERP"
      comparisons={comparisonData}
    />
  );
}
