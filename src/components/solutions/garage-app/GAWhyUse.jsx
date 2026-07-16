import React from "react";
import { FaFileSignature, FaUserCircle, FaBook, FaBullhorn } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const cards = [
  { icon: <FaFileSignature />, title: "Digital Job Cards", desc: "Instantly create and allocate job cards to mechanics, eliminating manual registers." },
  { icon: <FaUserCircle />, title: "Staff Efficiency", desc: "Track attendance and job commissions of technicians on their own mobile app." },
  { icon: <FaBook />, title: "Parts Inventory Visibility", desc: "Check if basic parts like oil filters are in stock directly from the repair floor." },
  { icon: <FaBullhorn />, title: "Automated Service Alerts", desc: "Easily schedule future service reminders and broadcast alerts over WhatsApp." }
];

export default function GAWhyUse() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Commercial Benefits
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Why Garage Owners Use a{" "}
            <GradientUnderline>Mobile Garage Management App</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Transitioning from paper diaries to a mobile-based system gives owners complete control over operations, billing, and customer relationships.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {cards.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#EFE9E7] text-primary flex items-center justify-center mb-4 text-lg">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

