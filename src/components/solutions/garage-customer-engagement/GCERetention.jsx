import React from "react";
import { FaUserPlus, FaFileSignature, FaBell, FaCheckDouble, FaRedo } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GCERetention() {
  const steps = [
    { icon: <FaUserPlus />, title: "1. Customer Visits", desc: "Owner & vehicle details logged." },
    { icon: <FaFileSignature />, title: "2. Job Recorded", desc: "Job card created, tasks saved." },
    { icon: <FaBell />, title: "3. Alert Created", desc: "Future service dates scheduled." },
    { icon: <FaCheckDouble />, title: "4. WhatsApp Sent", desc: "One-click reminder delivered." },
    { icon: <FaRedo />, title: "5. Repeat Visit", desc: "Customer returns for service." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Retention Process
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Build a More Organized Customer <GradientUnderline>Retention Process</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Customer retention is not just one feature; it's a connected lifecycle. A dedicated <strong className="text-primary capitalize">garage customer retention software</strong> system maps every client touchpoint to support repeat service opportunities.
          </p>
        </div>

        {/* Visual Workflow Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-6 relative">
          {steps.map((st, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs text-center flex flex-col items-center relative group hover:shadow-md transition-all duration-200">
              <div className="bg-orange-100 text-primary w-12 h-12 rounded-full flex items-center justify-center text-lg mb-4 flex-shrink-0 transition-transform group-hover:scale-110 duration-200">
                {st.icon}
              </div>
              <h4 className="font-bold text-slate-900 text-xs">{st.title}</h4>
              <p className="text-slate-500 text-[10px] mt-2 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
