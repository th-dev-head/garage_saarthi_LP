import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function MGManualVsDigital() {
  const comparisonData = [
    {
      label: "Check-in Documentation",
      manual: "Alledging body scratch locations verbally or marking them on paper diagrams",
      digital: "Taking high-resolution inspection photos linked instantly to the vehicle entry"
    },
    {
      label: "Damage Proof",
      manual: "Calling customers on phone call to explain worn brake pads or broken engine mounts",
      digital: "Sending real-time components photos on WhatsApp so they see the exact damage"
    },
    {
      label: "Service Proof",
      manual: "Customers suspecting parts were not actually replaced during servicing",
      digital: "Uploading side-by-side Before & After photos to prove part replacements"
    },
    {
      label: "Historical Records",
      manual: "Searching through physical repair invoice files to find past vehicle damage records",
      digital: "Accessing a complete service photo history linked to the license plate number"
    },
    {
      label: "Media Storage",
      manual: "Mechanics saving car photos on personal phones, cluttering device storage galleries",
      digital: "Direct upload to secure workshop cloud servers, accessible by all authorized staff"
    }
  ];

  return (
    <ComparisonTable
      title="Enhance Workshop Trust with Photo &"
      titleHighlight="Media Gallery Software"
      subtitle="Say goodbye to body scratch disputes, unapproved labor costs, and parts transparency questions. Compare standard check-ins with GarageSaarthi image records:"
      manualHeader="Verbal Claims & Paper Diagrams"
      digitalHeader="GarageSaarthi Photographic Proof"
      comparisons={comparisonData}
      bgClass="bg-slate-50"
    />
  );
}
