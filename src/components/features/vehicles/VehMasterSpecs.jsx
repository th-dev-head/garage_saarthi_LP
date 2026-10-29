"use client";

import React, { useState } from "react";
import {
  FaCar,
  FaMotorcycle,
  FaTruck,
  FaChargingStation,
  FaCheckCircle,
  FaSlidersH,
  FaDatabase,
  FaPlus,
  FaBolt,
  FaCogs,
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const masterCategories = [
  { id: "car", label: "Cars & SUVs", icon: FaCar },
  { id: "bike", label: "2-Wheelers", icon: FaMotorcycle },
  { id: "commercial", label: "Trucks & Commercial", icon: FaTruck },
  { id: "ev", label: "EV & Hybrid", icon: FaChargingStation },
];

const sampleData = {
  car: {
    brand: "Tata Motors",
    model: "Harrier 2.0 Kryotec",
    fuel: "Diesel BS6 (170 PS)",
    transmission: "6-Speed Torque Converter AT",
    engineCC: "1956 cc",
    tireSpec: "235/60 R18",
  },
  bike: {
    brand: "Royal Enfield",
    model: "Hunter 350 Dapper",
    fuel: "Petrol (J-Series 349cc)",
    transmission: "5-Speed Manual Constant Mesh",
    engineCC: "349.34 cc",
    tireSpec: "110/70-17 F, 140/70-17 R",
  },
  commercial: {
    brand: "Ashok Leyland",
    model: "Bada Dost i4",
    fuel: "Diesel (3-Cylinder Turbo)",
    transmission: "5-Speed Synchromesh Manual",
    engineCC: "1478 cc",
    tireSpec: "215/75 R15 LT",
  },
  ev: {
    brand: "Tata Motors Passenger EV",
    model: "Nexon EV Long Range",
    fuel: "Electric (PMS Motor)",
    transmission: "Single-Speed Automatic Direct Drive",
    batteryCapacity: "40.5 kWh High-Density LFP",
    chargerType: "7.2 kW AC Fast / 50 kW CCS2 DC",
  },
};

export default function VehMasterSpecs({ bgClass = "bg-white" }) {
  const [activeCategory, setActiveCategory] = useState("ev");

  const current = sampleData[activeCategory];

  return (
    <section className={`py-16 md:py-24 px-4 lg:px-15 2xl:px-50 ${bgClass} flex justify-center`}>
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Centralized Vehicle Database
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Universal Vehicle Master &amp;{" "}
            <GradientUnderline>EV Battery Specifications</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Manage comprehensive vehicle makes, models, transmissions, and battery specs across 6 automotive segments. Pre-loaded with Indian market vehicle catalogs plus complete freedom to add custom brands.
          </p>
        </div>

        {/* Dual Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Vehicle Master Dialog Simulator (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-xl p-5 sm:p-7 shadow-lg space-y-5">
            {/* Mockup Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-primary flex items-center justify-center font-bold">
                  <FaDatabase className="text-sm" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Vehicle Master Directory</h3>
                  <p className="text-[11px] text-slate-500">Configure Brands, Models, Fuel &amp; Battery kWh</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-primary bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <FaCheckCircle className="text-[9px]" /> 2,400+ Preloaded Models
              </span>
            </div>

            {/* Segment Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-semibold text-center">
              {masterCategories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`py-2 px-2 rounded-lg font-bold transition flex items-center justify-center gap-1.5 ${
                      isActive
                        ? "bg-white text-slate-900 shadow-2xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Icon className={`text-xs ${isActive ? "text-primary" : "text-slate-400"}`} />
                    <span className="truncate">{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Master Entry Details Card */}
            <div className="border border-slate-200 rounded-2xl p-4 bg-white space-y-3.5 text-xs">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900">{current.brand}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-700 font-medium">{current.model}</span>
                </div>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-mono font-bold">
                  Verified Master Specs
                </span>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white border border-slate-200 p-2.5 rounded-xl space-y-0.5 shadow-2xs">
                  <span className="text-[10px] text-slate-500 font-semibold block">Fuel / Powertrain Type</span>
                  <p className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                    {activeCategory === "ev" ? (
                      <FaBolt className="text-emerald-500 text-[11px]" />
                    ) : null}
                    {current.fuel}
                  </p>
                </div>

                <div className="bg-white border border-slate-200 p-2.5 rounded-xl space-y-0.5 shadow-2xs">
                  <span className="text-[10px] text-slate-500 font-semibold block">Transmission &amp; Gearbox</span>
                  <p className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                    <FaCogs className="text-primary text-[11px]" />
                    {current.transmission}
                  </p>
                </div>

                {current.batteryCapacity ? (
                  <div className="bg-white border border-slate-200 p-2.5 rounded-xl space-y-0.5 shadow-2xs">
                    <span className="text-[10px] text-slate-500 font-semibold block">Battery Pack Capacity (kWh)</span>
                    <p className="font-bold text-emerald-700 font-mono text-xs">
                      {current.batteryCapacity}
                    </p>
                  </div>
                ) : (
                  <div className="bg-white border border-slate-200 p-2.5 rounded-xl space-y-0.5 shadow-2xs">
                    <span className="text-[10px] text-slate-500 font-semibold block">Engine Displacement (CC)</span>
                    <p className="font-bold text-slate-800 font-mono text-xs">{current.engineCC}</p>
                  </div>
                )}

                <div className="bg-white border border-slate-200 p-2.5 rounded-xl space-y-0.5 shadow-2xs">
                  <span className="text-[10px] text-slate-500 font-semibold block">
                    {current.chargerType ? "Charging Standard" : "Factory Tire Specification"}
                  </span>
                  <p className="font-bold text-slate-800 text-xs">
                    {current.chargerType || current.tireSpec}
                  </p>
                </div>
              </div>

              {/* Bottom Master Actions */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <FaCheckCircle className="text-emerald-500 text-[10px]" /> Auto-populates in new Job Cards &amp; Gate Passes
                </span>
                <button
                  type="button"
                  className="text-[11px] font-bold text-primary hover:underline flex items-center gap-1"
                >
                  <FaPlus className="text-[9px]" /> Add Custom Model
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel: Value Pillars (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border border-slate-200/80 rounded-2xl p-4.5 bg-slate-50 hover:border-orange-200 transition-colors shadow-2xs space-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-primary flex items-center justify-center shrink-0">
                  <FaDatabase className="text-sm" />
                </div>
                <h3 className="text-xs font-bold text-slate-900">Preloaded Indian Auto Database</h3>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed pl-10.5">
                Instant search across thousands of Maruti, Hyundai, Tata, Mahindra, Royal Enfield, Honda, and commercial truck models with correct fuel and variant configurations.
              </p>
            </div>

            <div className="border border-slate-200/80 rounded-2xl p-4.5 bg-slate-50 hover:border-orange-200 transition-colors shadow-2xs space-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <FaChargingStation className="text-sm" />
                </div>
                <h3 className="text-xs font-bold text-slate-900">EV-Ready with Battery kWh Tracking</h3>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed pl-10.5">
                Record electric vehicle battery pack capacities (kWh), state of health (SoH), motor serial numbers, and charging port standards for modern EV workshops.
              </p>
            </div>

            <div className="border border-slate-200/80 rounded-2xl p-4.5 bg-slate-50 hover:border-orange-200 transition-colors shadow-2xs space-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <FaPlus className="text-sm" />
                </div>
                <h3 className="text-xs font-bold text-slate-900">Add Custom Makes &amp; Variants</h3>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed pl-10.5">
                Easily add specialized imported supercars, retro vintage bikes, agricultural tractors, or new electric scooter brands into your workshop's private master list.
              </p>
            </div>

            <div className="border border-slate-200/80 rounded-2xl p-4.5 bg-slate-50 hover:border-orange-200 transition-colors shadow-2xs space-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                  <FaSlidersH className="text-sm" />
                </div>
                <h3 className="text-xs font-bold text-slate-900">1-Click Job Card Auto-Fill</h3>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed pl-10.5">
                When a service advisor enters a vehicle number, the system instantly suggests recommended engine oil grades, coolant volumes, and oil filter part numbers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

