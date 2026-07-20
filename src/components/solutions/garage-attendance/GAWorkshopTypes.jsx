import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";
import { FaArrowRight } from "react-icons/fa";

export default function GAWorkshopTypes() {
  const handleSolutionClick = (name, url) => {
    trackEvent("attendance_feature_click", {
      page_path: "/solutions/garage-attendance-software",
      cta_location: "workshop_types_section",
      cta_label: name,
      destination: url
    });
  };

  const types = [
    { title: "Car Garages", desc: "Manage check-ins, leaves, and commissions for multibrand car mechanics and denting technicians.", url: "/solutions/car-garage-software" },
    { title: "Bike Workshops", desc: "Track daily presence, shift check-ins, and weekly helper allowance rosters.", url: "/solutions/bike-workshop-software" },
    { title: "EV Garages", desc: "Manage tech logs, EV training shifts, and specialized supervisor present ratios.", url: "/solutions/ev-garage-software" },
    { title: "Truck Workshops", desc: "Organize check-ins, commercial vehicle mechanics rosters, and night shift details.", url: "/solutions/truck-workshop-software" },
    { title: "Fleet Workshops", desc: "Manage scheduled maintenance shift registers, driver logs, and team check-ins.", url: "/solutions/fleet-workshop-software" },
    { title: "Multi-Branch Garages", desc: "Compare staff presence ratios across locations, audit rosters, and restrict staff logins by branch.", url: "/solutions/multi-branch-garage-software" }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Types
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Attendance Software Built for <GradientUnderline>Garages and Automotive Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Our software integrates daily check-ins with workshop operations. Switch from generic registers to a specialized automotive tracker.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((t, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-text-dark">{t.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{t.desc}</p>
              </div>
              <div className="pt-6">
                <Link href={t.url} onClick={() => handleSolutionClick(t.title, t.url)} className="text-primary text-xs font-bold hover:underline inline-flex items-center gap-1">
                  View {t.title} Solution <FaArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
