import React from "react";
import { FaWrench, FaMobileAlt, FaClock, FaFlag, FaFileInvoiceDollar, FaUserLock } from "react-icons/fa";

export default function WhyGarageSaarthi() {
  const points = [
    { icon: <FaWrench className="w-6 h-6" />, title: "Built for Workshops", desc: "Designed explicitly for automotive garages, bike repair shops, EV stations, and auto spas." },
    { icon: <FaMobileAlt className="w-6 h-6" />, title: "Web & Mobile Access", desc: "Work from a laptop, desktop, or on your Android mobile device seamlessly." },
    { icon: <FaClock className="w-6 h-6" />, title: "Quick Setup & Onboarding", desc: "No complex installations or database configs. master the tool in under 15 minutes." },
    { icon: <FaFlag className="w-6 h-6" />, title: "India-Focused Design", desc: "GST calculations, customized SMS templates, and UPI tracking built for the Indian market." },
    { icon: <FaFileInvoiceDollar className="w-6 h-6" />, title: "All-in-One Operations", desc: "Manage job cards, billing, counter sales, inventory, and mechanic logs inside a single platform." },
    { icon: <FaUserLock className="w-6 h-6" />, title: "7-Day Free Trial", desc: "Try out all operational features risk-free with zero commitment." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4">
            Why Garage Owners <span className="relative inline-block">Choose GarageSaarthi.<span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]"></span></span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover why workshops across India trust us to run their daily garage operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary mb-6">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-2">{point.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
