"use client";

import React, { useState, useRef } from "react";
import {
  FaCarSide,
  FaTachometerAlt,
  FaGasPump,
  FaIdCard,
  FaMapMarkerAlt,
  FaSignature,
  FaCheckCircle,
  FaShieldAlt,
  FaTimes,
  FaSyncAlt,
  FaCheckDouble,
  FaCar,
  FaUser,
  FaClock,
  FaFileAlt,
  FaPen,
  FaArrowRight,
  FaArrowLeft,
  FaInfoCircle,
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const DAMAGE_COLORS = {
  Scratch: { bg: "bg-amber-100", text: "text-amber-800", dot: "bg-amber-500", border: "border-amber-400" },
  Dent: { bg: "bg-rose-100", text: "text-rose-800", dot: "bg-rose-500", border: "border-rose-400" },
  Crack: { bg: "bg-purple-100", text: "text-purple-800", dot: "bg-purple-500", border: "border-purple-400" },
  "Paint Chip": { bg: "bg-blue-100", text: "text-blue-800", dot: "bg-blue-500", border: "border-blue-400" },
  Other: { bg: "bg-slate-100", text: "text-slate-800", dot: "bg-slate-500", border: "border-slate-400" },
};

export default function TDInteractiveDemo() {
  const containerRef = useRef(null);
  const [modalMode, setModalMode] = useState("start");
  const [dialogTab, setDialogTab] = useState("trip");
  
  const [selectedVehicle, setSelectedVehicle] = useState("MH 02 CK 9821 - Hyundai Creta 1.5");
  const [selectedCustomer, setSelectedCustomer] = useState("Ankit Verma (+91 98765 43210)");
  const [driverType, setDriverType] = useState("Staff");
  const [driverName, setDriverName] = useState("Ramesh Sharma");
  const [driverPhone, setDriverPhone] = useState("+91 98765 43210");
  const [startOdo, setStartOdo] = useState(48250);
  const [startFuel, setStartFuel] = useState("75% (3/4 Tank)");
  const [expReturnTime, setExpReturnTime] = useState("17:30");
  const [purposeNotes, setPurposeNotes] = useState("Post-clutch overhaul inspection, brake road test & suspension check");

  const [overallCondition, setOverallCondition] = useState("Good");
  const [activePinType, setActivePinType] = useState("Scratch");
  const [damages, setDamages] = useState([
    { id: 1, location: "Front Bumper", damageType: "Scratch", notes: "Minor stone chip scratch", x: 50, y: 15 },
    { id: 2, location: "Right Door", damageType: "Dent", notes: "Small door ding", x: 67, y: 55 },
  ]);
  const [isSignedStart, setIsSignedStart] = useState(true);

  const [returnOdo, setReturnOdo] = useState(48258);
  const [returnFuel, setReturnFuel] = useState("75% (3/4 Tank)");
  const [hasNewDamage, setHasNewDamage] = useState(false);
  const [isSignedReturn, setIsSignedReturn] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const startKmNum = Number(startOdo) || 0;
  const returnKmNum = Number(returnOdo) || 0;
  const distanceDriven = Math.max(0, returnKmNum - startKmNum);

  const handleDiagramClick = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);

    let loc = "Car Body";
    if (y < 25) loc = "Front Bumper / Hood";
    else if (y > 75) loc = "Rear Bumper / Trunk";
    else if (x < 40) loc = "Left Side Doors";
    else if (x > 60) loc = "Right Side Doors";
    else loc = "Roof / Windshield";

    const newPoint = {
      id: Date.now(),
      location: loc,
      damageType: activePinType,
      notes: `${activePinType} on ${loc}`,
      x,
      y,
    };

    setDamages([...damages, newPoint]);
  };

  const handleRemoveDamage = (id, e) => {
    if (e) e.stopPropagation();
    setDamages(damages.filter((d) => d.id !== id));
  };

  const resetSimulator = () => {
    setModalMode("start");
    setDialogTab("trip");
    setStartOdo(48250);
    setReturnOdo(48258);
    setDamages([
      { id: 1, location: "Front Bumper", damageType: "Scratch", notes: "Minor stone chip scratch", x: 50, y: 15 },
      { id: 2, location: "Right Door", damageType: "Dent", notes: "Small door ding", x: 67, y: 55 },
    ]);
    setIsSignedStart(true);
    setIsSignedReturn(false);
    setIsCompleted(false);
  };

  return (
    <section id="interactive-demo" className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center scroll-mt-20">
      <div className="mx-auto max-w-full lg:max-w-5xl 2xl:max-w-full w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Live Software Simulation
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4 leading-tight">
            Try the GarageSaarthi <GradientUnderline>Test Drive Dialog</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Experience our exact workshop interface: pre-drive departure authorization, interactive 2D body damage mapping, return odometer check-in, and driver signatures.
          </p>

          {/* Top Switcher */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="bg-slate-100 p-1.5 rounded-full border border-slate-200 inline-flex">
              <button
                type="button"
                onClick={() => {
                  setModalMode("start");
                  setDialogTab("trip");
                }}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  modalMode === "start"
                    ? "bg-primary text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                1. Start Test Drive Modal
              </button>
              <button
                type="button"
                onClick={() => setModalMode("complete")}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  modalMode === "complete"
                    ? "bg-primary text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                2. Complete &amp; Return Modal
              </button>
              <button
                type="button"
                onClick={resetSimulator}
                title="Reset Simulator"
                className="p-2 rounded-full text-slate-500 hover:text-primary transition-colors ml-1"
              >
                <FaSyncAlt className="text-xs" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal Window Container (Matching SaaS 100%) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden text-slate-900">
          
          {/* Modal Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-primary flex items-center justify-center">
                <FaCarSide className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 leading-tight">
                  {modalMode === "start" ? "Start Test Drive" : "Complete Test Drive & Return Vehicle"}
                </h3>
                <p className="text-[11px] text-slate-500">
                  {modalMode === "start" ? "Authorize vehicle road test and record pre-drive condition" : "Verify return odometer, distance driven, and post-drive audit"}
                </p>
              </div>
            </div>

            <span className="text-[11px] font-mono text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
              #TD-2026-0842
            </span>
          </div>

          {/* MODE 1: START TEST DRIVE MODAL */}
          {modalMode === "start" && (
            <div>
              {/* Tab Header Bar */}
              <div className="px-6 pt-4 pb-2 bg-slate-50/70 border-b border-slate-100 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-2 bg-slate-200/70 p-1 rounded-xl max-w-md w-full text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setDialogTab("trip")}
                    className={`py-2 rounded-lg transition-all flex items-center justify-center gap-2 ${
                      dialogTab === "trip"
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <FaCarSide className="text-primary text-xs" />
                    <span>1. Trip &amp; Driver</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDialogTab("condition")}
                    className={`py-2 rounded-lg transition-all flex items-center justify-center gap-2 ${
                      dialogTab === "condition"
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <FaFileAlt className="text-primary text-xs" />
                    <span>2. Vehicle Condition ({damages.length})</span>
                  </button>
                </div>
              </div>

              {/* TAB 1: TRIP & DRIVER */}
              {dialogTab === "trip" && (
                <div className="p-6 sm:p-8 space-y-6 text-xs">
                  
                  {/* Group 1: Vehicle & Customer */}
                  <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/50 space-y-3">
                    <span className="font-bold text-slate-900 flex items-center gap-2 text-xs">
                      <FaCarSide className="text-primary" /> Vehicle &amp; customer information
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-500 block mb-1 font-medium">Vehicle *</label>
                        <select
                          value={selectedVehicle}
                          onChange={(e) => setSelectedVehicle(e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-primary"
                        >
                          <option>MH 02 CK 9821 - Hyundai Creta 1.5</option>
                          <option>MH 12 AB 4590 - Maruti Swift ZXI</option>
                          <option>DL 04 CD 1234 - Honda City 1.5 V</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-slate-500 block mb-1 font-medium">Customer</label>
                        <select
                          value={selectedCustomer}
                          onChange={(e) => setSelectedCustomer(e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-primary"
                        >
                          <option>Ankit Verma (+91 98765 43210)</option>
                          <option>Dinesh Sharma (+91 98220 12345)</option>
                          <option>Vikram Malhotra (+91 98111 22334)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Group 2: Driver Authorization */}
                  <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/50 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 flex items-center gap-2 text-xs">
                        <FaUser className="text-primary" /> Driver authorization
                      </span>
                      <div className="flex gap-1">
                        {["Staff", "Customer", "Other"].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setDriverType(t)}
                            className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all ${
                              driverType === t
                                ? "bg-primary text-white"
                                : "bg-white border border-slate-300 text-slate-600 hover:bg-slate-100"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="text-slate-500 block mb-1 font-medium">Select Staff / Mechanic *</label>
                        <select
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-primary"
                          value={driverName}
                          onChange={(e) => setDriverName(e.target.value)}
                        >
                          <option>Ramesh Sharma</option>
                          <option>Amit Verma (Senior Tech)</option>
                          <option>Suresh Patel (Bay 2)</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-slate-500 block mb-1 font-medium">Driver Name *</label>
                        <input
                          type="text"
                          value={driverName}
                          onChange={(e) => setDriverName(e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="text-slate-500 block mb-1 font-medium">Staff Phone</label>
                        <input
                          type="text"
                          value={driverPhone}
                          onChange={(e) => setDriverPhone(e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Group 3: Start Odometer & Fuel */}
                  <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/50 space-y-3">
                    <span className="font-bold text-slate-900 flex items-center gap-2 text-xs">
                      <FaTachometerAlt className="text-primary" /> Start odometer &amp; fuel
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="text-slate-500 block mb-1 font-medium">Start Odometer (KM) *</label>
                        <input
                          type="number"
                          value={startOdo}
                          onChange={(e) => setStartOdo(e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-bold focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="text-slate-500 block mb-1 font-medium">Fuel Level</label>
                        <select
                          value={startFuel}
                          onChange={(e) => setStartFuel(e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-primary"
                        >
                          <option>0% (Empty)</option>
                          <option>25% (1/4 Tank)</option>
                          <option>50% (Half Tank)</option>
                          <option>75% (3/4 Tank)</option>
                          <option>100% (Full Tank)</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-slate-500 block mb-1 font-medium">Exp. Return Time</label>
                        <input
                          type="time"
                          value={expReturnTime}
                          onChange={(e) => setExpReturnTime(e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-slate-500 block mb-1 font-medium">Test Drive Purpose / Notes</label>
                      <input
                        type="text"
                        value={purposeNotes}
                        onChange={(e) => setPurposeNotes(e.target.value)}
                        placeholder="e.g. Post-clutch overhaul inspection, brake test, rattling sound diagnosis..."
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setDialogTab("condition")}
                      className="px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-all flex items-center gap-1.5"
                    >
                      <span>Next: Vehicle Condition</span>
                      <FaArrowRight className="text-xs text-primary" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setModalMode("complete")}
                      className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
                    >
                      <FaCarSide />
                      <span>Start Test Drive</span>
                    </button>
                  </div>

                </div>
              )}

              {/* TAB 2: VEHICLE CONDITION (DAMAGE DIAGRAM) */}
              {dialogTab === "condition" && (
                <div className="p-6 sm:p-8 space-y-5 text-xs">
                  
                  {/* Overall Condition Selector */}
                  <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/50 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="font-bold text-slate-900 block text-xs">Overall Pre-Drive Condition</span>
                      <span className="text-[11px] text-slate-500">General visual condition of the vehicle exterior</span>
                    </div>
                    <div className="flex gap-1.5">
                      {["Good", "Fair", "Poor"].map((cond) => (
                        <button
                          key={cond}
                          type="button"
                          onClick={() => setOverallCondition(cond)}
                          className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            overallCondition === cond
                              ? cond === "Good"
                                ? "bg-emerald-600 text-white"
                                : cond === "Fair"
                                ? "bg-amber-500 text-white"
                                : "bg-red-600 text-white"
                              : "bg-white border border-slate-300 text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          {cond}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Active Pin Type Toolbar */}
                  <div className="p-3.5 rounded-xl border border-orange-200/80 bg-orange-50/40 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 flex items-center gap-1.5">
                        <FaCar className="text-primary" /> Active pin type:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {["Scratch", "Dent", "Crack", "Paint Chip", "Other"].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setActivePinType(type)}
                            className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all border ${
                              activePinType === type
                                ? `${DAMAGE_COLORS[type].bg} ${DAMAGE_COLORS[type].text} ${DAMAGE_COLORS[type].border} ring-2 ring-primary/20`
                                : "bg-white border-slate-300 text-slate-600 hover:bg-slate-100"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-500 italic">Click anywhere on vehicle blueprint to place pin</span>
                  </div>

                  {/* 2-Column Canvas & Noted List */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                    
                    {/* Left Blueprint Canvas (7 Cols) */}
                    <div className="md:col-span-7">
                      <div
                        ref={containerRef}
                        onClick={handleDiagramClick}
                        className="relative w-full aspect-[16/10] bg-slate-950 rounded-xl border border-slate-800 overflow-hidden shadow-inner cursor-crosshair flex items-center justify-center select-none"
                      >
                        <svg
                          viewBox="0 0 800 500"
                          className="w-full h-full p-2 pointer-events-none opacity-90"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <pattern id="diag-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="0.8" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#diag-grid)" />

                          {/* Top View Sedan Outline */}
                          <g stroke="#38bdf8" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path
                              d="M 330 60 C 370 50, 430 50, 470 60 C 510 70, 530 110, 530 160 L 540 220 C 545 280, 545 340, 540 380 L 530 400 C 515 440, 480 455, 400 455 C 320 455, 285 440, 270 400 L 260 380 C 255 340, 255 280, 260 220 L 270 160 C 270 110, 290 70, 330 60 Z"
                              fill="#0f172a"
                              fillOpacity="0.85"
                              stroke="#38bdf8"
                              strokeWidth="3"
                            />
                            <path d="M 320 70 L 480 70" stroke="#0ea5e9" strokeWidth="2" />
                            <path d="M 300 90 Q 340 75 370 85" stroke="#facc15" strokeWidth="2.5" />
                            <path d="M 500 90 Q 460 75 430 85" stroke="#facc15" strokeWidth="2.5" />
                            <path d="M 330 90 L 340 145 L 460 145 L 470 90" stroke="#0284c7" strokeWidth="1.8" />
                            <path
                              d="M 320 155 Q 400 140 480 155 L 495 205 Q 400 195 305 205 Z"
                              fill="#0369a1"
                              fillOpacity="0.35"
                              stroke="#38bdf8"
                              strokeWidth="2"
                            />
                            <path d="M 270 180 L 245 190 Q 240 175 255 170 Z" fill="#0284c7" stroke="#38bdf8" />
                            <path d="M 530 180 L 555 190 Q 560 175 545 170 Z" fill="#0284c7" stroke="#38bdf8" />
                            <rect x="330" y="215" width="140" height="70" rx="10" stroke="#0284c7" strokeWidth="1.5" fill="#1e293b" fillOpacity="0.5" />
                            <path
                              d="M 315 335 Q 400 345 485 335 L 475 385 Q 400 395 325 385 Z"
                              fill="#0369a1"
                              fillOpacity="0.35"
                              stroke="#38bdf8"
                              strokeWidth="2"
                            />
                            <path d="M 315 395 L 330 440 L 470 440 L 485 395" stroke="#0284c7" strokeWidth="1.8" />
                            <path d="M 290 415 Q 325 430 350 435" stroke="#ef4444" strokeWidth="3" />
                            <path d="M 510 415 Q 475 430 450 435" stroke="#ef4444" strokeWidth="3" />
                          </g>

                          <text x="400" y="38" fill="#94a3b8" fontSize="12" fontWeight="600" textAnchor="middle">
                            ▲ FRONT (HOOD)
                          </text>
                          <text x="400" y="485" fill="#94a3b8" fontSize="12" fontWeight="600" textAnchor="middle">
                            ▼ REAR (TRUNK)
                          </text>
                          <text x="170" y="260" fill="#94a3b8" fontSize="12" fontWeight="600" textAnchor="middle">
                            ◀ LEFT SIDE
                          </text>
                          <text x="630" y="260" fill="#94a3b8" fontSize="12" fontWeight="600" textAnchor="middle">
                            RIGHT SIDE ▶
                          </text>
                        </svg>

                        {/* Dropped Damage Pins */}
                        {damages.map((p, idx) => {
                          const color = DAMAGE_COLORS[p.damageType] || DAMAGE_COLORS.Other;
                          return (
                            <div
                              key={p.id}
                              style={{ left: `${p.x}%`, top: `${p.y}%` }}
                              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                            >
                              <div
                                className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] shadow-md border-2 ${
                                  color.bg
                                } ${color.text} ${color.border}`}
                              >
                                {idx + 1}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Noted Conditions Card (5 Cols) */}
                    <div className="md:col-span-5 bg-slate-50 rounded-xl border border-slate-200/90 p-4 space-y-3 min-h-[220px] flex flex-col">
                      <div className="flex items-center gap-1.5 text-slate-800 font-bold text-xs pb-2 border-b border-slate-200">
                        <FaInfoCircle className="text-amber-500" />
                        <span>Noted conditions ({damages.length})</span>
                      </div>

                      {damages.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-4 text-slate-400">
                          <FaCar className="w-8 h-8 text-slate-300 mb-2" />
                          <span className="font-semibold text-slate-700 block">No pre-drive damages marked</span>
                          <span className="text-[11px] text-slate-500">Click on the vehicle image to record existing scratches or dents</span>
                        </div>
                      ) : (
                        <div className="space-y-2 flex-1 overflow-y-auto max-h-[200px]">
                          {damages.map((d, idx) => {
                            const color = DAMAGE_COLORS[d.damageType] || DAMAGE_COLORS.Other;
                            return (
                              <div
                                key={d.id}
                                className="bg-white p-2.5 rounded-lg border border-slate-200 flex items-center justify-between"
                              >
                                <div className="flex items-center gap-2">
                                  <span className={`w-5 h-5 rounded-full ${color.bg} ${color.text} font-bold text-[10px] flex items-center justify-center`}>
                                    {idx + 1}
                                  </span>
                                  <div>
                                    <span className="font-bold text-slate-900 block text-[11px]">{d.location}</span>
                                    <span className={`text-[10px] font-semibold ${color.text}`}>{d.damageType}</span>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={(e) => handleRemoveDamage(d.id, e)}
                                  className="text-slate-400 hover:text-red-500 p-1"
                                  title="Delete"
                                >
                                  <FaTimes className="text-xs" />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Driver Electronic Signature Strip */}
                  <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/50 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <span className="font-bold text-slate-900 block text-xs">Driver Electronic Signature</span>
                      <span className="text-[11px] text-slate-500">Optional pre-drive key handover acknowledgement</span>
                    </div>

                    {isSignedStart ? (
                      <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-300">
                        <span className="font-serif italic text-primary font-bold text-xs">Ramesh_Sharma_✍️</span>
                        <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold border border-emerald-200">
                          Signed
                        </span>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setIsSignedStart(true)}
                        className="px-4 py-2 rounded-lg bg-white border border-primary text-primary font-bold text-xs hover:bg-orange-50 transition-colors flex items-center gap-1.5"
                      >
                        <FaPen className="text-[10px]" />
                        <span>Add Signature</span>
                      </button>
                    )}
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setDialogTab("trip")}
                      className="px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-all flex items-center gap-1.5"
                    >
                      <FaArrowLeft className="text-xs" />
                      <span>Back to Details</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setModalMode("complete")}
                      className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
                    >
                      <FaCarSide />
                      <span>Start Test Drive</span>
                    </button>
                  </div>

                </div>
              )}

            </div>
          )}

          {/* MODE 2: COMPLETE & RETURN MODAL */}
          {modalMode === "complete" && (
            <div className="p-6 sm:p-8 space-y-6 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <label className="font-bold text-slate-700 flex items-center gap-1.5">
                    <FaTachometerAlt className="text-emerald-600" /> Return Odometer (KM) *
                  </label>
                  <input
                    type="number"
                    value={returnOdo}
                    onChange={(e) => setReturnOdo(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-extrabold text-base focus:outline-none focus:border-primary"
                  />
                  <div className="flex justify-between text-[11px] pt-1 text-slate-500">
                    <span>Start: {startOdo} KM</span>
                    <span className="font-bold text-emerald-600">+{distanceDriven} KM</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <label className="font-bold text-slate-700 flex items-center gap-1.5">
                    <FaGasPump className="text-primary" /> Return Fuel Gauge
                  </label>
                  <select
                    value={returnFuel}
                    onChange={(e) => setReturnFuel(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-primary"
                  >
                    <option>0% (Empty)</option>
                    <option>25% (1/4 Tank)</option>
                    <option>50% (Half Tank)</option>
                    <option>75% (3/4 Tank)</option>
                    <option>100% (Full Tank)</option>
                  </select>
                  <div className="text-[11px] pt-1 text-slate-500">
                    <span>Departed at: {startFuel}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-emerald-300 bg-emerald-50/60 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wide block">
                      Automatic Trip Distance
                    </span>
                    <p className="text-2xl font-black text-emerald-700 mt-0.5">
                      {distanceDriven.toFixed(1)} <span className="text-xs font-semibold text-slate-600">KM Driven</span>
                    </p>
                  </div>
                  <span className="text-[10px] text-emerald-800 font-semibold">
                    ✓ Within Authorized Radius (≤ 15 KM)
                  </span>
                </div>
              </div>

              {/* Post-Drive Damage & Signature */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                  <span className="font-bold text-slate-900 block">Post-Drive Vehicle Inspection</span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setHasNewDamage(false)}
                      className={`flex-1 py-2 rounded-lg font-bold border transition-all ${
                        !hasNewDamage
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-white border-slate-300 text-slate-600"
                      }`}
                    >
                      ✓ Zero New Damage
                    </button>
                    <button
                      type="button"
                      onClick={() => setHasNewDamage(true)}
                      className={`flex-1 py-2 rounded-lg font-bold border transition-all ${
                        hasNewDamage
                          ? "bg-red-600 text-white border-red-600"
                          : "bg-white border-slate-300 text-slate-600"
                      }`}
                    >
                      ⚠ New Defect Observed
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                  <span className="font-bold text-slate-900 block">Driver Return Sign-Off</span>
                  <div className="bg-white border border-slate-200 rounded-lg p-2 flex items-center justify-between">
                    <span className="italic font-serif text-slate-800 font-bold text-xs">
                      Ramesh_Verified_Return_✍️
                    </span>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-200">
                      Complete
                    </span>
                  </div>
                </div>
              </div>

              {/* Complete Test Drive Button */}
              {!isCompleted ? (
                <button
                  type="button"
                  onClick={() => setIsCompleted(true)}
                  className="w-full py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <FaCheckDouble />
                  <span>Complete Test Drive &amp; Record to Job Card</span>
                </button>
              ) : (
                <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-4 text-center space-y-1">
                  <span className="text-xs font-bold text-emerald-800 flex items-center justify-center gap-1">
                    <FaCheckCircle className="text-emerald-600" /> Test Drive Successfully Closed &amp; Saved
                  </span>
                  <p className="text-xs text-slate-600">
                    Test Drive <strong>#TD-2026-0842</strong> completed. Logged <strong>{distanceDriven} KM</strong> to Job Card <strong>#JC-2026-8104</strong>.
                  </p>
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
