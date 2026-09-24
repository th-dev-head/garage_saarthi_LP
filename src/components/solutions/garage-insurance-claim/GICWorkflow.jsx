import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import {
  FaCarCrash,
  FaUserTie,
  FaFileAlt,
  FaTools,
  FaCheckDouble,
} from "react-icons/fa";

export default function GICWorkflow() {
  const steps = [
    {
      step: "01",
      icon: FaCarCrash,
      title: "Vehicle Intake & Claim Open",
      description: "Record policy number, claim ID, incident details, and take initial intake photos.",
    },
    {
      step: "02",
      icon: FaUserTie,
      title: "Spot Survey & Estimate Submission",
      description: "Conduct inspection with the surveyor and generate official parts and labor estimate.",
    },
    {
      step: "03",
      icon: FaFileAlt,
      title: "Approval & Split Calculation",
      description: "Receive formal work approval; system divides insurance share vs customer liability.",
    },
    {
      step: "04",
      icon: FaTools,
      title: "Denting, Painting & Supplementary",
      description: "Complete bodywork, apply paint coats, and submit supplementary claims if needed.",
    },
    {
      step: "05",
      icon: FaCheckDouble,
      title: "Re-inspection & Cashless Payout",
      description: "Obtain satisfaction voucher, release vehicle, and record insurance direct deposit.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Seamless Claim Progression
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4 leading-tight">
            How GarageSaarthi Manages <GradientUnderline>Insurance Claims</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            A step-by-step roadmap from the accident scene to bank settlement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-primary flex items-center justify-center font-bold text-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-black text-slate-300">{item.step}</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
