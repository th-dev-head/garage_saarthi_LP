import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function GCManualVsCrm() {
  const comparisonData = [
    { label: "Customer Contact List", manual: "Personal phone contacts, paper slips", digital: "Organized customer records linked to vehicle IDs" },
    { label: "Lead Enquiries", manual: "Paper notes, loose diary slips", digital: "Digital lead management and workflow statuses" },
    { label: "Service Follow-Ups", manual: "Remembering call dates manually", digital: "Structured follow-up calendar reminder lists" },
    { label: "Vehicle Connection", manual: "Separate records, manually entered", digital: "Linked customer and vehicle databases" },
    { label: "Service History logs", manual: "Scattered paper invoice registers", digital: "Organized, searchable vehicle service records" },
    { label: "Reminders & Promo Alerts", manual: "Manual messages, random WhatsApp drafts", digital: "Structured service alerts and promo codes" }
  ];

  return (
    <ComparisonTable
      title="Move from Manual Customer Tracking to"
      titleHighlight="Garage CRM Software"
      subtitle="Organize customer files, schedule follow-ups, and build structured workflows. See the difference:"
      manualHeader="Manual Garage Process"
      digitalHeader="With GarageSaarthi CRM"
      comparisons={comparisonData}
      bgClass=""
    />
  );
}

