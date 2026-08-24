import React from "react";
import Link from "next/link";
import { FaUserCheck, FaCar, FaRedo, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const retentionCards = [
  {
    icon: <FaUserCheck />,
    title: "Personalized Customer Profiles",
    desc: "Understand each client's servicing history, past repair bills, and preferred contact channels to deliver attentive service.",
    link: "/features/customers/",
    anchor: "Explore Customer Profiles",
  },
  {
    icon: <FaCar />,
    title: "Vehicle Service Logs",
    desc: "Show transparent repair records and substituted part details during vehicle checkups to build trust.",
    link: "/features/vehicles/",
    anchor: "Explore Vehicle History",
  },
  {
    icon: <FaRedo />,
    title: "Repeat Maintenance Bookings",
    desc: "Trigger periodic service alerts and promotional discounts to encourage routine maintenance visits.",
    link: "/solutions/service-reminder-software/",
    anchor: "Explore Service Reminders",
  },
];

export default function GMRetention() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Customer Loyalty
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Build Stronger Relationships with <GradientUnderline>Existing Garage Customers</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Garage marketing is not just about finding new leads — retaining your existing vehicle owners drives the highest long-term profit margins.
          </p>
        </div>

        {/* 3 Grid Columns using map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {retentionCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                  {card.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900">{card.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 mt-4">
                <Link
                  href={card.link}
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-2"
                >
                  {card.anchor} <FaArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
