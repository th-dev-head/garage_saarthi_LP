import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaCamera, FaCloudUploadAlt, FaListUl, FaWhatsapp, FaFolderOpen } from "react-icons/fa";

export default function MGWorkflow() {
  const steps = [
    {
      num: "01",
      icon: <FaCamera className="w-5 h-5 text-primary" />,
      title: "Snap Damage or Dents",
      desc: "Use your smartphone or tablet to take photos of vehicle damage, scratches, or wear during check-in."
    },
    {
      num: "02",
      icon: <FaCloudUploadAlt className="w-5 h-5 text-orange-600" />,
      title: "Direct Mobile Upload",
      desc: "Upload images instantly to the digital job card directly from the mobile browser or Android app."
    },
    {
      num: "03",
      icon: <FaListUl className="w-5 h-5 text-emerald-600" />,
      title: "Attach to Repair Line Items",
      desc: "Link photos to specific parts or labor estimates so the client understands exactly what needs fixing."
    },
    {
      num: "04",
      icon: <FaWhatsapp className="w-5 h-5 text-amber-600" />,
      title: "WhatsApp Share Link",
      desc: "Share itemized estimates with photo proof links on WhatsApp for transparent and rapid approvals."
    },
    {
      num: "05",
      icon: <FaFolderOpen className="w-5 h-5 text-purple-600" />,
      title: "Access Archive History",
      desc: "All photos are saved permanently in the vehicle's historical service catalog for future reference."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            5-Step Media Workflow
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            How GarageSaarthi Manages <GradientUnderline>Workshop Media Galleries</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate scratch disputes, build customer trust, and speed up work approvals in 5 simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between relative hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300">{step.num}</span>
                  <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
