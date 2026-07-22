import React from "react";
import { FaCheck, FaShare } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GCECommunication() {
  const points = [
    { title: "Service Status Alerts", desc: "Keep vehicle owners updated when job cards transition from 'In Progress' to 'Ready for Delivery'." },
    { title: "One-Click WhatsApp Templates", desc: "Send pre-configured message templates matching billing data without typing them manually on phone keyboards." },
    { title: "Organized Follow-Up Logs", desc: "Track when the customer was last contacted, avoiding multiple calls or overlapping alerts from different mechanics." }
  ];

  const templates = [
    {
      title: "Service Reminder Template",
      text: '"Dear [Name], your vehicle [Vehicle No] is due for its periodic check..."'
    },
    {
      title: "Job Completed / Delivery Template",
      text: '"Hello [Name], work on your vehicle [Vehicle No] is finished. Bill amt: ₹[Amt]..."'
    },
    {
      title: "Special Discount Offer Template",
      text: '"Hi [Name], grab 10% off on wheel alignment & balancing this weekend..."'
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Column Left */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Structured Communication
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
              Keep Garage Customer Communication <GradientUnderline>Consistent</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Maintain professional communication with your clients using <strong className="text-primary capitalize">customer communication software for garage</strong> operators. Avoid mismatched information and build customer trust with standardized WhatsApp update templates.
            </p>

            <div className="space-y-4 pt-2">
              {points.map((pt, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="bg-orange-100 text-primary w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaCheck className="w-2.5 h-2.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{pt.title}</h4>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Column Right */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-4">
              Template Selection Screen
            </span>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs text-xs text-slate-600">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="font-bold text-slate-900">Message Templates</span>
                <span className="text-[10px] text-slate-400">Select Template</span>
              </div>

              {/* Template Items */}
              <div className="space-y-2">
                {templates.map((temp, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 hover:border-primary transition-colors cursor-pointer">
                    <p className="font-bold text-slate-900 text-[10px]">{temp.title}</p>
                    <p className="text-[9px] text-slate-500 mt-1">{temp.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-200">
                <button className="bg-slate-200 text-slate-700 px-3 py-1.5 rounded-full font-bold text-[10px]">
                  Cancel
                </button>
                <button className="bg-primary text-white px-3 py-1.5 rounded-full font-bold text-[10px] flex items-center gap-1">
                  <FaShare className="w-2.5 h-2.5" /> Send Template
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
