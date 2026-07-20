import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

const data = [
  {
    label: "Job Cards",
    manual: "Oily paper job cards that get lost, dirty, or torn during heavy servicing.",
    digital: "Digital job cards organized for fleet vehicle repairs, containing complaints and technician details.",
  },
  {
    label: "Customer Records",
    manual: "Customer details and mobile numbers spread across paper diaries or WhatsApp logs.",
    digital: "Organized customer records stored securely in the cloud, linked directly to their vehicle history.",
  },
  {
    label: "Vehicle Data",
    manual: "Fleet chassis numbers, engine configurations, and odometer readings written in manual registers.",
    digital: "Digital vehicle records automatically linked to the owner's profile for quick lookup.",
  },
  {
    label: "Inventory Management",
    manual: "Manual stock tracking of expensive parts and lubricants leading to stockouts.",
    digital: "Inventory management tracking stock changes dynamically when parts are checked out on job cards.",
  },
  {
    label: "Staff Attendance",
    manual: "Separate registers for daily mechanic clock-in/out and shift planning.",
    digital: "Integrated attendance and leave management matching active mechanic lists.",
  },
  {
    label: "Payroll & Commissions",
    manual: "Manual salary computations and complex commission allocations on scrap papers.",
    digital: "Automated payroll and commission computation calculated directly from job card repair metrics.",
  },
  {
    label: "Service alerts",
    manual: "Manual follow-ups for scheduled checkups or preventative greasing that get forgotten.",
    digital: "Service alerts and WhatsApp notifications sent automatically when vehicle services are due.",
  },
  {
    label: "Overall Workflow",
    manual: "Scattered data across registers, billing apps, and notebooks.",
    digital: "Centralized workshop system keeping your entire fleet maintenance garage sync-mapped.",
  },
];

export default function FLComparison() {
  return (
    <ComparisonTable
      title="Move from Paper Registers to"
      titleHighlight="Digital Fleet Workshop Management"
      subtitle="Compare the manual garage processes with GarageSaarthi's structured digital solution."
      manualHeader="Manual Fleet Workshop"
      digitalHeader="With GarageSaarthi"
      comparisons={data}
      bgClass="bg-white"
    />
  );
}
