import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function UMDefinition() {
  const highlights = [
    { title: "🛡️ Access Guard", desc: "Define roles in 1 click", color: "text-primary" },
    { title: "👥 Unlimited Staff", desc: "No profile caps", color: "text-orange-600" },
    { title: "📝 Activity Logs", desc: "Full audit tracking", color: "text-emerald-600" },
    { title: "📍 Wi-Fi Locking", desc: "Restrict logins by IP", color: "text-amber-600" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              Staff Access & Permissions
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
              Control Who Sees What in Your <GradientUnderline>Workshop Management</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>Garage User Management Software</strong> allows you to delegate tasks to your staff members without exposing your business's sensitive financial data.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Define precise roles for mechanics, cashiers, service advisors, and branch managers. Create unique accounts, trace actions back to the user, prevent unauthorized billing edits, and restrict system dashboard views with secure role controls.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              Key Access Security Highlights:
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
