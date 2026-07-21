import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

const data = [
  {
    label: "Job Card Management",
    manual: "Paper job cards that get oily, misplaced, or dirty in repair bays.",
    digital: "Digital Job Cards tracking complaints, labor rates, and spare parts.",
  },
  {
    label: "Inventory Tracking",
    manual: "Manual stock spreadsheets or mental tracking leading to parts leakage.",
    digital: "Real-time Spare Parts Inventory deducted dynamically on job sheets.",
  },
  {
    label: "Customer & Vehicle Data",
    manual: "Customer phone numbers and vehicle numbers written in paper diaries.",
    digital: "Organized Customer & Vehicle Database with complete service logs.",
  },
  {
    label: "Lead & Enquiries",
    manual: "Scattered notes and forgotten phone leads for new service packages.",
    digital: "Integrated Garage CRM tracking leads, quotes, and follow-up dates.",
  },
  {
    label: "Service Reminders",
    manual: "Manual phone calls for service due checkups that often get forgotten.",
    digital: "Automated WhatsApp Service Alerts sent automatically when service is due.",
  },
  {
    label: "Staff Attendance",
    manual: "Physical attendance registers requiring daily manual check-ins.",
    digital: "Digital Attendance & Leave Management for mechanics and staff.",
  },
  {
    label: "Payroll & Commissions",
    manual: "Loose slips of paper to compute mechanic labor commission payouts.",
    digital: "Automated Payroll calculating net salaries and job commissions.",
  },
  {
    label: "Business Visibility",
    manual: "Scattered cash receipts, bank notes, and notebook balances.",
    digital: "Centralized Dashboard & Financial Reports for clear revenue visibility.",
  },
];

export default function BGSAllInOne() {
  return (
    <ComparisonTable
      title="All-in-One Garage Software or"
      titleHighlight="Multiple Separate Tools?"
      subtitle="Compare the friction of managing fragmented tools against GarageSaarthi's connected workshop ecosystem."
      manualHeader="Multiple Disconnected Tools"
      digitalHeader="GarageSaarthi All-in-One"
      comparisons={data}
      bgClass="bg-slate-50"
    />
  );
}
