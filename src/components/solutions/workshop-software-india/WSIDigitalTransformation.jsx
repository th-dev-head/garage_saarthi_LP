import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

const transformations = [
  {
    label: "Job Card Entry",
    manual: "Paper job sheets getting dirty, misplaced, or torn in repair bays.",
    digital: "Digital Job Cards accessible on Android phones and laptops.",
  },
  {
    label: "Customer & Vehicle Records",
    manual: "Customer phone numbers and past repair details forgotten over time.",
    digital: "Searchable Customer & Vehicle Database with complete service history.",
  },
  {
    label: "Inventory Management",
    manual: "Stock shortages, unbilled parts, and unaccounted spare parts leakage.",
    digital: "Real-time stock deduction per job sheet with low-stock warnings.",
  },
  {
    label: "GST Billing & Tax Compliance",
    manual: "Handwritten bill books delaying monthly CA filing and tax calculations.",
    digital: "Instant GST-compliant invoices with custom numbering series.",
  },
  {
    label: "Service Follow-Ups",
    manual: "Irregular phone calls that consume hours of front-desk staff time.",
    digital: "Automated WhatsApp service due reminders sent directly to customers.",
  },
  {
    label: "Mechanic Staff & Payroll",
    manual: "Loose slips for mechanic attendance and disputed commission payouts.",
    digital: "Digital attendance tracking and automated labor commission payroll.",
  },
];

export default function WSIDigitalTransformation() {
  return (
    <ComparisonTable
      title="Move from Manual Workshop Management"
      titleHighlight="to a Digital System"
      subtitle="Compare traditional manual workshop management against GarageSaarthi's streamlined digital operations."
      manualHeader="Manual Paper & Register Workflow"
      digitalHeader="GarageSaarthi Digital System"
      comparisons={transformations}
      bgClass="bg-white"
    />
  );
}
