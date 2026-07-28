import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function CustDefinition() {
  const highlights = [
    { title: "📁 Garage Customer Database", desc: "Centralized client contact cards", color: "text-primary" },
    { title: "🚗 Workshop CRM Software", desc: "Link multiple cars/bikes to one profile", color: "text-orange-600" },
    { title: "📜 Customer History Management", desc: "Access complete service history cards", color: "text-emerald-600" },
    { title: "📲 Customer Follow Up Software", desc: "Contact via WhatsApp in 1s", color: "text-amber-600" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              What is Workshop Customer Management?
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Smarter <GradientUnderline>Garage Customer Management Software</GradientUnderline> & System
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>GarageSaarthi Customer Management Software</strong> is a powerful <strong>garage customer database software</strong>, <strong>workshop customer management software</strong>, and <strong>automotive CRM software</strong> built for auto repair centers.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Maintain complete <strong>customer record management software</strong> files and run automated <strong>garage customer follow up software</strong> on mobile and desktop.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
              Core Benefits of a Customer Database:
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className={`${item.color} font-bold block mb-1`}>{item.title}</span>
                  <span className="text-slate-600">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
