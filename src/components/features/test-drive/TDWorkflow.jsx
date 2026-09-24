import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaCarSide, FaRoad, FaClipboardCheck, FaFileInvoice, FaCheckCircle } from "react-icons/fa";

export default function TDWorkflow() {
  const steps = [
    {
      num: "01",
      icon: <FaCarSide className="w-5 h-5 text-primary" />,
      title: "Pre-Drive Handover & Damage Marking",
      desc: "Select vehicle, assign driver with license ID, record starting odometer & fuel gauge, and pin existing scratches on diagram."
    },
    {
      num: "02",
      icon: <FaRoad className="w-5 h-5 text-orange-600" />,
      title: "Touchscreen Driver Signature",
      desc: "Driver signs on the mobile screen to legally confirm vehicle condition and key handover authorization."
    },
    {
      num: "03",
      icon: <FaClipboardCheck className="w-5 h-5 text-emerald-600" />,
      title: "Authorized Road Diagnostic Test",
      desc: "Mechanic conducts road test for brake responsiveness, suspension vibration, or engine performance."
    },
    {
      num: "04",
      icon: <FaCheckCircle className="w-5 h-5 text-amber-600" />,
      title: "Return Check-In & Distance Calc",
      desc: "Log return odometer. Net kilometers driven are calculated instantly, return fuel is verified, and new damages checked."
    },
    {
      num: "05",
      icon: <FaFileInvoice className="w-5 h-5 text-purple-600" />,
      title: "Permanent Job Card Sync",
      desc: "Test drive log with timestamps, distance, and inspection diagram is permanently stored in the vehicle's Job Card."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            5-Step Road Test Lifecycle
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            How GarageSaarthi Controls <GradientUnderline>Workshop Test Drives</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            A frictionless digital process that takes less than 60 seconds to initiate and protects your garage from costly liability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between relative hover:border-primary/40 transition-colors shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-200">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{step.desc}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                <FaCheckCircle className="w-3 h-3" /> Verified Step
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
