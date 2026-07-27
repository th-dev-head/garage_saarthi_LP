import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import Link from "next/link";
import {
  FaClipboardList, FaUsers, FaCar, FaBoxOpen,
  FaFileInvoiceDollar, FaUserClock, FaPhoneVolume,
  FaBell, FaChartBar, FaArrowRight
} from "react-icons/fa";

const cards = [
  {
    icon: <FaClipboardList />,
    title: "Manage Digital Job Cards",
    desc: "Record vehicle fuel levels, complaints, diagnostics, and assign technicians.",
    link: "/features/job-card-management",
    btnText: "Explore Job Cards"
  },
  {
    icon: <FaUsers />,
    title: "Keep Customer Records Organized",
    desc: "Maintain complete contact details, histories, and communication timelines.",
    link: "/features/customers",
    btnText: "Explore Customer Features"
  },
  {
    icon: <FaCar />,
    title: "Manage Customer Vehicles",
    desc: "Check service history records mapped to vehicle registration numbers.",
    link: "/features/vehicles",
    btnText: "Explore Vehicle Features"
  },
  {
    icon: <FaBoxOpen />,
    title: "Track Workshop Inventory",
    desc: "View spare parts catalog stock counts and part allocations instantly.",
    link: "/features/inventory",
    btnText: "Explore Inventory Features"
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Manage Payments and Finance",
    desc: "Generate professional invoices, input parts usage, and track payments.",
    link: "/features/payments",
    btnText: "Explore Billing Features"
  },
  {
    icon: <FaUserClock />,
    title: "Manage Staff Attendance & Payroll",
    desc: "Log daily login shifts, helper leaves, and technician commissions.",
    link: "/features/attendance",
    btnText: "Explore Staff Features"
  },
  {
    icon: <FaPhoneVolume />,
    title: "Track Leads with Garage CRM",
    desc: "Keep records of prospect inquiries, bookings, and customer opportunities.",
    link: "/features/crm",
    btnText: "Explore CRM Features"
  },
  {
    icon: <FaBell />,
    title: "Stay Updated with Service Alerts",
    desc: "Schedule vehicle service visits and broadcast alerts over WhatsApp.",
    link: "/features/service-reminders",
    btnText: "Explore Alerts Features"
  },
  {
    icon: <FaChartBar />,
    title: "View Workshop Reports",
    desc: "Verify daily sales, payments collected, active jobs, and parts listings.",
    link: "/features/reports",
    btnText: "Explore Reports Features"
  }
];

export default function WACoreCapabilities() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Core Features
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Everything You Need to Manage{" "}
            <GradientUnderline>Your Workshop in One App</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi provides all essential tools designed to help automotive workshops operate digitally.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full min-h-[220px]">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] text-primary flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.desc}</p>
              </div>
              <Link
                href={item.link}
                className="text-xs font-bold text-primary hover:underline flex items-center gap-1.5"
              >
                {item.btnText}
                <FaArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/features"
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
          >
            View All GarageSaarthi Features
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}

