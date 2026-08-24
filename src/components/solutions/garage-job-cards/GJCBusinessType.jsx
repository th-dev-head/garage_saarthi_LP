"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function GJCBusinessType() {
  const handleSolutionClick = (solutionName) => {
    trackEvent("job_card_solution_link_click", {
      page_path: "/solutions/garage-job-card-software/",
      solution_name: solutionName
    });
  };

  const workshopTypes = [
    { title: "Car Garage Job Cards", link: "/solutions/car-garage-software/", desc: "Log multi-brand car specifications, vehicle damage checklists, fuel scales, and engine diagnostics notes." },
    { title: "Bike Workshop Job Cards", link: "/solutions/bike-workshop-software/", desc: "Quick mobile check-ins for two-wheelers, tracking bike components, engine numbers, and rapid mechanics updates." },
    { title: "Automobile Repair Workshops", link: "/solutions/garage-automation-software/", desc: "Track extensive repair order details, mechanic assignments, and counter parts margins in local INR." },
    { title: "Mechanics & Repair Teams", link: "/features/user-management/", desc: "Set custom roles and logins for staff and mechanics. Allow mechanics to view assigned work sheets without access to billing details." },
    { title: "Truck Workshops", link: "/solutions/truck-workshop-software/", desc: "Manage heavy vehicle repair orders, wheel alignment logs, and high-value spares." },
    { title: "EV Workshops", link: "/solutions/ev-garage-management-software/", desc: "Track battery serial numbers, warranty details, and electrical diagnostic logs." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Profiles
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Job Card Software Built for{" "}
            <GradientUnderline>Automotive Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Our digital job card system adapts to different business types. Pick your workshop style to explore details:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshopTypes.map((type, idx) => (
            <Link
              key={idx}
              href={type.link}
              onClick={() => handleSolutionClick(type.title)}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md hover:border-primary/20 transition-all duration-200 cursor-pointer group"
            >
              <div>
                <h3 className="text-sm font-bold text-text-dark group-hover:text-primary transition-colors flex items-center justify-between mb-2">
                  {type.title}
                  <FaArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity ml-2 shrink-0" />
                </h3>
                <p className="text-xs text-slate-500 mb-2 leading-relaxed">
                  {type.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

