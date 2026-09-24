import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function TDPaperVsDigital() {
  const comparisonData = [
    {
      label: "Driver Authorization & Identification",
      manual: "Verbal permission; zero record of driver license number or emergency contact.",
      digital: "Mandatory selection (Staff/Customer/Other) with Driving License & contact logging."
    },
    {
      label: "Odometer & Trip Distance Tracking",
      manual: "Rough guesses on paper notes; easily forgotten, altered, or disputed.",
      digital: "Precise starting & return odometer input with automatic net kilometer computation."
    },
    {
      label: "Fuel Level Gauge Monitoring",
      manual: "Rarely recorded, leading to customer accusations of fuel siphon or excess driving.",
      digital: "Visual 5-stage fuel level gauge (0% - 100%) recorded at departure & return."
    },
    {
      label: "Pre-Drive Vehicle Damage Diagram",
      manual: "Vague handwritten comments like 'scratches on body' with zero exact location proof.",
      digital: "Interactive 2D vehicle blueprint with pinpoint coordinate markers for scratches & dents."
    },
    {
      label: "Driver Handover Signatures",
      manual: "No signature or messy ink scribble on paper register that gets misplaced.",
      digital: "HTML5 touchscreen digital signature pad saved as a permanent tamper-proof record."
    },
    {
      label: "Integration with Job Card",
      manual: "Disconnected paper slips that get lost before final invoice calculation.",
      digital: "Directly linked to Job Card & Insurance Claim ID with permanent audit history."
    }
  ];

  return (
    <ComparisonTable
      title="Protect Your Workshop from Road Test Disputes with"
      titleHighlight="Digital Tracking"
      subtitle="Say goodbye to untracked vehicle kilometers, disputed pre-existing scratches, and mechanic joyrides. See how digital test drive tracking transforms workshop governance:"
      manualHeader="Manual Paper Logbooks"
      digitalHeader="GarageSaarthi Digital Test Drive"
      comparisons={comparisonData}
      bgClass="bg-slate-50"
    />
  );
}
