import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

const transformations = [
  {
    label: "Job Card Entry",
    manual: "Oily, torn paper job sheets stored in messy office folders.",
    digital: "Clean digital job cards accessible on Android & iOS phones and laptops.",
  },
  {
    label: "Inventory Management",
    manual: "Stock shortages, unbilled parts, and unaccounted spare parts leakage.",
    digital: "Real-time stock deduction per job sheet with low-stock warnings.",
  },
  {
    label: "GST Invoicing",
    manual: "Handwritten bill books delaying monthly CA filing and tax calculations.",
    digital: "Instant GST-compliant invoices with custom numbering series.",
  },
  {
    label: "Customer & Vehicle History",
    manual: "Customer phone numbers and past repair details forgotten over time.",
    digital: "Complete vehicle service history linked to customer phone profiles.",
  },
  {
    label: "Staff & Payroll",
    manual: "Loose slips for mechanic attendance and disputed commission payouts.",
    digital: "Digital attendance tracking and automated labor commission payroll.",
  },
  {
    label: "Service Follow-Ups",
    manual: "Irregular phone calls that consume hours of front-desk staff time.",
    digital: "Automated WhatsApp service due reminders sent directly to customers.",
  },
];

export default function GSIDigitalTransformation() {
  return (
    <ComparisonTable
      title="Why Indian Garages Are Moving from"
      titleHighlight="Manual Work to Digital Software"
      subtitle="Compare traditional manual workshop management against GarageSaarthi's streamlined digital operations."
      manualHeader="Manual Paper & Register Workflow"
      digitalHeader="GarageSaarthi Digital System"
      comparisons={transformations}
      bgClass="bg-slate-50"
    />
  );
}
