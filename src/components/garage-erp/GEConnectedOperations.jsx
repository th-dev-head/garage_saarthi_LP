import React from "react";
import Link from "next/link";
import { FaTools, FaBoxes, FaUsers, FaMoneyBillWave, FaBuilding, FaChartLine, FaArrowRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import Button from "../common/Button";
import GradientUnderline from "../common/GradientUnderline";

export default function GEConnectedOperations() {
  const handleFeatureClick = (featureName) => {
    trackEvent("feature_click", {
      page_path: "/solutions/garage-erp-software",
      page_type: "core_commercial",
      page_topic: "garage_erp_software",
      cta_location: "erp_modules",
      cta_label: "View All GarageSaarthi Features",
      feature_name: featureName,
    });
  };

  const modules = [
    {
      icon: <FaTools className="text-primary w-6 h-6" />,
      title: "Workshop Operations",
      desc: "Manage digital job cards, customer vehicle details, mechanic assignments, and counter sales billing workflows.",
      links: [
        { label: "Digital Job Cards", href: "/solutions/garage-job-card-software" },
        { label: "Counter Sales", href: "/features/counter-sales" },
        { label: "Vehicle Management", href: "/features/vehicles" },
        { label: "Customer Management", href: "/features/customers" }
      ]
    },
    {
      icon: <FaBoxes className="text-primary w-6 h-6" />,
      title: "Inventory & Spare Parts",
      desc: "Get real-time visibility into your spare parts stock. Record stock adjustments, buy logs, and low-stock alerts.",
      links: [
        { label: "Garage Inventory Management", href: "/features/inventory" }
      ]
    },
    {
      icon: <FaUsers className="text-primary w-6 h-6" />,
      title: "Customer & CRM Operations",
      desc: "Log enquiries, set follow-up dates, manage customer history, and run promotional offers and coupons.",
      links: [
        { label: "Garage CRM", href: "/solutions/garage-crm-software" },
        { label: "Offers & Promotions", href: "/features/offers-promotions" }
      ]
    },
    {
      icon: <FaMoneyBillWave className="text-primary w-6 h-6" />,
      title: "Payments & Finance",
      desc: "Generate professional GST bills, track customer payments, set customized invoice series, and grant CA access.",
      links: [
        { label: "Payment Management", href: "/features/payments" },
        { label: "Garage Finance Management", href: "/features/finance" },
        { label: "Loan Management", href: "/features/loans" },
        { label: "CA Access", href: "/features/ca-access" }
      ]
    },
    {
      icon: <FaBuilding className="text-primary w-6 h-6" />,
      title: "Employee Operations",
      desc: "Track employee daily clock-in/out attendance, approve leaves, manage user roles, and run payroll.",
      links: [
        { label: "Employee Attendance", href: "/features/attendance" },
        { label: "Leave Management", href: "/features/leave-management" },
        { label: "Garage Payroll Management", href: "/features/payroll" },
        { label: "User Management", href: "/features/user-management" }
      ]
    },
    {
      icon: <FaChartLine className="text-primary w-6 h-6" />,
      title: "Reports & Business Visibility",
      desc: "Access aggregated garage reports, daily metrics logs, mechanic performance sheets, and branch operations.",
      links: [
        { label: "Garage Reports", href: "/features/reports" },
        { label: "Garage Dashboard", href: "/features/dashboard" },
        { label: "Branch Management", href: "/features/branches" }
      ]
    }
  ];

  return (
    <section id="garage-erp-modules" className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Ecosystem Modules
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Connect Your Garage Operations with{" "}
            <GradientUnderline>One ERP System</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi provides an end-to-end garage ERP software package that connects your front-office bookings with back-office inventory and employee workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {modules.map((m, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                  {m.icon}
                </div>
                <h3 className="text-base font-bold text-text-dark">{m.title}</h3>
              </div>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                {m.desc}
              </p>
              <div className="space-y-2.5 border-t border-slate-100 pt-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Connected Features</span>
                {m.links.map((link, lIdx) => (
                  <Link
                    key={lIdx}
                    href={link.href}
                    onClick={() => handleFeatureClick(link.label)}
                    className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-primary font-semibold transition-colors duration-150"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/65" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/features">
            <Button
              variant="hero"
              icon={<FaArrowRight className="w-4 h-4" />}
            >
              View All GarageSaarthi Features
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
