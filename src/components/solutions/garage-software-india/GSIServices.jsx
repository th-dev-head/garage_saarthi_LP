import React from "react";
import Link from "next/link";
import {
  FaClipboardList,
  FaFileInvoiceDollar,
  FaBoxes,
  FaAddressBook,
  FaUserClock,
  FaWallet,
  FaBullhorn,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const modules = [
  {
    icon: <FaClipboardList />,
    title: "Digital Job Cards",
    desc: "Generate digital job sheets recording vehicle entry, pre-repair walkaround notes, customer complaints, and labor rates.",
    link: "/features/job-cards",
    anchor: "Explore Digital Job Cards",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "GST Billing & Invoices",
    desc: "Create GST-compliant bills with custom invoice series, multiple payment terms, and direct WhatsApp invoice sharing.",
    link: "/features/payments",
    anchor: "Explore GST Billing",
  },
  {
    icon: <FaBoxes />,
    title: "Spare Parts Inventory",
    desc: "Audit spare parts stock levels, dynamic checkouts per job card, low stock warnings, and retail counter sales.",
    link: "/features/inventory",
    anchor: "Explore Inventory",
  },
  {
    icon: <FaAddressBook />,
    title: "Customers & Vehicles",
    desc: "Maintain detailed databases linking customer contact details with vehicle registration, model, and service logs.",
    link: "/features/customers",
    anchor: "Explore Customer Records",
  },
  {
    icon: <FaUserClock />,
    title: "Mechanics & Staff Payroll",
    desc: "Track mechanic attendance, approve leave requests, calculate job commissions, and compute net salary.",
    link: "/features/payroll",
    anchor: "Explore Staff & Payroll",
  },
  {
    icon: <FaWallet />,
    title: "Payments & CA Access",
    desc: "Monitor cash/online collections, expense ledgers, loan accounts, and invite your CA to export view-only GST data.",
    link: "/features/ca-access",
    anchor: "Explore CA Access",
  },
  {
    icon: <FaBullhorn />,
    title: "Garage CRM & Follow-Ups",
    desc: "Organize service lead enquiries, track quotations, and follow up with new prospects before they book elsewhere.",
    link: "/features/crm",
    anchor: "Explore Garage CRM",
  },
  {
    icon: <FaChartLine />,
    title: "Reports & Dashboard",
    desc: "Gain complete business visibility with live sales dashboards, stock valuation, and mechanic performance metrics.",
    link: "/features/reports",
    anchor: "Explore Business Reports",
  },
];

export default function GSIServices() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Complete Workshop Coverage
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Manage Daily Workshop Operations <GradientUnderline>from One Software</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            From vehicle arrival to final GST invoice payment and service due alerts, manage your entire workshop business seamlessly.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {modules.map((item, idx) => (
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
            Explore All GarageSaarthi Features <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
