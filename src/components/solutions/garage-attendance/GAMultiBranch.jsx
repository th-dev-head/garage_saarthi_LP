import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

const branchList = [
  { name: "Mumbai - West Branch", ratio: "95% Present Ratio" },
  { name: "Pune - East Branch", ratio: "88% Present Ratio" }
];

export default function GAMultiBranch() {
  const handleSolutionClick = () => {
    trackEvent("multi_branch_solution_click", {
      page_path: "/solutions/garage-attendance-software",
      cta_location: "multi_branch_attendance_section",
      cta_label: "Explore Multi-Branch Garage Software",
      destination: "/solutions/multi-branch-garage-software"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/50 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <span className="text-sm font-bold text-slate-800">Branch Switcher</span>
            <span className="text-xs text-primary font-bold">Attendance Dashboard</span>
          </div>
          <div className="space-y-2 text-xs text-slate-600">
            {branchList.map((branch, idx) => (
              <div key={idx} className="flex justify-between p-2 bg-white rounded-lg border border-slate-100">
                <span>{branch.name}</span>
                <span className="font-semibold text-slate-800">{branch.ratio}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Multi-Location Attendance
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Manage Staff Attendance Across <GradientUnderline>Multiple Garage Branches</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            As your garage business grows, managing shift registers across branches becomes increasingly difficult. Our platform acts as a secure garage workforce management software, letting you organize mechanics and staff logins separately by branch.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Owners can switch branch dashboard views in seconds, checking localized shift check-ins, leaves, and staff permissions centrally.
          </p>
          <div className="pt-2">
            <Link href="/solutions/multi-branch-garage-software" onClick={handleSolutionClick}>
              <Button>
                Explore Multi-Branch Garage Software <FaChevronRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

