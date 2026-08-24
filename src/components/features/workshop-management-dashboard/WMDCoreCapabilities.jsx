import React from "react";
import { FaChartLine, FaWrench, FaUsers, FaBoxes, FaBuilding, FaMobileAlt, FaTachometerAlt, FaChartPie, FaUserCog } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function WMDCoreCapabilities() {
  const capabilities = [
    {
      icon: <FaTachometerAlt className="w-6 h-6 text-primary" />,
      title: "Garage & Workshop Management Dashboard",
      description: "Complete garage management dashboard, workshop management dashboard, garage dashboard software, and workshop dashboard software.",
      badge: "Real-Time Dashboard"
    },
    {
      icon: <FaChartLine className="w-6 h-6 text-orange-600" />,
      title: "Garage & Workshop Business Dashboard",
      description: "Garage business dashboard, workshop business dashboard, automotive business dashboard, and automotive workshop dashboard for owners.",
      badge: "Business Analytics"
    },
    {
      icon: <FaWrench className="w-6 h-6 text-emerald-600" />,
      title: "Auto Repair & Shop Dashboard Software",
      description: "Auto repair dashboard, auto repair shop dashboard, and repair shop dashboard software tracking active repair orders.",
      badge: "Repair Tracking"
    },
    {
      icon: <FaUsers className="w-6 h-6 text-amber-600" />,
      title: "Mechanic & Service Center Dashboard",
      description: "Mechanic dashboard software, service center dashboard software, and vehicle service dashboard for staff efficiency.",
      badge: "Staff KPIs"
    },
    {
      icon: <FaChartPie className="w-6 h-6 text-purple-600" />,
      title: "Garage KPI & Performance Dashboard",
      description: "Garage KPI dashboard, workshop KPI dashboard, garage performance dashboard, and workshop analytics dashboard.",
      badge: "KPI Intelligence"
    },
    {
      icon: <FaUserCog className="w-6 h-6 text-teal-600" />,
      title: "Garage Operations & Workshop Dashboard",
      description: "Garage operations dashboard, workshop operations dashboard, dashboard for garage management software, and dashboard for workshop management software.",
      badge: "Operations"
    },
    {
      icon: <FaBuilding className="w-6 h-6 text-indigo-600" />,
      title: "Garage Owner & Workshop Owner Dashboard",
      description: "Dedicated garage owner dashboard and workshop owner dashboard giving full 360-degree control over workshop revenue & stock.",
      badge: "Owner Control"
    },
    {
      icon: <FaBoxes className="w-6 h-6 text-rose-600" />,
      title: "Garage & Workshop Software Dashboard",
      description: "Garage software dashboard and workshop software dashboard with automated low-stock warnings and inventory tracking.",
      badge: "Stock Alerts"
    },
    {
      icon: <FaMobileAlt className="w-6 h-6 text-cyan-600" />,
      title: "Cloud & Mobile Dashboard Mobility",
      description: "Access your garage management dashboard anytime on Web, Tablet, or Android App with instant cloud synchronization.",
      badge: "Cloud Sync"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Core Dashboard Modules
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Key Capabilities of GarageSaarthi <GradientUnderline>Dashboard Software</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Designed specifically for Indian auto repair shops, car service centers, bike workshops, and EV service hubs to streamline daily management.
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
