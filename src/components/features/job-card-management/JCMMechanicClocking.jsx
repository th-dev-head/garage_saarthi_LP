"use client";

import React, { useState, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaRedo,
  FaCheckCircle,
  FaClock,
  FaCoffee,
  FaBoxes,
  FaHourglassHalf,
  FaTools,
  FaUserCheck,
  FaChartLine,
  FaInfoCircle
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const demoClockingTasks = [
  {
    id: "task-1",
    jobCardNumber: "JC-2026-1042",
    vehicle: "Hyundai Creta 1.5 - MH 02 AB 9988",
    serviceName: "Front Brake Pad Replacement & Caliper Greasing",
    mechanic: "Rajesh Sharma (Lead Brake Tech)",
    status: "In-Progress",
    activeTime: "00:45:12",
    breakTime: "00:15:00",
    breakReason: "Lunch Break",
    breakIcon: "🍱",
    efficiency: 94
  },
  {
    id: "task-2",
    jobCardNumber: "JC-2026-1048",
    vehicle: "Honda City 1.5 V - DL 04 CD 1234",
    serviceName: "Synthetic Engine Oil Service & Filter Replacement",
    mechanic: "Amit Patel (Senior Mechanic)",
    status: "Paused",
    activeTime: "00:32:40",
    breakTime: "00:20:15",
    breakReason: "Waiting for Parts",
    breakIcon: "📦",
    efficiency: 91
  },
  {
    id: "task-3",
    jobCardNumber: "JC-2026-1055",
    vehicle: "Maruti Swift ZXI - GJ 01 XY 7721",
    serviceName: "Front Suspension Bushing & Lower Arm Overhaul",
    mechanic: "Suresh Kumar (Suspension Specialist)",
    status: "Completed",
    activeTime: "01:18:25",
    breakTime: "00:10:00",
    breakReason: "Tea Break",
    breakIcon: "☕",
    efficiency: 96
  }
];

const pauseReasons = [
  { label: "Lunch Break", icon: "🍱", desc: "Afternoon meal pause" },
  { label: "Tea Break", icon: "☕", desc: "Short refreshment break" },
  { label: "Waiting for Parts", icon: "📦", desc: "Storekeeper parts procurement" },
  { label: "Waiting for Approval", icon: "⏳", desc: "Customer estimation signoff" },
  { label: "Assisting Another Job", icon: "🤝", desc: "Bay cross-support" },
  { label: "Tool Issue", icon: "🔧", desc: "Pneumatic or lift setup" }
];

const productivityRows = [
  {
    name: "Rajesh Sharma",
    role: "Brake & Wheel Tech",
    jobs: 5,
    activeHours: "6h 45m",
    breakHours: "45m",
    productivity: "90%",
    status: "Active Working"
  },
  {
    name: "Amit Patel",
    role: "Senior Engine Tech",
    jobs: 6,
    activeHours: "7h 10m",
    breakHours: "35m",
    productivity: "94%",
    status: "On Break (Parts)"
  },
  {
    name: "Suresh Kumar",
    role: "Suspension Specialist",
    jobs: 4,
    activeHours: "6h 05m",
    breakHours: "50m",
    productivity: "88%",
    status: "Completed All"
  }
];

const clockingPillars = [
  {
    icon: FaClock,
    title: "Task-Level Work & Labour Clocking",
    desc: "Start and track live stopwatch timers for each labour item on a job card. Capture exact technician minutes to evaluate repair times vs standard estimates."
  },
  {
    icon: FaCoffee,
    title: "Categorized Break & Pause Logging",
    desc: "Pause jobs with 1-click for lunch, tea, parts waiting, or customer approval. Break time is isolated so mechanic working hours remain 100% accurate."
  },
  {
    icon: FaTools,
    title: "Global Floating Clocking Bar",
    desc: "Mechanics can check parts or view other job cards while a floating bottom bar keeps their live timer accessible for 1-tap Break, Resume, and Finish."
  },
  {
    icon: FaChartLine,
    title: "Technician Productivity & Incentive Matrix",
    desc: "Automated calculation of active work hours, break patterns, and labor efficiency percentages to power transparent performance bonuses and payroll."
  }
];

export default function JCMMechanicClocking() {
  const [selectedTaskId, setSelectedTaskId] = useState("task-1");
  const [isPausedState, setIsPausedState] = useState(false);
  const [selectedBreakReason, setSelectedBreakReason] = useState(pauseReasons[0].label);
  const [showBreakModal, setShowBreakModal] = useState(false);
  const [finishedNotification, setFinishedNotification] = useState(false);

  const activeTask = demoClockingTasks.find((t) => t.id === selectedTaskId) || demoClockingTasks[0];

  const handleToggleBreak = (reason) => {
    setSelectedBreakReason(reason);
    setIsPausedState(true);
    setShowBreakModal(false);
  };

  const handleResume = () => {
    setIsPausedState(false);
  };

  const handleFinish = () => {
    setFinishedNotification(true);
    setTimeout(() => setFinishedNotification(false), 3500);
  };

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <FaClock className="w-3 h-3" /> Mechanic Clocking &amp; Live Time Tracking
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Precision Work, Break &amp;{" "}
            <GradientUnderline>Labour Time Tracking</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate repair bay guesswork and track exact technician minutes on every job card task. Capture live work sessions, record categorized pauses (lunch, tea, waiting for parts), and measure real mechanic productivity.
          </p>
        </div>

        {/* Interactive Dual-Panel Showcase */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          {/* Top Bar */}
          <div className="p-4 md:p-6 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold">
                <FaClock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold">Mechanic Work Timer &amp; Productivity Engine</h3>
                <p className="text-xs text-slate-400">Live task stopwatch with automated break deduction</p>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-2 bg-slate-800 px-3.5 py-1.5 rounded-xl border border-slate-700 text-xs font-semibold">
              <span className={`w-2.5 h-2.5 rounded-full ${isPausedState ? "bg-amber-400 animate-pulse" : "bg-emerald-400 animate-ping"}`} />
              <span className={isPausedState ? "text-amber-300" : "text-emerald-300"}>
                {isPausedState ? `On Break: ${selectedBreakReason}` : "Live Active Session"}
              </span>
            </div>
          </div>

          {/* Dual Panel Body */}
          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Panel: Live Job Clocking Controls (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Task Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Select Active Job Card Labour Task
                </label>
                <div className="space-y-2">
                  {demoClockingTasks.map((task) => (
                    <button
                      key={task.id}
                      type="button"
                      onClick={() => {
                        setSelectedTaskId(task.id);
                        setIsPausedState(task.status === "Paused");
                        setFinishedNotification(false);
                      }}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        selectedTaskId === task.id
                          ? "border-primary bg-primary/5 ring-2 ring-primary/20 shadow-sm"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="min-w-0 pr-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-primary font-mono">#{task.jobCardNumber}</span>
                          <span className="text-[11px] text-slate-500 font-medium truncate">• {task.vehicle}</span>
                        </div>
                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm mt-0.5 truncate">
                          {task.serviceName}
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1">
                          <FaUserCheck className="w-3 h-3 text-slate-400" /> {task.mechanic}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="font-mono font-bold text-xs sm:text-sm text-slate-800 block">
                          {task.activeTime}
                        </span>
                        <span className="text-[10px] text-slate-500 block">
                          Break: {task.breakTime}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Stopwatch & Action Bar */}
              <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-5 shadow-md">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Live Task Stopwatch
                    </span>
                  </div>
                  <span className="text-xs font-mono text-primary-light bg-primary/20 px-2.5 py-0.5 rounded-full font-semibold">
                    #{activeTask.jobCardNumber}
                  </span>
                </div>

                {/* Big Timer Numbers */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                      Active Working Time
                    </span>
                    <span className="font-mono text-2xl sm:text-3xl font-black text-emerald-400 block mt-1">
                      {activeTask.activeTime}
                    </span>
                    <span className="text-[10px] text-emerald-500/80 block mt-0.5">
                      Billed to Labour
                    </span>
                  </div>

                  <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                      Break &amp; Pause Time
                    </span>
                    <span className="font-mono text-2xl sm:text-3xl font-black text-amber-400 block mt-1">
                      {activeTask.breakTime}
                    </span>
                    <span className="text-[10px] text-amber-500/80 block mt-0.5">
                      {isPausedState ? selectedBreakReason : "Isolated from Work"}
                    </span>
                  </div>
                </div>

                {/* Interactive Clocking Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  {isPausedState ? (
                    <button
                      type="button"
                      onClick={handleResume}
                      className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
                    >
                      <FaRedo className="w-3 h-3" /> Resume Work
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowBreakModal(true)}
                      className="py-2.5 px-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
                    >
                      <FaPause className="w-3 h-3" /> Take Break
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={handleFinish}
                    className="py-2.5 px-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
                  >
                    <FaCheckCircle className="w-3 h-3" /> Finish Task
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowBreakModal(true)}
                    className="py-2.5 px-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer col-span-2 sm:col-span-1"
                  >
                    <FaCoffee className="w-3 h-3 text-amber-400" /> Break Reasons
                  </button>
                </div>

                {/* Break Selection Modal / Subpanel */}
                {showBreakModal && (
                  <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 space-y-3 animate-fadeIn">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-amber-300 flex items-center gap-1.5">
                        <FaCoffee className="w-3.5 h-3.5" /> Select Reason for Work Pause:
                      </span>
                      <button
                        type="button"
                        onClick={() => setShowBreakModal(false)}
                        className="text-slate-400 hover:text-white text-[11px] cursor-pointer"
                      >
                        ✕ Close
                      </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {pauseReasons.map((reason, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleToggleBreak(reason.label)}
                          className="p-2 rounded-lg bg-slate-900 hover:bg-amber-950/60 border border-slate-700 hover:border-amber-500/50 text-left transition-all cursor-pointer text-xs"
                        >
                          <span className="text-base mr-1">{reason.icon}</span>
                          <span className="font-semibold text-slate-200 text-[11px]">{reason.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {finishedNotification && (
                  <div className="p-3 bg-emerald-950/90 border border-emerald-600/60 rounded-xl text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
                    <FaCheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      Task marked <strong>Completed</strong>! Active duration {activeTask.activeTime} logged to technician work history.
                    </span>
                  </div>
                )}
              </div>

              {/* Floating Bottom Bar Mockup Preview */}
              <div className="p-4 bg-white rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Global Persistent Clocking Bar (Appears across all app pages)
                </span>
                <div className="p-3 bg-slate-900 text-white rounded-xl flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                    <div className="min-w-0">
                      <span className="font-bold text-primary-light">#{activeTask.jobCardNumber}</span>
                      <span className="text-slate-400 text-[11px] truncate block sm:inline sm:ml-1.5">
                        {activeTask.serviceName}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-mono font-bold text-emerald-400 text-xs">{activeTask.activeTime}</span>
                    <span className="text-[10px] bg-slate-800 border border-slate-700 px-2 py-0.5 rounded text-slate-300 font-semibold">
                      1-Tap Break
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel: Mechanic Productivity Matrix (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-slate-200/90 p-5 sm:p-6 rounded-2xl space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Mechanic Productivity Matrix</h4>
                    <p className="text-[10px] text-slate-500">Live active vs pause hours aggregation</p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    Today&apos;s Shift
                  </span>
                </div>

                {/* Productivity List */}
                <div className="space-y-3">
                  {productivityRows.map((mech, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-bold text-slate-900 text-xs">{mech.name}</h5>
                          <span className="text-[10px] text-slate-500">{mech.role}</span>
                        </div>
                        <span className="text-xs font-bold font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                          {mech.productivity} Eff.
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] pt-1 border-t border-slate-200/60">
                        <div>
                          <span className="text-slate-400 block">Jobs Done</span>
                          <span className="font-bold text-slate-800">{mech.jobs}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block">Active Work</span>
                          <span className="font-bold text-emerald-600 font-mono">{mech.activeHours}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block">Total Break</span>
                          <span className="font-bold text-amber-600 font-mono">{mech.breakHours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Info Note */}
                <div className="p-3 bg-[#EFE9E7] rounded-xl text-[11px] text-slate-700 flex items-start gap-2">
                  <FaInfoCircle className="text-primary w-3.5 h-3.5 mt-0.5 shrink-0" />
                  <span>
                    Pause intervals (e.g. waiting for spare parts or customer phone approval) are mathematically subtracted from mechanic active hours for accurate efficiency audits.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clockingPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-primary flex items-center justify-center font-bold shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">{pillar.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
