import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function GAManualVsAuto() {
  const comparisons = [
    {
      label: "Job Sheets",
      manual: "Paper job cards are easily soiled, torn, or misplaced by busy workshop mechanics.",
      digital: "Digital job cards are created, assigned, and updated instantly in the workspace."
    },
    {
      label: "Client Records",
      manual: "Customer contact details and notes are spread across multiple paper registers.",
      digital: "Organized customer records linked directly with specific vehicle history profiles."
    },
    {
      label: "Vehicles List",
      manual: "Finding past maintenance logs requires searching old physical invoice boxes.",
      digital: "All vehicle records, repair dates, and parts changed are available immediately."
    },
    {
      label: "Stock Control",
      manual: "Spare parts count checked manually, leading to stock discrepancies.",
      digital: "Digital inventory management with real-time stock balances and counter sales."
    },
    {
      label: "Reminders Queue",
      manual: "Compiling checklists and texting clients manually takes hours of daily work.",
      digital: "Automated service reminders triggered via WhatsApp in one click."
    },
    {
      label: "Staff Wages",
      manual: "Mechanic payroll and job commissions are tracked in rough diaries.",
      digital: "Integrated attendance checks and automated staff commission logging."
    },
    {
      label: "Billing Sheet",
      manual: "GST invoice preparation is managed separately, causing delay.",
      digital: "Streamlined GST billing workflows directly linked with active job cards."
    },
    {
      label: "Reports View",
      manual: "Calculating workshop profit requires manual calculations.",
      digital: "Central dashboard with automated reports and operational visibility."
    }
  ];

  return (
    <ComparisonTable
      title="Manual Garage Management vs"
      titleHighlight="Garage Automation"
      subtitle="See the operational differences between traditional manual paperwork and centralized digital workflows."
      manualHeader="Manual Garage Operations"
      digitalHeader="GarageSaarthi Digital Workflow"
      comparisons={comparisons}
      bgClass="bg-slate-50"
    />
  );
}
