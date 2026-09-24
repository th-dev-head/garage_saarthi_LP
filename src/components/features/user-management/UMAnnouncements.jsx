"use client";

import React, { useState } from "react";
import {
  FaBullhorn,
  FaBell,
  FaUsers,
  FaShieldAlt,
  FaCheckCircle,
  FaPaperPlane,
  FaEye,
  FaClock,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function UMAnnouncements() {
  const [activeTab, setActiveTab] = useState("all");
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Diwali Extended Hours & Technician Incentive Scheme",
      category: "Incentives & Payroll",
      priority: "HIGH",
      audience: "All Workshop Staff",
      date: "Today, 10:30 AM",
      content: "All service bays will operate until 8:00 PM next week. Every mechanic completing ≥ 5 major services daily receives an extra ₹500/day cash bonus.",
      views: 14,
      totalStaff: 16,
      author: "Workshop Manager",
    },
    {
      id: 2,
      title: "Mandatory Safety Gear (Goggles & Steel-Toe Boots) in Bay 3",
      category: "Safety & Compliance",
      priority: "URGENT",
      audience: "Mechanics & Denters",
      date: "Yesterday",
      content: "Strict compliance required during welding, grinding, and underbody chassis work. Zero tolerance for safety violations.",
      views: 12,
      totalStaff: 12,
      author: "Floor Supervisor",
    },
    {
      id: 3,
      title: "New OBD2 Multi-Brand Diagnostic Scanner Training",
      category: "Training & Workshop",
      priority: "NORMAL",
      audience: "Electricians & Senior Techs",
      date: "18 Sept 2026",
      content: "Hands-on session with the new Launch/Autel scanner on Saturday at 5:30 PM in Training Bay 1.",
      views: 8,
      totalStaff: 8,
      author: "Head of Diagnostics",
    },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newPriority, setNewPriority] = useState("NORMAL");
  const [newAudience, setNewAudience] = useState("All Staff");
  const [isComposing, setIsComposing] = useState(false);

  const handlePublish = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newObj = {
      id: Date.now(),
      title: newTitle,
      category: "General Announcement",
      priority: newPriority,
      audience: newAudience,
      date: "Just now",
      content: newContent || "Important notice for the workshop team.",
      views: 1,
      totalStaff: 16,
      author: "Admin",
    };

    setAnnouncements([newObj, ...announcements]);
    setNewTitle("");
    setNewContent("");
    setIsComposing(false);
  };

  const filteredAnnouncements =
    activeTab === "all"
      ? announcements
      : activeTab === "urgent"
      ? announcements.filter((a) => a.priority === "URGENT" || a.priority === "HIGH")
      : announcements.filter((a) => a.priority === "NORMAL");

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Internal Workshop Communications
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4 leading-tight">
            Staff Notices &amp; <GradientUnderline>Internal Announcements</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Broadcast important updates, safety protocols, festival holiday rosters, and incentive schemes directly to your mechanics&apos; mobile devices with real-time read receipts.
          </p>
        </div>

        {/* 2-Column Interactive Notice Board Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Live Notice Board (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-100 space-y-4">
            
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-primary flex items-center justify-center">
                  <FaBullhorn className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Workshop Notice Board</h3>
                  <span className="text-[11px] text-slate-500">Live feed broadcasted to mobile apps</span>
                </div>
              </div>

              {/* Priority Filters */}
              <div className="flex gap-1 bg-slate-100 p-1 rounded-lg text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveTab("all")}
                  className={`px-3 py-1 rounded-md transition-all ${
                    activeTab === "all" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  All ({announcements.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("urgent")}
                  className={`px-3 py-1 rounded-md transition-all ${
                    activeTab === "urgent" ? "bg-white text-rose-600 shadow-sm font-bold" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Urgent &amp; High
                </button>
              </div>
            </div>

            {/* Announcements List */}
            <div className="space-y-3">
              {filteredAnnouncements.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-slate-50 hover:border-primary/40 transition-all space-y-2"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                          item.priority === "URGENT"
                            ? "bg-rose-100 text-rose-800 border border-rose-200"
                            : item.priority === "HIGH"
                            ? "bg-amber-100 text-amber-800 border border-amber-200"
                            : "bg-blue-100 text-blue-800 border border-blue-200"
                        }`}
                      >
                        {item.priority}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">{item.category}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      <FaClock className="text-[9px]" /> {item.date}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 leading-snug">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.content}</p>

                  <div className="flex flex-wrap items-center justify-between text-[11px] pt-2 border-t border-slate-200/60 text-slate-500">
                    <span className="flex items-center gap-1 font-medium">
                      <FaUsers className="text-slate-400 text-xs" /> Target: <strong>{item.audience}</strong>
                    </span>
                    <span className="flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <FaEye className="text-[10px]" /> {item.views} / {item.totalStaff} Acknowledged
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Quick Notice Creator (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <FaBell /> Broadcast New Staff Notice
                </span>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-slate-300">
                  Instant Push &bull; Kiosk Alert
                </span>
              </div>

              <form onSubmit={handlePublish} className="space-y-3 text-xs">
                <div>
                  <label className="text-slate-300 block mb-1 font-medium">Notice Title *</label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Workshop Timing Change on Saturday"
                    className="w-full bg-slate-800/90 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder:text-slate-500 font-medium focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-300 block mb-1 font-medium">Priority Level</label>
                    <select
                      value={newPriority}
                      onChange={(e) => setNewPriority(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-2 text-white font-medium focus:outline-none"
                    >
                      <option value="NORMAL">Normal Notice</option>
                      <option value="HIGH">High Priority</option>
                      <option value="URGENT">Urgent / Safety Alert</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-slate-300 block mb-1 font-medium">Target Audience</label>
                    <select
                      value={newAudience}
                      onChange={(e) => setNewAudience(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-2 text-white font-medium focus:outline-none"
                    >
                      <option value="All Staff">All Workshop Staff</option>
                      <option value="Mechanics Only">Mechanics &amp; Technicians</option>
                      <option value="Advisors Only">Service Advisors</option>
                      <option value="Bay 1 & 2">Specific Bays</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-slate-300 block mb-1 font-medium">Notice Details / Instructions</label>
                  <textarea
                    rows={3}
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder="Describe the instructions, schedule change, or safety notice clearly..."
                    className="w-full bg-slate-800/90 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder:text-slate-500 font-medium focus:outline-none focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FaPaperPlane className="text-xs" />
                  <span>Send Broadcast to Staff Phones</span>
                </button>
              </form>
            </div>

            <div className="pt-4 border-t border-white/10 text-[11px] text-slate-400 flex items-center gap-2">
              <FaCheckCircle className="text-emerald-400 text-xs shrink-0" />
              <span>Broadcasts alert mechanics on the GarageSaarthi Mobile App and in-bay workshop screens instantly.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
