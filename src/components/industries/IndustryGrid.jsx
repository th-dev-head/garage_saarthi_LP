"use client";

import React from "react";
import Link from "next/link";
import {
  FaCar,
  FaWrench,
  FaMotorcycle,
  FaTruck,
  FaBolt,
  FaTruckMoving,
  FaSprayCan,
  FaTools,
  FaCogs,
  FaArrowRight
} from "react-icons/fa";
import GradientUnderline from "../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

const industries = [
  {
    title: "Car Workshops",
    description: "Manage car service jobs, customer and vehicle records, billing and workshop workflows in one place.",
    destination: "/solutions/car-workshop-software/",
    badge: "Full Service & Repair",
    icon: FaCar,
    accent: "from-orange-500 to-red-600",
  },
  {
    title: "Car Garages",
    description: "Organize everyday garage operations, repair jobs, billing and customer follow-ups.",
    destination: "/solutions/car-garage-software/",
    badge: "Independent Garages",
    icon: FaWrench,
    accent: "from-amber-500 to-orange-600",
  },
  {
    title: "Bike Workshops",
    description: "Keep two-wheeler service jobs, repair records, billing and customer reminders organized.",
    destination: "/solutions/bike-workshop-software/",
    badge: "2-Wheeler Service",
    icon: FaMotorcycle,
    accent: "from-red-500 to-orange-500",
  },
  {
    title: "Truck Workshops",
    description: "Manage commercial-vehicle repair jobs, service records and workshop operations.",
    destination: "/solutions/truck-workshop-software/",
    badge: "Commercial & Heavy",
    icon: FaTruck,
    accent: "from-blue-600 to-indigo-600",
  },
  {
    title: "EV Garages",
    description: "Organize service jobs and customer/vehicle records for EV-focused workshop operations.",
    destination: "/solutions/ev-garage-management-software/",
    badge: "Electric Mobility",
    icon: FaBolt,
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "Fleet Workshops",
    description: "Coordinate workshop activity and vehicle maintenance records for fleet-related operations.",
    destination: "/solutions/fleet-workshop-software/",
    badge: "Fleet Maintenance",
    icon: FaTruckMoving,
    accent: "from-indigo-500 to-purple-600",
  },
  {
    title: "Car Detailing Businesses",
    description: "Manage detailing jobs, customer records, billing and follow-ups for detailing operations.",
    destination: "/solutions/car-detailing-software/",
    badge: "Detailing & Coating",
    icon: FaSprayCan,
    accent: "from-pink-500 to-rose-600",
  },
  {
    title: "Auto Repair Shops",
    description: "Track repair jobs, customers, vehicle details, billing and related workshop workflows.",
    destination: "/solutions/auto-repair-shop-software/",
    badge: "Multi-Brand Repairs",
    icon: FaTools,
    accent: "from-orange-600 to-amber-600",
  },
  {
    title: "Automobile Workshops",
    description: "A broader workshop-management option for automotive service businesses.",
    destination: "/solutions/automobile-workshop-software/",
    badge: "Comprehensive Workflows",
    icon: FaCogs,
    accent: "from-slate-700 to-slate-900",
  },
];

export default function IndustryGrid() {
  const handleCardClick = (title, destination) => {
    trackEvent("industry_card_click", {
      page_path: "/industries/",
      industry_title: title,
      destination: destination,
    });
  };

  return (
    <section id="industry-list" className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 scroll-mt-24">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EFE9E7] text-primary text-xs font-bold px-3.5 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Industry Discovery Hub
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark tracking-tight mb-4">
            Find the Right Software for{" "}
            <GradientUnderline>Your Automotive Business</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Every automotive business has its own service workflow. Explore the business types below to find the GarageSaarthi solution most relevant to your operations.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-13 h-13 rounded-xl bg-orange-50 text-primary flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-orange-50 group-hover:text-primary transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={item.destination}
                    onClick={() => handleCardClick(item.title, item.destination)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-orange-700 transition-colors group-hover:translate-x-1 duration-200"
                    aria-label={`Explore ${item.title} Solution`}
                  >
                    <span>Explore Solution</span>
                    <FaArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
