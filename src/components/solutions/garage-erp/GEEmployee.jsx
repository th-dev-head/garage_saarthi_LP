import React from "react";
import { FaCalendarCheck } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GEEmployee() {
  const staffFeatures = [
    { title: "Attendance Management", desc: "Log daily staff check-in times and track working days without errors." },
    { title: "Leave Management", desc: "Approve or decline leaves and track leave counts for payroll." },
    { title: "Payroll Management", desc: "Set commission or salary schemes linked to work records." },
    { title: "User Role Security", desc: "Grant custom permissions (Owner, Advisor, Mechanic) to protect business logs." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Staff Operations
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Manage Garage Employees Inside{" "}
            <GradientUnderline>the Same ERP Platform</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Most workshop systems only support basic invoice billing. GarageSaarthi integrates internal employee operations to manage your mechanics and advisors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {staffFeatures.map((sf, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex gap-4 hover:shadow-sm transition-all duration-200">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                <FaCalendarCheck className="text-primary w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-text-dark mb-1">{sf.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{sf.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

