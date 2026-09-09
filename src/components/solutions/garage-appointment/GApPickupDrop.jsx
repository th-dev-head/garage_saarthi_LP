import React from "react";
import { FaCarSide, FaMapMarkerAlt, FaUserCheck, FaRoute, FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const logisticsFeatures = [
  {
    icon: FaRoute,
    title: "1-Click Google Maps Link for Drivers",
    desc: "Drivers tap the customer address in GarageSaarthi on their phone to immediately open turn-by-turn navigation.",
  },
  {
    icon: FaUserCheck,
    title: "Driver Assignment & Accountability",
    desc: "Allocate dedicated drivers for pickup and delivery runs with time-stamped status transitions.",
  },
  {
    icon: FaShieldAlt,
    title: "End-to-End Status Pipeline",
    desc: "Real-time progression: Booked ➔ Driver Assigned ➔ Dispatched ➔ Picked Up ➔ Service Done ➔ Delivered.",
  },
];

const livePickupCards = [
  {
    title: "Vehicle Doorstep Pickup",
    badge: "Dispatched",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    customer: "Sameer V. • Hyundai Creta (GJ-01-AB-4492)",
    slot: "10:00 AM - 11:00 AM",
    driver: "Ramesh Bhai (+91 98765 43210)",
    address: "Flat 402, Shivalik Heights, SG Highway, Ahmedabad",
    mapsReady: true,
  },
  {
    title: "Doorstep Delivery & Drop",
    badge: "Ready for Delivery",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    customer: "Pooja Mehta • Honda City (MH-02-CD-8812)",
    slot: "05:30 PM - 06:30 PM",
    driver: "Sunil K. (+91 98765 11223)",
    address: "B-12, Green Palms, Andheri West, Mumbai",
    mapsReady: true,
  },
];

export default function GApPickupDrop() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Doorstep Convenience
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Streamline Doorstep <GradientUnderline>Pickup & Delivery Logistics</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Delight busy customers by offering seamless doorstep vehicle pickup and return services. Equip your workshop staff with smart tools to eliminate wrong directions and delivery delays.
          </p>
        </div>

        {/* 2 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {livePickupCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5"
            >
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-xl bg-orange-100 text-primary flex items-center justify-center font-bold text-sm">
                    <FaCarSide className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{card.title}</h3>
                    <p className="text-[10px] text-slate-500 font-medium">{card.customer}</p>
                  </div>
                </div>
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${card.badgeColor}`}>
                  {card.badge}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-3 rounded-2xl border border-slate-200/80 space-y-1">
                  <span className="text-[10px] text-slate-400 font-bold block uppercase">Time Slot</span>
                  <span className="font-bold text-slate-800 text-xs">{card.slot}</span>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-slate-200/80 space-y-1">
                  <span className="text-[10px] text-slate-400 font-bold block uppercase">Driver</span>
                  <span className="font-bold text-emerald-700 text-xs truncate block">{card.driver}</span>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10.5px] font-bold text-slate-600 flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-red-500" /> Doorstep Address
                  </span>
                  <span className="text-[9.5px] font-bold text-primary bg-orange-50 border border-orange-200 px-2 py-0.5 rounded flex items-center gap-1">
                    <FaRoute className="w-2.5 h-2.5" /> Google Maps Ready
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded-xl border border-slate-200/70 font-medium">
                  {card.address}
                </p>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-200/70">
                <span className="flex items-center gap-1 text-emerald-700 font-bold">
                  <FaCheckCircle className="text-emerald-500" /> Real-Time Driver Tracking
                </span>
                <span className="text-primary font-bold">Zero Missing Steps</span>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {logisticsFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/90 border border-slate-200/80 rounded-2xl p-6 space-y-2.5 shadow-2xs hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-primary flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{feat.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
