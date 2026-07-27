import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";
import { FaBookOpen, FaWrench, FaTools, FaFileInvoice, FaUsers, FaArrowRight } from "react-icons/fa";

export default function VSHCapabilities() {
  const capabilities = [
    {
      icon: <FaBookOpen className="text-primary w-5 h-5" />,
      title: "Vehicle Service Records",
      desc: "Maintain detailed logs of past general services, invoice values, and visit frequencies under each vehicle's profile.",
      link: "/features/vehicles",
      label: "vehicle logs"
    },
    {
      icon: <FaWrench className="text-primary w-5 h-5" />,
      title: "Vehicle Repair History",
      desc: "Record past repair jobs, mechanic logs, and diagnostic checklists to refer back when a customer returns.",
      link: "/features/job-card-management",
      label: "job card manager"
    },
    {
      icon: <FaTools className="text-primary w-5 h-5" />,
      title: "Vehicle Maintenance History",
      desc: "Track scheduled maintenance checks like oil changes, alignment runs, and periodic replacements.",
      link: "/features/service-reminders",
      label: "service alerts"
    },
    {
      icon: <FaFileInvoice className="text-primary w-5 h-5" />,
      title: "Digital Service Logs",
      desc: "Say goodbye to physical paper registers. Store all job, parts, and invoice entries in a secure cloud database.",
      link: "/features/billing",
      label: "digital billing"
    },
    {
      icon: <FaUsers className="text-primary w-5 h-5" />,
      title: "Customer Vehicle History",
      desc: "View linked profiles showing owner contacts, multiple vehicle entries, and communication trails in one place.",
      link: "/features/customers",
      label: "customer lists"
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Platform Capabilities
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Track Vehicle Service, Repair and <GradientUnderline>Maintenance Records</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm">
            Everything your mechanics and managers need to know about customer vehicle records:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {capabilities.map((c, idx) => (
            <div key={idx} className="bg-white border border-slate-200/50 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:translate-y-[-2px] transition-transform duration-200">
              <div className="space-y-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">{c.icon}</div>
                <h3 className="text-sm font-bold text-text-dark">{c.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
              {c.link && (
                <Link href={c.link} className="text-xs text-primary font-bold hover:underline mt-auto inline-flex items-center gap-1.5">Explore {c.label} <FaArrowRight className="w-3 h-3" /></Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}