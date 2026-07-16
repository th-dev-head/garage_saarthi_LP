import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function GAMobileWorkflow() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Mobility
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Your Garage Operations,{" "}
            <GradientUnderline>Available Wherever You Work</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Garage owners don't stay glued to a computer desk. Walk around the garage floor, check vehicles with mechanics, and access all operational information directly in your hand.
          </p>
        </div>

        {/* Mock App Screenshots Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 - Job Card Screen */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 text-center">Job Card View</h3>
            <div className="bg-white rounded-xl border border-slate-200/80 p-4 space-y-2 text-[10px] text-slate-600 font-sans shadow-xs">
              <div className="flex justify-between font-bold text-slate-900 border-b pb-1.5 mb-2">
                <span>Job Card #ARS-2098</span>
                <span className="text-orange-600">In Progress</span>
              </div>
              <p><strong>Customer:</strong> Smit Koladiya</p>
              <p><strong>Vehicle:</strong> Hyundai i20 (GJ05AB1234)</p>
              <p><strong>Complaints:</strong> Periodic oil service, squeal sound, general wash</p>
            </div>
          </div>

          {/* Card 2 - Customer View */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 text-center">Customer Records</h3>
            <div className="bg-white rounded-xl border border-slate-200/80 p-4 space-y-2 text-[10px] text-slate-600 font-sans shadow-xs">
              <div className="flex justify-between font-bold text-slate-900 border-b pb-1.5 mb-2">
                <span>Customer Registry</span>
                <span className="text-green-600">Verified</span>
              </div>
              <p><strong>Name:</strong> Ramesh Malaviya</p>
              <p><strong>Contact:</strong> +91 9999955555</p>
              <p><strong>Total Visited Count:</strong> 5 Service visits logged</p>
            </div>
          </div>

          {/* Card 3 - Service Alerts View */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 text-center">Service Reminders</h3>
            <div className="bg-white rounded-xl border border-slate-200/80 p-4 space-y-2 text-[10px] text-slate-600 font-sans shadow-xs">
              <div className="flex justify-between font-bold text-slate-900 border-b pb-1.5 mb-2">
                <span>Alert Queue</span>
                <span className="text-red-500">Alert Due</span>
              </div>
              <p><strong>Vehicle ID:</strong> Maruti Baleno (GJ09BK0001)</p>
              <p><strong>Alert Date:</strong> Scheduled on 25 Jan 2026</p>
              <p><strong>Status:</strong> Send WhatsApp reminder</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

