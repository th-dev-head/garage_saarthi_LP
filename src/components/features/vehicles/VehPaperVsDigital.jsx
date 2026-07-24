import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function VehPaperVsDigital() {
  const comparisonData = [
    {
      label: "History Retrieval",
      manual: "Digging through old paper job card files to check what work was done 6 months ago",
      digital: "Instant 2-second search by customer phone number or vehicle registration plate"
    },
    {
      label: "Odometer & KM Logs",
      manual: "Odometer readings written on scratch pads or completely forgotten during intake",
      digital: "Logged details on check-in, tracking vehicle usage and mileage intervals accurately"
    },
    {
      label: "Diagnostic Notes",
      manual: "Oral instructions or scribbled notes that get lost between advisor and mechanic",
      digital: "Cloud-synced diagnostic codes and engine fault notes connected to the vehicle profile"
    },
    {
      label: "Replaced Parts Log",
      manual: "No fast lookup to verify if a part was previously under warranty or replaced",
      digital: "Itemized replaced parts history with exact invoice dates and pricing details"
    },
    {
      label: "Photo & Damage Proof",
      manual: "Relying on memory or sketches to dispute pre-existing vehicle scratches",
      digital: "Take intake photos, document scratches, and upload directly to digital vehicle logs"
    },
    {
      label: "Next-Due Targets",
      manual: "Manually counting days to check when a customer's vehicle is due for next service",
      digital: "System automatically calculates service target dates and shoots WhatsApp alerts"
    }
  ];

  return (
    <ComparisonTable
      title="Transform Vehicle Records with"
      titleHighlight="Digital Vehicle Records"
      subtitle="Eliminate paper search delays, diagnostic mistakes, and intake damage disputes. Compare manual records with GarageSaarthi digital files:"
      manualHeader="Paper Records & Binders"
      digitalHeader="GarageSaarthi Digital Files"
      comparisons={comparisonData}
      bgClass="bg-slate-50"
    />
  );
}
