import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaFileAlt, FaBox, FaMoneyBillWave, FaUsers, FaChartBar } from "react-icons/fa";

const problems = [
  {
    icon: <FaFileAlt className="w-5 h-5" />,
    title: "Paper Job Cards Get Lost",
    desc: "Handwritten repair orders are misplaced, illegible, and impossible to track once the mechanic walks away.",
  },
  {
    icon: <FaBox className="w-5 h-5" />,
    title: "No Inventory Visibility",
    desc: "You never know which parts are running low until a customer is waiting — causing delays and lost trust.",
  },
  {
    icon: <FaMoneyBillWave className="w-5 h-5" />,
    title: "Manual Billing Errors",
    desc: "Spreadsheet billing is slow, error-prone, and makes GST filing a time-consuming nightmare every month.",
  },
  {
    icon: <FaUsers className="w-5 h-5" />,
    title: "No Staff Accountability",
    desc: "Tracking mechanic attendance, task completion, and payroll manually leads to disputes and wasted hours.",
  },
  {
    icon: <FaChartBar className="w-5 h-5" />,
    title: "Zero Business Insight",
    desc: "Without reports, you cannot tell which services generate profit or how your workshop is really performing.",
  },
];

export default function WMProblem() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4">
            Running a Workshop Manually{" "}
            <GradientUnderline>Costs You More Than You Think.</GradientUnderline>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            Every missed service reminder, lost job card, or billing error is revenue walking out of your workshop. Here is what manual operations cost modern workshops every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

