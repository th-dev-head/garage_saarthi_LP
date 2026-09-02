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

          {/* Acknowledgement Receipt Actions Dropdown Mockup (Looped) */}
          <div className="pt-2 border-t border-slate-200 space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              1-Click Intake Documents & WhatsApp Sharing
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {intakeActionCards.map((card, cardIdx) => {
                const CardIcon = card.icon;
                return (
                  <div
                    key={cardIdx}
                    className="bg-slate-50/80 p-3 rounded-xl border border-slate-200 shadow-2xs space-y-1.5"
                  >
                    <div
                      className={`flex items-center gap-1.5 font-bold text-[11px] ${card.titleColor}`}
                    >
                      <CardIcon className={card.iconColor} />
                      <span>{card.title}</span>
                    </div>
                    <div className="space-y-1 text-[10.5px]">
                      {card.options.map((opt, optIdx) => {
                        const OptIcon = opt.icon;
                        return (
                          <div
                            key={optIdx}
                            className={`p-1 rounded flex items-center justify-between ${
                              opt.isHighlight
                                ? "bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold"
                                : "bg-white text-slate-700 border border-slate-100"
                            }`}
                          >
                            <span className="flex items-center gap-1.5">
                              <OptIcon className={`${opt.iconColor} text-[10px]`} />
                              {opt.label}
                            </span>
                            {opt.badge && (
                              <span className="text-[8px] bg-emerald-600 text-white px-1 rounded">
                                {opt.badge}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
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


