"use client";

import React from "react";
import { useRouter } from "next/navigation";
import GradientUnderline from "./common/GradientUnderline";
import {
  FaCar, FaMotorcycle, FaBolt, FaTruck, FaBus,
  FaPaintBrush, FaRing, FaBatteryFull, FaCodeBranch, FaUserCheck
} from "react-icons/fa";

const solutions = [
  { icon: <FaCar className="w-8 h-8" />, title: "Car Garages", link: "/solutions/car-garage-software/" },
  { icon: <FaMotorcycle className="w-8 h-8" />, title: "Bike Workshops", link: "/solutions/bike-workshop-software/" },
  { icon: <FaBolt className="w-8 h-8" />, title: "EV Garages", link: "/solutions/ev-garage-management-software/" },
  { icon: <FaTruck className="w-8 h-8" />, title: "Truck Workshops", link: "/solutions/truck-workshop-software/" },
  { icon: <FaBus className="w-8 h-8" />, title: "Fleet Workshops", link: "/solutions/fleet-workshop-software/" },
  { icon: <FaPaintBrush className="w-8 h-8" />, title: "Car Detailing", link: "/solutions/car-detailing-software/" },
  { icon: <FaRing className="w-8 h-8" />, title: "Tyre Shops", link: "/solutions/car-detailing-software/" },
  { icon: <FaBatteryFull className="w-8 h-8" />, title: "Battery Shops", link: "/solutions/ev-garage-management-software/" },
  { icon: <FaCodeBranch className="w-8 h-8" />, title: "Multi-Branch Garages", link: "/solutions/multi-branch-garage-software/" },
  { icon: <FaUserCheck className="w-8 h-8" />, title: "Independent Garages", link: "/solutions/best-garage-management-software/" }
];

export default function IndustrialBenefits() {
  const router = useRouter();

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4">
            Garage Software Built for Every Type of <GradientUnderline>Automotive Workshop</GradientUnderline>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose the solution designed specifically for your garage business model.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              onClick={() => router.push(item.link)}
              className="bg-slate-50 p-6 rounded-xl border border-slate-200/60 shadow-sm hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center flex flex-col items-center justify-center min-h-[140px]"
            >
              <div className="w-14 h-14 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary mb-6">
                {item.icon}
              </div>
              <h3 className="text-sm font-medium text-slate-950 leading-tight">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
