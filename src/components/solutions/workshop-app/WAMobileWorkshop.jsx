import React from "react";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import GradientUnderline from "../../common/GradientUnderline";

export default function WAMobileWorkshop() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Visual Column */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm w-full max-w-md mx-auto md:max-w-none md:order-first order-last">
            <span className="text-xs font-bold text-slate-800 mb-4 block text-center">Mobile Active Dashboard</span>
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-3 text-[10px] text-slate-600 font-sans shadow-xs">
              <div className="flex justify-between font-bold text-slate-900 border-b border-slate-400/50 pb-1.5 mb-2">
                <span>Active Work in Progress</span>
                <span className="text-primary font-bold">12 Vehicles</span>
              </div>
              <p><strong>Job Card:</strong> GJ09BK0001 (Maruti Baleno)</p>
              <p><strong>Mechanic:</strong> Ramesh Kumar</p>
              <p><strong>Pending Task:</strong> Front Brake Pad Replacement</p>
            </div>
          </div>

          {/* Info */}
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Mobile Management
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Manage Your Workshop{" "}
              <GradientUnderline>from Your Mobile</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              Track vehicle status, edit diagnostics, check parts stock, assign tasks to technicians, and verify payments while moving around the workshop floor.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <PlayStoreBadge />
              <span className="text-xs font-semibold text-slate-500">iOS app coming soon.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

