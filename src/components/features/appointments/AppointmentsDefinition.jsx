import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const bookingPillars = [
  {
    title: "📅 Service Slot Booking",
    titleClass: "text-primary font-bold block mb-1",
    desc: "Allocate morning, afternoon, or custom time slots to prevent workshop bay congestion.",
  },
  {
    title: "🚗 Doorstep Pickup & Drop",
    titleClass: "text-amber-600 font-bold block mb-1",
    desc: "Log pickup addresses, generate 1-click Google Maps driver links, and assign drivers.",
  },
  {
    title: "📲 WhatsApp Confirmations",
    titleClass: "text-emerald-600 font-bold block mb-1",
    desc: "Automated booking confirmations and driver dispatch alerts sent directly to customers.",
  },
  {
    title: "⚡ 1-Click Job Card",
    titleClass: "text-cyan-600 font-bold block mb-1",
    desc: "Seamlessly convert arriving appointments into digital job cards with pre-filled details.",
  },
];

export default function AppointmentsDefinition() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
              What is Workshop Appointment & Pickup-Drop Management?
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
              Transform Chaos into Smooth <GradientUnderline>Scheduled Service Operations</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>GarageSaarthi Appointments & Pickup-Drop</strong> provides auto workshops and car garages with a unified booking calendar. Instead of scribbling customer requests on diaries or losing track of WhatsApp chats, schedule time slots and manage doorstep vehicle pickups with driver assignments.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Equip your drivers with direct Google Maps navigation links to customer addresses, track pickup/drop status in real time, and convert booked appointments into active digital job cards in a single click upon vehicle arrival.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bookingPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-primary/30 transition-colors"
              >
                <h3 className={pillar.titleClass}>{pillar.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
