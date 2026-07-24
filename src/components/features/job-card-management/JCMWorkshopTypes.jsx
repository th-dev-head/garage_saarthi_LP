import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function JCMWorkshopTypes() {
  const workshopTypes = [
    { title: "Car Garage Job Cards", link: "/solutions/car-garage-software", desc: "Log multi-brand car specifications, vehicle damage checklists, fuel scales, and engine diagnostics notes." },
    { title: "Bike Workshop Job Cards", link: "/solutions/bike-workshop-software", desc: "Quick mobile check-ins for two-wheelers, tracking bike components, engine numbers, and rapid mechanics updates." },
    { title: "Automobile Repair Workshops", link: "/solutions/automobile-workshop-software", desc: "Track extensive repair order details, mechanic assignments, and counter parts margins." },
    { title: "Mechanics & Repair Teams", link: "/features/user-management", desc: "Set custom roles and logins for staff and mechanics. Allow mechanics to view assigned work sheets without access to billing details." },
    { title: "Truck Workshops", link: "/solutions/truck-workshop-software", desc: "Manage heavy vehicle repair orders, wheel alignment logs, and high-value spares." },
    { title: "EV Workshops", link: "/solutions/ev-garage-management-software", desc: "Track battery serial numbers, warranty details, and electrical diagnostic logs." }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-t border-slate-200/80">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Workshop Profiles
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Job Card Software Built for <GradientUnderline>Automotive Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Our digital job card system adapts to different business types. Pick your workshop style to explore details:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshopTypes.map((type, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-200 hover:border-primary/30">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{type.title}</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  {type.desc}
                </p>
              </div>
              <Link
                href={type.link}
                className="flex items-center gap-1 text-xs text-primary font-bold hover:underline self-start mt-auto"
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
