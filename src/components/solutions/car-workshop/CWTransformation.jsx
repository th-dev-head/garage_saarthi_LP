import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function CWTransformation() {
  const comparisons = [
    { label: "Job Cards", manual: "Handwritten paper job cards", digital: "Digital job cards logged on cloud" },
    { label: "Customers", manual: "Separate customer registers or sheets", digital: "Organized customer records database" },
    { label: "Vehicles", manual: "Manual check-in folders and vehicle notes", digital: "Digital vehicle records and service history" },
    { label: "Inventory", manual: "Loose spare parts diaries or Excel sheets", digital: "Structured workshop inventory management" },
    { label: "Reminders", manual: "Manual list compilation for follow-ups", digital: "Service due alerts & WhatsApp reminders" },
    { label: "Attendance", manual: "Handwritten shift sheets for mechanics", digital: "Digital attendance and leave management" },
    { label: "Payroll", manual: "Disconnected salary ledgers and notes", digital: "Workshop payroll management module" },
    { label: "Analytics", manual: "Compiling business collection sheets manually", digital: "Centralized dashboard reports and profit graphs" },
    { label: "Multi-branch", manual: "Managing multiple branches separately", digital: "Centralized multi-branch control panel" }
  ];

  return (
    <ComparisonTable
      title="From Manual Workshop Management to"
      titleHighlight="One Digital System"
      subtitle="Switch from paper templates to cloud control. Streamline your auto repair workflows and manage growth easily."
      manualHeader="Manual Workshop Process"
      digitalHeader="With GarageSaarthi"
      comparisons={comparisons}
    />
  );
}
