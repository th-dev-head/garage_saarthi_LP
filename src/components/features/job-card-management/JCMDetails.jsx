import React from "react";
import { FaUserCog, FaClipboardCheck, FaCarCrash } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const checkInChecklist = [
  { icon: FaCarCrash, iconColor: "text-red-500", text: "Left Bumper Scratch", status: "Marked & Photographed" },
  { icon: FaClipboardCheck, iconColor: "text-primary", text: "Fuel Level: 50% (Half Tank)", status: "Logged on check-in" },
  { icon: FaUserCog, iconColor: "text-emerald-500", text: "Assigned Tech: Ramesh K.", status: "Labor Tracked" }
];

export default function JCMDetails() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Visual Check-in Mockup */}
        <div className="bg-slate-50 border border-slate-200/80 p-6 md:p-8 rounded-3xl space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Vehicle Check-In Checklist</h4>
            <span className="text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded font-semibold">Active Intake</span>
          </div>

          <div className="space-y-3.5 text-xs">
            {checkInChecklist.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                  <span className="font-semibold text-slate-900 flex items-center gap-2">
                    <Icon className={`${item.iconColor} w-4 h-4`} /> {item.text}
                  </span>
                  <span className="text-slate-400">{item.status}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side Text */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Intake & Mechanic Mapping
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            Avoid Disputes with Intake Checklists and <GradientUnderline>Technician Allocations</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            Log dent/scratch marks and fuel percentages digitally before mechanics start work. This protects your garage from false customer claims of damage during service.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Assign individual job card checklist items to specific technicians. Live status boards show whether Ramesh is on engine oil change or if Suresh has completed the wash check sheet, boosting technician productivity.
          </p>
        </div>
      </div>
    </section>
  );
}

