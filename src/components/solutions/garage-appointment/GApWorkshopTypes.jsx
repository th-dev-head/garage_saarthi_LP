import React from "react";
import Link from "next/link";
import { FaCar, FaMotorcycle, FaSprayCan, FaTruck, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const workshopProfiles = [
  {
    icon: <FaCar className="w-5 h-5 text-primary" />,
    name: "Car Garages & Service Centers",
    desc: "Offer premium doorstep vehicle pickup and return services to working professionals with live Google Maps links.",
    link: "/solutions/car-garage-software/",
  },
  {
    icon: <FaSprayCan className="w-5 h-5 text-purple-600" />,
    name: "Detailing & Ceramic Studios",
    desc: "Schedule high-ticket ceramic coating, PPF, and deep cleaning packages with fixed time-slot reservations.",
    link: "/solutions/car-detailing-software/",
  },
  {
    icon: <FaMotorcycle className="w-5 h-5 text-emerald-600" />,
    name: "Multi-Brand Bike Workshops",
    desc: "Manage fast-paced two-wheeler service slots and avoid walk-in counter rushes with scheduled bookings.",
    link: "/solutions/bike-workshop-software/",
  },
  {
    icon: <FaTruck className="w-5 h-5 text-amber-600" />,
    name: "Commercial & Fleet Workshops",
    desc: "Schedule preventative maintenance visits and fleet driver check-ins systematically without yard delays.",
    link: "/solutions/fleet-workshop-software/",
  },
];

export default function GApWorkshopTypes() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Industry Fit
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Built for Every <GradientUnderline>Automotive Business Model</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Whether you run a single-bay car service center or a multi-branch multi-brand workshop, GarageSaarthi scales to your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workshopProfiles.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col justify-between hover:border-primary/30 transition-all shadow-2xs"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/70 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.desc}</p>
              </div>
              <Link
                href={item.link}
                className="text-xs font-bold text-primary hover:text-orange-700 inline-flex items-center gap-1 transition-colors"
              >
                <span>Explore Solution</span>
                <FaArrowRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
