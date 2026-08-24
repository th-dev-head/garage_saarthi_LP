import React from "react";
import Link from "next/link";
import { FaStore, FaTools, FaBuilding, FaChartLine } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const businessTypes = [
  {
    icon: <FaStore />,
    title: "Independent Bike Garages",
    desc: "Manage job cards, simple GST invoicing, spare parts counts, walk-in customer records, and daily cash collection statements without any complexity.",
  },
  {
    icon: <FaTools />,
    title: "Motorcycle Repair Shops",
    desc: "Log detailed vehicle histories, allocate repair tasks to mechanics, track custom parts requisitions, and record payments for long-running service cards.",
  },
  {
    icon: <FaBuilding />,
    title: "Two-Wheeler Service Centres",
    desc: "Optimize high service volumes with digital customer profiles, automated WhatsApp due notifications, staff payroll, and collection dashboards.",
  },
  {
    icon: <FaChartLine />,
    title: "Multi-Branch Bike Workshops",
    desc: "Coordinate stock transfers across branches, manage role-based staff permissions, and check centralized operational reports from a single dashboard.",
  },
];

export default function BWBusinessType() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Segments
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Built for Bike Garages, Motorcycle Workshops and{" "}
            <GradientUnderline>Two-Wheeler Service Centres</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi matches the operational workflows of small single-bay bike garages as well as large multi-branch two-wheeler service networks.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {businessTypes.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-6 rounded-3xl border border-slate-200/60 shadow-sm hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary mb-4 text-base">
                  {card.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">{card.title}</h3>
                <p className="text-xs text-slate-500 leading-normal">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-[#EFE9E7]/40 border border-primary/20 p-6 rounded-3xl max-w-2xl mx-auto">
          <p className="text-xs text-slate-700 leading-relaxed">
            Operating a growing workshop chain? Move from disconnected tools and paper records to a centralized digital system.{" "}
            <Link href="/solutions/multi-branch-garage-software/" className="font-bold text-primary hover:underline">
              Explore Multi-Branch Garage Software
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
