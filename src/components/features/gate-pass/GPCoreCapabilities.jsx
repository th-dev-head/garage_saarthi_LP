import React from "react";
import {
  FaQrcode,
  FaShieldAlt,
  FaPrint,
  FaUserCheck,
  FaHistory,
  FaBan,
  FaReceipt,
  FaCar,
  FaWhatsapp
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GPCoreCapabilities() {
  const capabilities = [
    {
      icon: <FaQrcode className="w-6 h-6 text-primary" />,
      title: "Cryptographic QR Gate Passes",
      description: "Generate dynamic, tamper-proof QR tokens linked directly to the closed job card, invoice number, and vehicle registration plate.",
      badge: "Instant Generation"
    },
    {
      icon: <FaUserCheck className="w-6 h-6 text-emerald-600" />,
      title: "Zero-Login Guard QR Scanner",
      description: "Security personnel scan the gate pass using any mobile phone camera or scanner without needing an app login or complex training.",
      badge: "2-Second Clearance"
    },
    {
      icon: <FaBan className="w-6 h-6 text-red-600" />,
      title: "Strict Unpaid Vehicle Gatekeeper",
      description: "If an invoice balance, parts counter bill, or insurance deductible is pending, the guard's screen shows an immediate red alert blocking exit.",
      badge: "Zero Profit Loss"
    },
    {
      icon: <FaPrint className="w-6 h-6 text-amber-600" />,
      title: "Thermal & A4 Slip Printing",
      description: "Print compact 2-inch and 3-inch thermal gate slips or clean A4 delivery receipts in one click directly from the billing desk.",
      badge: "Thermal Roll Ready"
    },
    {
      icon: <FaHistory className="w-6 h-6 text-purple-600" />,
      title: "Immutable Vehicle Exit Ledger",
      description: "Every authorized release records guard identity, exact timestamp, and vehicle odometer reading into a permanent cloud audit ledger.",
      badge: "100% Audit Trail"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6 text-teal-600" />,
      title: "WhatsApp Digital Gate Slips",
      description: "Customers receive their digital gate pass and tax invoice PDF directly on WhatsApp to present effortlessly at the exit barrier.",
      badge: "Paperless Delivery"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Core Security Capabilities
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Key Features of Garage <GradientUnderline>Gate Pass &amp; Release Software</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Everything your auto workshop needs to manage vehicle release protocols, eliminate exit confusion, and maintain perimeter security.
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
