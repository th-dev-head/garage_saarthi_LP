import React from "react";
import GradientUnderline from "../common/GradientUnderline";
import {
  FaCheck, FaMobile, FaCodeBranch, FaUserShield,
  FaHeadset, FaRupeeSign, FaRocket, FaCloud,
  FaWhatsapp, FaFileInvoiceDollar, FaChartBar, FaLock,
} from "react-icons/fa";

const reasons = [
  { icon: <FaMobile />, title: "Works on Web & Android", desc: "Manage your workshop from office laptop or shop-floor phone." },
  { icon: <FaCodeBranch />, title: "Multi-Branch Ready", desc: "Control all your branches from a single admin dashboard." },
  { icon: <FaUserShield />, title: "Role-Based Access", desc: "Set different permissions for owner, manager, and mechanic roles." },
  { icon: <FaHeadset />, title: "Dedicated Support", desc: "Onboarding support and customer care whenever you need it." },
  { icon: <FaRupeeSign />, title: "Affordable Plans", desc: "Flexible monthly, quarterly and annual plans for every workshop size." },
  { icon: <FaRocket />, title: "Easy Setup", desc: "Go live in under 30 minutes — no technical expertise needed." },
  { icon: <FaCloud />, title: "Cloud-Based & Secure", desc: "Your data is backed up on cloud. Access from anywhere, always." },
  { icon: <FaWhatsapp />, title: "WhatsApp Integration", desc: "Share invoices, job status, and reminders via WhatsApp instantly." },
  { icon: <FaFileInvoiceDollar />, title: "GST-Compliant Billing", desc: "Auto-generate GST invoices and stay audit-ready every month." },
  { icon: <FaChartBar />, title: "Real-Time Reports", desc: "Revenue, pending payments, and staff reports updated live." },
  { icon: <FaCheck />, title: "7-Day Free Trial", desc: "Test every feature with no credit card required for 7 full days." },
  { icon: <FaLock />, title: "CA & Accountant Access", desc: "Give read-only access to your CA for seamless tax filing." },
];

export default function WMWhyUs() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4">
            Why Workshop Owners Choose{" "}
            <GradientUnderline>GarageSaarthi.</GradientUnderline>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            Thousands of auto workshops across India trust GarageSaarthi to run their daily operations smoothly. Here is why.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-sm">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
