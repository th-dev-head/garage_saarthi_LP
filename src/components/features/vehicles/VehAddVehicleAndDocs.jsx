import React from "react";
import {
  FaCar,
  FaFileContract,
  FaShieldAlt,
  FaFileAlt,
  FaFilePdf,
  FaCheckCircle,
  FaCalendarAlt,
  FaUpload,
  FaExternalLinkAlt,
  FaTrashAlt,
  FaGasPump,
  FaLock,
  FaIdCard,
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const sampleDocs = [
  {
    title: "Vehicle RC (Registration Certificate)",
    type: "RC",
    typeStyle: "bg-blue-50 text-blue-700 border-blue-200",
    fileName: "rc_book_rj31cb7732.pdf",
    size: "1.2 MB",
    date: "12/08/2026",
  },
  {
    title: "Comprehensive Insurance Policy",
    type: "Insurance",
    typeStyle: "bg-purple-50 text-purple-700 border-purple-200",
    fileName: "icici_lombard_policy_2026.pdf",
    size: "2.4 MB",
    date: "13/09/2026",
  },
  {
    title: "PUC Emission Certificate",
    type: "PUC",
    typeStyle: "bg-emerald-50 text-emerald-700 border-emerald-200",
    fileName: "puc_certificate_valid.pdf",
    size: "450 KB",
    date: "25/08/2026",
  },
  {
    title: "Owner Driving License",
    type: "Driving License",
    typeStyle: "bg-amber-50 text-amber-800 border-amber-200",
    fileName: "dl_amrinder_singh.jpg",
    size: "850 KB",
    date: "10/08/2026",
  },
];

const intakePillars = [
  {
    icon: FaFileContract,
    title: "AMC Contract Management",
    desc: "Track 4-digit AMC contract numbers, validity start & end dates, and ensure workshop maintenance contract benefits are honored accurately.",
  },
  {
    icon: FaShieldAlt,
    title: "Split OD & TP Insurance Expiries",
    desc: "Manage Own Damage (OD) and Third-Party (TP) insurance expiries independently with automated advance renewal alerts.",
  },
  {
    icon: FaFilePdf,
    title: "Digital Vehicle Document Locker",
    desc: "Attach RC copies, insurance policies, PUC certificates, and PAN cards directly to the vehicle record for instant insurance claim and parts lookup.",
  },
  {
    icon: FaGasPump,
    title: "Universal Fuel & EV Passcode Support",
    desc: "Comprehensive fuel support for Petrol, Diesel, CNG, LPG, Hybrid & EV configurations, with dedicated digital lock passcodes for EV two-wheelers.",
  },
];

export default function VehAddVehicleAndDocs() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Next-Gen Vehicle Onboarding
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Comprehensive Vehicle Intake, AMC &amp;{" "}
            <GradientUnderline>Digital Document Locker</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Capture granular vehicle data during check-in: 4-digit AMC agreement details, split OD &amp; TP insurance dates, expanded hybrid/EV fuel types, and store RC &amp; insurance files in a dedicated cloud repository.
          </p>
        </div>

        {/* Dual Panel Layout: Add Vehicle Form + Digital Document Locker */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Add Vehicle Form Mockup (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-lg space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-primary flex items-center justify-center font-bold">
                  <FaCar className="text-sm" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Add New Vehicle</h3>
                  <p className="text-[11px] text-slate-500">Record specs, insurance, and AMC agreement</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-primary bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full">
                Step 1 of 1
              </span>
            </div>

            {/* Vehicle Type Tabs */}
            <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-xl text-xs font-semibold text-center">
              <span className="py-1.5 rounded-lg bg-white text-slate-900 shadow-2xs font-bold">4 Wheeler</span>
              <span className="py-1.5 rounded-lg text-slate-500">2 Wheeler</span>
              <span className="py-1.5 rounded-lg text-slate-500">Commercial</span>
            </div>

            {/* Core Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-slate-700 block">Registration Number *</span>
                <div className="bg-slate-50 border border-slate-200 font-mono font-bold text-slate-900 px-3 py-2 rounded-xl text-xs flex items-center justify-between">
                  <span>RJ 31 CB 7732</span>
                  <span className="text-[9px] bg-slate-200 px-1.5 py-0.5 rounded text-slate-700 font-sans font-bold">IND</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold text-slate-700 block">Make &amp; Model *</span>
                <div className="bg-slate-50 border border-slate-200 text-slate-800 px-3 py-2 rounded-xl text-xs font-medium">
                  Renault Kwid (RXT)
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold text-slate-700 block">Fuel Type</span>
                <div className="bg-slate-50 border border-slate-200 text-slate-800 px-3 py-2 rounded-xl text-xs flex items-center justify-between font-medium">
                  <span>Petrol / CNG</span>
                  <FaGasPump className="text-slate-400 text-xs" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-slate-700">Linked Customer *</span>
                  <span className="text-[10px] text-primary font-bold cursor-pointer">+ Add New</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 text-slate-800 px-3 py-2 rounded-xl text-xs font-semibold truncate">
                  Amrinder Singh • 9181687255
                </div>
              </div>
            </div>

            {/* Split Insurance & PUC Grid (3 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
              <div className="space-y-1">
                <span className="text-[10.5px] font-bold text-slate-700 block">Insurance OD Expiry</span>
                <div className="bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-xl text-[11px] text-slate-800 flex items-center justify-between font-mono">
                  <span>13/09/2026</span>
                  <FaCalendarAlt className="text-slate-400 text-[10px]" />
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10.5px] font-bold text-slate-700 block">Insurance TP Expiry</span>
                <div className="bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-xl text-[11px] text-slate-800 flex items-center justify-between font-mono">
                  <span>13/09/2027</span>
                  <FaCalendarAlt className="text-slate-400 text-[10px]" />
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10.5px] font-bold text-slate-700 block">PUC Expiry Date</span>
                <div className="bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-xl text-[11px] text-slate-800 flex items-center justify-between font-mono">
                  <span>25/11/2026</span>
                  <FaCalendarAlt className="text-slate-400 text-[10px]" />
                </div>
              </div>
            </div>

            {/* AMC Details Box */}
            <div className="border border-orange-200/80 rounded-2xl p-3.5 bg-orange-50/40 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <FaFileContract className="text-primary text-xs" />
                  AMC (Annual Maintenance Contract) Details
                </span>
                <span className="text-[9.5px] font-bold text-orange-800 bg-orange-100 px-2 py-0.5 rounded-md border border-orange-200">
                  Active 1-Yr Package
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="space-y-1">
                  <span className="text-[10.5px] text-slate-600 block">AMC No (4 Digits)</span>
                  <div className="bg-white border border-slate-200 font-mono font-bold text-primary px-2.5 py-1.5 rounded-xl text-xs">
                    2121
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10.5px] text-slate-600 block">AMC Start Date</span>
                  <div className="bg-white border border-slate-200 font-mono text-slate-700 px-2.5 py-1.5 rounded-xl text-xs flex items-center justify-between">
                    <span>01/01/2026</span>
                    <FaCalendarAlt className="text-slate-400 text-[10px]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10.5px] text-slate-600 block">AMC End Date</span>
                  <div className="bg-white border border-slate-200 font-mono text-slate-700 px-2.5 py-1.5 rounded-xl text-xs flex items-center justify-between">
                    <span>31/12/2026</span>
                    <FaCalendarAlt className="text-slate-400 text-[10px]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                className="bg-[linear-gradient(92.52deg,#B22F0E_2.1%,#D73D17_105.99%)] hover:opacity-95 text-white text-xs font-bold px-6 py-2.5 rounded-xl flex items-center gap-2 shadow-sm"
              >
                <FaCheckCircle className="text-xs" /> Save &amp; Add Vehicle
              </button>
            </div>
          </div>

          {/* Right Panel: Vehicle Documents Dialog Mockup (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <FaIdCard className="text-primary" /> Vehicle Digital Documents
                </h3>
                <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                  RJ 31 CB 7732 • Renault Kwid
                </p>
              </div>
              <button
                type="button"
                className="bg-primary hover:bg-primary-hover text-white text-[11px] font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-2xs transition-colors"
              >
                <FaUpload className="text-[10px]" /> Upload Doc
              </button>
            </div>

            {/* Document List */}
            <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-0.5">
              {sampleDocs.map((doc, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl border border-slate-200/90 bg-slate-50/60 hover:bg-slate-50 transition-colors flex items-center justify-between gap-2.5"
                >
                  <div className="flex items-start gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-primary shrink-0 mt-0.5 shadow-2xs">
                      <FaFilePdf className="text-xs" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-bold text-xs text-slate-900 truncate">
                          {doc.title}
                        </span>
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${doc.typeStyle}`}
                        >
                          {doc.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-0.5">
                        <span className="truncate max-w-[130px] font-mono">{doc.fileName}</span>
                        <span>•</span>
                        <span>{doc.size}</span>
                        <span>•</span>
                        <span>{doc.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      className="px-2 py-1 text-[10px] font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg flex items-center gap-1"
                    >
                      <FaExternalLinkAlt className="text-[8px]" /> View
                    </button>
                    <button
                      type="button"
                      className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                      title="Delete"
                    >
                      <FaTrashAlt className="text-[10px]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Document Locker Footer Note */}
            <div className="bg-[#FAF8F6] border border-slate-200/80 rounded-xl p-2.5 text-[10.5px] text-slate-600 flex items-center gap-2">
              <span className="text-emerald-600 font-bold">✓ Cloud Sync:</span>
              <span>Unlimited RC, Insurance, DL &amp; PUC files linked for life.</span>
            </div>
          </div>
        </div>

        {/* 4 Looped Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {intakePillars.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-2.5 shadow-2xs hover:border-primary/30 transition-colors flex flex-col justify-between"
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
