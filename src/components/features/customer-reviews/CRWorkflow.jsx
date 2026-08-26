import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const crWorkflowSteps = [
  {
    step: "01",
    title: "Job Card & Invoice Closure",
    desc: "When a service is completed and invoice generated in GarageSaarthi, review trigger is queued."
  },
  {
    step: "02",
    title: "WhatsApp Thank You Note",
    desc: "Customer receives a polite WhatsApp message thanking them for visiting your garage with a feedback link."
  },
  {
    step: "03",
    title: "Smart Rating Selection",
    desc: "Customer selects 1 to 5 stars. Happy clients (4-5 stars) are directed straight to Google Maps."
  },
  {
    step: "04",
    title: "1-Click Google Posting",
    desc: "Pre-opened Google Maps review box allows customers to post 5-star reviews in under 10 seconds."
  },
  {
    step: "05",
    title: "Private Feedback Route",
    desc: "If rating is 1-3 stars, customer form is sent privately to garage owner to resolve grievances."
  }
];

export default function CRWorkflow() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
            Simple Process
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            How Review Collection Works <GradientUnderline>In GarageSaarthi</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            5 automated steps to maximize positive Google reviews and protect your reputation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {crWorkflowSteps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 p-5 rounded-2xl space-y-3 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-2xl font-black text-primary/30 block">{item.step}</span>
                <h3 className="text-xs font-bold text-slate-900 leading-snug">{item.title}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
