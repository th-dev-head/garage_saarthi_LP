import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

const data = [
  {
    label: "Job Cards",
    manual: "Oily paper job cards that get lost, dirty, or torn during long-running repairs.",
    digital: "Digital job cards organized for commercial vehicle repairs, containing complaints and technician details.",
  },
  {
    label: "Customer Records",
    manual: "Customer details and mobile numbers spread across paper diaries or WhatsApp logs.",
    digital: "Organized customer records stored securely in the cloud, linked directly to their vehicle history.",
  },
  {
    label: "Vehicle Data",
    manual: "Truck chassis codes, engine details, and odometer readings written in manual registers.",
    digital: "Digital commercial vehicle records automatically linked to the owner's profile for quick lookup.",
  },
  {
    label: "Inventory Management",
    manual: "Manual stock tracking of expensive truck parts and consumables leading to stockouts.",
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
    manual: "Manual follow-ups for periodic wheel hub greasing or brake checks that get forgotten.",
    digital: "Service alerts and WhatsApp notifications sent automatically when vehicle services are due.",
  },
  {
    label: "Overall Workflow",
    manual: "Scattered data across registers, billing apps, and notebooks.",
    digital: "Centralized workshop system keeping your entire commercial vehicle garage sync-mapped.",
  },
];

export default function TWComparison() {
  return (
    <ComparisonTable
      title="Move from Paper Registers to"
      titleHighlight="Digital Truck Workshop Management"
      subtitle="Compare the manual garage processes with GarageSaarthi's structured digital solution."
      manualHeader="Manual Truck Workshop"
      digitalHeader="With GarageSaarthi"
      comparisons={data}
      bgClass="bg-white"
    />
  );
}
