import React from "react";
import { FaCamera, FaImages, FaShareAlt, FaCloudUploadAlt } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const capabilities = [
  {
    icon: <FaCamera className="w-6 h-6 text-primary" />,
    title: "Before & After Comparison",
    desc: "Take body shop pictures before denting/painting and after service completion. Show customers the high-quality transformation instantly."
  },
  {
    icon: <FaImages className="w-6 h-6 text-primary" />,
    title: "Diagnostic Documentation",
    desc: "Photograph parts wear-and-tear, leaked shock absorbers, or worn brake pads. Build ironclad visual proof of needed repairs."
  },
  {
    icon: <FaShareAlt className="w-6 h-6 text-primary" />,
    title: "WhatsApp Media Sharing",
    desc: "Share vehicle diagnostic photos and estimates with customers directly on WhatsApp. Accelerate repair approvals by up to 50%."
  },
  {
    icon: <FaCloudUploadAlt className="w-6 h-6 text-primary" />,
    title: "Secure Cloud Storage",
    desc: "Store unlimited vehicle inspection photos securely linked to the job card. Access historical service photos anytime from anywhere."
  }
];

export default function MGCoreCapabilities() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Core Capabilities
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Comprehensive Photographic &amp;{" "}
            <GradientUnderline>Visual Records</GradientUnderline>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((c, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl flex flex-col justify-between h-full min-h-[220px] transition-shadow hover:shadow-md">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center mb-4">
                  {c.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{c.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
