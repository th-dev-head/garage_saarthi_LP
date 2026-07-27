import React from "react";
import Link from "next/link";
import { FaCogs, FaProjectDiagram, FaBalanceScale } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const evaluationPillars = [
  {
    icon: FaCogs,
    title: "Eliminate Disconnected Manual Work",
    desc: "Replace fragmented notebooks, WhatsApp chats, and paper job cards with one central system that tracks vehicle entry, labor estimates, and parts allocation automatically."
  },
  {
    icon: FaProjectDiagram,
    title: "Connect Bay Floor & Front Office",
    desc: "Synchronize mechanics on the workshop floor with front-office billing clerks, inventory managers, and customer service follow-up staff in real time."
  },
  {
    icon: FaBalanceScale,
    title: "Support Local Indian Operations",
    desc: "Ensure software supports custom GST billing, invoice series, CA export access, WhatsApp alert automations, mechanic labor commissions, and local pricing."
  }
];

export default function BWSAnswer() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Decision Guide
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            What Makes a Workshop Management Software <GradientUnderline>the Right Choice?</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            When searching for <em>what is the best workshop management software</em>, understand that the right software is one that fits your specific daily operations, team size, and business requirements.
          </p>
        </div>

        {/* Evaluation Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {evaluationPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base mb-4">
                  <Icon />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Link callout */}
        <div className="bg-[#EFE9E7]/40 border border-primary/20 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto text-center space-y-2">
          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
            Exploring general workshop automation? Learn more about our comprehensive{" "}
            <Link href="/solutions/workshop-management-software" className="font-bold text-primary hover:underline">
              workshop management software
            </Link>{" "}
            solutions or explore our feature breakdown below.
          </p>
        </div>
      </div>
    </section>
  );
}
