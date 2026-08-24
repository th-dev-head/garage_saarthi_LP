import React from "react";
import Link from "next/link";
import { FaBus, FaTruckMoving, FaCar, FaHome, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const fleetTypes = [
  {
    icon: <FaBus />,
    title: "Passenger Bus Fleets",
    desc: "Schedule and manage periodic brake adjustments, transmission overhauls, passenger safety audits, and wheel bearings.",
  },
  {
    icon: <FaTruckMoving />,
    title: "Cargo Truck Fleets",
    desc: "Coordinate hub greasing, electrical wiring inspections, engine reconditioning, and heavy spare parts replacements for long-haul carriers.",
  },
  {
    icon: <FaCar />,
    title: "Corporate Car Fleets",
    desc: "Create quick checkups, monitor general maintenance history, log engine oil changes, and generate corporate accounts invoices.",
  },
  {
    icon: <FaHome />,
    title: "In-House Fleet Workshops",
    desc: "Optimize parts usage, log mechanic jobs, track shift work, and manage internal maintenance records without complexity.",
  },
];

export default function FLFleetTypes() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Supported Fleets
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Supported Fleet and <GradientUnderline>Transport Operations</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi provides flexibility to manage dedicated commercial vehicle networks, private bus routes, and local corporate vehicle logistics.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {fleetTypes.map((card, idx) => (
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

        <div className="text-center bg-[#EFE9E7]/40 border border-primary/20 p-6 rounded-3xl max-w-2xl mx-auto space-y-2">
          <p className="text-xs text-slate-700 leading-relaxed">
            Do you manage specialized vehicle types? We support diverse setups.
          </p>
          <div className="flex justify-center gap-6 text-xs font-bold text-primary">
            <Link href="/solutions/truck-workshop-software/" className="hover:underline">
              Truck Workshop Software
            </Link>
            <span>|</span>
            <Link href="/solutions/car-garage-software/" className="hover:underline">
              Car Garage Software
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
