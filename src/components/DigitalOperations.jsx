import React from "react";
import ComparisonTable from "./common/ComparisonTable";

export default function DigitalOperations() {
  const comparisons = [
    {
      label: "Job Card Management",
      manual: "Paper job cards, handwritten checklists, and manual entries that easily get lost or soiled.",
      digital: "Professional digital job cards with customer details, photos of vehicle issues, and automatic WhatsApp sharing."
    },
    {
      label: "Customer Inquiries",
      manual: "Scattered paper records, forgotten phone updates, and zero history when a vehicle returns for repairs.",
      digital: "Centralized database with complete service history, past mechanic logs, and instant customer lookup."
    },
    {
      label: "Inventory & Stock",
      manual: "Manual tracking in spreadsheets, surprise stockouts of critical parts, and leakage from untracked items.",
      digital: "Automated stock reduction on billing, low-stock alerts, and purchase order logs."
    },
    {
      label: "Staff & Attendance",
      manual: "Paper attendance registers, manual wage calculations, and confusion over mechanic task assignments.",
      digital: "One-click staff check-in, real-time mechanic task logs, and automatic payroll calculation."
    },
    {
      label: "Customer Retention",
      manual: "Missed follow-ups, lost repeat business, and manually typing WhatsApp reminders one by one.",
      digital: "Automated service reminders, vehicle due alerts, and direct templates sent via WhatsApp."
    },
    {
      label: "Financial Tracking",
      manual: "Scattered bill books, separate cash/online registers, and stress during monthly tax filing.",
      digital: "Professional GST invoicing, live sales graphs, and instant CA-ready audit report downloads."
    }
  ];

  return (
    <ComparisonTable
      title="Replace Manual Garage Work with a"
      titleHighlight="Digital Management System"
      subtitle="See how migrating to a digital garage management system transforms your workshop's daily routines and boosts profitability."
      comparisons={comparisons}
      bgClass="bg-slate-50"
    />
  );
}
