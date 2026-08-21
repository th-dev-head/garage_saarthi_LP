import React from "react";
import { FaCarSide, FaMobileScreen, FaWrench, FaShareNodes } from "react-icons/fa6";
import GradientUnderline from "../../common/GradientUnderline";

export default function VIWorkflow() {
  const steps = [
    {
      num: "01",
      icon: <FaCarSide className="w-5 h-5 text-primary" />,
      title: "Select Vehicle",
      desc: "Search for the customer's vehicle by registration number. The system pulls up its history instantly.",
    },
    {
      num: "02",
      icon: <FaMobileScreen className="w-5 h-5 text-orange-600" />,
      title: "Perform Inspection",
      desc: "The mechanic walks around the car with a tablet, selecting Good, Average, or Bad for each checkpoint.",
    },
    {
      num: "03",
      icon: <FaWrench className="w-5 h-5 text-emerald-600" />,
      title: "Add Remarks",
      desc: "Log exact readings (e.g., battery voltage) and type specific mechanic notes for the service advisor.",
    },
    {
      num: "04",
      icon: <FaShareNodes className="w-5 h-5 text-amber-600" />,
      title: "Share with Customer",
      desc: "One click generates a beautiful PDF health card and sends it to the customer via WhatsApp.",
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Digital Health Check Flow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            4-Step Digital <GradientUnderline>Inspection Workflow</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            From vehicle arrival to customer approval in 4 simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between relative transition-colors shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300">{step.num}</span>
                  <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
