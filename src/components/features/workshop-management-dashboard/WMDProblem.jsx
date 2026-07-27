import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function WMDProblem() {
  const comparisonData = [
    {
      label: "Operational Visibility",
      manual: "Have to call mechanics repeatedly to ask vehicle repair status",
      digital: "Real-time repair order tracking on desktop & mobile app"
    },
    {
      label: "Financial Tracking",
      manual: "Unrecorded cash sales and lost counter sale slips",
      digital: "Automated daily collections, GST billing, and UPI payment tracking"
    },
    {
      label: "Inventory Control",
      manual: "High-demand brake pads or engine oil run out unexpectedly",
      digital: "Instant low-stock alerts and automated reorder level notifications"
    },
    {
      label: "Mechanic Productivity",
      manual: "No way to measure technician labor efficiency or completion speed",
      digital: "Mechanic KPI dashboard showing jobs assigned, labor earned & status"
    },
    {
      label: "Customer Service",
      manual: "Verbal delivery promises with frequent delays and disputes",
      digital: "Automated WhatsApp estimates, invoice sharing & service history"
    },
    {
      label: "Multi-Branch Management",
      manual: "Traveling between workshops to collect physical daily registers",
      digital: "Single master dashboard comparing all branch outlets in real time"
    }
  ];

  return (
    <ComparisonTable
      title="Stop Managing Your Workshop in the Dark. Switch to a"
      titleHighlight="Centralized Workshop Dashboard"
      subtitle="Eliminate daily operational chaos, lost revenue, and delayed customer deliveries. Compare manual registers with GarageSaarthi dashboard software:"
      manualHeader="Manual Registers & Paper Chaos"
      digitalHeader="GarageSaarthi Centralized Dashboard"
      comparisons={comparisonData}
      bgClass="bg-slate-50"
    />
  );
}
