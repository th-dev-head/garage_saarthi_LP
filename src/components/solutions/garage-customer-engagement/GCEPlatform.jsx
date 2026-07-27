import React from "react";
import Link from "next/link";
import { FaUser, FaCar, FaFileAlt, FaBell, FaHandHoldingUsd } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GCEPlatform() {
  const steps = [
    { icon: <FaUser />, label: "Customer", link: "/features/customers", anchor: "Customer Management" },
    { icon: <FaCar />, label: "Vehicle", link: "/features/vehicles", anchor: "Vehicle Management" },
    { icon: <FaFileAlt />, label: "Job Card", link: "/features/job-card-management", anchor: "Job Card Features" },
    { icon: <FaHandHoldingUsd />, label: "Payment", link: "/features/payments", anchor: "Payments Log" },
    { icon: <FaBell />, label: "Service Alert", link: "/features/service-reminders", anchor: "Service Alerts" }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            All-In-One Platform
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Connect Customer Engagement with Your Daily <GradientUnderline>Garage Operations</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Customer follow-ups should not exist in a vacuum. By using GarageSaarthi, your client communications are linked with active job cards, billing details, and spare parts stock automatically.
          </p>
        </div>

        {/* Process Map */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-xs text-center space-y-8">
          <h3 className="text-sm font-bold text-slate-900">The Connected Workspace Flow</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-xs">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 space-y-3 flex flex-col items-center">
                <div className="bg-white w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center text-primary shadow-xs">
                  {st.icon}
                </div>
                <span className="font-bold text-slate-900">{st.label}</span>
                <p className="text-[10px] text-slate-500">
                  Linked directly under our{" "}
                  <Link href={st.link} className="text-primary font-bold hover:underline">
                    {st.anchor}
                  </Link>
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/features"
              className="rounded-full bg-primary hover:bg-primary-hover text-white px-8 py-3 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer shadow-md"
            >
              Explore All GarageSaarthi Features
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
