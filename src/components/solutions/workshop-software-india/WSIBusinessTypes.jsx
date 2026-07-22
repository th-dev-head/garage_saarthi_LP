import React from "react";
import Link from "next/link";
import { FaCar, FaMotorcycle, FaBolt, FaTruckMoving, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const workshopCategories = [
  {
    icon: <FaCar />,
    title: "Car Workshops",
    desc: "Manage 4-wheeler vehicle inspection walkarounds, spare parts, customer history, and GST invoices for car repair centers.",
    link: "/solutions/car-workshop-software",
    anchor: "Explore Car Workshop Software",
  },
  {
    icon: <FaMotorcycle />,
    title: "Bike Workshops",
    desc: "Handle high two-wheeler daily volume, rapid counter parts checkout, customer contact profiles, and oil change reminders.",
    link: "/solutions/bike-workshop-software",
    anchor: "Explore Bike Workshop Software",
  },
  {
    icon: <FaBolt />,
    title: "EV Workshops",
    desc: "Maintain customer profiles, EV vehicle records, component repair job cards, and mechanic staff without diagnostic claims.",
    link: "/solutions/ev-garage-management-software",
    anchor: "Explore EV Workshop Software",
  },
  {
    icon: <FaTruckMoving />,
    title: "Truck Workshops",
    desc: "Coordinate commercial heavy vehicle overhaul jobs, bulk lubricant stock, chassis details, and transport fleet credit terms.",
    link: "/solutions/truck-workshop-software",
    anchor: "Explore Truck Workshop Software",
  },
];

export default function WSIBusinessTypes() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Vehicle Specific Configurations
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Workshop Software for Car, Bike, EV <GradientUnderline>and Truck Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Different vehicles demand tailored workshop service workflows. GarageSaarthi provides pre-built configurations for every vehicle category.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {workshopCategories.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                  {card.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900">{card.title}</h3>
                <p className="text-xs text-slate-500 leading-normal">{card.desc}</p>
              </div>

              <div className="pt-6 border-t border-slate-200/60 mt-6">
                <Link href={card.link} className="text-xs font-bold text-primary hover:underline flex items-center gap-2">
                  {card.anchor} <FaArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
          >
            Find Software for Your Workshop <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
