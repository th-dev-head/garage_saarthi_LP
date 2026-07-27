import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function HistPaperVsDigital() {
  const comparisonData = [
    {
      label: "Search & Lookup Time",
      manual: "5-10 minutes digging through dusty file cabinets or greasy registers",
      digital: "2 seconds using a search bar (search by registration number, model, or customer name)"
    },
    {
      label: "Parts Warranty Check",
      manual: "Flipping old paper invoices one-by-one to confirm component warranty status",
      digital: "Filter past digital vehicle records by spare parts category to verify invoice date"
    },
    {
      label: "Diagnostic Continuity",
      manual: "Relying on memory or customer verbal statements about past mechanic repairs",
      digital: "Check digital repair history log detailing technician comments, fault symptoms, and files"
    },
    {
      label: "Mileage & KM Intervals",
      manual: "KM readings written on scrap papers that get misplaced immediately",
      digital: "Odometer velocity tracking in real-time between consecutive visits"
    },
    {
      label: "Data Security",
      manual: "Paper books prone to fire damage, oil spills, and getting lost over the years",
      digital: "Encrypted, cloud vehicle database backed up automatically on secure servers"
    }
  ];

  return (
    <ComparisonTable
      title="Optimize Service History with"
      titleHighlight="Digital Vehicle Records"
      subtitle="Say goodbye to manual search delays, missed warranties, and repeat repair mistakes. Compare manual logs with digital vehicle service record systems:"
      manualHeader="Manual Paper Ledgers"
      digitalHeader="GarageSaarthi Database System"
      comparisons={comparisonData}
      bgClass="bg-slate-50"
    />
  );
}
