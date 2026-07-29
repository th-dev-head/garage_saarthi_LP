"use client";

import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function VSHWorkshopTypes() {
  const handleSolutionClick = (solutionName) => {
    trackEvent("solution_click", {
      page_path: "/solutions/vehicle-service-history-software",
      cta_location: "workshop_types",
      cta_label: "Explore Solution",
      solution_name: solutionName
    });
  };

  const types = [
    { title: "Car Garages", desc: "Track model records, r`epair history logs, filter past invoices, and schedule car service records.", link: "/solutions/car-garage-software" },
    { title: "Bike Workshops", desc: "Manage fast check-ins for scooters and bikes, oil change histories, and regular wash records.", link: "/solutions/bike-workshop-software" },
    { title: "EV Garages", desc: "Log battery specifications, EV maintenance check sheets, and past electronic checkups.", link: "/solutions/ev-garage-management-software" },
    { title: "Truck Workshops", desc: "Maintain repair logs for commercial trucks, engine checks, and preventative checklists.", link: "/solutions/truck-workshop-software" },
    { title: "Fleet Workshops", desc: "Access central histories for business fleet operators, transporters, and corporate accounts.", link: "/solutions/fleet-workshop-software" },
    { title: "Multi-Branch Garages", desc: "Centralize diagnostic and billing histories across all workshop locations centrally.", link: "/solutions/multi-branch-garage-software" }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Suitability
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Vehicle Service History Software for Different <GradientUnderline>Types of Workshops</GradientUnderline>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((t, idx) => (
            <div key={idx} className="bg-white border border-slate-200/60 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
              <div>
                <h3 className="text-sm font-bold text-text-dark mb-2">{t.title}</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">{t.desc}</p>
              </div>
              <Link href={t.link} onClick={() => handleSolutionClick(t.title)} className="flex items-center gap-1 text-xs text-primary font-bold hover:underline mt-auto self-start">
                Explore Solution <FaChevronRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}