import React from "react";
import Link from "next/link";
import { FaCar, FaMotorcycle, FaWrench } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GIWorkshopTypes() {
  const workshopTypes = [
    {
      icon: <FaCar className="w-5 h-5" />,
      title: "Car Workshop Inventory Software",
      desc: "Manage massive catalogs for multi-brand passenger cars. Track complex spares like cabin air filters, specific grades of engine oils, brake discs/pads, suspension linkages, and general shop consumables.",
      link: "/solutions/car-garage-software",
      linkText: "Explore Car Garage Software →"
    },
    {
      icon: <FaMotorcycle className="w-5 h-5" />,
      title: "Bike Workshop Inventory Software",
      desc: "Tailored for two-wheeler mechanics. Track high-velocity parts such as spark plugs, drive chains, sprockets, accelerator/brake cables, clutch plates, and common scooter air filter elements.",
      link: "/solutions/bike-workshop-software",
      linkText: "Explore Bike Workshop Software →"
    },
    {
      icon: <FaWrench className="w-5 h-5" />,
      title: "Auto Workshop Inventory Software",
      desc: "Designed for general automobile workshop services, auto detailing centers, and tyre repair businesses. Maintain accurate registers for fast-moving replacement parts and billing transactions.",
      link: "/solutions/workshop-management-software",
      linkText: "Explore Workshop Management Software →"
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Customization
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Inventory Software for Car, Bike and <GradientUnderline>Automotive Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Every auto business is unique. We provide distinct inventory catalogs customized for different repair workshop operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshopTypes.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
              <div className="border-t border-slate-300 pt-4 mt-6">
                <Link href={item.link} className="text-xs font-bold text-primary hover:underline">
                  {item.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

