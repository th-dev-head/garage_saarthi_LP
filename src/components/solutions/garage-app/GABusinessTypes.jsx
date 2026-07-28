import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const types = [
  { title: "Car Garages", desc: "Manage multi-brand repairs, custom paint jobs, and spare parts easily.", link: "/solutions/car-garage-software" },
  { title: "Bike Workshops", desc: "Speedy mechanics checklists, job card workflows, and parts listings.", link: "/solutions/bike-workshop-software" },
  { title: "EV Garages", desc: "EV battery health records, electrical tests, and service tracking.", link: "/solutions/ev-garage-management-software" },
  { title: "Truck Workshops", desc: "Handle heavy duty commercial vehicle parameters and parts allocations.", link: "/solutions/truck-workshop-software" },
  { title: "Fleet Workshops", desc: "Centralized maintenance schedules, logs, and billing for fleet operators.", link: "/solutions/fleet-workshop-software" },
  { title: "Car Detailing Businesses", desc: "Keep track of detailing spa services, detailing products, and updates.", link: "/solutions/car-detailing-software" },
  { title: "Independent Garages", desc: "Simple tool checklists and easy GST billing for smaller mechanic shops.", link: "/solutions/independent-garage-software" },
  { title: "Multi-Branch Garages", desc: "Consolidated sales figures and stock transfer registries across branches.", link: "/solutions/multi-branch-garage-software" }
];

export default function GABusinessTypes() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Solutions
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            A Workshop Management App for{" "}
            <GradientUnderline>Different Automotive Businesses</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Whether you run a small independent garage or a multi-branch network of workshops, our mobile application adapts to your specific workflows.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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

        {/* Global CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/solutions"
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
          >
            Explore GarageSaarthi Solutions
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}

