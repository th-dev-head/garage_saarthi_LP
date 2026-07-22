import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function VSHManualVsDigital() {
  const data = [
    { label: "Data Format", manual: "Registers, diaries, physical bills", digital: "Digital, searchable records" },
    { label: "Record Retrieval", manual: "Manual files searching on shelves", digital: "Instant registration query" },
    { label: "Owner Correlation", manual: "Disconnected paper cards", digital: "Linked customer and vehicle databases" },
    { label: "Workshop Log Continuity", manual: "Memory or scattered files", digital: "Recorded, permanent timeline log" },
    { label: "Outreach Scheduling", manual: "Manual list compilation", digital: "Connected service alert system" }
  ];

  return (
    <ComparisonTable
      title="Replace Paper Service Registers with"
      titleHighlight="Digital Vehicle Records"
      subtitle="Improve workshop customer relations, access past jobs instantly, and shift from registers to cloud reliability:"
      manualHeader="Paper Service Records"
      digitalHeader="Digital Vehicle Service History"
      comparisons={data}
    />
  );
}