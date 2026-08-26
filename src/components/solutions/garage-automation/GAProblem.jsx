import React from "react";
import { FaTimesCircle } from "react-icons/fa";

export default function GAProblem() {
  const problems = [
    {
      title: "Paper-Based Workflows",
      desc: "Relying on paper job sheets that are easily soiled, torn, or misplaced by busy workshop mechanics."
    },
    {
      title: "Repetitive Manual Follow-Ups",
      desc: "Spending hours calling clients for periodic services and checking WhatsApp databases manually."
    },
    {
      title: "Scattered Garage Information",
      desc: "Managing inventory, custom GST bills, and mechanic payouts in separate spreadsheets and registers."
    },
    {
      title: "Limited Business Visibility",
      desc: "Having no quick way to track active vehicles, total revenue parameters, or staff work metrics."
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-red-600 font-bold bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Current Operations
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Still Managing Your Garage Manually?
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Auto workshops face friction when administrative work gets handled through manual paper files. Review how disconnected processes slow down your growth.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="bg-primary/10 w-9 h-9 rounded-xl flex items-center justify-center text-primary">
                <FaTimesCircle className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">{prob.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{prob.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
