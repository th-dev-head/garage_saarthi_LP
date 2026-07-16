import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function MBScaling() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center space-y-6">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Business Expansion
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
          Add New Garage Branches Without Going <GradientUnderline>Back to Manual Management</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Opening a second or third location shouldn't increase your paperwork. GarageSaarthi acts as a scalable dashboard. When you register a new branch, you can immediately add users, open job cards, and compile sales logs centrally.
        </p>
      </div>
    </section>
  );
}