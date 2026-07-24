import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function VehWorkshopTypes() {
  const types = [
    { title: "Car Garages", desc: "Track model records, repair history logs, filter past invoices, and schedule car service records.", link: "/solutions/car-garage-software" },
    { title: "Bike Workshops", desc: "Manage fast check-ins for scooters and bikes, oil change histories, and regular wash records.", link: "/solutions/bike-workshop-software" },
    { title: "EV Garages", desc: "Log battery specifications, EV maintenance check sheets, and past electronic checkups.", link: "/solutions/ev-garage-management-software" },
    { title: "Truck Workshops", desc: "Maintain repair logs for commercial trucks, engine checks, and preventative checklists.", link: "/solutions/truck-workshop-software" },
    { title: "Fleet Workshops", desc: "Access central histories for business fleet operators, transporters, and corporate accounts.", link: "/solutions/fleet-workshop-software" },
    { title: "Multi-Branch Garages", desc: "Centralize diagnostic and billing histories across all workshop locations centrally.", link: "/solutions/multi-branch-garage-software" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Workshop Suitability
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Vehicle Management Software for <GradientUnderline>Diverse Workshop Models</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Choose your workshop style to explore customized vehicle record and tracking features:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((t, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-150 hover:border-primary/30">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{t.title}</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">{t.desc}</p>
              </div>
              <Link
                href={t.link}
                className="flex items-center gap-1 text-xs text-primary font-bold hover:underline mt-auto self-start"
              >
                Explore Solution
                <FaChevronRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
