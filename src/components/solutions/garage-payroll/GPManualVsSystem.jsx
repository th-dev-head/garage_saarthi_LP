import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function GPManualVsSystem() {
  const comparisons = [
    { label: "Registers", manual: "Paper salary registers or notebooks", digital: "Digital payroll records on cloud" },
    { label: "Attendance", manual: "Separate attendance registers or cards", digital: "Attendance management in the same workspace" },
    { label: "Leaves", manual: "Separate leave notes or registers", digital: "Organized leave balance records" },
    { label: "Profiles", manual: "Scattered employee phone/salary notes", digital: "Centralized staff profiles database" },
    { label: "History", manual: "Difficult check of past salary payments", digital: "Organized payroll history sheets" },
    { label: "Platform", manual: "Using multiple disconnected software tools", digital: "Connected garage operations in one platform" }
  ];

  return (
    <ComparisonTable
      title="Move from Manual Salary Records to"
      titleHighlight="Digital Garage Payroll Management"
      subtitle="Switch from registers to cloud control. Maintain clear logs of mechanic salaries, daily wages, and leaves."
      manualHeader="Manual Payroll Process"
      digitalHeader="With GarageSaarthi"
      comparisons={comparisons}
    />
  );
}
