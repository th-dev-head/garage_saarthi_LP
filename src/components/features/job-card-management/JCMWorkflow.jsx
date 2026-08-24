import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaUserPlus, FaWrench, FaSlidersH, FaWhatsapp, FaCheckDouble } from "react-icons/fa";

export default function JCMWorkflow() {
  const steps = [
    {
      num: "01",
      icon: <FaUserPlus className="w-5 h-5 text-primary" />,
      title: "Vehicle & Customer Entry",
      desc: "Log vehicle number, customer details, fuel level, and complaints in under 60 seconds."
    },
    {
      num: "02",
      icon: <FaSlidersH className="w-5 h-5 text-orange-600" />,
      title: "Inspection & Estimate",
      desc: "Add estimated labor charges and spare parts. Generate PDF estimate for WhatsApp sharing."
    },
    {
      num: "03",
      icon: <FaWrench className="w-5 h-5 text-emerald-600" />,
      title: "Mechanic Assignment",
      desc: "Assign tasks to a technician and update live repair status to 'In Progress'."
    },
    {
      num: "04",
      icon: <FaCheckDouble className="w-5 h-5 text-amber-600" />,
      title: "Quality Check & Billing",
      desc: "Verify repair work, convert job card to GST invoice, and record payment."
    },
    {
      num: "05",
      icon: <FaWhatsapp className="w-5 h-5 text-purple-600" />,
      title: "Customer Delivery & WhatsApp Invoice",
      desc: "Send digital invoice link via WhatsApp and record next service reminder alert."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Automated Repair Order Flow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            5-Step Digital <GradientUnderline>Job Card Workflow</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Simple, intuitive, and error-free. Streamline vehicle intake to final delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between relative transition-colors"
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
