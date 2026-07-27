import React from "react";
import { FaRegStickyNote, FaUserCircle } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function CustFeedback() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual Column Left (Customer Notes Visual) */}
          <div className="order-last lg:order-first bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-4">
              Client Profile Notes
            </span>
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-xs font-sans space-y-3">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <FaUserCircle className="text-slate-400 w-5 h-5" />
                <div>
                  <h4 className="font-bold text-slate-900">Ramesh Malaviya</h4>
                  <p className="text-[9px] text-slate-500">Contact: +91 9999955555</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="bg-white p-3 rounded-xl border border-slate-100 space-y-1">
                  <div className="flex justify-between items-center text-[9px] text-slate-400">
                    <span className="font-bold text-slate-700 flex items-center gap-1">
                      <FaRegStickyNote className="w-2.5 h-2.5" /> Relationship Note
                    </span>
                    <span>20 Jan 2026</span>
                  </div>
                  <p className="text-slate-600 text-[10px]">
                    "Prefers calling instead of WhatsApp for booking validation. Satisfied with previous brake pad replacement quality."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column Right */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              Relationship Context
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Stay Closer to Customer Feedback and <GradientUnderline>Relationships</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              While there's no substitute for direct phone conversations, keeping structured records helps your staff track relationship contexts. 
              Use our customer feedback notes system to record key feedback comments directly on the customer's vehicle timeline.
            </p>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              Whenever a client makes an inquiry, check previous notes for comments on service quality or custom requirements. 
              Having this context available helps team members avoid disputes and deliver tailored solutions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
