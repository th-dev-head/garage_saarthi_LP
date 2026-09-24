import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function GTDProductDefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl text-center">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          The Solution
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
          Automated Test Drive Tracking Linked to <GradientUnderline>Job Cards &amp; Mileage</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
          <strong>GarageSaarthi Test Drive Solution</strong> connects your workshop service advisors, mechanics, and vehicle keys into a tamper-proof digital workflow. As soon as a road test is required, pre-drive kilometers, fuel level, and body damage pinpoints are logged in seconds.
        </p>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          Drivers sign on any mobile touchscreen before departure and upon return — automatically computing net distance traveled and permanently stamping the log in the customer's Job Card.
        </p>
      </div>
    </section>
  );
}
