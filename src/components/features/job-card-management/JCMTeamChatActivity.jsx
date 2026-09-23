import React from "react";
import {
  FaComments,
  FaAt,
  FaPaperPlane,
  FaSearch,
  FaTimes,
  FaSyncAlt,
  FaUserCheck,
  FaShieldAlt,
  FaBell,
  FaWrench,
  FaCheckCircle,
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const teamActivities = [
  {
    type: "comment",
    initials: "PA",
    avatarBg: "bg-orange-100 text-orange-800 border border-orange-200",
    name: "Partner",
    role: "Admin",
    time: "57m ago",
    mention: "@Detailer",
    text: "hy, please check the front bumper paint finishing before final wash.",
  },
  {
    type: "comment",
    initials: "PA",
    avatarBg: "bg-orange-100 text-orange-800 border border-orange-200",
    name: "Partner",
    role: "Admin",
    time: "51m ago",
    text: "👍 Parts arrived from main warehouse.",
  },
  {
    type: "activity",
    icon: FaSyncAlt,
    iconColor: "text-amber-500",
    text: "Apni Duniyya changed status from Pending to In Progress",
    time: "50m ago",
  },
  {
    type: "comment",
    initials: "AD",
    avatarBg: "bg-amber-100 text-amber-900 border border-amber-200",
    name: "Apni Duniyya",
    role: "Admin",
    time: "50m ago",
    text: "Customer approved additional brake pad replacement via WhatsApp.",
  },
  {
    type: "comment",
    initials: "DE",
    avatarBg: "bg-purple-100 text-purple-800 border border-purple-200",
    name: "Detailer",
    role: "Detailer",
    time: "35m ago",
    text: "hello, ceramic coating layer 1 applied. Curing for 2 hours.",
  },
];

const mentionCandidates = [
  { initials: "AD", name: "Apni Duniyya", role: "Admin", isAssigned: false },
  { initials: "PA", name: "Partner", role: "Admin", isAssigned: false },
  { initials: "DE", name: "Detailer", role: "Detailer", isAssigned: true },
];

const chatBenefits = [
  {
    icon: FaComments,
    title: "In-Context Job Card Discussions",
    desc: "Keep all technician notes, spare part verifications, and repair queries attached directly to the specific vehicle job card.",
  },
  {
    icon: FaAt,
    title: "@Team Member Mentions",
    desc: "Type @ to mention assigned mechanics, service advisors, or administrators with instant highlight notifications.",
  },
  {
    icon: FaSyncAlt,
    title: "Unified Live Activity Audit",
    desc: "Status transitions (Pending ➔ In Progress ➔ Completed) and technician assignments appear seamlessly in the conversation timeline.",
  },
  {
    icon: FaShieldAlt,
    title: "100% Private Internal Collaboration",
    desc: "Staff discussions stay secure within your workshop team and are never visible on public customer WhatsApp links.",
  },
];

export default function JCMTeamChatActivity() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Internal Collaboration &amp; Chat
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Job Card Team Chat, @Mentions &amp;{" "}
            <GradientUnderline>Live Activity Timeline</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Empower service advisors, mechanics, and managers to communicate seamlessly inside every repair order. Mention teammates with @, share instant updates, and track automated status changes in one unified stream.
          </p>
        </div>

        {/* Interactive Side Drawer Mockup */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm max-w-2xl mx-auto space-y-5">
          {/* Drawer Top Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-orange-100/70 text-primary flex items-center justify-center text-sm">
                <FaComments />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-slate-900">Activity &amp; Discussion</h3>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded-full border border-slate-200">
                    6
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium">Job Card #AP2026-00041</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="w-7 h-7 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors"
                title="Search Activity"
              >
                <FaSearch className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                className="w-7 h-7 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors"
                title="Close"
              >
                <FaTimes className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Timeline Messages Stream */}
          <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
            {teamActivities.map((act, idx) => {
              if (act.type === "activity") {
                const ActIcon = act.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 py-1.5 px-3 bg-amber-50/60 border border-amber-200/60 rounded-xl text-[11px] text-slate-700"
                  >
                    <ActIcon className={`${act.iconColor} text-xs shrink-0 animate-spin`} />
                    <span className="flex-1 font-medium">{act.text}</span>
                    <span className="text-[10px] text-slate-400 shrink-0">{act.time}</span>
                  </div>
                );
              }

              return (
                <div
                  key={idx}
                  className="flex gap-3 p-3 bg-[#FAF8F6] border border-slate-200/80 rounded-2xl hover:border-primary/40 transition-colors"
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 ${act.avatarBg}`}
                  >
                    {act.initials}
                  </div>
                  <div className="flex-1 space-y-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-bold text-slate-900">{act.name}</span>
                        <span className="text-[9px] font-semibold text-slate-500 bg-white border border-slate-200 px-1.5 py-0.2 rounded-md">
                          {act.role}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400">{act.time}</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed break-words">
                      {act.mention && (
                        <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 mr-1 text-[11px] font-bold rounded-md bg-orange-100 text-primary border border-orange-200">
                          <FaAt className="text-[9px]" />
                          {act.mention.slice(1)}
                        </span>
                      )}
                      {act.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Floating @Mention Team Member Autocomplete Mockup */}
          <div className="bg-white border border-slate-200 rounded-2xl p-2 shadow-lg space-y-1 relative z-10">
            <div className="px-2.5 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
              Mention Team Member
            </div>
            {mentionCandidates.map((m, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between p-2 rounded-xl text-xs cursor-pointer transition-colors ${
                  m.isAssigned
                    ? "bg-orange-50/80 text-primary font-bold border border-orange-200/60"
                    : "hover:bg-slate-50 text-slate-800"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-bold">
                    {m.initials}
                  </div>
                  <span className="font-semibold text-xs">{m.name}</span>
                  {m.isAssigned && (
                    <span className="text-[9px] bg-blue-100 text-blue-700 font-bold px-1.5 py-0.2 rounded">
                      Assigned
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-slate-400 font-medium">{m.role}</span>
              </div>
            ))}
          </div>

          {/* Comment Input Box Mockup */}
          <div className="border border-slate-200 rounded-2xl p-2.5 bg-[#FAF8F6] space-y-2">
            <div className="text-xs text-slate-800 font-mono pl-1">
              <span className="text-primary font-bold">@D</span>
              <span className="animate-pulse">|</span>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-slate-200/70">
              <button
                type="button"
                className="text-xs font-bold text-primary flex items-center gap-1 hover:underline pl-1"
              >
                <FaAt className="text-xs" /> Mention
              </button>
              <button
                type="button"
                className="bg-[linear-gradient(92.52deg,#B22F0E_2.1%,#D73D17_105.99%)] hover:opacity-95 text-white text-xs font-bold px-4 py-1.5 rounded-xl flex items-center gap-1.5 shadow-2xs"
              >
                <span>Send</span>
                <FaPaperPlane className="text-[10px]" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Value Pillars (Looped) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {chatBenefits.map((feat, idx) => {
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
