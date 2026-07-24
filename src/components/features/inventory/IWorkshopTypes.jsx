import React from "react";
import Link from "next/link";
import { FaArrowRight, FaCar, FaMotorcycle, FaWrench } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function IWorkshopTypes() {
  const workshopTypes = [
    {
      icon: <FaCar className="w-5 h-5 text-primary" />,
      title: "Car Workshop Inventory Software",
      desc: "Manage massive catalogs for multi-brand passenger cars. Track complex spares like cabin air filters, specific grades of engine oils, brake discs/pads, suspension linkages, and general shop consumables.",
      link: "/solutions/car-garage-software",
      linkText: "Explore Car Garage Software"
    },
    {
      icon: <FaMotorcycle className="w-5 h-5 text-orange-600" />,
      title: "Bike Workshop Inventory Software",
      desc: "Tailored for two-wheeler mechanics. Track high-velocity parts such as spark plugs, drive chains, sprockets, accelerator/brake cables, clutch plates, and common scooter air filter elements.",
      link: "/solutions/bike-workshop-software",
      linkText: "Explore Bike Workshop Software"
    },
    {
      icon: <FaWrench className="w-5 h-5 text-emerald-600" />,
      title: "Auto Workshop Inventory Software",
      desc: "Designed for general automobile workshop services, auto detailing centers, and tyre repair businesses. Maintain accurate registers for fast-moving replacement parts and billing transactions.",
      link: "/solutions/workshop-management-software",
      linkText: "Explore Workshop Management Software"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Workshop Customization
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Inventory Software for Car, Bike and <GradientUnderline>Automotive Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Every auto business is unique. We provide distinct inventory catalogs customized for different repair workshop operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshopTypes.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between hover:border-primary/30">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
              <div className="border-t border-slate-100 pt-4 mt-6">
                <Link href={item.link} className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                  {item.linkText} <FaArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
