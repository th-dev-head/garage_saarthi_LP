import React from "react";
import { FaUserPlus, FaHistory, FaWhatsapp, FaCreditCard, FaSearch, FaCommentAlt, FaDatabase, FaShieldAlt, FaMobileAlt } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function CustCoreCapabilities() {
  const capabilities = [
    {
      icon: <FaUserPlus className="w-6 h-6 text-primary" />,
      title: "Garage Customer Management Software",
      description: "Complete customer management software, garage customer management software, and workshop customer management software.",
      badge: "Registry"
    },
    {
      icon: <FaHistory className="w-6 h-6 text-orange-600" />,
      title: "Garage CRM & Workshop CRM Software",
      description: "Auto repair customer management software, automobile customer management software, garage CRM software, and workshop CRM software.",
      badge: "CRM System"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6 text-emerald-600" />,
      title: "Customer Follow Up & WhatsApp Logs",
      description: "Automated customer follow up software, garage customer follow up software, and workshop customer follow up software via WhatsApp.",
      badge: "Follow Ups"
    },
    {
      icon: <FaDatabase className="w-6 h-6 text-indigo-600" />,
      title: "Customer Database & Records Software",
      description: "Cloud customer database software, garage customer database software, and workshop customer database software for auto repair centers.",
      badge: "Database"
    },
    {
      icon: <FaSearch className="w-6 h-6 text-teal-600" />,
      title: "Customer Tracking & Contact Lookup",
      description: "Garage customer tracking software, workshop customer tracking software, and customer contact management software for fast lookups.",
      badge: "Quick Search"
    },
    {
      icon: <FaCreditCard className="w-6 h-6 text-amber-600" />,
      title: "Customer Data & Records Management",
      description: "Customer record management software, customer records software, and customer data management software for payments & credit.",
      badge: "Records"
    },
    {
      icon: <FaShieldAlt className="w-6 h-6 text-rose-600" />,
      title: "Customer Information & Profile System",
      description: "Customer information management software, customer profile management software, and automotive customer management system.",
      badge: "Profiles"
    },
    {
      icon: <FaMobileAlt className="w-6 h-6 text-purple-600" />,
      title: "Customer Management App for Workshops",
      description: "Mobile customer management app, garage customer management app, and workshop customer management app for Android & Web.",
      badge: "Mobile App"
    },
    {
      icon: <FaCommentAlt className="w-6 h-6 text-cyan-600" />,
      title: "Customer History & Relationship System",
      description: "Customer history management software, customer relationship management software, and automotive CRM software.",
      badge: "History"
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
            Key Capabilities of Garage <GradientUnderline>Customer Management Software</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Track customer profiles, communications, service histories, and follow-ups from a unified digital workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
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
