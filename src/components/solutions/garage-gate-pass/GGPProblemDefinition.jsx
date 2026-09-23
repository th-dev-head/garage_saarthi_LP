import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function GGPProblemDefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl text-center">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Perimeter Security Dilemma
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
          Manual Paper Slips Lead to <GradientUnderline>Unpaid Vehicle Exits &amp; Profit Leaks</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
          Traditional workshops rely on handwritten paper gate slips, carbon copy receipts, or oral confirmations shouted across the yard. This creates massive operational blindspots — customers drive away before payment settlement, security guards let uninspected cars exit, and workshop owners have zero audit trails for vehicle movements.
        </p>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          Without real-time digital gate verification, resolving customer delivery disputes or locating released vehicles becomes nearly impossible.
        </p>
      </div>
    </section>
  );
}
