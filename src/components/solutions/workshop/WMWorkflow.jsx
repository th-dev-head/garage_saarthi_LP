import React from "react";
import Link from "next/link";
import { FaClipboardList, FaTools, FaBox, FaFileInvoiceDollar, FaBell, FaChartBar, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const steps = [
  {
    step: "01",
    icon: <FaClipboardList className="w-5 h-5" />,
    title: "Customer Walks In",
    desc: "Log customer details and vehicle registration. GarageSaarthi auto-pulls the vehicle's full service history from previous visits.",
    link: "/features/job-cards",
  },
  {
    step: "02",
    icon: <FaTools className="w-5 h-5" />,
    title: "Open a Digital Job Card",
    desc: "Create a job card in under 60 seconds. Add complaints, assign mechanic, set estimated delivery time and parts required.",
    link: "/features/job-cards",
  },
  {
    step: "03",
    icon: <FaBox className="w-5 h-5" />,
    title: "Pick Parts from Inventory",
    desc: "Select parts from your live inventory. Stock is automatically deducted. Get low-stock alerts before you run out.",
    link: "/features/inventory",
  },
  {
    step: "04",
    icon: <FaFileInvoiceDollar className="w-5 h-5" />,
    title: "Generate GST Invoice",
    desc: "Bill the customer with a professional, GST-compliant invoice. Share it via WhatsApp link in one click.",
    link: "/features/billing",
  },
  {
    step: "05",
    icon: <FaBell className="w-5 h-5" />,
    title: "Schedule Next Service Alert",
    desc: "Before the customer leaves, set their next service reminder date. GarageSaarthi sends automatic follow-ups.",
    link: "/features/service-alerts",
  },
  {
    step: "06",
    icon: <FaChartBar className="w-5 h-5" />,
    title: "Review Day-End Reports",
    desc: "See today's revenue, active job cards, pending payments, and mechanic productivity from your dashboard.",
    link: "/features/dashboard",
  },
];

export default function WMWorkflow() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4">
            How GarageSaarthi Works —{" "}
            <GradientUnderline>The Complete Workshop Workflow.</GradientUnderline>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            From the moment a vehicle enters your workshop to the day it returns for next service — GarageSaarthi manages every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-extrabold text-slate-200 leading-none select-none">
                  {step.step}
                </span>
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary flex-shrink-0">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{step.desc}</p>
              <Link
                href={step.link}
                className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover transition-colors"
              >
                Learn more <FaArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

