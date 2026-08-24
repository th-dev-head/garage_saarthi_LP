import React from "react";
import Link from "next/link";
import {
  FaUserAlt, FaFileAlt, FaTools, FaWrench,
  FaFileInvoiceDollar, FaCreditCard, FaBell, FaArrowRight
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const steps = [
  { icon: <FaUserAlt />, label: "Customer & Vehicle", href: "/features/job-card-management/" },
  { icon: <FaFileAlt />, label: "Estimate", href: "/features/job-card-management/" },
  { icon: <FaTools />, label: "Job Card", href: "/features/job-card-management/" },
  { icon: <FaWrench />, label: "Repair Progress", href: "/features/job-card-management/" },
  { icon: <FaFileInvoiceDollar />, label: "Invoice", href: "/features/billing/" },
  { icon: <FaCreditCard />, label: "Payment", href: "/features/billing/" },
  { icon: <FaBell />, label: "Service Follow-up", href: "/features/service-reminders/" },
];

const featureCards = [
  {
    title: "Create Professional Estimates",
    desc: "Create transparent digital estimates. Share them with customers for quick approvals before mechanics begin any repair work.",
    link: "/features/job-card-management/",
  },
  {
    title: "Create Digital Job Cards",
    desc: "Replace paper job cards. Log customer details, complaints, and mechanic allocations in under 60 seconds on any device.",
    link: "/features/job-card-management/",
  },
  {
    title: "Manage Parts Requisitions",
    desc: "Allow mechanics to request spare parts directly from the inventory. Track spare parts usage accurately.",
    link: "/features/inventory/",
  },
  {
    title: "Generate GST Invoices",
    desc: "Generate professional, GST-compliant invoices. Print or share directly via a WhatsApp link with a single click.",
    link: "/features/billing/",
  },
  {
    title: "Track Payments & Dues",
    desc: "Log cash, card, UPI, and digital wallet payments. Track pending balances and client credit history in real time.",
    link: "/features/billing/",
  },
];

export default function AWWorkflow() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Automobile Repair Workflow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Manage Automobile Repair Jobs from <GradientUnderline>Estimate to Invoice</GradientUnderline>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            A seamless, step-by-step repair management flow connecting your front desk, inventory room, workshop bay, and billing counter.
          </p>
        </div>

        {/* Visual Map */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 bg-slate-50 border border-slate-200/80 p-6 rounded-2xl">
          {steps.map((item, idx) => (
            <React.Fragment key={idx}>
              <Link
                href={item.href}
                className="flex flex-col items-center gap-2 px-4 py-2 bg-white border border-slate-200/80 rounded-xl shadow-sm text-center min-w-[120px] hover:border-primary/40 hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="text-primary text-base">{item.icon}</div>
                <span className="text-[11px] font-bold text-slate-800">{item.label}</span>
              </Link>
              {idx < steps.length - 1 && (
                <FaArrowRight className="text-slate-400 w-3.5 h-3.5 hidden md:block" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Deep Dive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">{card.desc}</p>
              </div>
              <Link
                href={card.link}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors"
              >
                Learn details <FaArrowRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

