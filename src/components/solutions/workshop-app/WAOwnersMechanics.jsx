import React from "react";
import Link from "next/link";
import { FaUserShield, FaUsers, FaWrench, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const workshopRolesList = [
  {
    icon: FaUserShield,
    title: "For Garage Owners",
    desc: "Track consolidated monthly reports, sales revenue figures, available inventory value, staff attendance logins, and branch statistics."
  },
  {
    icon: FaUsers,
    title: "For Workshop Staff",
    desc: "Create customer records, log vehicle fuel levels, make digital estimates, issue billing receipts, and schedule reminders."
  },
  {
    icon: FaWrench,
    title: "For Mechanics",
    desc: "View active task logs assigned to them on the shop floor and update individual job card statuses."
  }
];

export default function WAOwnersMechanics() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Role-Based Access
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Built for Garage Owners{" "}
            <GradientUnderline>and Workshop Teams</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Set custom access controls so your advisors, storekeepers, and mechanics can log update registers without compromising sensitive financial data.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshopRolesList.map((role, idx) => {
            const Icon = role.icon;
            return (
              <div key={idx} className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] text-primary flex items-center justify-center mb-4 text-lg">
                  <Icon />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{role.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {role.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Global CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/features/user-management/"
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
          >
            Explore User Permissions
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}


