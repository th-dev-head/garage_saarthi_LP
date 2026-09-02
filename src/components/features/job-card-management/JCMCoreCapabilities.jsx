import React from "react";
import { FaMobileAlt, FaTools, FaCamera, FaWhatsapp, FaReceipt, FaHistory, FaFileInvoice } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function JCMCoreCapabilities() {
  const capabilities = [
    {
      icon: <FaMobileAlt className="w-6 h-6 text-primary" />,
      title: "Instant Digital Vehicle Intake",
      description: "Log vehicle number, customer details, fuel level, odometer reading, and complaints in under a minute from mobile or desktop.",
      badge: "Fast Intake"
    },
    {
      icon: <FaFileInvoice className="w-6 h-6 text-emerald-600" />,
      title: "Inward Acknowledgement Receipts",
      description: "Generate professional check-in vouchers. Instantly download printable PDF slips and send intake confirmation via WhatsApp.",
      badge: "Customer Proof"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6 text-green-600" />,
      title: "WhatsApp Estimate Sharing",
      description: "Send professional PDF job cards and cost estimates directly to your customer's WhatsApp for instant approval.",
      badge: "WhatsApp Integration"
    },
    {
      icon: <FaCamera className="w-6 h-6 text-orange-600" />,
      title: "Before & After Photo Logging",
      description: "Attach photos of damaged vehicle parts, scratches, and completed repair work directly to the digital job card.",
      badge: "Transparency"
    },
    {
      icon: <FaTools className="w-6 h-6 text-amber-600" />,
      title: "Mechanic & Bay Allocation",
      description: "Assign specific repair tasks to individual mechanics, track labor hours, and monitor job completion speed in real time.",
      badge: "Staff Allocation"
    },
    {
      icon: <FaReceipt className="w-6 h-6 text-purple-600" />,
      title: "1-Click GST Invoice Conversion",
      description: "Convert completed repair job cards into final GST invoices instantly without re-typing parts or labor charges.",
      badge: "Seamless Billing"
    },
    {
      icon: <FaTools className="w-6 h-6 text-cyan-600" />,
      title: "Complaint & Solution Mapping",
      description: "Map each customer-reported symptom to the exact mechanical action or repair done, creating clear transparent job sheets.",
      badge: "Problem Solved"
    },
    {
      icon: <FaHistory className="w-6 h-6 text-rose-600" />,
      title: "Edit History & Audit Trail",
      description: "Maintain a tamper-proof log of every edit, part addition, or price discount made by Admins, Managers, and Mechanics.",
      badge: "Full Audit"
    },
    {
      icon: <FaHistory className="w-6 h-6 text-teal-600" />,
      title: "Complete Vehicle Service History",
      description: "Access past job cards, replaced spare parts, and previous service records anytime by searching vehicle registration number.",
      badge: "History Tracker"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-cente">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Powerful Job Card Features
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Key Capabilities of Digital <GradientUnderline>Job Card Software</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Everything your service advisors and mechanics need to streamline repair order workflows and increase customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
