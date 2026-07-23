import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function JCMPaperVsDigital() {
  const comparisonData = [
    {
      label: "Record Entry",
      manual: "Handwritten paper slips, scribbled fuel levels & lost complaint sheets",
      digital: "Structured digital input fields, vehicle inspection checklists & photo logs"
    },
    {
      label: "Customer Communication",
      manual: "Calling customer repeatedly or sending handwritten paper photos",
      digital: "Instant WhatsApp estimate PDFs with one-click customer approval"
    },
    {
      label: "Mechanic Task Tracking",
      manual: "Walking into repair bays to ask mechanics about vehicle status",
      digital: "Assign tasks to specific technicians and track status on mobile app"
    },
    {
      label: "Spare Parts Issuance",
      manual: "Unrecorded parts taken from inventory drawers leading to stock leaks",
      digital: "Spare parts issued directly to job card and deducted from inventory"
    },
    {
      label: "Estimation Accuracy",
      manual: "Scratched mental math resulting in customer pricing disputes",
      digital: "Pre-loaded spare parts and labor master rates with exact totals"
    },
    {
      label: "Invoice Generation",
      manual: "Re-writing entire job details manually into a duplicate billing register",
      digital: "One-click conversion of completed job card into final GST invoice"
    }
  ];

  return (
    <ComparisonTable
      title="Replace Paper Registers with a"
      titleHighlight="Digital Job Card Management System"
      subtitle="Eliminate handwritten mistakes, lost job slips, and billing friction. Compare paper job cards with GarageSaarthi digital repair orders:"
      manualHeader="Paper Job Cards & Diaries"
      digitalHeader="GarageSaarthi Digital Job Cards"
      comparisons={comparisonData}
    />
  );
}
