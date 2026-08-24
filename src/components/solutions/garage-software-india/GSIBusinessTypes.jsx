import React from "react";
import Link from "next/link";
import { FaCar, FaMotorcycle, FaBolt, FaTruckMoving, FaBus, FaMagic, FaBuilding, FaWrench, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const businessTypes = [
  {
    icon: <FaCar />,
    title: "Car Garages",
    desc: "Manage 4-wheeler repair job sheets, vehicle history logs, spare parts, and customer service alerts.",
    link: "/solutions/car-garage-software/",
  },
  {
    icon: <FaMotorcycle />,
    title: "Bike Workshops",
    desc: "Track high daily two-wheeler repair volume, bike records, fast counter sales, and mechanic commissions.",
    link: "/solutions/bike-workshop-software/",
  },
  {
    icon: <FaBolt />,
    title: "EV Garages",
    desc: "Maintain EV vehicle records, customer profiles, component repair job sheets, and workshop teams.",
    link: "/solutions/ev-garage-management-software/",
  },
  {
    icon: <FaTruckMoving />,
    title: "Truck Workshops",
    desc: "Coordinate heavy commercial vehicle overhaul jobs, bulk lubricant stock, chassis details, and fleet billing.",
    link: "/solutions/truck-workshop-software/",
  },
  {
    icon: <FaBus />,
    title: "Fleet Workshops",
    desc: "Manage in-house transport vehicle checkups, preventative maintenance, parts allocation, and service logs.",
    link: "/solutions/fleet-workshop-software/",
  },
  {
    icon: <FaMagic />,
    title: "Car Detailing Studios",
    desc: "Schedule ceramic coating, PPF, washing jobs, customer lead quotes, and package billing easily.",
    link: "/solutions/car-detailing-software/",
  },
  {
    icon: <FaBuilding />,
    title: "Multi-Branch Garages",
    desc: "Centralize multi-location workshop management, inter-branch stock transfers, and branch-wise reporting.",
    link: "/solutions/multi-branch-garage-software/",
  },
  {
    icon: <FaWrench />,
    title: "Independent Garages",
    desc: "Simple, affordable software configuration for single-bay or independent workshop owners in India.",
    link: "/solutions/car-garage-software/",
  },
];

export default function GSIBusinessTypes() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Indian Business Types
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Workshop Software for Different Automotive <GradientUnderline>Businesses in India</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi provides specialized features designed specifically for the unique operational requirements of different Indian workshop segments.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {businessTypes.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                  {card.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900">{card.title}</h3>
                <p className="text-xs text-slate-500 leading-normal">{card.desc}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60">
                <Link href={card.link} className="text-xs font-bold text-primary hover:underline flex items-center gap-2">
                  Explore Solution <FaArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/features/"
            className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
          >
            Find Software for Your Workshop <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
