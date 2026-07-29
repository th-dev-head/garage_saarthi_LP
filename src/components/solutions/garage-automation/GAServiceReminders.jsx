import React from "react";
import Link from "next/link";
import { FaArrowRight, FaRegBell } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GAServiceReminders() {
  const features = [
    {
      title: "Track Upcoming Vehicle Services",
      desc: "Identify maintenance dates and periodic oil changes connected to individual customer vehicle logs automatically."
    },
    {
      title: "Send WhatsApp Service Reminders",
      desc: "Trigger WhatsApp updates and customer alerts directly from the dashboard list in a single click."
    },
    {
      title: "Keep Customer Follow-Ups Organized",
      desc: "Keep details of every interaction logged under the client's file to monitor conversion opportunities."
    }
  ];

  const triggers = [
    {
      title: "Periodic Oil Service Reminder",
      desc: "Trigger: 10 days before due date",
      type: "WhatsApp Alert"
    },
    {
      title: "Delivery Update Notification",
      desc: "Trigger: Immediately on status update",
      type: "WhatsApp Alert"
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Column Left */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Automated Reminders
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
              Automate Vehicle Service Reminders and <GradientUnderline>Customer Follow-Ups</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Manually checking old registers or invoice dates is a thing of the past. Using a dedicated <strong className="text-primary capitalize">garage automation solution</strong> tracks and flags milestones automatically.
            </p>

            <div className="space-y-4 pt-2 text-xs">
              {features.map((item, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                  <p className="text-slate-600 text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/features/service-reminders"
                className="rounded-full bg-primary hover:bg-primary-hover text-white px-8 py-3 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer shadow-md"
              >
                Explore Service Alerts <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* Visual Column Right */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-4">
              Alerts Configuration
            </span>
            <div className="space-y-4 font-sans text-xs text-slate-600">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <FaRegBell className="text-primary" /> Notification Triggers
                </span>
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[8px] font-bold">Enabled</span>
              </div>

              <div className="space-y-2">
                {triggers.map((trig, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                    <div>
                      <p className="font-bold text-slate-900">{trig.title}</p>
                      <p className="text-[9px] text-slate-500">{trig.desc}</p>
                    </div>
                    <span className="text-[10px] text-slate-400">{trig.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
