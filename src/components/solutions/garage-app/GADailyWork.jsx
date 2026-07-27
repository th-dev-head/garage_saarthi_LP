import React from "react";
import Link from "next/link";
import {
  FaClipboardList, FaUsers, FaCar, FaBoxOpen,
  FaFileInvoiceDollar, FaUserClock, FaWallet,
  FaBell, FaChartBar, FaArrowRight
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const workflows = [
  {
    icon: <FaClipboardList />,
    title: "Create and Manage Job Cards",
    desc: "Record customer complaints, scratches, and fuel levels on digital sheets.",
    link: "/features/job-card-management",
    btnText: "Explore Digital Job Cards"
  },
  {
    icon: <FaUsers />,
    title: "Manage Customers",
    desc: "Keep records of names, contact numbers, and complete repair timelines.",
    link: "/features/customers",
    btnText: "Explore Customer Management"
  },
  {
    icon: <FaCar />,
    title: "Manage Customer Vehicles",
    desc: "Track service history records by registration plate numbers easily.",
    link: "/features/vehicles",
    btnText: "Explore Vehicle Tracking"
  },
  {
    icon: <FaBoxOpen />,
    title: "Check and Manage Inventory",
    desc: "Check available spare parts stock and count quantities on the go.",
    link: "/features/inventory",
    btnText: "Explore Inventory Management"
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Manage Payments and Finance",
    desc: "Create simple labor bills, input parts prices, and collect payments.",
    link: "/features/payments",
    btnText: "Explore Billing & Payments"
  },
  {
    icon: <FaUserClock />,
    title: "Track Staff Attendance",
    desc: "Monitor mechanic attendance, login times, and clock-out hours.",
    link: "/features/attendance",
    btnText: "Explore Staff Tracking"
  },
  {
    icon: <FaWallet />,
    title: "Manage Payroll and Leaves",
    desc: "Track helper commissions, monthly base salaries, and leave data.",
    link: "/features/payroll",
    btnText: "Explore Payroll Features"
  },
  {
    icon: <FaBell />,
    title: "Check Service Alerts",
    desc: "View upcoming vehicle service schedules and follow up with reminders.",
    link: "/features/service-alerts",
    btnText: "Explore Service Alerts"
  },
  {
    icon: <FaChartBar />,
    title: "View Garage Reports",
    desc: "Check daily operations, job card progress counts, and invoice sales stats.",
    link: "/features/reports",
    btnText: "Explore Reports & Dashboards"
  }
];

export default function GADailyWork() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Mobile Operations
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Handle Daily Garage Work{" "}
            <GradientUnderline>Directly from Your Mobile</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Every operational module is optimized for mobile views. Hand over control to your technicians on the floor and track everything live.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workflows.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full min-h-[220px]">
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

