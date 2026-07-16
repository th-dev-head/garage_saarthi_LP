import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";


export default function SRWhatsApp() {
  const handleTrialClick = () => {
    trackEvent("whatsapp_reminder_cta_click", {
      page_path: "/solutions/service-reminder-software",
      cta_location: "whatsapp_section",
      cta_label: "Start Sending Service Reminders",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-last lg:order-first">
          <div className="bg-gradient-to-br from-slate-900 to-orange-950 text-white rounded-3xl p-6 shadow-xl border border-slate-800 relative">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white text-sm">GS</div>
              <div>
                <h4 className="text-xs font-bold">GarageSaarthi Alerts</h4>
                <p className="text-[10px] text-slate-400">Official Template</p>
              </div>
            </div>
            {/* Message Body */}
            <div className="bg-slate-800/80 rounded-2xl p-4 text-xs leading-relaxed space-y-2 mb-4 border border-slate-700/50">
              <p>Dear Customer, your vehicle <strong>(MH-12-AB-1234)</strong> service is due on <strong>25th August</strong>.</p>
              <p>Book your service slot at <strong>Sai Auto Care</strong> today for smooth performance.</p>
              <p className="text-[10px] text-slate-400 text-right mt-1">10:30 AM</p>
            </div>
            <div className="bg-white text-slate-800 rounded-xl p-3 text-center text-xs font-bold border border-slate-200">
              Tap to Approve & Send on WhatsApp
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            WhatsApp Integration
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Send <GradientUnderline>WhatsApp Service Reminders</GradientUnderline> to Your Customers
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Reach customers where they are active. GarageSaarthi lets you coordinate and send personalized vehicle service reminder communication through WhatsApp.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Periodic service due reminders",
              "Upcoming vehicle service alerts",
              "Customer service follow-up notes",
              "Vehicle maintenance reminder tasks"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs md:text-sm text-slate-700">
                <FaCheckCircle className="text-emerald-500 w-4 h-4 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs italic">
            *Reminders require workshop confirmation before sending to maintain accurate, authorized customer communication.
          </p>
          <div className="pt-4">
            <Button variant="trial" onClick={handleTrialClick}>
              Start Sending Service Reminders
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}