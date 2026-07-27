import React from "react";
import { FaUserPlus, FaHistory, FaWhatsapp, FaCreditCard, FaSearch, FaCommentAlt } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function CustCoreCapabilities() {
  const capabilities = [
    {
      icon: <FaUserPlus className="w-6 h-6 text-primary" />,
      title: "Master Customer Registry",
      description: "Log names, phone numbers, WhatsApp contacts, vehicle specifications, and email IDs into a secure cloud directory.",
      badge: "Registry"
    },
    {
      icon: <FaHistory className="w-6 h-6 text-orange-600" />,
      title: "Comprehensive Service History logs",
      description: "Access diagnostic logs, used spare parts, labour tasks, billing values, and delivery statuses for every customer visit.",
      badge: "Service History"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6 text-emerald-600" />,
      title: "1-Click WhatsApp Integrations",
      description: "Share PDF estimates, invoices, payment confirmations, and vehicle status updates directly to WhatsApp.",
      badge: "WhatsApp integration"
    },
    {
      icon: <FaCreditCard className="w-6 h-6 text-amber-600" />,
      title: "Outstanding Dues Tracking",
      description: "Track credit balances, payment modes (Cash, UPI, Card), advance deposits, and pending dues with auto-reminders.",
      badge: "Accounts Ledger"
    },
    {
      icon: <FaSearch className="w-6 h-6 text-teal-600" />,
      title: "Instant Contact Search Lookup",
      description: "Search customer data instantly using mobile number, name, vehicle type, or license registration plate.",
      badge: "Quick Search"
    },
    {
      icon: <FaCommentAlt className="w-6 h-6 text-purple-600" />,
      title: "Feedback & Review Collection",
      description: "Automate SMS or WhatsApp feedback prompts to collect ratings and direct Google review link requests.",
      badge: "Feedback Loops"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Core Features
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Key Capabilities of Garage <GradientUnderline>Customer Records Software</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Track customer profiles, communications, and credit histories from a unified digital workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
