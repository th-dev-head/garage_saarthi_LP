import React from "react";
import { FaMapMarkerAlt, FaCarSide, FaUserCheck, FaRoute, FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const pickupDropCards = [
  {
    type: "pickup",
    title: "Doorstep Vehicle Pickup",
    badge: "Driver Dispatched",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    customer: "Karan Johar • Creta (GJ-01-AB-4492)",
    timeSlot: "10:00 AM - 11:00 AM",
    driver: "Ramesh Bhai (Driver)",
    driverPhone: "+91 98765 43210",
    address: "Flat 402, Shivalik Heights, SG Highway, Ahmedabad",
    hasMaps: true,
    mapsUrlText: "Google Maps Nav Ready",
    statusSteps: [
      { label: "Booked", done: true },
      { label: "Driver Assigned", done: true },
      { label: "Dispatched", done: true },
      { label: "Picked Up", done: false },
    ],
  },
  {
    type: "drop",
    title: "Doorstep Vehicle Drop & Delivery",
    badge: "Ready for Delivery",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    customer: "Ananya Sharma • Honda City (MH-02-CD-8812)",
    timeSlot: "05:30 PM - 06:30 PM",
    driver: "Mukesh K. (Driver)",
    driverPhone: "+91 98765 11223",
    address: "Office Tower B, Mindspace, Malad West, Mumbai",
    hasMaps: true,
    mapsUrlText: "Google Maps Nav Ready",
    statusSteps: [
      { label: "Service Done", done: true },
      { label: "Quality Check", done: true },
      { label: "Dispatched", done: true },
      { label: "Delivered", done: false },
    ],
  },
];

const pickupDropBenefits = [
  {
    icon: FaRoute,
    title: "1-Click Google Maps Link for Drivers",
    desc: "Drivers tap the address to instantly open turn-by-turn Google Maps navigation to the customer doorstep.",
  },
  {
    icon: FaUserCheck,
    title: "Driver Assignment & Accountability",
    desc: "Assign specific workshop drivers for vehicle collection and delivery with full audit timestamps.",
  },
  {
    icon: FaShieldAlt,
    title: "Real-Time Pickup & Drop Lifecycle",
    desc: "Track status from Scheduled ➔ Dispatched ➔ Picked Up ➔ Serviced ➔ Delivered with zero missing cars.",
  },
];

export default function AppointmentsPickupDrop() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Doorstep Convenience
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Seamless Doorstep <GradientUnderline>Pickup & Delivery</GradientUnderline> Logistics
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Delight busy vehicle owners by offering premium doorstep pickup and drop services. Manage driver routes, customer location links, and live handover statuses from one central dashboard.
          </p>
        </div>

        {/* 2-Column Mockups Grid (Looped) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {pickupDropCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5"
            >
              {/* Card Top */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-xl bg-orange-100 text-primary flex items-center justify-center font-bold text-sm">
                    <FaCarSide className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <p className="text-[10px] text-slate-500 font-medium">{item.customer}</p>
                  </div>
                </div>
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>

              {/* Time Slot & Assigned Driver Details */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-3 rounded-2xl border border-slate-200/80 space-y-1">
                  <span className="text-[10px] text-slate-400 font-bold block uppercase">Time Slot</span>
                  <span className="font-bold text-slate-800 text-xs">{item.timeSlot}</span>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-slate-200/80 space-y-1">
                  <span className="text-[10px] text-slate-400 font-bold block uppercase">Assigned Driver</span>
                  <span className="font-bold text-emerald-700 text-xs truncate block">{item.driver}</span>
                </div>
              </div>

              {/* Address with Google Maps */}
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10.5px] font-bold text-slate-600 flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-red-500" /> Doorstep Address
                  </span>
                  <span className="text-[9.5px] font-bold text-primary bg-orange-50 border border-orange-200 px-2 py-0.5 rounded flex items-center gap-1">
                    <FaRoute className="w-2.5 h-2.5" /> {item.mapsUrlText}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded-xl border border-slate-200/70 font-medium">
                  {item.address}
                </p>
              </div>

              {/* Progress Lifecycle Steps */}
              <div className="pt-2 border-t border-slate-200/70 space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Service Pipeline
                </span>
                <div className="grid grid-cols-4 gap-1.5 text-center">
                  {item.statusSteps.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-1.5 rounded-xl border text-[10px] font-bold flex flex-col items-center gap-0.5 ${
                        step.done
                          ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                          : "bg-white border-slate-200 text-slate-400"
                      }`}
                    >
                      <FaCheckCircle className={`w-3 h-3 ${step.done ? "text-emerald-600" : "text-slate-300"}`} />
                      <span>{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Value Pillars (Looped) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {pickupDropBenefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/90 border border-slate-200/80 rounded-2xl p-6 space-y-2.5 shadow-2xs hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-primary flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{benefit.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
