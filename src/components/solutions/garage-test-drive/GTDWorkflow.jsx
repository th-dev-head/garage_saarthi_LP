import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaCarSide, FaRoad, FaClipboardCheck, FaFileSignature, FaCheckDouble } from "react-icons/fa";

export default function GTDWorkflow() {
  const steps = [
    {
      num: "1",
      icon: <FaCarSide className="text-primary w-5 h-5" />,
      title: "Pre-Drive Key Handover",
      desc: "Record starting odometer and fuel level, and mark existing body scratches on diagram."
    },
    {
      num: "2",
      icon: <FaFileSignature className="text-primary w-5 h-5" />,
      title: "Driver Digital Sign-Off",
      desc: "Assigned staff mechanic or customer signs digitally on mobile screen to authorize handover."
    },
    {
      num: "3",
      icon: <FaRoad className="text-primary w-5 h-5" />,
      title: "Authorized Road Test",
      desc: "Conduct road diagnostic test for brake alignment, suspension, or engine power."
    },
    {
      num: "4",
      icon: <FaClipboardCheck className="text-primary w-5 h-5" />,
      title: "Return Check-In & Audit",
      desc: "Log return odometer. Net kilometers driven are auto-calculated and return fuel is verified."
    },
    {
      num: "5",
      icon: <FaCheckDouble className="text-primary w-5 h-5" />,
      title: "Saved to Job Card",
      desc: "The complete test drive log with timestamps, distance, and diagram is archived forever."
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Step-by-Step Workflow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            How the Test Drive Workflow <GradientUnderline>Operates in Seconds</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Zero friction for service advisor, mechanic, and customer:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-150">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-200">
                    0{step.num}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-text-dark mb-2">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{step.desc}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-600">
                ✓ Verified Step
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
