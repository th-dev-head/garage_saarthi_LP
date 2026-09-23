import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaFileInvoice, FaQrcode, FaPrint, FaUserShield, FaCheckDouble } from "react-icons/fa";

export default function GGPWorkflow() {
  const steps = [
    {
      num: "1",
      icon: <FaFileInvoice className="text-primary w-5 h-5" />,
      title: "Invoice Settled at Counter",
      desc: "Cashier records payment or authorized credit/insurance terms for the completed vehicle job card."
    },
    {
      num: "2",
      icon: <FaQrcode className="text-primary w-5 h-5" />,
      title: "Instant QR Gate Pass Issued",
      desc: "GarageSaarthi auto-generates a unique cryptographic QR pass stamped with vehicle details and validity."
    },
    {
      num: "3",
      icon: <FaPrint className="text-primary w-5 h-5" />,
      title: "Hand Slip or WhatsApp Pass",
      desc: "Driver receives a 2-inch thermal slip or customer receives digital QR pass directly on WhatsApp."
    },
    {
      num: "4",
      icon: <FaUserShield className="text-primary w-5 h-5" />,
      title: "Guard Scans at Perimeter",
      desc: "Security guard points smartphone at QR code. Clearance screen opens in 2 seconds with zero login."
    },
    {
      num: "5",
      icon: <FaCheckDouble className="text-primary w-5 h-5" />,
      title: "Barrier Up & Audit Saved",
      desc: "Gate opens. Exact vehicle exit timestamp, guard name, and odometer log are permanently stored in the cloud."
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Step-by-Step Workflow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            How the Vehicle Release Workflow <GradientUnderline>Operates in Seconds</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Zero friction for cashier, driver, and security guard:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-150">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-xs font-black text-primary bg-[#EFE9E7] w-6 h-6 rounded-full flex items-center justify-center">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-text-dark mb-2">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
