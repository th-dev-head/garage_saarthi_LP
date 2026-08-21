import React from "react";
import { FaListCheck, FaTrafficLight, FaCommentDots, FaWhatsapp } from "react-icons/fa6";
import GradientUnderline from "../../common/GradientUnderline";

const capabilities = [
  {
    icon: <FaListCheck className="w-6 h-6" />,
    title: "100+ Inspection Points",
    desc: "Comprehensive checklists covering exterior, interior, engine, brakes, tyres, and underbody components to ensure no detail is missed.",
  },
  {
    icon: <FaTrafficLight className="w-6 h-6" />,
    title: "Color-Coded Status",
    desc: "Assign clear statuses (Good, Average, Bad) for every inspected part. Generates a visual health map of the vehicle instantly.",
  },
  {
    icon: <FaCommentDots className="w-6 h-6" />,
    title: "Mechanic Remarks & Readings",
    desc: "Record exact measurements (like tyre tread depth) and type specific mechanic notes for transparency.",
  },
  {
    icon: <FaWhatsapp className="w-6 h-6" />,
    title: "Instant WhatsApp Sharing",
    desc: "Send a professional digital health card directly to the customer's phone, boosting repair conversions and trust.",
  },
];

export default function VICoreCapabilities() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4">
            Everything You Need for a <GradientUnderline>Professional Inspection</GradientUnderline>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our DVI software empowers your service advisors to conduct thorough inspections quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-6">
                {cap.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{cap.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
