import React from "react";
import Link from "next/link";
import { FaUser, FaMotorcycle, FaHistory, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const historyCards = [
  {
    icon: FaUser,
    title: "Keep Customer Information Organized",
    desc: "Maintain profile files containing customer names, contact numbers, active WhatsApp details, and previous visit dates securely in the cloud.",
    link: "/features/customers",
    linkText: "Explore Customer Management"
  },
  {
    icon: FaMotorcycle,
    title: "Manage Bike and Vehicle Records",
    desc: "Log vehicle registration number, brand, model, chassis numbers, odometer readings, and engine numbers for returning two-wheelers.",
    link: "/features/vehicles",
    linkText: "Explore Vehicle Management"
  },
  {
    icon: FaHistory,
    title: "View Service History",
    desc: "Track previous engine adjustments, parts substituted, labor records, and technician notes, building customer trust with total operational transparency.",
    link: "/solutions/vehicle-service-history-software",
    linkText: "Explore Service History"
  }
];

export default function BWCustomerVehicle() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Customer & Bike Records
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Keep Customer, Bike and <GradientUnderline>Service Records in One Place</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Quickly search customer files and vehicle records on your phone or tablet. Never search through paper folders orRegisters again when a customer asks about their previous service.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {historyCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                    <Icon />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-100 mt-6">
                  <Link href={item.link} className="text-xs font-bold text-primary hover:underline flex items-center gap-2">
                    {item.linkText} <FaArrowRight />
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
