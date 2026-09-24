import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function GTDProblemDefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl text-center">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Road Test Liabilities
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
          Unmonitored Road Tests Lead to <GradientUnderline>False Damage Claims &amp; Joyrides</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
          Taking a customer’s vehicle out for a road test without a signed pre-inspection or logged odometer creates massive financial and legal risks. Mechanics can use customer cars for personal chores, fuel levels drop, and car owners blame the garage for bumper dents and paint scratches that were already present.
        </p>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          Without digital evidence and driver verification, resolving customer delivery conflicts or accident claims becomes a costly nightmare.
        </p>
      </div>
    </section>
  );
}
