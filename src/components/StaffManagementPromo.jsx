import React from "react";
import Link from "next/link";
import { FaUserCheck, FaCalendarTimes, FaMoneyBillWave, FaShieldAlt, FaArrowRight } from "react-icons/fa";

export default function StaffManagementPromo() {
  const staffFeatures = [
    { icon: <FaUserCheck className="w-5 h-5" />, label: "Attendance Tracking", desc: "Clock check-in and check-out times.", link: "/features/attendance/" },
    { icon: <FaCalendarTimes className="w-5 h-5" />, label: "Leave Management", desc: "Log employee leaves and track balances.", link: "/features/leave-management/" },
    { icon: <FaMoneyBillWave className="w-5 h-5" />, label: "Payroll Management", desc: "Automate salary calculation base on attendance.", link: "/features/payroll/" },
    { icon: <FaShieldAlt className="w-5 h-5" />, label: "User Management", desc: "Assign specific roles and restrict system access.", link: "/features/user-management/" }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4">
            Manage Your Garage Team, <span className="relative inline-block">Attendance and Payroll.<span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]"></span></span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Bring staff and workshop operations under the same platform. Keep team management simple and clear.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {staffFeatures.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm hover:border-primary/30 transition-colors flex flex-col justify-between"
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
                className="text-sm font-bold text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-1"
              >
                Explore {item.label} <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
