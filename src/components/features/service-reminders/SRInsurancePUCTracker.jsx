import React from "react";
import {
  FaShieldAlt,
  FaFileContract,
  FaCalendarAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
  FaExclamationTriangle,
  FaClock,
  FaCommentDots,
  FaHistory,
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const expiryTableData = [
  {
    num: 1,
    vehicle: "RJ 31 CB 7732",
    model: "Renault Kwid",
    type: "4 Wheeler",
    customer: "AMRINDER SINGH",
    phone: "+91 91816 87255",
    insuranceDate: "13-09-2026",
    insuranceBadge: "Expiring in 1d",
    insuranceBadgeStyle: "bg-amber-50 text-amber-800 border-amber-200",
    pucDate: "23-08-2021",
    pucBadge: "Expired",
    pucBadgeStyle: "bg-rose-50 text-rose-700 border-rose-200",
    hasRemark: true,
    remarkStatus: "Call Back",
    remarkDate: "01 Sept",
    remarkText: "Customer asked to call back regarding comprehensive plan",
    historyCount: 1,
  },
  {
    num: 2,
    vehicle: "FILE 2434",
    model: "Toyota Etios Liva",
    type: "4 Wheeler",
    customer: "MR. SATVINDER SINGH",
    phone: "+91 91887 57117",
    insuranceDate: "03-10-2026",
    insuranceBadge: "Expiring in 21d",
    insuranceBadgeStyle: "bg-amber-50 text-amber-800 border-amber-200",
    pucDate: "12-11-2025",
    pucBadge: "Expired",
    pucBadgeStyle: "bg-rose-50 text-rose-700 border-rose-200",
    hasRemark: false,
  },
  {
    num: 3,
    vehicle: "RJ 31 CB 5055",
    model: "Tata Nexon",
    type: "4 Wheeler",
    customer: "ANKIT SONI",
    phone: "+91 91978 46387",
    insuranceDate: "12-09-2026",
    insuranceBadge: "Expires Today",
    insuranceBadgeStyle: "bg-rose-100 text-rose-900 border-rose-300 font-bold",
    pucDate: "11-02-2026",
    pucBadge: "Expired",
    pucBadgeStyle: "bg-rose-50 text-rose-700 border-rose-200",
    hasRemark: false,
  },
  {
    num: 4,
    vehicle: "RJ 13 CF 2588",
    model: "Tata Tiago",
    type: "4 Wheeler",
    customer: "SARANJEET KOUR",
    phone: "+91 91978 25349",
    insuranceDate: "21-06-2027",
    insuranceBadge: "Valid (282d left)",
    insuranceBadgeStyle: "bg-emerald-50 text-emerald-800 border-emerald-200",
    pucDate: "25-09-2026",
    pucBadge: "Expiring in 13d",
    pucBadgeStyle: "bg-amber-50 text-amber-800 border-amber-200",
    hasRemark: false,
  },
];

const trackerBenefits = [
  {
    icon: FaShieldAlt,
    title: "Zero Missed Insurance Renewals",
    desc: "Track motor insurance & third-party policy expiry dates automatically. Alert customers before coverage lapses.",
  },
  {
    icon: FaCommentDots,
    title: "Structured Discussion & Call Logs",
    desc: "Record follow-up remarks, customer interest levels (Interested, Call Back, Renewed), and schedule next contact dates.",
  },
  {
    icon: FaWhatsapp,
    title: "1-Click WhatsApp Expiry Alerts",
    desc: "Send pre-formatted insurance quotation and PUC renewal alerts directly to customer WhatsApp in one tap.",
  },
  {
    icon: FaHistory,
    title: "Complete Follow-Up History",
    desc: "Maintain a full chronological audit trail of all customer call conversations and rescheduled callback dates.",
  },
];

export default function SRInsurancePUCTracker() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Insurance &amp; PUC Follow-Up Management
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Track Policy Expiries &amp; Log Customer{" "}
            <GradientUnderline>Follow-Up Remarks</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Boost high-margin insurance renewals and compliance services. Monitor live insurance &amp; PUC expiration countdowns, schedule follow-ups, and record advisor call notes.
          </p>
        </div>

        {/* Dual Panel Layout: Interactive Table + Modal Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Expiry Tracker Table Mockup (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                <h3 className="text-sm font-bold text-slate-900">
                  Vehicle Expiry &amp; Follow-up Register
                </h3>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                Live Status
              </span>
            </div>

            {/* Table Mockup */}
            <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF7F5] border-b border-slate-200 text-[11px] font-bold text-slate-700">
                  <tr>
                    <th className="p-3">Vehicle Details</th>
                    <th className="p-3">Insurance</th>
                    <th className="p-3">PUC</th>
                    <th className="p-3">Remarks &amp; Follow-up</th>
                    <th className="p-3 text-right">Send</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {expiryTableData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3 whitespace-nowrap">
                        <div className="font-mono font-bold text-primary text-xs">{row.vehicle}</div>
                        <div className="text-[10.5px] text-slate-500">{row.model}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{row.phone}</div>
                      </td>

                      <td className="p-3 whitespace-nowrap">
                        <div className="text-slate-800 text-xs font-semibold">{row.insuranceDate}</div>
                        <span
                          className={`text-[9.5px] px-1.5 py-0.2 rounded border inline-flex items-center gap-1 mt-0.5 ${row.insuranceBadgeStyle}`}
                        >
                          <FaClock className="text-[8px]" /> {row.insuranceBadge}
                        </span>
                      </td>

                      <td className="p-3 whitespace-nowrap">
                        <div className="text-slate-800 text-xs font-semibold">{row.pucDate}</div>
                        <span
                          className={`text-[9.5px] px-1.5 py-0.2 rounded border inline-flex items-center gap-1 mt-0.5 ${row.pucBadgeStyle}`}
                        >
                          {row.pucBadge}
                        </span>
                      </td>

                      <td className="p-3">
                        {row.hasRemark ? (
                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.2 rounded-full border border-amber-200">
                                {row.remarkStatus}
                              </span>
                              <span className="text-[10px] text-slate-500 font-medium">
                                📅 {row.remarkDate}
                              </span>
                            </div>
                            <p className="text-[10px] text-slate-600 truncate max-w-[120px]">
                              "{row.remarkText}"
                            </p>
                            <span className="text-[9.5px] text-primary font-bold cursor-pointer hover:underline flex items-center gap-1">
                              <FaHistory className="text-[8px]" /> History ({row.historyCount})
                            </span>
                          </div>
                        ) : (
                          <button
                            type="button"
                            className="text-[10.5px] font-bold text-slate-600 hover:text-primary border border-dashed border-slate-300 hover:border-primary px-2 py-1 rounded-lg transition-colors"
                          >
                            + Log Follow-up
                          </button>
                        )}
                      </td>

                      <td className="p-3 text-right whitespace-nowrap space-y-1">
                        <button
                          type="button"
                          className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-lg text-[10px] font-bold flex items-center gap-1 ml-auto"
                        >
                          <FaWhatsapp /> Insurance
                        </button>
                        <button
                          type="button"
                          className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-lg text-[10px] font-bold flex items-center gap-1 ml-auto"
                        >
                          <FaWhatsapp /> PUC
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Panel: Log Follow-up & Remark Modal Mockup (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-xl space-y-4 relative">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FaCommentDots className="text-primary" /> Log Follow-up &amp; Remark
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Record call discussion notes, status, and schedule the next follow-up.
              </p>
            </div>

            {/* Vehicle Context Summary Box */}
            <div className="bg-[#FAF8F6] border border-slate-200/80 p-3 rounded-2xl grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-[10px] text-slate-400 block">Vehicle:</span>
                <span className="font-bold text-slate-900 font-mono">FILE 2434</span>
                <span className="text-[10px] text-slate-500 block">Toyota Etios Liva</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block">Customer:</span>
                <span className="font-bold text-slate-900">MR. SATVINDER SINGH</span>
                <span className="text-[10.5px] text-emerald-600 font-semibold flex items-center gap-1">
                  <FaPhoneAlt className="text-[9px]" /> 918875711717
                </span>
              </div>
            </div>

            {/* Form Fields Mockup */}
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-slate-700 block">Follow-up For</span>
                <div className="bg-slate-50 border border-slate-200 px-2 py-1.5 rounded-xl text-[11px] font-semibold text-slate-800 flex items-center justify-between">
                  <span>Insurance</span>
                  <span className="text-[9px] text-slate-400">▼</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold text-slate-700 block">Status</span>
                <div className="bg-slate-50 border border-slate-200 px-2 py-1.5 rounded-xl text-[11px] font-semibold text-slate-800 flex items-center justify-between">
                  <span>Interested</span>
                  <span className="text-[9px] text-slate-400">▼</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold text-slate-700 block">Contact Mode</span>
                <div className="bg-slate-50 border border-slate-200 px-2 py-1.5 rounded-xl text-[11px] font-semibold text-slate-800 flex items-center justify-between">
                  <span>Phone Call</span>
                  <span className="text-[9px] text-slate-400">▼</span>
                </div>
              </div>
            </div>

            {/* Next Follow-up Date */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
                <FaCalendarAlt className="text-primary text-[10px]" /> Next Follow-up Date (Optional)
              </span>
              <div className="bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs text-slate-700 flex items-center justify-between">
                <span>18/09/2026</span>
                <FaCalendarAlt className="text-slate-400 text-xs" />
              </div>
            </div>

            {/* Remarks Textarea */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-700 block">
                Remark / Discussion Notes <span className="text-rose-500">*</span>
              </span>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-[11px] text-slate-700 leading-relaxed">
                Spoke to customer. Shared quotation for comprehensive insurance with 20% NCB. Customer requested a callback next Monday.
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                className="bg-[linear-gradient(92.52deg,#B22F0E_2.1%,#D73D17_105.99%)] hover:opacity-95 text-white text-xs font-bold px-5 py-2 rounded-xl flex items-center gap-1.5 shadow-2xs"
              >
                <FaCheckCircle className="text-xs" /> Save Follow-up
              </button>
            </div>
          </div>
        </div>

        {/* 4 Value Pillars (Looped) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {trackerBenefits.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-2.5 shadow-2xs hover:border-primary/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-100/70 text-primary flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">{feat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
