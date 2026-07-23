import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaFileAlt, FaSlidersH, FaReceipt, FaMoneyBillWave, FaWhatsapp } from "react-icons/fa";

export default function BWorkflow() {
  const steps = [
    {
      num: "01",
      icon: <FaFileAlt className="w-5 h-5 text-primary" />,
      title: "Fetch Repair Job Card",
      desc: "Pull completed repair job card details including spare parts, oil, and labor charges."
    },
    {
      num: "02",
      icon: <FaSlidersH className="w-5 h-5 text-orange-600" />,
      title: "Review & Apply Discounts",
      desc: "Verify line items, apply optional promo discounts or customer loyalty offers."
    },
    {
      num: "03",
      icon: <FaReceipt className="w-5 h-5 text-emerald-600" />,
      title: "Auto GST Calculation",
      desc: "Pre-loaded HSN codes compute CGST, SGST, or IGST tax splits automatically."
    },
    {
      num: "04",
      icon: <FaMoneyBillWave className="w-5 h-5 text-amber-600" />,
      title: "Record Payment Mode",
      desc: "Log payment via UPI (GPay/PhonePe), Cash, Card, or record outstanding dues."
    },
    {
      num: "05",
      icon: <FaWhatsapp className="w-5 h-5 text-purple-600" />,
      title: "Send WhatsApp PDF Bill",
      desc: "Send PDF tax invoice and digital payment receipt link directly to WhatsApp."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            5-Step Billing Process
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            How GarageSaarthi Automates <GradientUnderline>Workshop Invoicing</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Fast, accurate, and error-free. From completed repair order to paid GST receipt.
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
