"use client";

import React, { useState, useEffect } from "react";
import {
  FaStopwatch,
  FaPlay,
  FaPause,
  FaCheckCircle,
  FaClock,
  FaWrench,
  FaUserCog,
  FaSyncAlt,
  FaChartPie,
  FaPauseCircle,
  FaExclamationTriangle,
  FaCheckDouble,
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function MCInteractiveDemo() {
  const [activeTaskIndex, setActiveTaskIndex] = useState(0);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Front Brake Pad & Disc Rotor Overhaul",
      mechanic: "Ramesh Sharma",
      bay: "Bay 2 (Two-Post Lift)",
      estMinutes: 90,
      activeSeconds: 4920, // 1h 22m
      pauseSeconds: 480, // 8m
      status: "IN_PROGRESS", // "NOT_STARTED" | "IN_PROGRESS" | "PAUSED" | "COMPLETED"
      pauseReason: "",
    },
    {
      id: 2,
      name: "Full Synthetic Engine Oil & Filter Change",
      mechanic: "Ramesh Sharma",
      bay: "Bay 2 (Two-Post Lift)",
      estMinutes: 45,
      activeSeconds: 2280, // 38m
      pauseSeconds: 120, // 2m
      status: "COMPLETED",
      pauseReason: "",
    },
    {
      id: 3,
      name: "Lower Arm Bushing & Link Rod Replacement",
      mechanic: "Ramesh Sharma",
      bay: "Bay 2 (Two-Post Lift)",
      estMinutes: 120,
      activeSeconds: 0,
      pauseSeconds: 0,
      status: "NOT_STARTED",
      pauseReason: "",
    },
  ]);

  const [isRunning, setIsRunning] = useState(true);
  const [selectedPauseReason, setSelectedPauseReason] = useState("Parts Waiting from Store");

  // Timer tick for active task
  useEffect(() => {
    let interval = null;
    const currentTask = tasks[activeTaskIndex];
    if (isRunning && currentTask && currentTask.status === "IN_PROGRESS") {
      interval = setInterval(() => {
        setTasks((prev) =>
          prev.map((t, idx) =>
            idx === activeTaskIndex ? { ...t, activeSeconds: t.activeSeconds + 1 } : t
          )
        );
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, activeTaskIndex, tasks]);

  const currentTask = tasks[activeTaskIndex];

  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleStart = () => {
    setTasks((prev) =>
      prev.map((t, idx) =>
        idx === activeTaskIndex
          ? { ...t, status: "IN_PROGRESS", pauseReason: "" }
          : t
      )
    );
    setIsRunning(true);
  };

  const handlePause = () => {
    setTasks((prev) =>
      prev.map((t, idx) =>
        idx === activeTaskIndex
          ? {
              ...t,
              status: "PAUSED",
              pauseReason: selectedPauseReason,
              pauseSeconds: t.pauseSeconds + 60,
            }
          : t
      )
    );
    setIsRunning(false);
  };

  const handleComplete = () => {
    setTasks((prev) =>
      prev.map((t, idx) =>
        idx === activeTaskIndex
          ? { ...t, status: "COMPLETED", pauseReason: "" }
          : t
      )
    );
    setIsRunning(false);
  };

  const resetSimulator = () => {
    setTasks([
      {
        id: 1,
        name: "Front Brake Pad & Disc Rotor Overhaul",
        mechanic: "Ramesh Sharma",
        bay: "Bay 2 (Two-Post Lift)",
        estMinutes: 90,
        activeSeconds: 4920,
        pauseSeconds: 480,
        status: "IN_PROGRESS",
        pauseReason: "",
      },
      {
        id: 2,
        name: "Full Synthetic Engine Oil & Filter Change",
        mechanic: "Ramesh Sharma",
        bay: "Bay 2 (Two-Post Lift)",
        estMinutes: 45,
        activeSeconds: 2280,
        pauseSeconds: 120,
        status: "COMPLETED",
        pauseReason: "",
      },
      {
        id: 3,
        name: "Lower Arm Bushing & Link Rod Replacement",
        mechanic: "Ramesh Sharma",
        bay: "Bay 2 (Two-Post Lift)",
        estMinutes: 120,
        activeSeconds: 0,
        pauseSeconds: 0,
        status: "NOT_STARTED",
        pauseReason: "",
      },
    ]);
    setActiveTaskIndex(0);
    setIsRunning(true);
  };

  // Metrics across all tasks
  const totalActive = tasks.reduce((sum, t) => sum + t.activeSeconds, 0);
  const totalPause = tasks.reduce((sum, t) => sum + t.pauseSeconds, 0);
  const totalElapsed = totalActive + totalPause;
  const overallEfficiency =
    totalElapsed > 0 ? ((totalActive / totalElapsed) * 100).toFixed(1) : "100";
  const completedTasksCount = tasks.filter((t) => t.status === "COMPLETED").length;

  return (
    <section id="interactive-demo" className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center scroll-mt-20">
      <div className="mx-auto max-w-full lg:max-w-5xl 2xl:max-w-full w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Live Software Simulation
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4 leading-tight">
            Try the <GradientUnderline>Mechanic Bay Stopwatch</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Experience our 1-tap technician stopwatch: switch between job tasks, record parts-waiting pauses, and track real-time efficiency metrics instantly.
          </p>
        </div>

        {/* Modal Simulator Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden text-slate-900">
          
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70 gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-primary flex items-center justify-center">
                <FaStopwatch className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 leading-tight">
                  Mechanic Bay Clocking &bull; Bay #2
                </h3>
                <p className="text-[11px] text-slate-500">
                  Vehicle: MH 02 CK 9821 (Hyundai Creta) &bull; Job Card #JC-2026-9041
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                Technician: Ramesh Sharma
              </span>
              <button
                type="button"
                onClick={resetSimulator}
                title="Reset Simulator"
                className="p-2 rounded-full text-slate-400 hover:text-primary transition-colors"
              >
                <FaSyncAlt className="text-xs" />
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6 text-xs">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* Left Column: Task Selector & Live Stopwatch (7 Cols) */}
              <div className="md:col-span-7 space-y-5">
                
                {/* Task List Switcher */}
                <div className="space-y-2">
                  <span className="font-bold text-slate-900 block text-xs">Assigned Services on Job Card</span>
                  <div className="space-y-2">
                    {tasks.map((task, idx) => (
                      <button
                        key={task.id}
                        type="button"
                        onClick={() => {
                          setActiveTaskIndex(idx);
                          setIsRunning(task.status === "IN_PROGRESS");
                        }}
                        className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                          activeTaskIndex === idx
                            ? "bg-orange-50/70 border-primary shadow-sm"
                            : "bg-slate-50 border-slate-200 hover:bg-slate-100/70"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] ${
                              task.status === "COMPLETED"
                                ? "bg-emerald-100 text-emerald-800"
                                : task.status === "IN_PROGRESS"
                                ? "bg-amber-100 text-amber-800"
                                : "bg-slate-200 text-slate-600"
                            }`}
                          >
                            {task.status === "COMPLETED" ? "✓" : idx + 1}
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 block text-xs">{task.name}</span>
                            <span className="text-[10px] text-slate-500">
                              Est: {task.estMinutes} mins &bull; Logged: {Math.round(task.activeSeconds / 60)} mins
                            </span>
                          </div>
                        </div>

                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            task.status === "COMPLETED"
                              ? "bg-emerald-100 text-emerald-800"
                              : task.status === "IN_PROGRESS"
                              ? "bg-amber-100 text-amber-800 animate-pulse"
                              : task.status === "PAUSED"
                              ? "bg-rose-100 text-rose-800"
                              : "bg-slate-200 text-slate-600"
                          }`}
                        >
                          {task.status.replace("_", " ")}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Live Stopwatch Display Card */}
                <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-inner space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        ACTIVE SERVICE TIMER
                      </span>
                      <h4 className="text-sm font-bold text-white mt-0.5">{currentTask.name}</h4>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        currentTask.status === "IN_PROGRESS"
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                          : currentTask.status === "PAUSED"
                          ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                          : "bg-slate-700 text-slate-300"
                      }`}
                    >
                      {currentTask.status}
                    </span>
                  </div>

                  {/* Main Big Timer */}
                  <div className="text-center py-2">
                    <p className="text-4xl sm:text-5xl font-mono font-black tracking-widest text-emerald-400">
                      {formatTime(currentTask.activeSeconds)}
                    </p>
                    {currentTask.status === "PAUSED" && currentTask.pauseReason && (
                      <span className="text-xs text-rose-300 mt-1 inline-flex items-center gap-1 font-semibold">
                        <FaExclamationTriangle className="text-[10px]" /> Paused: {currentTask.pauseReason}
                      </span>
                    )}
                  </div>

                  {/* Stopwatch Action Controls */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {currentTask.status !== "IN_PROGRESS" && currentTask.status !== "COMPLETED" && (
                      <button
                        type="button"
                        onClick={handleStart}
                        className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow transition-all"
                      >
                        <FaPlay className="text-[10px]" /> Clock In / Start
                      </button>
                    )}

                    {currentTask.status === "IN_PROGRESS" && (
                      <>
                        <button
                          type="button"
                          onClick={handlePause}
                          className="flex-1 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow transition-all"
                        >
                          <FaPause className="text-[10px]" /> Pause Timer
                        </button>
                        <button
                          type="button"
                          onClick={handleComplete}
                          className="flex-1 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow transition-all"
                        >
                          <FaCheckDouble className="text-[10px]" /> Mark Completed
                        </button>
                      </>
                    )}

                    {currentTask.status === "PAUSED" && (
                      <>
                        <button
                          type="button"
                          onClick={handleStart}
                          className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow transition-all"
                        >
                          <FaPlay className="text-[10px]" /> Resume Work
                        </button>
                        <button
                          type="button"
                          onClick={handleComplete}
                          className="flex-1 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow transition-all"
                        >
                          <FaCheckDouble className="text-[10px]" /> Mark Completed
                        </button>
                      </>
                    )}

                    {currentTask.status === "COMPLETED" && (
                      <div className="w-full text-center py-1 text-emerald-400 font-bold flex items-center justify-center gap-1.5">
                        <FaCheckCircle /> Task Completed &bull; Ready for Inspection
                      </div>
                    )}
                  </div>

                  {/* Pause Reason Selector */}
                  {currentTask.status === "IN_PROGRESS" && (
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                      <span>Select Pause Reason:</span>
                      <select
                        value={selectedPauseReason}
                        onChange={(e) => setSelectedPauseReason(e.target.value)}
                        className="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-white text-[11px] focus:outline-none"
                      >
                        <option>Parts Waiting from Store</option>
                        <option>Lathe Machining Outsourced</option>
                        <option>Customer Approval Pending</option>
                        <option>Tea / Lunch Break</option>
                      </select>
                    </div>
                  )}

                </div>

              </div>

              {/* Right Column: Real-Time Productivity & KPI Dashboard (5 Cols) */}
              <div className="md:col-span-5 bg-slate-50 rounded-2xl border border-slate-200/90 p-5 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                    <FaChartPie className="text-primary" /> Daily Technician KPI Matrix
                  </span>
                  <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    High Performer
                  </span>
                </div>

                {/* Efficiency Big Metric */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">
                    Productivity Efficiency %
                  </span>
                  <p className="text-3xl font-black text-primary mt-1">{overallEfficiency}%</p>
                  <span className="text-[10px] text-slate-500 block mt-1">
                    Active Wrench Time vs Total Elapsed Bay Time
                  </span>
                </div>

                {/* Metric Slices */}
                <div className="space-y-2.5">
                  <div className="bg-white p-3 rounded-xl border border-slate-200 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">Total Active Working Time</span>
                      <span className="text-[10px] text-slate-500">Pure billable wrench hours</span>
                    </div>
                    <span className="font-mono font-bold text-emerald-700 text-xs">
                      {Math.round(totalActive / 60)} mins
                    </span>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-slate-200 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">Total Pause / Idle Time</span>
                      <span className="text-[10px] text-slate-500">Parts waiting &amp; break logs</span>
                    </div>
                    <span className="font-mono font-bold text-rose-600 text-xs">
                      {Math.round(totalPause / 60)} mins
                    </span>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-slate-200 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">Tasks Completed</span>
                      <span className="text-[10px] text-slate-500">Job card service units</span>
                    </div>
                    <span className="font-bold text-slate-900 text-xs">
                      {completedTasksCount} / {tasks.length}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 text-center">
                  <span className="text-[11px] text-slate-500">
                    Auto-synced with <strong>Mechanic Payroll &amp; Incentive Ledger</strong>.
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
