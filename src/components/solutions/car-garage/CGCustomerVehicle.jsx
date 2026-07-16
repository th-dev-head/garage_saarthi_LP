import React from "react";
import Link from "next/link";
import { FaUser, FaCar, FaHistory, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const features = [
  {
    icon: <FaUser className="w-5 h-5" />,
    title: "Customer Records",
    desc: "Maintain organized profiles for every car owner — name, contact number, vehicle list, payment history, and service notes. No more searching through paper registers or WhatsApp chats for customer details.",
    link: "/features/customers",
    linkLabel: "Explore Customer Records",
  },
  {
    icon: <FaCar className="w-5 h-5" />,
    title: "Vehicle Records",
    desc: "Store complete car details including registration number, make, model, year, and VIN. Link each vehicle to its owner and track all repair and service work against that specific car.",
    link: "/features/vehicles",
    linkLabel: "Explore Vehicle Management",
  },
  {
    icon: <FaHistory className="w-5 h-5" />,
    title: "Service History",
    desc: "View the complete timeline of work performed on any customer vehicle. See past spare parts replaced, complaints logged, and amounts billed — instantly when the car returns to your garage.",
    link: "/features/vehicles",
    linkLabel: "Explore Service History",
  },
];

export default function CGCustomerVehicle() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Customer & Vehicle
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Keep Every Customer and Car Record{" "}
            <GradientUnderline>Organized</GradientUnderline>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Connected customer and vehicle records give your front desk a complete picture of every car that walks into your garage — without searching through paper registers or WhatsApp conversations.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">{item.desc}</p>
              </div>
              <Link
                href={item.link}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors"
              >
                {item.linkLabel} <FaArrowRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

