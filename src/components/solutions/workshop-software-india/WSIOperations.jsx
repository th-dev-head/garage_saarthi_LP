import React from "react";
import Link from "next/link";
import {
  FaClipboardList,
  FaFileInvoiceDollar,
  FaBoxes,
  FaAddressBook,
  FaUserClock,
  FaBell,
  FaBullhorn,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const operationsList = [
  {
    icon: <FaClipboardList />,
    title: "Digital Job Cards",
    desc: "Create work orders on vehicle arrival, recording scratch notes, labor estimates, and assigned mechanics.",
    link: "/features/job-cards",
    anchor: "Explore Job Cards",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "GST Billing & Tax Compliance",
    desc: "Generate GST-compliant invoices with custom numbering rules, HSN/SAC codes, and direct WhatsApp sharing.",
    link: "/features/payments",
    anchor: "Explore GST Billing",
  },
  {
    icon: <FaBoxes />,
    title: "Spare Parts Inventory",
    desc: "Audit spare parts stock levels, dynamic checkouts per job card, low stock warnings, and counter retail sales.",
    link: "/features/inventory",
    anchor: "Explore Inventory",
  },
  {
    icon: <FaAddressBook />,
    title: "Customer & Vehicle Records",
    desc: "Maintain detailed databases linking customer profiles with vehicle registration codes, chassis numbers, and service history.",
    link: "/features/customers",
    anchor: "Explore Customer & Vehicle Records",
  },
  {
    icon: <FaUserClock />,
    title: "Staff Attendance & Payroll",
    desc: "Track mechanic check-in/out, approve leave requests, calculate labor commissions, and compute net salary.",
    link: "/features/payroll",
    anchor: "Explore Staff & Payroll",
  },
  {
    icon: <FaBell />,
    title: "Service Alerts & WhatsApp",
    desc: "Automate periodic service due notifications and promotional reminders sent directly to your customers' WhatsApp.",
    link: "/features/service-alerts",
    anchor: "Explore Service Alerts",
  },
  {
    icon: <FaBullhorn />,
    title: "Garage CRM & Follow-Ups",
    desc: "Track new service lead enquiries, record call notes, and manage repair quotes inside a dedicated CRM.",
    link: "/features/crm",
    anchor: "Explore Garage CRM",
  },
  {
    icon: <FaChartLine />,
    title: "Reports & Analytics",
    desc: "Gain complete business visibility with live sales dashboards, stock valuation, and mechanic performance metrics.",
    link: "/features/reports",
    anchor: "Explore Reports",
  },
];

export default function WSIOperations() {
  return (
    <section id="workshop-software-features" className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Core Operational Features
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Manage Daily Workshop Operations <GradientUnderline>from One System</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi integrates every operational workflow required to run an efficient automotive workshop in India.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {operationsList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-normal">{item.desc}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link href={item.link} className="text-xs font-bold text-primary hover:underline flex items-center gap-2">
                  {item.anchor} <FaArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
          >
            Explore All Features <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
