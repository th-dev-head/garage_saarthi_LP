import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import Link from "next/link";
import {
  FaCar, FaMotorcycle, FaBolt, FaTruck, FaBus,
  FaPaintBrush, FaRing,
} from "react-icons/fa";

const types = [
  { icon: <FaCar className="w-6 h-6" />, title: "Car Workshops", link: "/solutions/car-garage-software" },
  { icon: <FaMotorcycle className="w-6 h-6" />, title: "Bike Workshops", link: "/solutions/bike-workshop-software" },
  { icon: <FaBolt className="w-6 h-6" />, title: "EV Service Centers", link: "/solutions/ev-garage-management-software" },
  { icon: <FaTruck className="w-6 h-6" />, title: "Truck Workshops", link: "/solutions/truck-workshop-software" },
  { icon: <FaBus className="w-6 h-6" />, title: "Fleet Workshops", link: "/solutions/fleet-workshop-software" },
  { icon: <FaPaintBrush className="w-6 h-6" />, title: "Car Detailing", link: "/solutions/car-detailing-software" },
  { icon: <FaRing className="w-6 h-6" />, title: "Tyre Shops", link: "/solutions/workshop-management-software/" },
];

export default function WMWorkshopTypes() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4">
            Workshop Management Software{" "}
            <GradientUnderline>Built for Every Workshop Type.</GradientUnderline>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            Whether you service cars, bikes, EVs, or trucks — GarageSaarthi has a dedicated solution tailored to your workshop's workflow and business model.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {types.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[130px] group"
            >
              <div className="w-12 h-12 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-slate-900 leading-snug">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

