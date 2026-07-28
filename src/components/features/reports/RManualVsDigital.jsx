import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function RManualVsDigital() {
  const comparisonData = [
    {
      label: "Revenue Tracking",
      manual: "Manual register totaling with missing cash entries and calculation errors",
      digital: "Live real-time revenue breakdowns split by cash, UPI, card, and credit"
    },
    {
      label: "Spare Parts Analysis",
      manual: "No visibility into slow-moving parts leading to dead stock capital loss",
      digital: "Automated inventory velocity reports showing high-profit fast movers"
    },
    {
      label: "Technician Productivity",
      manual: "Guessing mechanic performance based on memory or subjective opinion",
      digital: "Data-backed labor efficiency logs, completed jobs, and incentive reports"
    },
    {
      label: "Financial Statements & Tax",
      manual: "Spending 4-5 days compiling paper invoices for CA filing every month",
      digital: "1-Click GSTR-1, GSTR-3B, and Profit & Loss statement export in PDF/Excel"
    }
  ];

  return (
    <ComparisonTable
      title="Paper Guesswork vs"
      titleHighlight="Digital Garage Analytics"
      subtitle="Compare manual paper register tallying with automated real-time analytics."
      manualHeader="Manual Register & Tallying"
      digitalHeader="GarageSaarthi Analytics"
      comparisons={comparisonData}
      bgClass="bg-slate-50"
    />
  );
}
