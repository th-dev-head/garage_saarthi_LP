import React from "react";
import Link from "next/link";
import { FaTruck, FaTools, FaBuilding, FaRoad } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const businessTypes = [
  {
    icon: <FaTruck />,
    title: "Truck Repair Workshops",
    desc: "Manage general service, alignment work, air line fixes, and heavy parts replacement cards for individual trucks or transport tippers.",
  },
  {
    icon: <FaTools />,
    title: "Heavy Vehicle Garages",
    desc: "Track long-running engine overhauls, log suspension replacements, assign labor rates, and manage split payments from corporate owners.",
  },
  {
    icon: <FaBuilding />,
    title: "Commercial Vehicle Service Centres",
    desc: "Optimize high service volume jobs using digital checksheets, WhatsApp notifications, stock valuation charts, and billing prefixes.",
  },
  {
    icon: <FaRoad />,
    title: "Multi-Branch Service Chains",
    desc: "Control multi-branch inventory requisitions, assign local staff duties, and check centralized operational records from one dashboard.",
  },
];

export default function TWBusinessType() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Segments
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Built for Truck, Heavy Vehicle and{" "}
            <GradientUnderline>Commercial Vehicle Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi provides flexibility to manage independent commercial vehicle garages as well as large multi-branch service networks.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {businessTypes.map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
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
            Managing corporate transport fleets or contract repairs? Streamline your workflows centrally.{" "}
            <Link href="/solutions/fleet-workshop-software/" className="font-bold text-primary hover:underline">
              Explore Fleet Workshop Software
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
