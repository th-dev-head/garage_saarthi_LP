import React from "react";
import { FaUserPlus, FaWhatsapp, FaHistory, FaBullhorn, FaStar, FaChartLine } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function CRMCoreCapabilities() {
  const capabilities = [
    {
      icon: <FaUserPlus className="w-6 h-6 text-primary" />,
      title: "Lead & Inquiry Pipeline Tracking",
      description: "Log incoming phone calls, walk-in inquiries, and website leads. Assign follow-up dates to convert inquiries into booked repairs.",
      badge: "Lead Pipeline"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6 text-emerald-600" />,
      title: "Automated WhatsApp Service Alerts",
      description: "Send automated WhatsApp reminders when vehicle service, oil change, wheel alignment, or insurance renewal is due.",
      badge: "WhatsApp CRM"
    },
    {
      icon: <FaHistory className="w-6 h-6 text-orange-600" />,
      title: "Full Customer & Vehicle History",
      description: "Access complete past service records, replaced spare parts, total money spent, and mechanic notes per customer.",
      badge: "Customer Profile"
    },
    {
      icon: <FaBullhorn className="w-6 h-6 text-amber-600" />,
      title: "Promotional Offers & Marketing",
      description: "Send targeted WhatsApp promotional offers and seasonal discounts to specific customer segments to boost revenue.",
      badge: "Promotions"
    },
    {
      icon: <FaStar className="w-6 h-6 text-purple-600" />,
      title: "Customer Review Collection",
      description: "Collect post-repair feedback and send automated Google Review links to happy customers to build your shop rating.",
      badge: "Review Collector"
    },
    {
      icon: <FaChartLine className="w-6 h-6 text-teal-600" />,
      title: "Customer Retention & Lapsed Analytics",
      description: "Identify inactive customers who haven't visited in 90+ days and re-engage them with automated WhatsApp win-back campaigns.",
      badge: "Retention Engine"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-t border-slate-200/80">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Powerful CRM Features
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Key Capabilities of Garage <GradientUnderline>CRM & Lead Management</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Everything your workshop needs to build customer trust, capture repair leads, and maximize repeat visits.
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
