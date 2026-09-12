import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const workOrderCards = [
  {
    title: "Garage Work Orders",
    desc: "Create clear work orders for your mechanics. Specify standard services, instructions, assigned mechanics, and repair priorities."
  },
  {
    title: "Team Chat & @Mentions",
    desc: "Internal activity and discussion drawer on every job card. Chat with mechanics, tag colleagues with @, and log status transitions."
  },
  {
    title: "Repair Order Management",
    desc: "Keep customer complaints, diagnostic notes, spare parts issued, and cost estimates structured in a single digital folder."
  },
  {
    title: "Workshop Job Sheets",
    desc: "Ditch physical paper sheets. Switch to a digital system where your service advisors can modify, review, and update job progress."
  }
];

export default function GJCWorkOrders() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Repair Logs & Team Chat
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Organize Garage Work Orders, Chat &amp;{" "}
            <GradientUnderline>Vehicle Repair Jobs</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Keep your workshop floor organized with clear work orders, internal discussion threads, @mentions, and transparent digital job sheets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workOrderCards.map((card, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-text-dark mb-3">{card.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


