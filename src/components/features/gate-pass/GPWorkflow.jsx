import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaCheckCircle, FaQrcode, FaPrint, FaUserShield, FaCarSide } from "react-icons/fa";

export default function GPWorkflow() {
  const steps = [
    {
      num: "01",
      icon: <FaCheckCircle className="w-5 h-5 text-primary" />,
      title: "Job Done & Bill Settled",
      desc: "Mechanic marks job card complete and cashier records customer payment via Cash, UPI, or Card."
    },
    {
      num: "02",
      icon: <FaQrcode className="w-5 h-5 text-orange-600" />,
      title: "Auto QR Gate Pass Created",
      desc: "System auto-generates a tamper-proof digital gate pass with encrypted QR token and validity window."
    },
    {
      num: "03",
      icon: <FaPrint className="w-5 h-5 text-emerald-600" />,
      title: "Print Slip / Send WhatsApp",
      desc: "Print instant 2-inch/3-inch thermal slip for driver or dispatch digital pass to customer's WhatsApp."
    },
    {
      num: "04",
      icon: <FaUserShield className="w-5 h-5 text-amber-600" />,
      title: "Guard Scans at Gate",
      desc: "Security guard points smartphone at QR code to verify vehicle registration and clear status."
    },
    {
      num: "05",
      icon: <FaCarSide className="w-5 h-5 text-purple-600" />,
      title: "Authorized Exit & Audit Log",
      desc: "Gate barrier opens. Exact release timestamp, guard name, and odometer are saved to the cloud ledger."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            5-Step Gate Pass Security Workflow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            How GarageSaarthi Controls <GradientUnderline>Workshop Perimeter &amp; Exits</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            From cashier billing counter to the security exit gate, every vehicle movement is digitally verified and logged.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between relative hover:border-primary/40 transition-colors shadow-2xs"
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
