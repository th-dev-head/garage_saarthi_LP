import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function MCPaperVsDigital() {
  const comparisonData = [
    {
      label: "Labor Time Tracking",
      manual: "Zero tracking; manual estimates on paper job cards with no record of actual hours.",
      digital: "Live 1-tap mobile stopwatch per service with auto-logged timestamps.",
    },
    {
      label: "Parts Waiting & Delays",
      manual: "Cars sit in bays for hours without managers knowing the reason for idle time.",
      digital: "Categorized pause reasons (Parts Store, Lathe, Customer OK) for root-cause diagnosis.",
    },
    {
      label: "Mechanic Productivity Metrics",
      manual: "Subjective perception; favored mechanics get credited without data proof.",
      digital: "Objective KPI dashboard showing active wrench time %, tasks completed & efficiency %.",
    },
    {
      label: "Job Quoting Accuracy",
      manual: "Guesswork pricing leads to underbilled labor charges and lost workshop profits.",
      digital: "Historical time analysis shows exact standard hours required for each car model.",
    },
    {
      label: "Technician Incentive Calculation",
      manual: "Manual end-of-month disputes over who worked on which vehicle.",
      digital: "Automated incentive reports linked directly to verified clocking logs and job cards.",
    },
  ];

  return (
    <ComparisonTable
      title="Manual Labor Guesswork vs"
      titleHighlight="GarageSaarthi Clocking"
      subtitle="See how switching to real-time technician time logging increases workshop bay throughput by 35% and prevents unbilled labor leakage:"
      manualHeader="Manual Guesswork"
      digitalHeader="GarageSaarthi Mechanic Clocking"
      comparisons={comparisonData}
      bgClass="bg-slate-50"
    />
  );
}
