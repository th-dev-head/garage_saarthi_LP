import React from "react";
import ComparisonTable from "../../common/ComparisonTable";
import GradientUnderline from "../../common/GradientUnderline";

export default function MCPaperVsDigital() {
  const comparisonData = [
    {
      feature: "Labor Time Tracking",
      traditional: "Zero tracking; manual estimates on paper job cards with no record of actual hours",
      garageSaarthi: "Live 1-tap mobile stopwatch per service with auto-logged timestamps",
    },
    {
      feature: "Parts Waiting & Delays",
      traditional: "Cars sit in bays for hours without managers knowing the reason for idle time",
      garageSaarthi: "Categorized pause reasons (Parts Store, Lathe, Customer OK) for root-cause diagnosis",
    },
    {
      feature: "Mechanic Productivity Metrics",
      traditional: "Subjective perception; favored mechanics get credited without data proof",
      garageSaarthi: "Objective KPI dashboard showing active wrench time %, tasks completed & efficiency %",
    },
    {
      feature: "Job Quoting Accuracy",
      traditional: "Guesswork pricing leads to underbilled labor charges and lost workshop profits",
      garageSaarthi: "Historical time analysis shows exact standard hours required for each car model",
    },
    {
      feature: "Technician Incentive Calculation",
      traditional: "Manual end-of-month disputes over who worked on which vehicle",
      garageSaarthi: "Automated incentive reports linked directly to verified clocking logs and job cards",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Why Automate Workshop Labor
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4 leading-tight">
            Manual Labor Guesswork vs <GradientUnderline>GarageSaarthi Clocking</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            See how switching to real-time technician time logging increases workshop bay throughput by 35% and prevents unbilled labor leakage.
          </p>
        </div>

        <ComparisonTable
          headers={["Workflow / Feature", "Manual Guesswork", "GarageSaarthi Mechanic Clocking"]}
          rows={comparisonData}
        />
      </div>
    </section>
  );
}
