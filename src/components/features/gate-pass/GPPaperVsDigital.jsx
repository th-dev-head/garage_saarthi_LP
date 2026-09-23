import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function GPPaperVsDigital() {
  const comparisonData = [
    {
      label: "Vehicle Exit Verification",
      manual: "Paper gate slips scribbled by hand, often forged, torn, or misplaced",
      digital: "Cryptographic QR Code gate pass generated directly from settled job cards"
    },
    {
      label: "Payment Due Prevention",
      manual: "Guards let vehicles leave on oral claims, causing heavy revenue leakage",
      digital: "Smart cloud gatekeeper: Guard screen explicitly blocks unpaid bills & dues"
    },
    {
      label: "Security Guard Usability",
      manual: "Guards require complex software logins or have to shout to cashier desk",
      digital: "Zero-login mobile camera QR scan instantly loads verified clearance screen"
    },
    {
      label: "Slip Printing Format",
      manual: "Slow manual receipt books or bulky A4 paper printers taking several minutes",
      digital: "Fast 1-click thermal printer roll (2-inch / 3-inch) or WhatsApp digital slip"
    },
    {
      label: "Dispute & Theft Audit Trail",
      manual: "No timestamped records of who authorized or which guard opened the gate",
      digital: "Immutable audit log with exact exit time, guard name, vehicle photo & notes"
    },
    {
      label: "Insurance & Counter Sales",
      manual: "Confusion over cashless insurance excess deductions & counter parts delivery",
      digital: "Dedicated pass types for Job Cards, Counter Parts, and Insurance settlements"
    }
  ];

  return (
    <ComparisonTable
      title="Secure Your Workshop Perimeter with"
      titleHighlight="Digital QR Gate Passes"
      subtitle="Say goodbye to handwritten paper chits, phone calls to cashier desks, and unpaid vehicle releases. See how digital gate pass transforms workshop security:"
      manualHeader="Paper Gate Slips & Physical Registers"
      digitalHeader="GarageSaarthi Digital QR Gate Pass"
      comparisons={comparisonData}
      bgClass="bg-slate-50"
    />
  );
}
