import React from "react";
import Link from "next/link";
import { FaRegCalendarCheck } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GWNServiceDue() {
  const alerts = [
    {
      service: "Periodic Oil Service",
      due: "Due in 3 Days",
      customer: "Hardik Patel",
      vehicle: "Maruti Swift (GJ01-CD-5678)",
      lastVisit: "25 Oct 2025",
      dueDate: "25 Jan 2026"
    },
    {
      service: "Wheel Alignment check",
      due: "Due Today",
      customer: "Nitin Shah",
      vehicle: "Honda City (GJ01-EF-9012)",
      lastVisit: "10 Nov 2025",
      dueDate: "22 Jan 2026"
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Column Left */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Due Reminders
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
              Send WhatsApp Service Due Reminders to <GradientUnderline>Garage Customers</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Log periodic vehicle service intervals and upcoming due dates in a unified database. Utilizing a digital <strong className="text-primary capitalize">garage service due reminder software</strong> removes the need to remember dates manually.
            </p>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              Whenever a maintenance date is approaching, the system logs a pending status card. Advisors can review these cards and trigger <strong className="text-primary capitalize">vehicle service reminder whatsapp</strong> notifications, helping you reconnect with clients and increase repeat service bookings.
            </p>

            <div className="pt-4">
              <Link
                href="/features/service-alerts"
                className="rounded-full bg-primary hover:bg-primary-hover text-white px-8 py-3 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer shadow-md"
              >
                Explore Service Alerts
              </Link>
            </div>
          </div>

          {/* Visual Column Right */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-4">
              Service Alerts Queue
            </span>
            <div className="space-y-3 font-sans text-xs">
              
              {alerts.map((alert, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs space-y-2">
                  <div className="flex justify-between items-center text-[10px] text-slate-500 border-b border-slate-200 pb-1.5">
                    <span className="font-bold text-slate-900 flex items-center gap-1">
                      <FaRegCalendarCheck className="text-primary" /> {alert.service}
                    </span>
                    <span>{alert.due}</span>
                  </div>
                  <div className="space-y-1">
                    <p><strong className="text-primary capitalize">Customer:</strong> {alert.customer}</p>
                    <p><strong className="text-primary capitalize">Vehicle:</strong> {alert.vehicle}</p>
                    <p><strong className="text-primary capitalize">Last Visit:</strong> {alert.lastVisit} • Due Date: {alert.dueDate}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
