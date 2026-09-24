import React from "react";
import {
  FaMapMarkerAlt,
  FaTachometerAlt,
  FaGasPump,
  FaIdCard,
  FaFileSignature,
  FaLink,
  FaShieldAlt
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function TDCoreCapabilities() {
  const capabilities = [
    {
      icon: <FaMapMarkerAlt className="w-6 h-6 text-primary" />,
      title: "Interactive 2D Body Damage Blueprint",
      description: "Interactive car schematic allows technicians to tap and drop damage pins (Scratches, Dents, Cracks, Chips) with custom notes before departing.",
      badge: "Visual Inspection"
    },
    {
      icon: <FaTachometerAlt className="w-6 h-6 text-emerald-600" />,
      title: "Smart Odometer & Distance Meter",
      description: "Record starting mileage when handing over keys. Entering return odometer automatically computes net kilometers driven on the road.",
      badge: "Auto-Calculation"
    },
    {
      icon: <FaGasPump className="w-6 h-6 text-orange-600" />,
      title: "5-Stage Fuel Level Gauge Tracker",
      description: "Log fuel tank levels (0%, 25%, 50%, 75%, 100%) at departure and return to completely eliminate accusations of fuel theft or siphon.",
      badge: "Anti-Fuel Theft"
    },
    {
      icon: <FaIdCard className="w-6 h-6 text-amber-600" />,
      title: "Driver License & Role Verification",
      description: "Select internal workshop staff, vehicle owner, or third-party tester. Store driver contact numbers, driving license ID, and expected return time.",
      badge: "Legal Compliance"
    },
    {
      icon: <FaFileSignature className="w-6 h-6 text-purple-600" />,
      title: "HTML5 Touchscreen Digital Signatures",
      description: "Built-in touch canvas lets drivers and workshop supervisors sign electronically on smartphones, tablets, or PCs before and after road tests.",
      badge: "Tamper-Proof"
    },
    {
      icon: <FaLink className="w-6 h-6 text-teal-600" />,
      title: "Direct Job Card & Insurance Link",
      description: "Launch test drives directly from open Job Cards. Vehicle number, make, model, and customer details auto-fill in 1 second.",
      badge: "Unified Record"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Core Road Test Capabilities
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            End-to-End Governance for Every <GradientUnderline>Workshop Test Drive</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate customer disputes, prevent staff vehicle misuse, and establish complete accountability from key handover to return audit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-primary/40 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                    {cap.icon}
                  </div>
                  <span className="text-[11px] font-bold text-primary bg-[#EFE9E7] px-2.5 py-1 rounded-full">
                    {cap.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-text-dark mb-3">
                  {cap.title}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                  {cap.description}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-600">
                <FaShieldAlt className="w-3.5 h-3.5" />
                <span>Verified Workshop Safeguard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
