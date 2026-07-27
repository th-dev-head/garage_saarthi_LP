import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const alertPoints = [
  {
    title: "Track Scheduled Maintenance due Details",
    desc: "GarageSaarthi calculates future service due dates based on the vehicle's average running or last visit details, organizing your outbound list.",
  },
  {
    title: "Automate WhatsApp Service Alerts",
    desc: "Send polite, automated WhatsApp reminders containing the vehicle number and service due details directly to your customers or drivers, encouraging repeat visits.",
  },
  {
    title: "Send Special Offers and Promotions",
    desc: "Promote seasonal fleet checkups, engine inspections, or bulk package deals to corporate transport clients to bring them back to your garage.",
  },
];

export default function FLServiceAlerts() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual block - Left Column */}
          <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide border-b border-slate-200/60 pb-3 mb-4">
              WhatsApp Alert Simulation
            </h4>
            <div className="bg-slate-50 border border-slate-200/40 rounded-2xl p-4 shadow-xs space-y-2">
              <div className="flex justify-between items-center border-b border-slate-200/40 pb-2">
                <span className="text-[10px] font-bold text-slate-800">To: Apex Transport</span>
                <span className="text-[9px] text-slate-400">Scheduled: 09:30 AM</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed italic">
                "Hello Apex Transport, your bus (HR-55-XX-7890) is due for its periodic service on 25th July. Book your slot today at City Fleet Workshop! - Powered by GarageSaarthi"
              </p>
              <div className="flex justify-end pt-1">
                <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded-full">
                  Ready to Send
                </span>
              </div>
            </div>
          </div>

          {/* Content - Right Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Customer Retention
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Minimize Fleet Downtime with <GradientUnderline>Maintenance Alerts</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Two-wheeler owners require regular oil changes, chain lubes, and checkups. With GarageSaarthi, you can automate these alerts and keep your service bays consistently active.
            </p>

            <div className="space-y-4 pt-2">
              {alertPoints.map((point, idx) => (
                <div key={idx} className="flex gap-3">
                  <FaCheckCircle className="text-primary w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 mb-0.5">{point.title}</h3>
                    <p className="text-[11px] text-slate-500 leading-normal">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/features/service-reminders"
                className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
              >
                Explore Service Alerts <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
