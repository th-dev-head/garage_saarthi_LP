import React from "react";
import GradientUnderline from "../common/GradientUnderline";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const types = [
  { title: "Car Workshop App", desc: "Manage multi-brand repairs, visual damage records, and catalog parts.", link: "/solutions/car-garage-software" },
  { title: "Bike Workshop App", desc: "Speedy mechanics checklists, parts inventory, and base monthly billing.", link: "/solutions/bike-workshop-software" },
  { title: "EV Workshop App", desc: "Record battery cell logs, electric testing, and service schedules.", link: "/solutions/ev-garage-software" },
  { title: "Truck Workshop App", desc: "Heavy mechanical tasks allocations and parts requisitions.", link: "/solutions/truck-workshop-software" },
  { title: "Auto Repair Shop App", desc: "Digital job cards, customer records, and general billing registries.", link: "/solutions/car-garage-software" }
];

export default function WABusinessTypes() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Industry Solutions
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            A Workshop App for Car, <GradientUnderline>Bike, EV and Truck Garages</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Our application is configured with flexible parameters to suit different automotive repair business structures.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {types.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 p-5 rounded-xl shadow-xs flex flex-col justify-between h-full min-h-[160px]">
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">{item.desc}</p>
              </div>
              <Link
                href={item.link}
                className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
              >
                Explore Solutions
                <FaArrowRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
