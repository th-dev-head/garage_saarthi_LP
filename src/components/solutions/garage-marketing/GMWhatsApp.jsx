import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import { FaWhatsapp, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

const whatsappFeatures = [
  "Share promotional offers and service package banners directly on WhatsApp",
  "Send digital job card cost estimates and GST billing receipts automatically",
  "Trigger automated periodic service due alerts based on vehicle history logs",
  "Maintain clear communication records linked to the customer's vehicle profile",
];

export default function GMWhatsApp() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content - Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-wider text-emerald-600 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              WhatsApp Integration
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Connect with Garage Customers <GradientUnderline>Through WhatsApp</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              WhatsApp is the primary communication channel for automobile owners in India. GarageSaarthi integrates supported WhatsApp messaging workflows directly into your daily garage operations.
            </p>

            <div className="space-y-3 pt-2">
              {whatsappFeatures.map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <FaCheckCircle className="text-emerald-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                variant="primary"
                icon={<FaArrowRight className="w-3.5 h-3.5" />}
                onClick={() => window.open(`${FRONTEND_URL}/signup`, "_blank")}
              >
                Start 7-Day Free Trial
              </Button>
            </div>
          </div>

          {/* Right Visual Box */}
          <div className="lg:col-span-5 bg-emerald-900/90 text-white border border-emerald-700 rounded-3xl p-6 md:p-8 shadow-xl space-y-4">
            <div className="flex items-center gap-3 border-b border-emerald-700 pb-3">
              <FaWhatsapp className="text-2xl text-emerald-400" />
              <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wide">
                Direct WhatsApp Workflow
              </h4>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              Send personalized greetings, discount vouchers, job card approval links, and final bill receipts to your clients with one click.
            </p>
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-emerald-700/50 space-y-2">
              <p className="text-[11px] font-bold text-emerald-400">Supported Operational Messaging</p>
              <p className="text-[10px] text-slate-300">
                Uses official template workflows to ensure high delivery compliance and professional customer experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
