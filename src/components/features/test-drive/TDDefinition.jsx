import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaShieldAlt, FaTachometerAlt, FaGasPump, FaFileSignature } from "react-icons/fa";

export default function TDDefinition() {
  const highlights = [
    { title: "🚫 Zero Unauthorized Joyrides", desc: "Every kilometer and route is accounted for digitally", color: "text-primary" },
    { title: "📍 2D Body Damage Blueprint", desc: "Interactive pin placement for pre-existing scratches and dents", color: "text-orange-600" },
    { title: "⛽ Anti-Fuel Theft Gauge", desc: "5-stage fuel monitor eliminates customer fuel drop complaints", color: "text-emerald-600" },
    { title: "✍️ Touchscreen Digital Signatures", desc: "Tamper-proof driver sign-off at departure & vehicle return", color: "text-amber-600" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              Workshop Road Test Governance
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
              What is Digital <GradientUnderline>Workshop Test Drive Management?</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>GarageSaarthi Test Drive Management</strong> is a digital protocol that allows auto repair shops and service centers to authorize, monitor, and document every road test conducted by mechanics or customers.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              When a vehicle leaves the workshop for a diagnostic or post-repair road test, the supervisor logs the starting odometer, fuel level, pre-existing scratches on an interactive 2D body diagram, and captures the driver’s digital signature. Upon return, the net distance driven is calculated automatically and permanently attached to the Job Card.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              Why Auto Workshops Need Digital Test Drive Tracking:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs hover:border-primary/40 transition-colors">
                  <span className={`${item.color} font-bold block mb-1 text-sm`}>{item.title}</span>
                  <span className="text-slate-600 leading-snug block">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
