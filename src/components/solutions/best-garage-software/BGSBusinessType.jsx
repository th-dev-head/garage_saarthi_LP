import React from "react";
import Link from "next/link";
import { FaCar, FaMotorcycle, FaTools, FaBolt, FaTruckMoving, FaStore, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const businessTypes = [
  {
    icon: <FaCar />,
    title: "Car Garages & Repair Shops",
    desc: "Track pre-service inspection walkarounds, spare parts, vehicle service logs, and custom GST invoices for 4-wheeler repair centers.",
    link: "/solutions/car-garage-software",
    anchor: "Explore Car Garage Software",
  },
  {
    icon: <FaMotorcycle />,
    title: "Bike & Two-Wheeler Garages",
    desc: "Manage high daily vehicle turnaround, chain lubes, fast spare checkouts, and automated WhatsApp oil change service reminders.",
    link: "/solutions/bike-workshop-software",
    anchor: "Explore Bike Workshop Software",
  },
  {
    icon: <FaTools />,
    title: "Multi-Brand Automobile Workshops",
    desc: "Handle diverse vehicle makes, complex mechanic labor commissions, bulk inventory stock, and dedicated CRM lead tracking.",
    link: "/solutions/automobile-workshop-software/",
    anchor: "Explore Multi-Brand Software",
  },
  {
    icon: <FaBolt />,
    title: "EV Repair & Service Garages",
    desc: "Manage customer profiles, EV vehicle records, component replacement billing, and staff jobs without diagnostic claims.",
    link: "/solutions/ev-garage-management-software",
    anchor: "Explore EV Garage Software",
  },
  {
    icon: <FaTruckMoving />,
    title: "Truck & Heavy Vehicle Workshops",
    desc: "Coordinate hub greasing, engine overhauls, bulk lubricant inventory, and credit terms billing for transport fleet clients.",
    link: "/solutions/truck-workshop-software",
    anchor: "Explore Truck Workshop Software",
  },
  {
    icon: <FaStore />,
    title: "Dealers & Car Service Centres",
    desc: "Manage multi-bay repair jobs, corporate customer profiles, cashier reports, staff payroll, and centralized branch access.",
    link: "/solutions/car-workshop-software",
    anchor: "Explore Service Centre Software",
  },
];

export default function BGSBusinessType() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Tailored Solutions
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Choose Garage Software Based on Your{" "}
            <GradientUnderline>Workshop Type</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Different vehicles require distinct service workflows. GarageSaarthi provides specialized configurations tailored for every automotive business type.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessTypes.map((card, idx) => (
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
                <Link href={card.link} className="text-xs font-bold text-primary hover:underline flex gap-2 items-center">
                  {card.anchor} <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
