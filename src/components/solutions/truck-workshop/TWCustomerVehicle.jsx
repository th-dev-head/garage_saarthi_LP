import React from "react";
import Link from "next/link";
import { FaTruck, FaFileAlt, FaHistory, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const truckVehicleCards = [
  {
    icon: FaTruck,
    title: "Commercial Vehicle Database",
    desc: "Log load carrying parameters, trailer lengths, chassis codes, and engine specifications for transport trucks, tippers, or commercial trailers.",
    linkHref: "/features/vehicles/",
    linkText: "Explore Vehicle Management"
  },
  {
    icon: FaFileAlt,
    title: "Vehicle Service Logs",
    desc: "Organize details of past engine services, transmission overhauls, or axle work, so your service managers are always well-informed.",
    linkHref: "/solutions/vehicle-service-history-software/",
    linkText: "View Service Logs"
  },
  {
    icon: FaHistory,
    title: "Corporate Fleet History",
    desc: "Track previous job lists and service alerts mapping to corporate transport clients, building lasting B2B operational trust.",
    linkHref: "/features/vehicles/",
    linkText: "Explore Fleet Records"
  }
];

export default function TWCustomerVehicle() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Commercial Vehicles database
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Keep Truck and Commercial <GradientUnderline>Vehicle Records Organized</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Organize complete histories for heavy commercial fleets. Access previous repair records, parts substituted, odometer readings, and invoice summaries in a few clicks.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {truckVehicleCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                    <Icon />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{card.title}</h3>
                  <p className="text-xs text-slate-500 leading-normal">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-100 mt-6">
                  <Link href={card.linkHref} className="text-xs font-bold text-primary hover:underline">
                    {card.linkText}
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

