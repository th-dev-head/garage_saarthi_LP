import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import {
  FaUserTag,
  FaPlay,
  FaPause,
  FaCheckCircle,
  FaAward,
} from "react-icons/fa";

export default function MCWorkflow() {
  const steps = [
    {
      step: "01",
      icon: FaUserTag,
      title: "Task Assigned on Job Card",
      description: "Service advisor creates job card tasks (e.g., Brake Overhaul, Oil Change) and assigns mechanics.",
    },
    {
      step: "02",
      icon: FaPlay,
      title: "1-Tap Mobile Clock In",
      description: "Technician opens the task on smartphone/tablet and taps 'Clock In' to start the live bay timer.",
    },
    {
      step: "03",
      icon: FaPause,
      title: "Work & Pause Logging",
      description: "If waiting for parts or out for lunch, technician taps pause with a categorized reason.",
    },
    {
      step: "04",
      icon: FaCheckCircle,
      title: "Task Completion & Review",
      description: "Technician marks task complete; system records total active minutes and variances.",
    },
    {
      step: "05",
      icon: FaAward,
      title: "Productivity & Payroll Sync",
      description: "Manager reviews daily efficiency reports; data automatically feeds mechanic incentive payroll.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Simple 5-Step Workflow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4 leading-tight">
            How Bay Time <GradientUnderline>Clocking Works</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Zero friction for mechanics, 100% visibility for workshop managers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-primary flex items-center justify-center font-bold text-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-black text-slate-200">{item.step}</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
