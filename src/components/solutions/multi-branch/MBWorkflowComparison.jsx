import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function MBWorkflowComparison() {
  const data = [
    { label: "Data Management", manual: "Separate Excel files, paper journals", digital: "Centralized cloud database" },
    { label: "Job Card Logs", manual: "Paper entries kept at local desk", digital: "Digital job cards linked to central profile" },
    { label: "Daily Operations View", manual: "Calling branch managers for updates", digital: "Central dashboard with switch option" },
    { label: "Roster Management", manual: "Individual files at branches", digital: "Attendance and payroll modules" },
    { label: "Customer List", manual: "Disconnected profiles at locations", digital: "Unified customer and vehicle database" }
  ];

  return (
    <ComparisonTable
      title="From Separate Branch Records to One"
      titleHighlight="Garage Management System"
      subtitle="Improve workshop coordination, access branch operations instantly, and shift from registers to unified control:"
      manualHeader="Separate Branch Management"
      digitalHeader="With GarageSaarthi"
      comparisons={data}
    />
  );
}