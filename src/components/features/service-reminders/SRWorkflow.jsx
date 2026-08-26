import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const srWorkflowSteps = [
  {
    step: "01",
    title: "Vehicle Service Delivery",
    desc: "Job card is closed and invoice logged. GarageSaarthi automatically calculates the next service due date based on maintenance intervals."
  },
  {
    step: "02",
    title: "Auto Reminder Trigger",
    desc: "As the due date approaches (e.g., 7 days prior), the system generates automated service due notifications."
  },
  {
    step: "03",
    title: "WhatsApp Dispatch",
    desc: "Personalized WhatsApp reminder messages with booking links and seasonal discounts are sent directly to the customer's phone."
  },
  {
    step: "04",
    title: "Slot Booking",
    desc: "Customer taps the link to select a preferred date and time slot for their vehicle service visit."
  },
  {
    step: "05",
    title: "Job Card Opened",
    desc: "Vehicle arrives at the workshop, intake checklist is completed, and a new digital job card is created instantly."
  }
];

export default function SRWorkflow() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
            How It Works
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            5 Simple Steps to <GradientUnderline>Automated Workshop Follow-Ups</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            From vehicle checkout to the next scheduled service visit — completely hands-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {srWorkflowSteps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 p-5 rounded-2xl space-y-3 shadow-xs flex flex-col justify-between relative"
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
