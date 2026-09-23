import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function GGPProductDefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl text-center">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          The Solution
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
          Automated QR Gate Passes Linked to <GradientUnderline>Job Cards &amp; Billing</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
          <strong>GarageSaarthi Gate Pass Solution</strong> connects your workshop cashier desk, service advisors, and security guards into a unified digital perimeter. As soon as a job card is completed and invoice settled, a cryptographic QR code gate pass is issued in 1-click.
        </p>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          Guards scan the QR code with any smartphone camera in 2 seconds — verifying payment clearance, vehicle registration, and releasing the car with an immutable timestamped cloud record.
        </p>
      </div>
    </section>
  );
}
