import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaWrench, FaTruckMoving, FaCarCrash, FaMotorcycle } from "react-icons/fa";

export default function VMWorkshopTypes() {
  const workshopTypes = [
    {
      icon: FaWrench,
      title: "Multi-Brand Car Workshops",
      description: "Manage 10+ aftermarket parts and oil suppliers with clear credit terms, purchase invoices, and payment tracking.",
    },
    {
      icon: FaTruckMoving,
      title: "Commercial & Fleet Garages",
      description: "Handle high-volume bulk purchases of truck spares, brake liners, tyres, and lubricants with multi-account ledgers.",
    },
    {
      icon: FaCarCrash,
      title: "Accidental Bodyshop Centers",
      description: "Track OEM bumper, windshield, sheet metal, and paint supplier bills tied directly to insurance claim job cards.",
    },
    {
      icon: FaMotorcycle,
      title: "Two-Wheeler Service Chains",
      description: "Manage local distributor deliveries for engine oils, spark plugs, filters, and fast-moving bike replacement parts.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Built For All Auto Businesses
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4 leading-tight">
            Tailored For Every <GradientUnderline>Workshop Procurement Model</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Whether you purchase ₹50,000 or ₹25,00,000 worth of parts each month, GarageSaarthi keeps supplier accounts reconciled.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workshopTypes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
