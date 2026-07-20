import { FaArrowRight } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";

export default function SRHowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Keep Records Organized",
      desc: "Connect customer details with their vehicles and garage records seamlessly.",
      link: "/features/customers",
      label: "customer records"
    },
    {
      num: "02",
      title: "Track Upcoming Due Dates",
      desc: "Use GarageSaarthi service alerts to identify vehicles with upcoming service requirements.",
      link: "/features/service-alerts",
      label: "service alerts"
    },
    {
      num: "03",
      title: "Review Follow-Up Lists",
      desc: "View relevant upcoming service information and organize daily garage follow-up tasks.",
      link: null
    },
    {
      num: "04",
      title: "Send WhatsApp Reminders",
      desc: "Send service due alerts directly to customers using supported WhatsApp reminder workflows.",
      link: null
    },
    {
      num: "05",
      title: "Manage Service History",
      desc: "Keep customer, vehicle, and garage service logs structured and updated.",
      link: "/features/vehicles",
      label: "vehicle logs"
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Product Workflow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            How GarageSaarthi <GradientUnderline>Service Reminder Software</GradientUnderline> Works
          </h2>
          <p className="text-slate-600 text-sm">
            Five simple steps to automate customer follow-up actions and track vehicle maintenance schedules:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white border border-slate-200/50 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:translate-y-[-2px] transition-transform duration-200">
              <div>
                <span className="text-3xl font-extrabold text-primary/20 block mb-4">{step.num}</span>
                <h3 className="text-sm font-bold text-text-dark mb-2">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{step.desc}</p>
              </div>
              {step.link && (
                <Link href={step.link} className="text-xs text-primary font-bold hover:underline mt-auto inline-flex items-center gap-1.5">Explore {step.label} <FaArrowRight className="w-3 h-3" /></Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}