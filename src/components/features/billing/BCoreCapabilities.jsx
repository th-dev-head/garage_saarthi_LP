import React from "react";
import { FaFileInvoice, FaPercent, FaWhatsapp, FaCreditCard, FaHistory, FaCalculator } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function BCoreCapabilities() {
  const capabilities = [
    {
      icon: <FaFileInvoice className="w-6 h-6 text-primary" />,
      title: "1-Click Job Card Conversion",
      description: "Convert active vehicle repair job cards into final GST tax invoices instantly without re-typing parts or labor details.",
      badge: "Fast Conversion"
    },
    {
      icon: <FaCalculator className="w-6 h-6 text-orange-600" />,
      title: "Automated GST & Tax Rules",
      description: "Pre-loaded HSN & SAC codes calculate CGST, SGST, and IGST tax splits automatically based on customer state.",
      badge: "Tax Accuracy"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6 text-emerald-600" />,
      title: "WhatsApp PDF Invoicing",
      description: "Send professional, branded PDF invoices directly to your customer's WhatsApp with payment confirmation links.",
      badge: "Digital Delivery"
    },
    {
      icon: <FaCreditCard className="w-6 h-6 text-amber-600" />,
      title: "Multi-Mode Payment Tracking",
      description: "Log Cash, GPay/PhonePe UPI, Card, and Net Banking payments. Track advance deposits and remaining dues.",
      badge: "Payment Logs"
    },
    {
      icon: <FaPercent className="w-6 h-6 text-purple-600" />,
      title: "Itemized Discounts & Coupons",
      description: "Apply flat or percentage discounts on spare parts or labor charges with full owner visibility and permission control.",
      badge: "Discount Manager"
    },
    {
      icon: <FaHistory className="w-6 h-6 text-teal-600" />,
      title: "Complete Billing Audit Trail",
      description: "Access past invoices, cancelled bills, and credit notes by customer name, mobile number, or registration plate.",
      badge: "Invoice History"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Powerful Billing Features
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Key Capabilities of Garage <GradientUnderline>Billing & Invoicing Software</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Everything your workshop needs to speed up checkout, eliminate GST tax math, and track customer payments accurately.
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
