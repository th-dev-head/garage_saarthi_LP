import React from "react";
import Link from "next/link";
import { FaTachometerAlt, FaFileAlt, FaChartBar, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const cards = [
  {
    icon: <FaTachometerAlt className="w-5 h-5" />,
    title: "Garage Dashboard",
    desc: "See today's job cards, pending vehicles, revenue collected, and outstanding dues at a glance. The GarageSaarthi dashboard gives car garage owners a real-time operational summary.",
    link: "/features/workshop-management-dashboard/",
  },
  {
    icon: <FaFileAlt className="w-5 h-5" />,
    title: "Operational Reports",
    desc: "Access detailed reports on job completion rates, spare parts consumption, mechanic productivity, and service history. Understand what is driving your garage operations.",
    link: "/features/reports/",
  },
  {
    icon: <FaChartBar className="w-5 h-5" />,
    title: "Business Visibility",
    desc: "Track daily revenue, monthly collections, outstanding payments, and expense patterns. Move from guessing your garage's financial health to knowing it with accurate data.",
    link: "/features/reports/",
  },
];

export default function CGDashboardReports() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Reports & Analytics
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Understand Your Car Garage with Dashboard and{" "}
            <GradientUnderline>Business Reports</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            Move beyond daily record-keeping and start understanding your car garage as a business. GarageSaarthi's dashboard and reports give you the visibility to make informed decisions every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">{card.desc}</p>
              </div>
              <Link href={card.link} className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
                Learn more <FaArrowRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/features/reports/"
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
          >
            Explore Garage Reports
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

