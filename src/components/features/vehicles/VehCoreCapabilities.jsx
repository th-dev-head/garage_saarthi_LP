import React from "react";
import { FaCar, FaHistory, FaImage, FaWrench, FaCalendarAlt, FaCloud, FaDatabase, FaShieldAlt, FaSearch } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function VehCoreCapabilities() {
  const capabilities = [
    {
      icon: <FaCar className="w-6 h-6 text-primary" />,
      title: "Workshop Vehicle Management Software",
      description: "Complete vehicle record management software and workshop vehicle management software to log registration plates, chassis numbers, and engine details.",
      badge: "Registry"
    },
    {
      icon: <FaHistory className="w-6 h-6 text-orange-600" />,
      title: "Vehicle Service History Software",
      description: "Search vehicle maintenance history software, vehicle repair history software, and vehicle service records management logs in 2 seconds.",
      badge: "Service History"
    },
    {
      icon: <FaImage className="w-6 h-6 text-emerald-600" />,
      title: "Digital Vehicle Records & Photos",
      description: "Maintain digital vehicle records, digital vehicle service records software, and upload pre-existing damage inspection photos.",
      badge: "Photo Proof"
    },
    {
      icon: <FaWrench className="w-6 h-6 text-amber-600" />,
      title: "Vehicle Tracking & Odometer Logs",
      description: "Vehicle tracking software for workshops and customer vehicle tracking software with Odometer/KM history tracking.",
      badge: "KM Logs"
    },
    {
      icon: <FaCalendarAlt className="w-6 h-6 text-purple-600" />,
      title: "Vehicle Service Management Software",
      description: "Automated software for vehicle maintenance records and software to track vehicle service history target intervals.",
      badge: "Maintenance"
    },
    {
      icon: <FaCloud className="w-6 h-6 text-teal-600" />,
      title: "Cloud Vehicle Management Software",
      description: "Automotive vehicle management software and cloud vehicle management software syncing records across mobile, tablet, and PC.",
      badge: "Cloud Sync"
    },
    {
      icon: <FaDatabase className="w-6 h-6 text-indigo-600" />,
      title: "Vehicle Database Management Software",
      description: "Robust vehicle database management software and vehicle information management software for fast customer vehicle lookups.",
      badge: "Database"
    },
    {
      icon: <FaShieldAlt className="w-6 h-6 text-rose-600" />,
      title: "Vehicle Profile & Details Management",
      description: "Vehicle profile management and vehicle details management software to manage customer vehicles and history records securely.",
      badge: "Profile"
    },
    {
      icon: <FaSearch className="w-6 h-6 text-cyan-600" />,
      title: "Garage & Workshop Vehicle Records",
      description: "Garage software for vehicle records and workshop software for vehicle history for multi-brand garages and detailing studios.",
      badge: "Records"
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
            Key Capabilities of Garage <GradientUnderline>Vehicle Management Software</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Record vehicle profiles, track service records, manage customer vehicle history, and plan maintenance schedules.
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
