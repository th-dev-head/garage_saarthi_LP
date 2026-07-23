import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function WMDDefinition() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-cente">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              Workshop Management Dashboard
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              A Single Control Center for Your Entire <GradientUnderline>Garage Operation</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              A <strong>Workshop Management Dashboard</strong> is a cloud-based analytics hub that aggregates live repair orders, daily revenue collections, mechanic efficiency metrics, and inventory stock levels into a single intuitive view.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Instead of sifting through handwritten registers or calling service advisors across bays, workshop owners gain instant 360-degree control over active jobs, payments, and staff productivity from any computer or mobile device.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
              Core Analytics Displayed Live:
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="text-primary font-bold block mb-1">📊 Revenue & Cash</span>
                <span className="text-slate-600">Daily UPI, cash & credit dues</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="text-orange-600 font-bold block mb-1">🛠️ Active Repairs</span>
                <span className="text-slate-600">Live job card stages & delivery</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="text-emerald-600 font-bold block mb-1">👷 Staff KPIs</span>
                <span className="text-slate-600">Mechanic utilization & hours</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="text-amber-600 font-bold block mb-1">📦 Stock Alerts</span>
                <span className="text-slate-600">Low stock reorder warnings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
