import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaUserPlus, FaHistory, FaFileInvoice, FaCheckCircle, FaStar } from "react-icons/fa";

export default function CustWorkflow() {
  const steps = [
    {
      num: "01",
      icon: <FaUserPlus className="w-5 h-5 text-primary" />,
      title: "Register & Profile Client",
      desc: "Save name, mobile number, and vehicle registration info in the CRM directory."
    },
    {
      num: "02",
      icon: <FaHistory className="w-5 h-5 text-orange-600" />,
      title: "Link to Service History",
      desc: "Link customer profile automatically to job cards, photos, and diagnostic remarks."
    },
    {
      num: "03",
      icon: <FaFileInvoice className="w-5 h-5 text-emerald-600" />,
      title: "Verify Outstanding Dues",
      desc: "View customer ledger to check for pending collections before delivery."
    },
    {
      num: "04",
      icon: <FaCheckCircle className="w-5 h-5 text-amber-600" />,
      title: "Deliver & Share Invoices",
      desc: "Send final GST invoice and digital delivery notes to WhatsApp in one click."
    },
    {
      num: "05",
      icon: <FaStar className="w-5 h-5 text-purple-600" />,
      title: "Auto Feedback Request",
      desc: "System sends automated WhatsApp Google Review rating prompts post-service."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Lifecycle Flow
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Seamless Customer Records <GradientUnderline>Lifecycle Management</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            From registration check-in to automated feedback collection and repeat visits.
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
