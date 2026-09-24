import React from "react";
import ComparisonTable from "../../common/ComparisonTable";
import GradientUnderline from "../../common/GradientUnderline";

export default function IMPaperVsDigital() {
  const comparisonData = [
    {
      feature: "Claim & Policy Data Entry",
      traditional: "Handwritten claim forms; policy numbers & claim IDs lost in paper files",
      garageSaarthi: "Instant digital entry linked to Job Card with auto-fill customer & vehicle history",
    },
    {
      feature: "Surveyor Coordination",
      traditional: "Manual phone calls; paper printouts mailed or handed over on physical visits",
      garageSaarthi: "Automated digital dossier with one-click WhatsApp estimate sharing & photo packs",
    },
    {
      feature: "Depreciation & Liability Math",
      traditional: "Manual error-prone calculator math for plastic/glass/metal depreciation & salvage",
      garageSaarthi: "Automated IRDAI-compliant formula calculation for customer vs insurer splits",
    },
    {
      feature: "Claim Document Storage",
      traditional: "Physical paper files for RC, DL, FIR, and insurance copy easily misplaced",
      garageSaarthi: "Encrypted cloud vault storing all claim papers, pre-repair & post-repair photos",
    },
    {
      feature: "Supplementary Approvals",
      traditional: "Hidden damages found during disassembly cause days of repair delays",
      garageSaarthi: "Instant supplementary request generation with tagged damage photo evidence",
    },
    {
      feature: "Cashless Payment Tracking",
      traditional: "No track of aging cashless receivables; delayed insurance company settlements",
      garageSaarthi: "Live insurer-wise payment ledger, pending balance aging & reconciliation reports",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Why Modernize Your Bodyshop
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4 leading-tight">
            Paper-Based Claims vs <GradientUnderline>GarageSaarthi Insurance</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            See how switching to automated accidental claim tracking cuts turnaround time by 45% and eliminates delayed cashless payouts.
          </p>
        </div>

        <ComparisonTable
          headers={["Feature / Workflow", "Manual Paper Claims", "GarageSaarthi Insurance Software"]}
          rows={comparisonData}
        />
      </div>
    </section>
  );
}
