import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function VIPaperVsDigital() {
  const comparisonData = [
    { label: "Time Taken per Inspection", digital: "5-7 Minutes", manual: "15-20 Minutes" },
    { label: "Health Status Updates", digital: "Instant Color-Coded Map (Green/Yellow/Red)", manual: "Manual Checkmarks" },
    { label: "Photo Evidence", digital: "Yes, attach multiple photos", manual: "No, impossible" },
    { label: "Customer Sharing", digital: "Instant WhatsApp PDF sharing", manual: "Physical handover only" },
    { label: "Integration with Job Card", digital: "Automatic 1-Click Conversion", manual: "Manual Re-entry required" },
    { label: "Service History Search", digital: "Find previous inspections instantly via vehicle number", manual: "Digging through filing cabinets" },
  ];

  return (
    <ComparisonTable 
      title="Paper Checklists vs"
      titleHighlight="Digital Health Cards"
      subtitle="Stop losing inspection papers and wasting time on manual entry. See why top garages are upgrading to digital inspections."
      comparisons={comparisonData} 
      digitalHeader="GarageSaarthi DVI"
      manualHeader="Paper Checklist"
      bgClass="bg-slate-50"
    />
  );
}
