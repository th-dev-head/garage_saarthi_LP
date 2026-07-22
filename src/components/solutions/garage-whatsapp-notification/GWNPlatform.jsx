import React from "react";
import Link from "next/link";
import { FaUserAlt, FaCarAlt, FaClipboardList, FaUsers, FaPercent, FaChartBar } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GWNPlatform() {
  const steps = [
    { icon: <FaUserAlt />, label: "Customer Records", link: "/features/customers" },
    { icon: <FaCarAlt />, label: "Vehicle Records", link: "/features/vehicles" },
    { icon: <FaClipboardList />, label: "Digital Job Cards", link: "/features/job-cards" },
    { icon: <FaUsers />, label: "Garage CRM", link: "/features/crm" },
    { icon: <FaPercent />, label: "Offers & Promotions", link: "/features/offers-promotions" },
    { icon: <FaChartBar />, label: "Garage Reports", link: "/features/reports" }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Complete Platform
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Connect Service Reminders with Your Complete <GradientUnderline>Garage Workflow</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            WhatsApp alerts shouldn't be managed in separate applications. Connecting reminders with daily operations gives your team a unified view from our {" "}
            <Link href="/" className="text-primary font-bold hover:underline">
              all-in-one garage management software
            </Link>{" "}
            platform.
          </p>
        </div>

        {/* Connection flow block */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 shadow-xs text-center space-y-6">
          <h3 className="text-sm font-bold text-slate-900">Integrated Workshop Operational Modules</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-xs">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col items-center hover:scale-105 transition-transform duration-200">
                <div className="bg-orange-50 w-9 h-9 rounded-full flex items-center justify-center text-primary mb-3">
                  {st.icon}
                </div>
                <span className="font-bold text-slate-900 text-[10px] text-center">{st.label}</span>
                <Link href={st.link} className="text-primary font-bold text-[9px] hover:underline mt-2">
                  View Features
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
