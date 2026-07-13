import React from "react";
import Link from "next/link";
import { FaUserCheck, FaCalendarTimes, FaMoneyBillWave, FaShieldAlt } from "react-icons/fa";

export default function StaffManagementPromo() {
  const staffFeatures = [
    { icon: <FaUserCheck className="w-5 h-5" />, label: "Attendance Tracking", desc: "Clock check-in and check-out times.", link: "/features/attendance" },
    { icon: <FaCalendarTimes className="w-5 h-5" />, label: "Leave Management", desc: "Log employee leaves and track balances.", link: "/features/leave-management" },
    { icon: <FaMoneyBillWave className="w-5 h-5" />, label: "Payroll Management", desc: "Automate salary calculation base on attendance.", link: "/features/payroll" },
    { icon: <FaShieldAlt className="w-5 h-5" />, label: "User Management", desc: "Assign specific roles and restrict system access.", link: "/features/user-management" }
  ];

  return (
    <section className="py-20 px-4 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Manage Your Garage Team, Attendance and Payroll
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Bring staff and workshop operations under the same platform. Keep team management simple and clear.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {staffFeatures.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm hover:border-orange-200 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">{item.label}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>
              <Link
                href={item.link}
                className="text-xs font-bold text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-1"
              >
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
