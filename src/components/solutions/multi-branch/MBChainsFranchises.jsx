import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function MBChainsFranchises() {
  const points = [
    { title: "Garage Chains", desc: "Standardize billing, checkin sheets, and customer records across all your centers." },
    { title: "Workshop Networks", desc: "Check stock availability at sister branches to optimize local parts orders." },
    { title: "Franchise Businesses", desc: "Maintain central control of user logins and check billing summaries by outlet." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Business Models
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Built for Garage Chains, Workshop Networks and <GradientUnderline>Franchise Businesses</GradientUnderline>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {points.map((p, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/50 rounded-3xl p-8">
              <h3 className="text-base font-bold text-text-dark mb-4">{p.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}