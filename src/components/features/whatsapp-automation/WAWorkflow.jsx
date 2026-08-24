import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const waWorkflowSteps = [
  {
    step: "01",
    title: "Vehicle Check-In Alert",
    desc: "When a new job card is opened, an automated WhatsApp welcome note with job card ID is sent to the customer."
  },
  {
    step: "02",
    title: "Estimate & Media Approval",
    desc: "Service advisor sends a digital PDF estimate along with damage photos. Customer approves parts/labor in 1 click."
  },
  {
    step: "03",
    title: "Repair Progress Updates",
    desc: "Automated status notification sent when mechanics start work, replace parts, or complete washing."
  },
  {
    step: "04",
    title: "Bill & Payment QR Link",
    desc: "Upon invoice generation, final digital bill with payment link is dispatched directly to WhatsApp."
  },
  {
    step: "05",
    title: "Feedback & Next Due Date",
    desc: "Google review link is shared post-payment, and the next maintenance reminder is automatically scheduled."
  }
];

export default function WAWorkflow() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
            Automated Workflow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            How WhatsApp Automation Works <GradientUnderline>In Your Workshop</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            5 automated messaging touchpoints that transform customer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {waWorkflowSteps.map((item, idx) => (
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
