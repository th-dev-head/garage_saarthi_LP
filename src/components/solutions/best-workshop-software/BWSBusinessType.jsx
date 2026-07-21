import React from "react";
import Link from "next/link";
import { FaCar, FaMotorcycle, FaBolt, FaTruckMoving, FaBus, FaBuilding, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const workshopTypes = [
  {
    icon: <FaCar />,
    title: "Car Garages & Workshops",
    desc: "Manage 4-wheeler repair jobs, pre-service checklists, spare parts inventory, customer history, and GST invoices.",
    link: "/solutions/car-garage-software",
    anchor: "Explore Car Workshop Software",
  },
  {
    icon: <FaMotorcycle />,
    title: "Bike & Two-Wheeler Workshops",
    desc: "Handle quick daily service jobs, fast part counter billing, customer contact registers, and automated WhatsApp oil alerts.",
    link: "/solutions/bike-workshop-software",
    anchor: "Explore Bike Workshop Software",
  },
  {
    icon: <FaBolt />,
    title: "EV Repair & Service Workshops",
    desc: "Maintain customer profiles, EV vehicle records, component repair jobs, and staff tasks cleanly without diagnostic claims.",
    link: "/solutions/ev-garage-management-software",
    anchor: "Explore EV Workshop Software",
  },
  {
    icon: <FaTruckMoving />,
    title: "Truck & Commercial Workshops",
    desc: "Coordinate heavy vehicle maintenance, long overhaul jobs, spare parts stock, and credit billing for transport fleets.",
    link: "/solutions/truck-workshop-software",
    anchor: "Explore Truck Workshop Software",
  },
  {
    icon: <FaBus />,
    title: "Fleet Maintenance Workshops",
    desc: "Organize internal transport vehicle checkups, preventative service schedules, parts usage, and maintenance logs.",
    link: "/solutions/fleet-workshop-software",
    anchor: "Explore Fleet Workshop Software",
  },
  {
    icon: <FaBuilding />,
    title: "Multi-Branch Workshop Chains",
    desc: "Centralize multi-location management, monitor branch collections, transfer stock, and manage role-based staff access.",
    link: "/solutions/multi-branch-garage-software",
    anchor: "Explore Multi-Branch Software",
  },
];

export default function BWSBusinessType() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Categories
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Choose Workshop Software That Fits <GradientUnderline>Your Type of Garage</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi provides specialized configurations tailored for different vehicle repair and workshop operations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshopTypes.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                  {card.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">{card.title}</h3>
                <p className="text-xs text-slate-500 leading-normal">{card.desc}</p>
              </div>

              <div className="pt-6 border-t border-slate-200/60 mt-6">
                <Link href={card.link} className="text-xs font-bold text-primary hover:underline flex items-center gap-2">
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
