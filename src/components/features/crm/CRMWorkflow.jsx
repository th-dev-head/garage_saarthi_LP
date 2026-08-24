import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaPhoneAlt, FaCalendarCheck, FaWrench, FaStar, FaSyncAlt } from "react-icons/fa";

export default function CRMWorkflow() {
  const steps = [
    {
      num: "01",
      icon: <FaPhoneAlt className="w-5 h-5 text-primary" />,
      title: "Capture Lead & Inquiry",
      desc: "Record customer phone call, walk-in query, or online lead with vehicle details."
    },
    {
      num: "02",
      icon: <FaCalendarCheck className="w-5 h-5 text-orange-600" />,
      title: "Schedule Appointment",
      desc: "Set service date, assign service advisor, and send WhatsApp confirmation."
    },
    {
      num: "03",
      icon: <FaWrench className="w-5 h-5 text-emerald-600" />,
      title: "Service Updates on WhatsApp",
      desc: "Send live repair status updates, photo proof, and PDF estimate for approval."
    },
    {
      num: "04",
      icon: <FaStar className="w-5 h-5 text-amber-600" />,
      title: "Collect Feedback & Review",
      desc: "Send post-service rating link to collect Google 5-star reviews from satisfied owners."
    },
    {
      num: "05",
      icon: <FaSyncAlt className="w-5 h-5 text-purple-600" />,
      title: "Automated Repeat Reminders",
      desc: "System sends next service reminder on WhatsApp after 90/180 days automatically."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            5-Step CRM Workflow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            How GarageSaarthi Turns Leads into <GradientUnderline>Repeat Customers</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Automated, personal, and efficient. Build customer loyalty effortlessly.
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
