import React from "react";
import Link from "next/link";
import { FaPhoneVolume, FaAddressCard, FaBell, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const followUpCards = [
  {
    icon: <FaPhoneVolume />,
    title: "CRM Lead & Enquiry Logs",
    desc: "Record incoming customer phone calls, quote requests, and follow-up dates in an integrated workshop CRM.",
    link: "/garage-crm",
    anchor: "Explore Garage CRM",
  },
  {
    icon: <FaAddressCard />,
    title: "Searchable Customer Database",
    desc: "Lookup customer profiles and past vehicle service notes instantly to provide knowledgeable phone service.",
    link: "/features/customers",
    anchor: "Explore Customer Records",
  },
  {
    icon: <FaBell />,
    title: "Periodic Service Reminders",
    desc: "Schedule automated WhatsApp follow-up alerts when regular vehicle maintenance due dates approach.",
    link: "/service-reminder-software",
    anchor: "Explore Reminder Tools",
  },
];

export default function GMFollowUp() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Follow-Up Management
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Keep Garage Customer Follow-Ups <GradientUnderline>Organized</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Without a centralized system, customer follow-up notes get lost in personal memories, paper diaries, phone contacts, or individual chat logs.
          </p>
        </div>

        {/* 3 Grid Columns using map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {followUpCards.map((item, idx) => (
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

        <div className="flex justify-center">
          <Link
            href="/garage-crm"
            className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
          >
            Explore Garage CRM <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
