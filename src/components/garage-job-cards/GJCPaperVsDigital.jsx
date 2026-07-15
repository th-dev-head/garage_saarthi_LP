import React from "react";
import ComparisonTable from "../common/ComparisonTable";

export default function GJCPaperVsDigital() {
  const comparisonData = [
    { label: "Record Entry", manual: "Handwritten details, fuel levels scribbled on diaries", digital: "Structured digital input fields, custom fuel checklists" },
    { label: "Information Search", manual: "Sifting physical files, missing customer detail slips", digital: "Searchable online databases with histories" },
    { label: "Job Tracking", manual: "Walking to mechanic bays to ask status logs", digital: "Real-time repair tracking on desktop & mobile app" },
    { label: "Spare Issues", manual: "Unrecorded parts taken from drawers, stock leaks", digital: "Spare parts issued and mapped to job cards instantly" },
    { label: "Estimates", manual: "Scratched math, verbal pricing disputes", digital: "Pre-loaded parts and labor rates with PDF summaries" },
    { label: "Billing Link", manual: "Re-writing entire job details into a duplicate invoice", digital: "One-click conversion of job card details to final invoice" }
  ];

  return (
    <ComparisonTable
      title="Replace Paper Job Cards with a"
      titleHighlight="Digital Garage Job Card System"
      subtitle="Eliminate operational mistakes, parts leaks, and billing friction. Compare traditional paper methods with digital garage records:"
      manualHeader="Paper Job Cards"
      digitalHeader="GarageSaarthi Digital Job Cards"
      comparisons={comparisonData}
    />
  );
}
