import React from "react";
import Link from "next/link";
import {
  FaClipboardList,
  FaFileInvoiceDollar,
  FaBoxes,
  FaAddressBook,
  FaUsersCog,
  FaBell,
  FaUserClock,
  FaChartLine,
  FaSitemap,
  FaMobileAlt,
  FaArrowRight,
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const checklistItems = [
  {
    num: "1",
    icon: <FaClipboardList />,
    title: "Digital Job Card Management",
    question: "Can the software create and manage digital job cards?",
    desc: "Digital job cards record vehicle entry details, initial customer complaints, repair estimates, and parts assignment dynamically, replacing oily paper sheets.",
    link: "/features/job-card-management",
    anchor: "Explore Digital Job Cards",
  },
  {
    num: "2",
    icon: <FaFileInvoiceDollar />,
    title: "Billing and GST Support",
    question: "Can the garage create organized invoices and manage GST requirements?",
    desc: "Ensure software supports custom invoice series, GST breakdown calculations, multiple payment methods, and instant WhatsApp bill sharing.",
    link: "/features/payments",
    anchor: "Explore Invoicing & Payments",
  },
  {
    num: "3",
    icon: <FaBoxes />,
    title: "Spare Parts Inventory Management",
    question: "Can the software track workshop stock and spare parts?",
    desc: "Track stock levels, monitor low stock alerts, deduct parts dynamically when checked out on job cards, and manage retail counter sales.",
    link: "/features/inventory",
    anchor: "Explore Inventory Management",
  },
  {
    num: "4",
    icon: <FaAddressBook />,
    title: "Customer and Vehicle Records",
    question: "Can customer and vehicle information be maintained in one system?",
    desc: "Maintain detailed profiles linking customer phone numbers with vehicle registration codes, chassis numbers, and past service history.",
    link: "/features/customers",
    anchor: "Explore Customer & Vehicle Records",
  },
  {
    num: "5",
    icon: <FaUsersCog />,
    title: "CRM and Lead Management",
    question: "Can the garage track leads and customer opportunities?",
    desc: "Distinguish new customer leads from active databases, recording call notes, follow-up dates, and service quotes inside a dedicated CRM.",
    link: "/features/crm",
    anchor: "Explore Garage CRM",
  },
  {
    num: "6",
    icon: <FaBell />,
    title: "Service and WhatsApp Reminders",
    question: "Can the software help the garage follow up when service is due?",
    desc: "Automate service due notifications and promotional reminders sent directly via WhatsApp, keeping your service bays active.",
    link: "/features/service-reminders",
    anchor: "Explore Service Alerts",
  },
  {
    num: "7",
    icon: <FaUserClock />,
    title: "Attendance, Leave and Payroll",
    question: "Can the same software help manage workshop staff?",
    desc: "Log daily mechanic clock-in/out, approve leave requests, calculate commission rates based on completed job cards, and compute net salary.",
    link: "/features/payroll",
    anchor: "Explore Payroll & Staff",
  },
  {
    num: "8",
    icon: <FaChartLine />,
    title: "Finance and Business Reports",
    question: "Can garage owners understand payments, finances and performance?",
    desc: "Track daily sales, cash vs. online collections, income/expense ledgers, loan balances, and grant direct view access to your CA.",
    link: "/features/reports",
    anchor: "Explore Reports & Analytics",
  },
  {
    num: "9",
    icon: <FaSitemap />,
    title: "Multi-Branch Management",
    question: "Can the software scale when the garage opens another branch?",
    desc: "Centralize multi-location management, monitor branch-wise collections, transfer spare parts stock, and configure role-based user access.",
    link: "/solutions/multi-branch-garage-software",
    anchor: "Explore Multi-Branch Software",
  },
  {
    num: "10",
    icon: <FaMobileAlt />,
    title: "Web and Mobile Access",
    question: "Can the garage owner access software without depending on one PC?",
    desc: "Manage operations from laptop web browsers and on-the-go via the Android mobile app. (iOS app coming soon to the Apple App Store).",
    link: "/features/workshop-management-dashboard",
    anchor: "Explore Cloud & Mobile",
  },
];

export default function BGSChecklist() {
  return (
    <section id="garage-software-features" className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Evaluation Criteria
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            10 Features to Compare Before Choosing{" "}
            <GradientUnderline>Garage Management Software</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Before purchasing any software, evaluate how it handles these 10 core operational requirements to ensure it matches your garage's real daily workflow.
          </p>
        </div>

        {/* 10 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {checklistItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                    {item.icon}
                  </div>
                  <span className="text-xs font-extrabold text-slate-300">
                    Feature #{item.num}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs font-semibold text-primary">{item.question}</p>
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
