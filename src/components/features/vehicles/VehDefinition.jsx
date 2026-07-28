import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function VehDefinition() {
  const highlights = [
    { title: "🚗 Vehicle Database Management", desc: "Digital vehicle records & profiles", color: "text-primary" },
    { title: "🔧 Vehicle Repair History Software", desc: "Log engine codes & fault details", color: "text-orange-600" },
    { title: "📅 Vehicle Maintenance Record Software", desc: "Automate calendar & KM targets", color: "text-emerald-600" },
    { title: "📜 Digital Vehicle Service Records", desc: "1-click access to past repairs", color: "text-amber-600" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              What is Workshop Vehicle Management?
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Cloud <GradientUnderline>Garage Vehicle Management Software</GradientUnderline> & System
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>GarageSaarthi Vehicle Management System</strong> is a powerful <strong>software to manage customer vehicles</strong> and <strong>software to track vehicle service history</strong> for garages and auto workshops.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Maintain complete <strong>workshop vehicle records management</strong> and access <strong>digital vehicle service records software</strong> from any device.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
              Core Benefits of Vehicle Records:
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
