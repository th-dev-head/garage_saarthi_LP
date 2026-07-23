import React from "react";
import Link from "next/link";
import {
  FaClipboardList, FaChartPie, FaBox, FaUsers, FaWhatsapp,
  FaCar, FaFileInvoiceDollar, FaMoneyBillWave, FaCodeBranch,
  FaBell, FaUserCog, FaHandshake, FaLock, FaMobile, FaArrowRight,
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const features = [
  { icon: <FaClipboardList />, title: "Digital Job Cards", link: "/features/job-card-management" },
  { icon: <FaChartPie />, title: "Real-Time Dashboard", link: "/features/workshop-management-dashboard" },
  { icon: <FaBox />, title: "Inventory Management", link: "/features/inventory" },
  { icon: <FaUsers />, title: "Garage CRM", link: "/features/crm" },
  { icon: <FaWhatsapp />, title: "WhatsApp Billing", link: "/features/billing" },
  { icon: <FaCar />, title: "Vehicle Management", link: "/features/vehicle-management" },
  { icon: <FaFileInvoiceDollar />, title: "GST Billing", link: "/features/billing" },
  { icon: <FaMoneyBillWave />, title: "Counter Sales", link: "/features/counter-sales" },
  { icon: <FaCodeBranch />, title: "Multi-Branch Control", link: "/solutions/multi-branch-garage-software" },
  { icon: <FaBell />, title: "Service Reminders", link: "/features/service-alerts" },
  { icon: <FaUserCog />, title: "Staff Management", link: "/features/staff-management" },
  { icon: <FaHandshake />, title: "Customer Portal", link: "/features/crm" },
  { icon: <FaLock />, title: "CA & Finance Access", link: "/features/finance" },
  { icon: <FaMobile />, title: "Android Mobile App", link: "/download-app" },
];

export default function WMFeatureGrid() {
  return (
    <section id="wm-features" className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4">
            Everything Your Workshop Needs —{" "}
            <GradientUnderline>In One Platform.</GradientUnderline>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            GarageSaarthi workshop management software includes all the tools your auto workshop needs to run efficiently every single day.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
          {features.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 shadow-sm hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors text-base">
                {item.icon}
              </div>
              <span className="text-xs font-semibold text-slate-800 leading-snug">{item.title}</span>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover transition-colors text-sm"
          >
            View All Features <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

