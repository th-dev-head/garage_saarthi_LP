import React from "react";
import Link from "next/link";
import {
  FaClipboardList,
  FaFileInvoiceDollar,
  FaBoxes,
  FaAddressBook,
  FaCar,
  FaBell,
  FaWallet,
  FaUserClock,
  FaChartBar,
  FaBuilding,
  FaMobileAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const checklist12 = [
  {
    num: "1",
    icon: <FaClipboardList />,
    title: "Digital Job Card Management",
    desc: "Create and track repair jobs digitally on vehicle arrival, recording customer complaints, labor estimates, and assigned mechanics.",
    link: "/features/job-cards",
    anchor: "Explore Job Cards",
  },
  {
    num: "2",
    icon: <FaFileInvoiceDollar />,
    title: "GST Billing & Invoice Management",
    desc: "Generate GST-compliant invoices with custom numbering series, labor rates, spare parts breakdowns, and instant WhatsApp bill sharing.",
    link: "/features/payments",
    anchor: "Explore Billing & GST",
  },
  {
    num: "3",
    icon: <FaBoxes />,
    title: "Spare Parts Inventory Management",
    desc: "Audit workshop stock levels, track parts checkouts on job sheets, receive low-stock alerts, and conduct counter retail sales.",
    link: "/features/inventory",
    anchor: "Explore Inventory",
  },
  {
    num: "4",
    icon: <FaAddressBook />,
    title: "Customer Management & CRM",
    desc: "Maintain organized customer contact profiles, track new lead enquiries, record notes, and build long-term customer relationships.",
    link: "/features/customers",
    anchor: "Explore Customer Records",
  },
  {
    num: "5",
    icon: <FaCar />,
    title: "Vehicle Records & Service History",
    desc: "Link vehicle registration details, chassis numbers, odometer readings, and historical repair logs directly to the customer's profile.",
    link: "/features/vehicles",
    anchor: "Explore Vehicle Records",
  },
  {
    num: "6",
    icon: <FaBell />,
    title: "Service Alerts & Customer Follow-Ups",
    desc: "Schedule upcoming vehicle maintenance due dates and automate WhatsApp service alerts to encourage repeat workshop visits.",
    link: "/features/service-alerts",
    anchor: "Explore Service Alerts",
  },
  {
    num: "7",
    icon: <FaWallet />,
    title: "Payment & Finance Visibility",
    desc: "Monitor cash collections, online UPI payments, outstanding accounts receivables, and loan records in real time.",
    link: "/features/finance",
    anchor: "Explore Finance & Payments",
  },
  {
    num: "8",
    icon: <FaUserClock />,
    title: "Staff Attendance & Payroll",
    desc: "Log daily mechanic check-in times, manage leave requests, calculate job commissions, and compute monthly payroll.",
    link: "/features/payroll",
    anchor: "Explore Staff & Payroll",
  },
  {
    num: "9",
    icon: <FaChartBar />,
    title: "Workshop Reports & Analytics",
    desc: "Understand operational performance through clear dashboards, daily sales reports, stock valuation, and CA export tools.",
    link: "/features/reports",
    anchor: "Explore Reports",
  },
  {
    num: "10",
    icon: <FaBuilding />,
    title: "Multi-Branch Management",
    desc: "Scale multi-location workshop networks with centralized control, inter-branch stock transfers, and branch-wise reporting.",
    link: "/solutions/multi-branch-garage-software",
    anchor: "Explore Multi-Branch Software",
  },
  {
    num: "11",
    icon: <FaMobileAlt />,
    title: "Web and Mobile Access",
    question: "Can owners access software on multiple devices?",
    desc: "Access cloud dashboards from any laptop browser and manage floor operations via the Android mobile app. (iOS app coming soon).",
    link: "/features/dashboard",
    anchor: "Explore Cloud & Mobile",
  },
  {
    num: "12",
    icon: <FaCheckCircle />,
    title: "Free Trial & Transparent Pricing",
    desc: "Test software using real daily workshop tasks during a 7-day free trial before choosing flexible subscription durations.",
    link: "/pricing",
    anchor: "Explore Pricing & Trial",
  },
];

export default function BWSChecklist() {
  return (
    <section id="workshop-software-features" className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Selection Checklist
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            12 Things to Compare Before Choosing{" "}
            <GradientUnderline>Workshop Management Software</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Use this comprehensive 12-point checklist to evaluate and compare workshop management software options for your business.
          </p>
        </div>

        {/* 12 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {checklist12.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                    {item.icon}
                  </div>
                  <span className="text-xs font-extrabold text-slate-300">#{item.num}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link href={item.link} className="text-xs font-bold text-primary hover:underline flex items-center gap-2">
                  {item.anchor} <FaArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
