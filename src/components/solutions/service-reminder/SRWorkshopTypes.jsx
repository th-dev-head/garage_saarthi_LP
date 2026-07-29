"use client";

import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function SRWorkshopTypes() {
  const handleSolutionClick = (solutionName) => {
    trackEvent("service_solution_click", {
      page_path: "/solutions/service-reminder-software",
      cta_location: "workshop_types",
      cta_label: "Explore Solution",
      solution_name: solutionName
    });
  };

  const types = [
    { title: "Car Garages", desc: "Track customer passenger cars, model logs, next service due milestones, and send car service reminders.", link: "/solutions/car-garage-software" },
    { title: "Bike Workshops", desc: "Manage motorcycle and scooter regular check-ups, scheduled washings, and fast due reminders.", link: "/solutions/bike-workshop-software" },
    { title: "EV Garages", desc: "Keep track of EV battery checks, custom maintenance logs, and electronic service due reminders.", link: "/solutions/ev-garage-management-software" },
    { title: "Truck Workshops", desc: "Coordinate heavy-vehicle preventative check-ups, transport fleets, and maintenance schedules.", link: "/solutions/truck-workshop-software" },
    { title: "Multi-Branch Garages", desc: "Manage customer follow-ups and central service logs across multiple branches from one login.", link: "/solutions/multi-branch-garage-software" },
    { title: "Independent Garages", desc: "Replace physical log registers and diaries with a simple, digital vehicle service reminder app.", link: "/solutions/auto-repair-shop-software" }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Suitability
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Service Reminder Software for Car, Bike and <GradientUnderline>Automotive Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm">
            Whether you operate an independent multi-brand garage or a chain of workshops, GarageSaarthi scales to your needs:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((t, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
              <div>
                <h3 className="text-sm font-bold text-text-dark mb-2">{t.title}</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">{t.desc}</p>
              </div>
              {t.link !== "#" ? (
                <Link href={t.link} onClick={() => handleSolutionClick(t.title)} className="flex items-center gap-1 text-xs text-primary font-bold hover:underline mt-auto self-start">
                  Explore Solution <FaChevronRight className="w-2.5 h-2.5" />
                </Link>
              ) : (
                <span className="text-xs text-slate-400 font-bold self-start mt-auto">Solution Coming Soon</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}