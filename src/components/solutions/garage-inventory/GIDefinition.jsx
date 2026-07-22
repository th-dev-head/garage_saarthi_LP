import React from "react";
import Link from "next/link";
import { FaBoxes, FaBook, FaExclamationTriangle, FaFileExcel } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GIDefinition() {
  const painPoints = [
    {
      icon: <FaBook className="w-5 h-5" style={{ color: "#ef4444" }} />,
      title: "Paper Stock Books",
      desc: "Manual registers get grease stains, pages tear, and searching for a part requires flipping through hundreds of lines."
    },
    {
      icon: <FaFileExcel className="w-5 h-5" style={{ color: "#22c55e" }} />,
      title: "Disconnected Excels",
      desc: "Keeping manual spreadsheet logs means inventory numbers never match what advisors add to job cards or invoices."
    },
    {
      icon: <FaExclamationTriangle className="w-5 h-5" style={{ color: "#eab308" }} />,
      title: "Memory Dependence",
      desc: "Forgetting to re-order fast-moving spares leads to delayed vehicle deliveries and unhappy, frustrated customers."
    }
  ];

  return (
    <section id="inventory-features" className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Product Definition
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Manage Workshop Inventory from <GradientUnderline>One Organized System</GradientUnderline>
          </h2>
          <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
            <p>
              What is garage inventory software? It is a digital warehouse assistant built to organize auto repair operations. Instead of writing stock notes on loose pads, a modern **Workshop Inventory Management System** gives your team a clean catalog database.
            </p>
            <p>
              Automotive workshops in India frequently lose revenue due to misplaced parts and undocumented spare sales. By shifting to a dedicated **Automobile Inventory Management Software** like <Link href="/" className="text-primary font-semibold hover:underline">GarageSaarthi garage management software</Link>, you centralize stock transactions from purchases to job card consumption.
            </p>
          </div>
        </div>

        {/* Right Column - Visual List */}
        <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl space-y-6 shadow-sm">
          <h3 className="text-sm font-bold text-text-dark uppercase tracking-wide border-b border-slate-200/60 pb-3 flex items-center gap-2">
            <FaBoxes className="text-primary w-4 h-4" />
            The Challenges of Manual Stock Keeping
          </h3>
          <div className="space-y-4">
            {painPoints.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-xl border border-slate-200/80 flex items-center justify-center shadow-xs">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

