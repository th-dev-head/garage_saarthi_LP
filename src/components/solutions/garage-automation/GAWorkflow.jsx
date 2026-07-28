import React from "react";
import Link from "next/link";
import { FaFileAlt, FaUser, FaBox, FaReceipt, FaBell, FaUsers, FaUserClock, FaChartLine } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GAWorkflow() {
  const steps = [
    {
      icon: <FaFileAlt />,
      title: "Create Digital Job Cards",
      desc: (
        <>
          Create and assign repair jobs digitally. Refer to features on{" "}
          <Link href="/features/job-card-management" className="text-primary font-bold hover:underline">
            Digital Job Card Management
          </Link>.
        </>
      )
    },
    {
      icon: <FaUser />,
      title: "Customer & Vehicle Records",
      desc: (
        <>
          Organize client profiles with vehicle registers using{" "}
          <Link href="/features/customers" className="text-primary font-bold hover:underline">
            Customer Management
          </Link>{" "}
          and{" "}
          <Link href="/features/vehicles" className="text-primary font-bold hover:underline">
            Vehicle Management
          </Link>{" "}
          databases.
        </>
      )
    },
    {
      icon: <FaBox />,
      title: "Manage Inventory & Spare Parts",
      desc: (
        <>
          Track spare parts catalog and log counter sales. View parameters in{" "}
          <Link href="/features/inventory" className="text-primary font-bold hover:underline">
            Inventory Management
          </Link>.
        </>
      )
    },
    {
      icon: <FaReceipt />,
      title: "Generate GST Bills & Invoices",
      desc: (
        <>
          Create GST-supported billing details and compile estimates instantly under{" "}
          <Link href="/features/billing" className="text-primary font-bold hover:underline">
            Payments Log
          </Link>.
        </>
      )
    },
    {
      icon: <FaBell />,
      title: "Automate Service Reminders",
      desc: (
        <>
          Set up alerts and send periodic reminders via WhatsApp using our{" "}
          <Link href="/features/service-reminders" className="text-primary font-bold hover:underline">
            Service Alerts
          </Link>{" "}
          system.
        </>
      )
    },
    {
      icon: <FaUsers />,
      title: "Manage Leads with CRM",
      desc: (
        <>
          Configure pipeline check points and callback lists using{" "}
          <Link href="/features/crm" className="text-primary font-bold hover:underline">
            Garage CRM
          </Link>{" "}
          options.
        </>
      )
    },
    {
      icon: <FaUserClock />,
      title: "Staff Attendance & Payroll",
      desc: (
        <>
          Log check-in timings and calculate basic mechanic commissions using{" "}
          <Link href="/features/attendance" className="text-primary font-bold hover:underline">
            Attendance
          </Link>,{" "}
          <Link href="/features/leave-management" className="text-primary font-bold hover:underline">
            Leave Logs
          </Link>{" "}
          and{" "}
          <Link href="/features/payroll" className="text-primary font-bold hover:underline">
            Payroll
          </Link>.
        </>
      )
    },
    {
      icon: <FaChartLine />,
      title: "View Garage Reports",
      desc: (
        <>
          Compile business metrics and consolidated branch figures. Check features in{" "}
          <Link href="/features/reports" className="text-primary font-bold hover:underline">
            Garage Reports
          </Link>.
        </>
      )
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center" id="garage-automation-workflow">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Connected Modules
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            How Garage Automation Software Digitizes <GradientUnderline>Workshop Work</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Replace separate diaries, manual billing processes, and registers with connected operational steps.
          </p>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((st, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col hover:shadow-md transition-shadow duration-200">
              <div className="bg-white text-primary w-10 h-10 rounded-xl border border-slate-200/80 flex items-center justify-center text-sm shadow-xs mb-4 flex-shrink-0">
                {st.icon}
              </div>
              <h3 className="text-xs font-bold text-slate-900 mb-2">{st.title}</h3>
              <div className="text-[10px] text-slate-500 leading-relaxed">{st.desc}</div>
            </div>
          ))}
        </div>

        <div className="pt-12 text-center">
          <Link
            href="/features"
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-8 py-3 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            Explore All GarageSaarthi Features
          </Link>
        </div>
      </div>
    </section>
  );
}
