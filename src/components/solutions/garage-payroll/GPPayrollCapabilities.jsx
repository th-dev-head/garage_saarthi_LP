"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

const payrollCapabilities = [
  {
    icon: "📄",
    iconBg: "bg-orange-100 text-orange-600",
    title: "Manage Salary Records",
    desc: "Maintain clean profiles containing employee salary structures, overtime parameters, and standard commission settings."
  },
  {
    icon: "⚙️",
    iconBg: "bg-rose-100 text-rose-600",
    title: "Create & Manage Payroll",
    desc: "Create monthly or weekly payroll logs, add salary modifications, and monitor payment statuses easily on our payroll system for garage database."
  },
  {
    icon: "📅",
    iconBg: "bg-emerald-100 text-emerald-600",
    title: "Maintain Payroll History",
    desc: "Access previous payouts sheets and commission logs anytime. Filter payroll registers by employee or specific months."
  },
  {
    icon: "👥",
    iconBg: "bg-blue-100 text-blue-600",
    title: "Manage Workshop Staff",
    descPrefix: "Manage permissions so admins, managers, and mechanics see only relevant info. Explore ",
    linkHref: "/features/user-management",
    linkText: "User Management",
    descSuffix: "."
  }
];

export default function GPPayrollCapabilities() {
  const handleTrialClick = () => {
    trackEvent("payroll_trial_cta_click", {
      page_path: "/solutions/garage-payroll-software",
      cta_location: "payroll_capabilities_section",
      cta_label: "Start Managing Garage Payroll",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handleLinkClick = () => {
    trackEvent("payroll_feature_click", {
      page_path: "/solutions/garage-payroll-software",
      cta_location: "payroll_capabilities_section",
      cta_label: "User Management Dashboard",
      destination: "/features/user-management"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Salary & Wages
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Manage Mechanic and Garage Employee Payroll <GradientUnderline>in One Place</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Take complete control of employee records. GarageSaarthi helps workshops streamline wages calculations, basic mechanic salary software configurations, and staff commissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {payrollCapabilities.map((card, idx) => (
            <div key={idx} className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm space-y-3">
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-lg ${card.iconBg}`}>
                {card.icon}
              </div>
              <h3 className="text-base font-bold text-text-dark">{card.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-normal">
                {card.desc ? card.desc : (
                  <>
                    {card.descPrefix}
                    <Link href={card.linkHref} onClick={handleLinkClick} className="text-primary hover:underline font-semibold">
                      {card.linkText}
                    </Link>
                    {card.descSuffix}
                  </>
                )}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Button variant="trial" onClick={handleTrialClick} icon={<FaArrowRight className="w-3.5 h-3.5" />}>
            Start Managing Garage Payroll
          </Button>
        </div>
      </div>
    </section>
  );
}

