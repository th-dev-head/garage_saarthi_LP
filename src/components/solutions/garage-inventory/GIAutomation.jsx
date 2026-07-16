import React from "react";
import Link from "next/link";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GIAutomation() {
  const comparisonRows = [
    {
      manual: "Paper stock registers & greasy booklets",
      saarthi: "Secure, digital cloud-based inventory records"
    },
    {
      manual: "Scattered stock books & missing files",
      saarthi: "Centralized workshop inventory management system"
    },
    {
      manual: "Manual check walks to confirm part availability",
      saarthi: "Real-time, instant stock search alerts on search"
    },
    {
      manual: "Disconnected parts usage records on repair logs",
      saarthi: "Job-card linked structured spare parts management"
    },
    {
      manual: "Scattered operations data & manual calculations",
      saarthi: "Fully integrated GarageSaarthi automation suite"
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Before & After
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Move from Manual Stock Records to <GradientUnderline>Digital Inventory Management</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Ditch the old methods. Learn how moving to digital tools updates your garage productivity.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-md max-w-4xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-2 bg-slate-900 text-white font-bold text-xs md:text-sm p-4 md:p-5">
            <div className="uppercase tracking-wider">Manual Inventory Management</div>
            <div className="uppercase tracking-wider border-l border-white/20 pl-4">GarageSaarthi</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100 text-xs md:text-sm text-slate-700">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-2 p-4 md:p-5 items-center gap-4">
                <div className="flex items-start gap-2.5">
                  <FaTimesCircle className="text-red-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{row.manual}</span>
                </div>
                <div className="flex items-start gap-2.5 border-l border-slate-100 pl-4">
                  <FaCheckCircle className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="font-semibold text-slate-900">{row.saarthi}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 text-xs md:text-sm text-slate-500">
          Want to automate all your workshop processes? Check out our{" "}
          <Link href="/garage-automation-software" className="text-primary font-bold hover:underline">
            Garage Automation Software
          </Link>{" "}
          capabilities.
        </div>
      </div>
    </section>
  );
}

