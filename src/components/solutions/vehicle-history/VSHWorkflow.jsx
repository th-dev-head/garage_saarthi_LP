import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function VSHWorkflow() {
  const data = [
    { label: "Record Searching", manual: "Flip through old folders, registers, invoices", digital: "Instantly search by registration or phone number" },
    { label: "Mechanic Access", manual: "Ask other staff, depend on memory", digital: "View linked vehicle files on Android & iOS apps" },
    { label: "Customer Connection", manual: "Contact lists separate from service files", digital: "Unified owner and vehicle profile dashboard" },
    { label: "Job Card Linking", manual: "Scribbling records on paper job cards", digital: "Job cards linked to permanent vehicle timelines" },
    { label: "Replaced Parts Logs", manual: "Deciphering hand-written invoices", digital: "Clear digital spare parts audit trail" }
  ];

  return (
    <ComparisonTable
      title="Know a Vehicle's Previous Workshop History"
      titleHighlight="When It Returns"
      subtitle="Ensure your team is fully aware of past vehicle issues and completed services. Avoid relying on manual updates or customer memory:"
      manualHeader="Without Digital History"
      digitalHeader="With GarageSaarthi"
      comparisons={data}
    />
  );
}