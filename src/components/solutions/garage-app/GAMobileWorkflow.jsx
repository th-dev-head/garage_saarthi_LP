import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function GAMobileWorkflow() {
  const workflowSteps = [
    {
      title: "Job Card View",
      header: "Job Card #ARS-2098",
      status: "In Progress",
      statusColor: "text-orange-600",
      fields: [
        { label: "Customer", value: "Rajesh Patel" },
        { label: "Vehicle", value: "Hyundai i20 (GJ05AB1234)" },
        { label: "Complaints", value: "Periodic oil service, squeal sound, general wash" }
      ]
    },
    {
      title: "Customer Records",
      header: "Customer Registry",
      status: "Verified",
      statusColor: "text-green-600",
      fields: [
        { label: "Name", value: "Ankit Verma" },
        { label: "Contact", value: "+91 9999955555" },
        { label: "Total Visited Count", value: "5 Service visits logged" }
      ]
    },
    {
      title: "Service Reminders",
      header: "Alert Queue",
      status: "Alert Due",
      statusColor: "text-red-500",
      fields: [
        { label: "Vehicle ID", value: "Maruti Baleno (GJ09BK0001)" },
        { label: "Alert Date", value: "Scheduled on 25 Jan 2026" },
        { label: "Status", value: "Send WhatsApp reminder" }
      ]
    }
  ];

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
          {workflowSteps.map((step, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 text-center">
                {step.title}
              </h3>
              <div className="bg-white rounded-xl border border-slate-200/80 p-4 space-y-2 text-[10px] text-slate-600 font-sans shadow-xs">
                <div className="flex justify-between font-bold text-slate-900 border-b border-slate-400/50 pb-1.5 mb-2">
                  <span>{step.header}</span>
                  <span className={step.statusColor}>{step.status}</span>
                </div>
                {step.fields.map((f, fIdx) => (
                  <p key={fIdx}>
                    <strong>{f.label}:</strong> {f.value}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

