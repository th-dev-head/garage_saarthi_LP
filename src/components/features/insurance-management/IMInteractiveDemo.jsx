"use client";

import React, { useState } from "react";
import {
  FaShieldAlt,
  FaFileInvoiceDollar,
  FaUserTie,
  FaCheckCircle,
  FaTimesCircle,
  FaCalculator,
  FaFilePdf,
  FaSyncAlt,
  FaCheckDouble,
  FaBuilding,
  FaCarCrash,
  FaMoneyBillWave,
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function IMInteractiveDemo() {
  const [insurer, setInsurer] = useState("ICICI Lombard General Insurance");
  const [claimNo, setClaimNo] = useState("CLM-2026-9041");
  const [policyNo, setPolicyNo] = useState("POL-8849-01293");
  const [surveyorName, setSurveyorName] = useState("Rajesh Mehta");
  const [surveyorPhone, setSurveyorPhone] = useState("+91 98200 44551");
  const [claimType, setClaimType] = useState("Cashless Tie-up");

  const [parts, setParts] = useState([
    { id: 1, name: "Front Bumper Assembly (Plastic/Fiber)", type: "Fiber/Plastic", cost: 12000, depPercent: 50 },
    { id: 2, name: "Right Front Fender (Metal)", type: "Metal", cost: 8500, depPercent: 20 },
    { id: 3, name: "Headlight LH Unit (Glass/Poly)", type: "Glass", cost: 6500, depPercent: 0 },
    { id: 4, name: "Front Radiator Grille", type: "Fiber/Plastic", cost: 4500, depPercent: 50 },
  ]);

  const [laborCost, setLaborCost] = useState(14000);
  const [compulsoryDeductible, setCompulsoryDeductible] = useState(1000);
  const [salvageDeduction, setSalvageDeduction] = useState(800);
  const [claimStage, setClaimStage] = useState("Approved"); 

  const [documents, setDocuments] = useState({
    rcBook: true,
    drivingLicense: true,
    policyCopy: true,
    spotPhotos: true,
    claimForm: true,
    satisfactionVoucher: true,
  });

  const totalPartsCost = parts.reduce((acc, p) => acc + p.cost, 0);
  const totalDepreciation = parts.reduce((acc, p) => acc + (p.cost * (p.depPercent / 100)), 0);
  const approvedPartsAmount = totalPartsCost - totalDepreciation;
  const totalBillEstimate = totalPartsCost + laborCost;
  const insuranceGrossPayable = approvedPartsAmount + laborCost;
  const insuranceNetCashless = Math.max(0, insuranceGrossPayable - compulsoryDeductible - salvageDeduction);
  const customerLiability = totalBillEstimate - insuranceNetCashless;

  const toggleDoc = (key) => {
    setDocuments({ ...documents, [key]: !documents[key] });
  };

  const resetDemo = () => {
    setInsurer("ICICI Lombard General Insurance");
    setClaimNo("CLM-2026-9041");
    setPolicyNo("POL-8849-01293");
    setSurveyorName("Rajesh Mehta");
    setLaborCost(14000);
    setCompulsoryDeductible(1000);
    setSalvageDeduction(800);
    setClaimStage("Approved");
    setDocuments({
      rcBook: true,
      drivingLicense: true,
      policyCopy: true,
      spotPhotos: true,
      claimForm: true,
      satisfactionVoucher: true,
    });
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
            Try the <GradientUnderline>Insurance Claim Calculator</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Experience our automated accident claim assessment engine: configure part estimates, material depreciation slabs, surveyor approvals, and calculate exact insurance vs customer liability splits.
          </p>
        </div>

        {/* Modal Window Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden text-slate-900">
          
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70 gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-primary flex items-center justify-center">
                <FaShieldAlt className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 leading-tight">
                  Insurance Claim Job Card &bull; #{claimNo}
                </h3>
                <p className="text-[11px] text-slate-500">
                  Vehicle: MH 02 CK 9821 (Hyundai Creta 1.5) &bull; Job Card #JC-2026-9041
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
                <FaCheckCircle className="text-xs" /> {claimStage}
              </span>
              <button
                type="button"
                onClick={resetDemo}
                title="Reset Simulator"
                className="p-2 rounded-full text-slate-400 hover:text-primary transition-colors"
              >
                <FaSyncAlt className="text-xs" />
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6 text-xs">
            
            {/* Top Config Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Insurer & Policy */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                <span className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                  <FaBuilding className="text-primary" /> Insurer &amp; Policy
                </span>
                <div>
                  <label className="text-slate-500 block mb-1 font-medium">Insurance Provider</label>
                  <select
                    value={insurer}
                    onChange={(e) => setInsurer(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-primary"
                  >
                    <option>ICICI Lombard General Insurance</option>
                    <option>HDFC ERGO General Insurance</option>
                    <option>Bajaj Allianz General Insurance</option>
                    <option>Tata AIG General Insurance</option>
                    <option>Go Digit General Insurance</option>
                    <option>New India Assurance Co.</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-500 block mb-1 font-medium">Policy Number</label>
                  <input
                    type="text"
                    value={policyNo}
                    onChange={(e) => setPolicyNo(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Surveyor Details */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                <span className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                  <FaUserTie className="text-primary" /> Surveyor Coordination
                </span>
                <div>
                  <label className="text-slate-500 block mb-1 font-medium">Surveyor Name</label>
                  <input
                    type="text"
                    value={surveyorName}
                    onChange={(e) => setSurveyorName(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-slate-500 block mb-1 font-medium">Surveyor Contact</label>
                  <input
                    type="text"
                    value={surveyorPhone}
                    onChange={(e) => setSurveyorPhone(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Claim Stage & Cashless Mode */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                <span className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                  <FaFileInvoiceDollar className="text-primary" /> Claim Status &amp; Type
                </span>
                <div>
                  <label className="text-slate-500 block mb-1 font-medium">Claim Pipeline Stage</label>
                  <select
                    value={claimStage}
                    onChange={(e) => setClaimStage(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-bold focus:outline-none focus:border-primary"
                  >
                    <option>Initiated (Vehicle Inward)</option>
                    <option>Spot Survey Scheduled</option>
                    <option>Approved (Work In Progress)</option>
                    <option>Settled (Payment Received)</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-500 block mb-1 font-medium">Settlement Mode</label>
                  <div className="flex gap-2">
                    {["Cashless Tie-up", "Reimbursement"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setClaimType(t)}
                        className={`flex-1 py-1.5 rounded-lg font-bold border transition-all text-[11px] ${
                          claimType === t
                            ? "bg-primary text-white border-primary"
                            : "bg-white border-slate-300 text-slate-600"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Parts & Depreciation Table */}
            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex justify-between items-center">
                <span className="font-bold text-slate-900 flex items-center gap-2 text-xs">
                  <FaCalculator className="text-primary" /> Damaged Parts &amp; Depreciation Breakdown
                </span>
                <span className="text-[11px] text-slate-500 font-medium">IRDAI Depreciation Guidelines</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 text-slate-600 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="p-3">Part Description</th>
                      <th className="p-3">Material Category</th>
                      <th className="p-3 text-right">Part MRP (₹)</th>
                      <th className="p-3 text-center">Dep. %</th>
                      <th className="p-3 text-right">Depreciation (₹)</th>
                      <th className="p-3 text-right">Approved Share (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {parts.map((p) => {
                      const depVal = p.cost * (p.depPercent / 100);
                      const netVal = p.cost - depVal;
                      return (
                        <tr key={p.id} className="hover:bg-slate-50/70">
                          <td className="p-3 font-bold text-slate-800">{p.name}</td>
                          <td className="p-3">
                            <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-medium border border-slate-200">
                              {p.type}
                            </span>
                          </td>
                          <td className="p-3 text-right font-semibold">₹{p.cost.toLocaleString()}</td>
                          <td className="p-3 text-center font-bold text-amber-600">{p.depPercent}%</td>
                          <td className="p-3 text-right text-rose-600 font-medium">-₹{depVal.toLocaleString()}</td>
                          <td className="p-3 text-right font-bold text-emerald-700">₹{netVal.toLocaleString()}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Labor, Deductibles & Live Split Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              
              {/* Left Adjustments (5 Cols) */}
              <div className="md:col-span-5 p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                <span className="font-bold text-slate-900 block text-xs">Labor &amp; Deductible Adjustments</span>
                
                <div className="flex justify-between items-center">
                  <label className="text-slate-600">Bodyshop Labor (Denting/Painting):</label>
                  <div className="flex items-center gap-1">
                    <span className="font-bold">₹</span>
                    <input
                      type="number"
                      value={laborCost}
                      onChange={(e) => setLaborCost(Number(e.target.value) || 0)}
                      className="w-24 bg-white border border-slate-300 rounded px-2 py-1 text-right font-bold text-slate-900"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <label className="text-slate-600">Compulsory Excess / Deductible:</label>
                  <div className="flex items-center gap-1">
                    <span className="font-bold">₹</span>
                    <input
                      type="number"
                      value={compulsoryDeductible}
                      onChange={(e) => setCompulsoryDeductible(Number(e.target.value) || 0)}
                      className="w-24 bg-white border border-slate-300 rounded px-2 py-1 text-right font-bold text-slate-900"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <label className="text-slate-600">Salvage Scrap Deduction:</label>
                  <div className="flex items-center gap-1">
                    <span className="font-bold">₹</span>
                    <input
                      type="number"
                      value={salvageDeduction}
                      onChange={(e) => setSalvageDeduction(Number(e.target.value) || 0)}
                      className="w-24 bg-white border border-slate-300 rounded px-2 py-1 text-right font-bold text-slate-900"
                    />
                  </div>
                </div>

                {/* Documents Checklist */}
                <div className="pt-2 border-t border-slate-200">
                  <span className="text-[11px] font-bold text-slate-700 block mb-2">Claim Document Verification:</span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { key: "rcBook", label: "RC Copy" },
                      { key: "drivingLicense", label: "Driver License" },
                      { key: "policyCopy", label: "Policy Copy" },
                      { key: "spotPhotos", label: "Accident Photos" },
                      { key: "claimForm", label: "Signed Claim Form" },
                      { key: "satisfactionVoucher", label: "Satisfaction Voucher" },
                    ].map((doc) => (
                      <button
                        key={doc.key}
                        type="button"
                        onClick={() => toggleDoc(doc.key)}
                        className={`px-2 py-1 rounded text-[10px] font-semibold border flex items-center justify-between transition-all ${
                          documents[doc.key]
                            ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                            : "bg-slate-100 border-slate-300 text-slate-500"
                        }`}
                      >
                        <span>{doc.label}</span>
                        {documents[doc.key] ? (
                          <FaCheckCircle className="text-emerald-600 text-[10px]" />
                        ) : (
                          <FaTimesCircle className="text-slate-400 text-[10px]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Liability Settlement Card (7 Cols) */}
              <div className="md:col-span-7 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-5 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Automated Liability Settlement Matrix
                    </span>
                    <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-slate-300">
                      Total Bill: ₹{totalBillEstimate.toLocaleString()}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-3.5 rounded-xl">
                      <span className="text-[10px] text-emerald-300 uppercase tracking-wide block font-semibold">
                        Insurance Company Share (Cashless)
                      </span>
                      <p className="text-2xl font-black text-emerald-400 mt-1">
                        ₹{insuranceNetCashless.toLocaleString()}
                      </p>
                      <span className="text-[10px] text-slate-300 block mt-1">
                        Direct payout to workshop bank account
                      </span>
                    </div>

                    <div className="bg-amber-500/10 border border-amber-500/20 p-3.5 rounded-xl">
                      <span className="text-[10px] text-amber-300 uppercase tracking-wide block font-semibold">
                        Customer Liability Share
                      </span>
                      <p className="text-2xl font-black text-amber-400 mt-1">
                        ₹{customerLiability.toLocaleString()}
                      </p>
                      <span className="text-[10px] text-slate-300 block mt-1">
                        Collected before gate pass release
                      </span>
                    </div>
                  </div>

                  <div className="text-[11px] space-y-1 text-slate-300 bg-white/5 p-3 rounded-lg border border-white/5">
                    <div className="flex justify-between">
                      <span>Total Parts MRP:</span>
                      <span className="font-semibold text-white">₹{totalPartsCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-rose-300">
                      <span>Less Depreciation on Parts:</span>
                      <span>-₹{totalDepreciation.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Plus Approved Labor Charges:</span>
                      <span className="font-semibold text-white">+₹{laborCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-rose-300">
                      <span>Less Compulsory Deductible &amp; Salvage:</span>
                      <span>-₹{(compulsoryDeductible + salvageDeduction).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] text-emerald-300 flex items-center gap-1.5">
                    <FaCheckDouble /> All IRDAI calculations validated &bull; Zero error guarantee
                  </span>
                  <button
                    type="button"
                    onClick={() => setClaimStage("Settled")}
                    className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold text-xs shadow transition-all"
                  >
                    Disburse &amp; Close Claim
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
