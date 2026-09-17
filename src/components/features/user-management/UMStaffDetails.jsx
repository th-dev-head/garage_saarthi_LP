import React from "react";
import {
  FaBriefcase,
  FaWrench,
  FaTshirt,
  FaBus,
  FaFileAlt,
  FaUpload,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaCalendarAlt,
  FaUserGraduate,
  FaShieldAlt,
  FaBuilding,
  FaChevronDown,
  FaCheck
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const sampleCertificates = [
  { name: "Automotive_Tech_Diploma.pdf", size: "1.8 MB", type: "pdf" },
  { name: "OEM_Diagnostic_Cert.png", size: "840 KB", type: "img" },
  { name: "Aadhaar_ID_Proof.webp", size: "420 KB", type: "img" },
];

const branchListMock = [
  { name: "Main Workshop", isSelected: true },
  { name: "Mota Varachha", isSelected: false },
  { name: "Utran", isSelected: false }
];

const experienceFields = [
  { label: "Experience (Years)", value: "3", helper: "Years in auto repair" },
  { label: "Experience (Months)", value: "6", helper: "Months" }
];

const commuteAndUniformFields = [
  {
    icon: FaBus,
    label: "Mode of Transportation",
    value: "Bike / Motorcycle",
    badge: "Personal",
    badgeClass: "text-[10px] text-primary bg-orange-100/70 px-2 py-0.5 rounded font-bold"
  },
  {
    icon: FaTshirt,
    label: "Dress / Uniform Allocation Date",
    value: "15-08-2026",
    rightIcon: FaCalendarAlt,
    rightIconClass: "text-primary text-xs"
  }
];

const staffDetailPillars = [
  {
    icon: FaBuilding,
    title: "Multi-Branch Staff Assignment",
    desc: "Seamlessly assign mechanics, service advisors, or managers to any workshop location (Main Workshop, Mota Varachha, Utran) with branch-scoped access.",
  },
  {
    icon: FaUserGraduate,
    title: "Technician Experience & Skill Profiling",
    desc: "Record exact years and months of automotive domain experience to allocate complex engine diagnostics or brand-specific jobs efficiently.",
  },
  {
    icon: FaWrench,
    title: "Tool & Equipment Inventory Allotment",
    desc: "Maintain complete accountability for allotted scanners, OBD tools, impact drills, and hand tools to prevent loss and workshop disputes.",
  },
  {
    icon: FaFileAlt,
    title: "Digital Certificate & Document Vault",
    desc: "Securely upload and store technician diplomas, OEM certifications, driving licenses, and ID documents directly in the cloud.",
  },
];

export default function UMStaffDetails() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Staff Profiling & Asset Tracking
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Complete Staff Details, Tool Allotment &amp;{" "}
            <GradientUnderline>Multi-Branch Assignment</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Assign staff across multiple workshop locations, track technician work experience, manage diagnostic tools, record uniform allocation dates, and secure document vaults in one unified platform.
          </p>
        </div>

        {/* Interactive Mockup Form Card */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm max-w-4xl mx-auto space-y-6">
          {/* Card Legend / Title */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2.5 text-primary font-bold text-base sm:text-lg">
              <span className="w-8 h-8 rounded-xl bg-orange-100/70 text-primary flex items-center justify-center text-sm">
                <FaBriefcase />
              </span>
              <span>Staff Details &amp; Branch Assignment</span>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1.5">
              <FaCheckCircle className="text-emerald-500" /> Multi-Branch HR &amp; Asset Vault
            </span>
          </div>

          <div className="space-y-5">
            {/* Role & Assigned Branch / Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <FaShieldAlt className="text-slate-400 text-xs" /> Select Role
                </label>
                <div className="bg-[#FAF8F6] border border-slate-200 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-800 flex items-center justify-between">
                  <span>Service Advisor</span>
                  <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold">Active</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <FaBuilding className="text-slate-400 text-xs" /> Assigned Branch / Location
                </label>
                <div className="bg-[#FAF8F6] border border-slate-200 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-800 flex items-center justify-between">
                  <span>Main Workshop</span>
                  <FaChevronDown className="text-slate-400 text-xs" />
                </div>

                {/* Dropdown Menu Mockup (Looped) */}
                <div className="bg-white border border-slate-200 rounded-xl p-1.5 shadow-md space-y-1 text-xs mt-1">
                  {branchListMock.map((branch, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-colors ${
                        branch.isSelected
                          ? "bg-rose-50 text-slate-900 font-bold"
                          : "text-slate-600 hover:bg-slate-50 font-medium"
                      }`}
                    >
                      {branch.isSelected ? (
                        <FaCheck className="text-primary text-xs shrink-0" />
                      ) : (
                        <span className="w-3 shrink-0" />
                      )}
                      <span>{branch.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience (Years & Months) (Looped) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {experienceFields.map((field, idx) => (
                <div key={idx} className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">{field.label}</label>
                  <div className="bg-[#FAF8F6] border border-slate-200 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-800 flex items-center justify-between">
                    <span>{field.value}</span>
                    <span className="text-[11px] text-slate-400 font-normal">{field.helper}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mode of Transportation & Dress Allocation Date (Looped) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {commuteAndUniformFields.map((item, idx) => {
                const ItemIcon = item.icon;
                const RightIcon = item.rightIcon;
                return (
                  <div key={idx} className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <ItemIcon className="text-slate-400 text-xs" /> {item.label}
                    </label>
                    <div className="bg-[#FAF8F6] border border-slate-200 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-800 flex items-center justify-between">
                      <span>{item.value}</span>
                      {item.badge && (
                        <span className={item.badgeClass}>{item.badge}</span>
                      )}
                      {RightIcon && (
                        <RightIcon className={item.rightIconClass} />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tools Allotted (List) */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <FaWrench className="text-slate-400 text-xs" /> Tools Allotted (List)
              </label>
              <div className="bg-[#FAF8F6] border border-slate-200 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-800">
                OBD-II Diagnostic Scanner, 18V Cordless Impact Drill, 42-Piece Socket Set, Digital Multimeter
              </div>
              <p className="text-[11px] text-slate-500">
                Enter tools/equipment assigned to this staff member for accountability and tracking.
              </p>
            </div>

            {/* Certificates & Documents */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <FaFileAlt className="text-slate-400 text-xs" /> Certificates &amp; Documents
                </label>
                <button
                  type="button"
                  className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-colors"
                >
                  <FaUpload className="text-primary text-xs" /> Upload Certificates
                </button>
              </div>

              {/* Uploaded Certificate Items (Looped) */}
              <div className="flex flex-wrap gap-2 pt-1">
                {sampleCertificates.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-[#FAF8F6] border border-slate-200/80 rounded-xl px-3 py-1.5 text-xs shadow-2xs hover:border-primary/40 transition-colors"
                  >
                    <FaFileAlt className="text-primary text-xs shrink-0" />
                    <span className="font-semibold text-slate-800 text-[11px]">{cert.name}</span>
                    <span className="text-[10px] text-slate-400">({cert.size})</span>
                    <span className="text-slate-400 hover:text-primary cursor-pointer ml-1">
                      <FaExternalLinkAlt className="text-[10px]" />
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-400">
                Supports PDF, JPG, PNG, and WEBP formats with cloud storage encryption.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Value Pillars (Looped) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {staffDetailPillars.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-2.5 shadow-2xs hover:border-primary/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-3">
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
