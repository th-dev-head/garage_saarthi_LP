import React from "react";
import Link from "next/link";
import { FaUserPlus, FaTasks, FaUserCheck, FaCar, FaTags, FaBell, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const steps = [
  { icon: <FaUserPlus />, title: "1. Lead Enters CRM", desc: "New service enquiry or phone lead is logged in Garage CRM.", link: "/garage-crm", anchor: "Garage CRM" },
  { icon: <FaTasks />, title: "2. Team Manages Lead", desc: "Staff provides service quotes, logs call notes, and sets follow-up dates.", link: "/garage-crm", anchor: "Lead Tracking" },
  { icon: <FaUserCheck />, title: "3. Lead Becomes Customer", desc: "Customer books repair job; profile moves into active customer database.", link: "/features/customers", anchor: "Customer Records" },
  { icon: <FaCar />, title: "4. Vehicle Logged", desc: "Vehicle model, chassis details, and repair history are permanently saved.", link: "/features/vehicles", anchor: "Vehicle Records" },
  { icon: <FaTags />, title: "5. Offers Applied", desc: "Promotions and seasonal discounts encourage repeat servicing.", link: "/features/offers-promotions", anchor: "Offers & Promotions" },
  { icon: <FaBell />, title: "6. Service Alerts Sent", desc: "Automated WhatsApp alerts remind client when next service is due.", link: "/features/service-reminders", anchor: "Service Alerts" },
];

export default function GMCRMConnection() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Unified Customer Lifecycle
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Connect Garage CRM, Customer Data <GradientUnderline>and Marketing Activities</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            See how GarageSaarthi connects customer lead capture with daily workshop operations and ongoing marketing follow-ups.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                  {step.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-normal">{step.desc}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60">
                <Link href={step.link} className="text-xs font-bold text-primary hover:underline flex items-center gap-2">
                  {step.anchor} <FaArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
