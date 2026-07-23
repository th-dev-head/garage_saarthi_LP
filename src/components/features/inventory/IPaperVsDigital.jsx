import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function IPaperVsDigital() {
  const comparisonData = [
    {
      label: "Stock Visibility",
      manual: "Walking into storage racks to manually count remaining filters or oil cans",
      digital: "Real-time stock quantities and warehouse valuation on mobile & desktop"
    },
    {
      label: "Reorder Alerts",
      manual: "Discovering high-demand brake pads are out of stock when customer is waiting",
      digital: "Automated low-stock notifications when stock drops below threshold"
    },
    {
      label: "Spare Parts Issuance",
      manual: "Mechanics taking parts from shelves without unrecorded paper logging",
      digital: "Parts issued directly to specific job cards with automated stock deduction"
    },
    {
      label: "Vendor Purchase Logging",
      manual: "Piles of unorganized paper purchase bills from multiple local distributors",
      digital: "Log vendor purchase invoices, track purchase prices, and update stock"
    },
    {
      label: "Stock Leakage",
      manual: "Unexplained inventory shortages and missing spare parts drawers",
      digital: "Complete itemized movement history showing who issued what part and when"
    },
    {
      label: "Margin & Pricing",
      manual: "Selling spare parts at outdated MRP prices or unrecorded cost margins",
      digital: "Pre-loaded purchase cost vs selling price margins with automated profit tags"
    }
  ];

  return (
    <ComparisonTable
      title="Upgrade Your Spare Parts Management with"
      titleHighlight="Digital Inventory Software"
      subtitle="Eliminate unrecorded parts drawers, out-of-stock delays, and vendor disputes. Compare manual stock logs with GarageSaarthi inventory tracking:"
      manualHeader="Unrecorded Storage Racks"
      digitalHeader="GarageSaarthi Inventory System"
      comparisons={comparisonData}
      bgClass="bg-slate-50"
    />
  );
}
