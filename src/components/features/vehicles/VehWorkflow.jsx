import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaCar, FaClipboardCheck, FaTools, FaFileInvoiceDollar, FaArchive } from "react-icons/fa";

export default function VehWorkflow() {
  const steps = [
    {
      num: "01",
      icon: <FaCar className="w-5 h-5 text-primary" />,
      title: "Vehicle Intake & KM Logs",
      desc: "Record registration number, model, Odometer reading, and check fuel metrics."
    },
    {
      num: "02",
      icon: <FaClipboardCheck className="w-5 h-5 text-orange-600" />,
      title: "Diagnostic Inspections",
      desc: "Inspect vehicle, photograph pre-existing scratches, and log diagnosed faults."
    },
    {
      num: "03",
      icon: <FaTools className="w-5 h-5 text-emerald-600" />,
      title: "Job Card Execution",
      desc: "Mechanics execute tasks, mapping issued spare parts and labor work to the vehicle file."
    },
    {
      num: "04",
      icon: <FaFileInvoiceDollar className="w-5 h-5 text-amber-600" />,
      title: "Invoicing & Collection",
      desc: "Generate GST-compliant tax invoice. Record payments or outstanding dues."
    },
    {
      num: "05",
      icon: <FaArchive className="w-5 h-5 text-purple-600" />,
      title: "Archive Service Records",
      desc: "Instantly archive files on the cloud for lifetime lookup and service targets mapping."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Service Flow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            How GarageSaarthi Manages <GradientUnderline>Your Vehicle Records</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Automated steps to record vehicle details, diagnose issues, track servicing, and log historical profiles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between relative hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300">{step.num}</span>
                  <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
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
