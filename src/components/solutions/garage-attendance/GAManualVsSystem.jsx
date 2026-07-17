import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function GAManualVsSystem() {
  const comparisons = [
    { label: "Registers", manual: "Paper attendance register or check-in books", digital: "Digital attendance records on secure cloud" },
    { label: "Check-ins", manual: "Manual staff entries written daily", digital: "Organized employee attendance logs" },
    { label: "Leaves", manual: "Separate leave cards or notebooks", digital: "Integrated attendance and leave tracking" },
    { label: "Payroll Link", manual: "Disconnected mechanic salary parameters", digital: "Payroll management in the same workspace" },
    { label: "History", manual: "Difficult check of past check-in history", digital: "Organized check-in history files" },
    { label: "Ecosystem", manual: "Using separate tools for separate files", digital: "Unified garage operations in one platform" }
  ];

  return (
    <ComparisonTable
      title="Move from Manual Attendance Registers to"
      titleHighlight="Digital Attendance Management"
      subtitle="Review how switching to a digital workspace helps structure your shift logs and saves daily tracking effort."
      manualHeader="Manual Attendance Process"
      digitalHeader="With GarageSaarthi"
      comparisons={comparisons}
      bgClass="bg-slate-50"
    />
  );
}
