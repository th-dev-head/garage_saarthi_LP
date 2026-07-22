import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

const rows = [
  {
    label: "Job Card Management",
    manual: "Paper job cards, handwritten checklists, lost records",
    digital: "Digital job cards created in under 60 seconds, always retrievable",
  },
  {
    label: "Inventory Tracking",
    manual: "Manual stock counts, surprise stock-outs, no low-stock alerts",
    digital: "Live inventory with automatic deduction and low-stock notifications",
  },
  {
    label: "Billing & Invoicing",
    manual: "Handwritten or spreadsheet bills, GST errors, slow processing",
    digital: "GST-compliant invoices generated instantly, shared via WhatsApp",
  },
  {
    label: "Customer Follow-up",
    manual: "Forgotten service reminders, no system to track due dates",
    digital: "Automated service alerts sent at the right time, every time",
  },
  {
    label: "Staff Management",
    manual: "Manual attendance registers, disputed salary calculations",
    digital: "Digital attendance, payroll auto-calculated from working days",
  },
  {
    label: "Business Reports",
    manual: "No visibility — guessing daily revenue, profit, and expenses",
    digital: "Real-time dashboard with revenue, job status, and payment reports",
  },
  {
    label: "Multi-Branch Control",
    manual: "Visiting each branch physically to check operations",
    digital: "Centralized control — view all branches from one dashboard",
  },
];

export default function WMComparison() {
  return (
    <ComparisonTable
      title="Manual Workshop vs."
      titleHighlight="Digital Workshop Management."
      subtitle="See exactly what changes when your workshop switches from manual operations to GarageSaarthi."
      manualHeader="The Manual Way"
      digitalHeader="With GarageSaarthi"
      comparisons={rows}
    />
  );
}

