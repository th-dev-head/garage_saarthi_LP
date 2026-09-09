import React from "react";
import {
  FaUserCog,
  FaClipboardCheck,
  FaCarCrash,
  FaWhatsapp,
  FaDownload,
  FaFileAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const checkInChecklist = [
  {
    icon: FaCarCrash,
    iconColor: "text-red-500",
    text: "Left Bumper Scratch",
    status: "Marked & Photographed",
  },
  {
    icon: FaClipboardCheck,
    iconColor: "text-primary",
    text: "Fuel Level: 50% (Half Tank)",
    status: "Logged on check-in",
  },
  {
    icon: FaUserCog,
    iconColor: "text-emerald-500",
    text: "Assigned Tech: Ramesh K.",
    status: "Labor Tracked",
  },
];

const intakeActionCards = [
  {
    title: "Download Options",
    titleColor: "text-slate-800",
    icon: FaDownload,
    iconColor: "text-slate-600",
    options: [
      {
        icon: FaFileAlt,
        iconColor: "text-red-500",
        label: "Tax Invoice / Job Card",
        isHighlight: false,
      },
      {
        icon: FaMoneyBillWave,
        iconColor: "text-emerald-600",
        label: "Acknowledgement Receipt",
        badge: "PDF",
        isHighlight: true,
      },
    ],
  },
  {
    title: "WhatsApp Triggers",
    titleColor: "text-emerald-700",
    icon: FaWhatsapp,
    iconColor: "text-emerald-600",
    options: [
      {
        icon: FaWhatsapp,
        iconColor: "text-emerald-500",
        label: "Send Job Card Link",
        isHighlight: false,
      },
      {
        icon: FaWhatsapp,
        iconColor: "text-emerald-600",
        label: "Send Acknowledgement",
        badge: "Instant",
        isHighlight: true,
      },
    ],
  },
];

const intakeBenefits = [
  {
    title: "Instant WhatsApp Inward Slip:",
    desc: "Send a formal vehicle handover confirmation directly to customer mobile numbers in 1-click.",
  },
  {
    title: "Printable PDF Vouchers:",
    desc: "Download and print clean half-page physical inward receipts with your workshop logo and signature.",
  },
  {
    title: "Zero Disputes:",
    desc: "Log dent/scratch marks and fuel percentages digitally to prevent misunderstandings during delivery.",
  },
];

export default function JCMDetails() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Visual Check-in & Acknowledgement Mockup */}
        <div className="bg-white border border-slate-200/80 p-6 md:p-8 rounded-3xl space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
              Vehicle Inward & Check-In
            </h4>
            <span className="text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded font-semibold">
              Active Intake
            </span>
          </div>

          <div className="space-y-3 text-xs">
            {checkInChecklist.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center"
                >
                  <span className="font-semibold text-slate-900 flex items-center gap-2">
                    <Icon className={`${item.iconColor} w-4 h-4`} /> {item.text}
                  </span>
                  <span className="text-slate-400 text-[11px]">{item.status}</span>
                </div>
              );
            })}
          </div>

          {/* Exact Job Card Actions & Download Menu Mockup (from screenshot) */}
          <div className="bg-[#FAF8F6] border border-slate-200 rounded-2xl p-4 space-y-3.5 shadow-2xs relative">
            {/* Change Status Row */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-700 block">Change Status:</span>
              <div className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 flex items-center justify-between shadow-2xs">
                <span>Draft</span>
                <span className="text-slate-400 text-[10px]">▼</span>
              </div>
            </div>

            {/* Action Buttons (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-2 text-xs relative">
              <button
                type="button"
                className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 py-2 px-3 rounded-xl font-bold flex items-center justify-center gap-1.5 shadow-2xs transition-colors"
              >
                <FaFileAlt className="text-slate-500 text-xs" /> View
              </button>
              <button
                type="button"
                className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 py-2 px-3 rounded-xl font-bold flex items-center justify-center gap-1.5 shadow-2xs transition-colors"
              >
                <FaUserCog className="text-slate-500 text-xs" /> Edit
              </button>
              <button
                type="button"
                className="bg-white hover:bg-rose-50 border border-slate-200 text-rose-600 py-2 px-3 rounded-xl font-bold flex items-center justify-center gap-1.5 shadow-2xs transition-colors"
              >
                <span>🗑️</span> Delete
              </button>

              {/* Download Button with Open Dropdown Menu */}
              <div className="relative">
                <button
                  type="button"
                  className="w-full bg-white border border-primary/40 text-slate-800 py-2 px-3 rounded-xl font-bold flex items-center justify-between shadow-2xs"
                >
                  <span className="flex items-center gap-1.5">
                    <FaDownload className="text-slate-700 text-xs" /> Download
                  </span>
                  <span className="text-slate-400 text-[10px]">▼</span>
                </button>

                {/* Open Popup Menu */}
                <div className="absolute top-full left-0 mt-1.5 w-full min-w-[210px] bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-20 space-y-1">
                  <div className="p-2 hover:bg-slate-50 rounded-xl flex items-center gap-2 cursor-pointer transition-colors">
                    <span className="text-rose-500">📄</span>
                    <span className="text-xs font-semibold text-slate-800">Tax Invoice / Job Card</span>
                  </div>
                  <div className="p-2 bg-emerald-50/80 hover:bg-emerald-100/70 border border-emerald-200/80 rounded-xl flex items-center justify-between cursor-pointer transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600">💵</span>
                      <span className="text-xs font-bold text-emerald-900">Acknowledgement Receipt</span>
                    </div>
                    <span className="text-[9px] bg-emerald-600 text-white px-1.5 py-0.5 rounded-full font-bold">New</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Linked Vehicle License Plate Badge */}
            <div className="pt-12 sm:pt-14 flex items-center gap-2.5">
              <div className="bg-white border border-slate-300 rounded-lg px-2.5 py-1 flex items-center gap-1.5 shadow-2xs">
                <span className="bg-blue-600 text-white text-[9px] font-black px-1 rounded-xs">IND</span>
                <span className="font-mono font-bold text-xs text-slate-900">DL 04 EF 9012</span>
              </div>
              <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
                Honda Activa 6G
              </span>
            </div>
          </div>
        </div>

        {/* Right Side Text */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Intake & Acknowledgement Receipts
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Build Trust with Instant{" "}
            <GradientUnderline>Acknowledgement Receipts</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
            Give customers immediate peace of mind the moment they hand over
            their keys. As soon as a vehicle enters your garage, generate an
            official <strong>Vehicle Inward Acknowledgement Receipt</strong>{" "}
            documenting fuel levels, odometer reading, and initial repair
            requests.
          </p>
          <div className="space-y-3 mb-6 text-sm text-slate-600">
            {intakeBenefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                <span>
                  <strong>{benefit.title}</strong> {benefit.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


