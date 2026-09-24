import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function IMPaperVsDigital() {
  const comparisonData = [
    {
      label: "Claim & Policy Data Entry",
      manual: "Handwritten claim forms; policy numbers & claim IDs lost in paper files.",
      digital: "Instant digital entry linked to Job Card with auto-fill customer & vehicle history.",
    },
    {
      label: "Surveyor Coordination",
      manual: "Manual phone calls; paper printouts mailed or handed over on physical visits.",
      digital: "Automated digital dossier with one-click WhatsApp estimate sharing & photo packs.",
    },
    {
      label: "Depreciation & Liability Math",
      manual: "Manual error-prone calculator math for plastic/glass/metal depreciation & salvage.",
      digital: "Automated IRDAI-compliant formula calculation for customer vs insurer splits.",
    },
    {
      label: "Claim Document Storage",
      manual: "Physical paper files for RC, DL, FIR, and insurance copy easily misplaced.",
      digital: "Encrypted cloud vault storing all claim papers, pre-repair & post-repair photos.",
    },
    {
      label: "Supplementary Approvals",
      manual: "Hidden damages found during disassembly cause days of repair delays.",
      digital: "Instant supplementary request generation with tagged damage photo evidence.",
    },
    {
      label: "Cashless Payment Tracking",
      manual: "No track of aging cashless receivables; delayed insurance company settlements.",
      digital: "Live insurer-wise payment ledger, pending balance aging & reconciliation reports.",
    },
  ];

  return (
    <ComparisonTable
      title="Paper-Based Claims vs"
      titleHighlight="GarageSaarthi Insurance"
      subtitle="See how switching to automated accidental claim tracking cuts turnaround time by 45% and eliminates delayed cashless payouts:"
      manualHeader="Manual Paper Claims"
      digitalHeader="GarageSaarthi Insurance Software"
      comparisons={comparisonData}
      bgClass="bg-slate-50"
    />
  );
}
