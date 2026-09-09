import React from "react";
import {
  FaSlidersH,
  FaStar,
  FaCheckCircle,
  FaTrashAlt,
  FaPlus,
  FaGripVertical,
  FaCommentDots,
  FaMobileAlt,
  FaLightbulb,
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const activeCriteriaList = [
  { id: 1, name: "Service Quality", active: true },
  { id: 2, name: "Staff Behavior", active: true },
  { id: 3, name: "Cleanliness", active: true },
  { id: 4, name: "Value for Money", active: true },
  { id: 5, name: "Overall Experience", active: true },
  { id: 6, name: "Turnaround Time", active: true },
  { id: 7, name: "Workmanship & Finishing", active: true },
];

const quickSuggestions = [
  "Pricing Transparency",
  "Workmanship",
  "Customer Communication",
  "Waiting Lounge",
];

const ratingModuleBenefits = [
  {
    icon: FaSlidersH,
    title: "100% Tailored Evaluation Criteria",
    desc: "Create custom review parameters suited to your workshop type — mechanical repairs, denting-painting, or luxury detailing.",
  },
  {
    icon: FaMobileAlt,
    title: "Live WhatsApp Link Synchronization",
    desc: "Active criteria update automatically on the customer's mobile feedback form without generating new links.",
  },
  {
    icon: FaStar,
    title: "Automated Category Score Aggregation",
    desc: "Calculate aggregate customer satisfaction ratings across all enabled categories to pinpoint exact service improvements.",
  },
];

export default function CRRatingModules() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Custom Review Rating Modules
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Customize Service Parameters Customers Rate with{" "}
            <GradientUnderline>Multi-Criteria Feedback</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Move beyond generic 5-star ratings. Define and toggle specific workshop parameters—from Staff Behavior to Turnaround Time—and let customers submit structured feedback effortlessly.
          </p>
        </div>

        {/* Dual Panel Interactive Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Review Rating Modules Settings */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            {/* Header & Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  Active Criteria List
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Drag to reorder. Toggle switches to enable or hide modules on public feedback.
                </p>
              </div>
              <span className="text-xs font-bold text-amber-900 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-200">
                7 Active / 7 Total
              </span>
            </div>

            {/* Criteria List (Looped) */}
            <div className="space-y-3">
              {activeCriteriaList.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-2.5 sm:p-3 bg-[#FAF8F6] border border-slate-200/80 rounded-2xl hover:border-primary/40 transition-colors"
                >
                  <div className="text-slate-400 cursor-grab hover:text-slate-600 px-1">
                    <FaGripVertical className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 w-4">{item.id}.</span>
                  <div className="flex-1 bg-white border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-800 shadow-2xs">
                    {item.name}
                  </div>

                  {/* Toggle Switch */}
                  <div className="flex items-center gap-2">
                    <div className="w-11 h-6 bg-primary rounded-full p-0.5 flex items-center justify-end cursor-pointer shadow-inner">
                      <div className="w-5 h-5 bg-white rounded-full shadow-md" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 hidden sm:inline">Active</span>
                  </div>

                  {/* Delete Button */}
                  <button
                    type="button"
                    aria-label={`Delete ${item.name}`}
                    className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                  >
                    <FaTrashAlt className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add New Criteria Row */}
            <div className="flex gap-2 pt-2">
              <input
                type="text"
                readOnly
                placeholder="Add new criteria (e.g., Turnaround Time)..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs text-slate-700 placeholder-slate-400 focus:outline-none"
              />
              <button
                type="button"
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-2xs"
              >
                <FaPlus className="w-3 h-3" /> Add
              </button>
            </div>

            {/* Quick Suggestions Chips (Looped) */}
            <div className="pt-2 space-y-2 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
                <FaLightbulb className="w-3.5 h-3.5 text-amber-500" />
                <span>Quick suggestions:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {quickSuggestions.map((sug, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium bg-[#F5EFE9] text-slate-700 hover:text-primary hover:bg-orange-100/70 border border-orange-200/60 px-3 py-1 rounded-full cursor-pointer transition-colors"
                  >
                    + {sug}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Live Customer Preview */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <FaStar className="text-amber-500 w-3.5 h-3.5" /> Live Customer Preview
                </h4>
              </div>
              <span className="text-[10px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                Public View
              </span>
            </div>

            <p className="text-[11px] text-slate-500 leading-relaxed">
              This is how the rating section appears to customers on their WhatsApp job card link.
            </p>

            {/* Interactive Stars Rating Categories */}
            <div className="space-y-2.5 divide-y divide-slate-100/80">
              {activeCriteriaList.map((item) => (
                <div key={item.id} className="pt-2 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800">{item.name}</span>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <FaStar key={s} className="w-3.5 h-3.5 cursor-pointer hover:scale-110 transition-transform" />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Optional Remarks Textarea Mockup */}
            <div className="space-y-1.5 pt-2">
              <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
                <FaCommentDots className="text-slate-400" /> Feedback / Remarks
              </span>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-[11px] text-slate-400 italic">
                Customer can write optional feedback here...
              </div>
            </div>

            {/* Overall Calculated Score Card */}
            <div className="bg-[#FAF7F4] border border-orange-200/80 p-3.5 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-900 block">Overall Score</span>
                <span className="text-[10px] text-slate-500">Calculated automatically from 7 categories</span>
              </div>
              <div className="flex items-center gap-1 bg-amber-100/90 text-amber-950 font-black px-2.5 py-1 rounded-xl text-xs border border-amber-300/80 shadow-2xs">
                <FaStar className="text-amber-500" /> 5.0 / 5.0
              </div>
            </div>
          </div>
        </div>

        {/* 3 Value Pillars (Looped) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {ratingModuleBenefits.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-2.5 shadow-2xs hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-primary flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{feat.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
