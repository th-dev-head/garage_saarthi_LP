import React from "react";
import Link from "next/link";
import { FaDatabase, FaFilter, FaBullhorn, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const challenges = [
  {
    icon: <FaDatabase />,
    title: "1. Organize Customer & Vehicle Records",
    desc: "Consolidate customer profiles, phone numbers, chassis details, and historical service notes into one database.",
    link: "/features/customers",
    anchor: "Explore Customer Management",
  },
  {
    icon: <FaFilter />,
    title: "2. Track Service Leads & Opportunities",
    desc: "Record incoming customer call leads, quote requests, and follow-up dates in a dedicated workshop CRM.",
    link: "/garage-crm",
    anchor: "Explore Garage CRM",
  },
  {
    icon: <FaBullhorn />,
    title: "3. Trigger Timely Offers & Alerts",
    desc: "Share promotional packages and periodic maintenance alerts straight to customers' WhatsApp accounts.",
    link: "/features/vehicles",
    anchor: "Explore Vehicle History",
  },
];

export default function GMChallenges() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Data to Engagement
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Turn Everyday Garage Customer Data into <GradientUnderline>Better Customer Engagement</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Garage owners regularly collect customer names, phone numbers, vehicle models, service history, and repair records. Collecting information alone does not increase customer retention — you need a structured workflow to use that data effectively.
          </p>
        </div>

        {/* 3 Step Workflow Cards using map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {challenges.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 mt-4">
                <Link
                  href={item.link}
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-2"
                >
                  {item.anchor} <FaArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
