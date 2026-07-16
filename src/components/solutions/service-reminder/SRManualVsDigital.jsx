import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function SRManualVsDigital() {
  const data = [
    { label: "Alert Log Format", manual: "Paper service diary, sticky logs", digital: "Structured digital service alerts" },
    { label: "Due Date Tracking", manual: "Mechanic or staff memory checks", digital: "Organized due-service visibility" },
    { label: "Customer Connection", manual: "Manual phone list search", digital: "Connected customer records" },
    { label: "Vehicle Log Connection", manual: "Searching file shelves for histories", digital: "Organized vehicle records" },
    { label: "Follow-Up Action", manual: "Scribbling names on registers", digital: "Structured customer follow-up dashboard" },
    { label: "WhatsApp Messaging", manual: "Writing personal chats manually", digital: "Service reminder workflow" }
  ];

  return (
    <ComparisonTable
      title="Replace Manual Service Reminder Tracking with a"
      titleHighlight="Digital System"
      subtitle="Organize your workshop follow-ups, reduce lost jobs, and switch from manual registers to digital clarity:"
      manualHeader="Manual Garage Process"
      digitalHeader="With GarageSaarthi"
      comparisons={data}
    />
  );
}