import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const businessTypes = [
  {
    title: "Car Garages",
    desc: "Manage complex multi-system diagnostics, scheduled car wash stages, body shop painting timelines, and high-value spare parts records.",
    link: "/solutions/car-garage-software",
  },
  {
    title: "Bike Workshops",
    desc: "Optimize high-volume two-wheeler services, quick engine oil changes, chain lubrication job cards, and fast-moving spares cataloguing.",
    link: "/solutions/bike-workshop-software",
  },
  {
    title: "EV Garages",
    desc: "Track battery health status records, battery temperature parameters, specialized motor controller spares, and electrical technician safety guides.",
    link: "/solutions/ev-garage-management-software",
  },
  {
    title: "Truck Workshops",
    desc: "Log heavy commercial vehicle heavy-duty suspension repair jobs, hydraulic parts checklists, and long-duration commercial repair sheets.",
    link: "/solutions/truck-workshop-software",
  },
  {
    title: "Fleet Workshops",
    desc: "Centrally monitor internal vehicle fleet preventative maintenance checklists, driver logs, spare parts usage, and log breakdowns.",
    link: "/solutions/fleet-workshop-software",
  },
  {
    title: "Independent Garages",
    desc: "Simplify customer contact sheets, multi-brand spares cataloguing, fast GST invoicing, and WhatsApp follow-ups for local client bases.",
    link: "/solutions/independent-garage-software",
  },
  {
    title: "Multi-Branch Workshops",
    desc: "Track real-time outlet operations, branch-wise sales registers, and consolidate stock levels of spare parts across all branch outlets.",
    link: "/solutions/multi-branch-garage-software",
  },
];

export default function AWBusinessTypes() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Industry Coverage
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Built for Different <GradientUnderline>Automobile Workshop Businesses</GradientUnderline>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Different vehicles require different repair processes. GarageSaarthi provides customized solutions tailored to your specific vehicle business type.
          </p>
        </div>

        {/* List of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessTypes.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/20"
            >
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">{item.desc}</p>
              </div>
              <Link
                href={item.link}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors"
              >
                Explore Solution <FaArrowRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

