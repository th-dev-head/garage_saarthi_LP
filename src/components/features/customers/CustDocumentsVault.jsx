"use client";

import React, { useState } from "react";
import {
  FaFolder,
  FaFolderOpen,
  FaFileAlt,
  FaImage,
  FaShieldAlt,
  FaCar,
  FaFileSignature,
  FaReceipt,
  FaSearch,
  FaCloudUploadAlt,
  FaCheckCircle,
  FaEye,
  FaDownload,
  FaTag
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const sampleCustomerDocs = [
  {
    id: "doc-1",
    name: "Insurance_Policy_2026.pdf",
    category: "insurance",
    tag: "HDFC ERGO Comprehensive",
    size: "1.4 MB",
    uploadedOn: "12 Mar 2026",
    vehicle: "BH 02 31 (Baleno)",
    icon: FaShieldAlt,
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200"
  },
  {
    id: "doc-2",
    name: "RC_SmartCard_Scan.jpg",
    category: "rc",
    tag: "Registration Certificate",
    size: "850 KB",
    uploadedOn: "10 Jan 2026",
    vehicle: "BH 02 31 (Baleno)",
    icon: FaCar,
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200"
  },
  {
    id: "doc-3",
    name: "Front_Bumper_Scratch_Intake.jpg",
    category: "photos",
    tag: "Vehicle Intake Inspection",
    size: "2.1 MB",
    uploadedOn: "15 Mar 2026",
    vehicle: "BH 02 31 (Baleno)",
    icon: FaImage,
    badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200"
  },
  {
    id: "doc-4",
    name: "Brake_Pad_Replacement_Estimate_Signed.pdf",
    category: "approvals",
    tag: "Customer WhatsApp Approval",
    size: "420 KB",
    uploadedOn: "15 Mar 2026",
    vehicle: "BH 02 31 (Baleno)",
    icon: FaFileSignature,
    badgeColor: "bg-amber-100 text-amber-700 border-amber-200"
  },
  {
    id: "doc-5",
    name: "Tax_Invoice_INV-2026-0412.pdf",
    category: "invoices",
    tag: "GST Tax Invoice Paid",
    size: "320 KB",
    uploadedOn: "16 Mar 2026",
    vehicle: "BH 02 31 (Baleno)",
    icon: FaReceipt,
    badgeColor: "bg-teal-100 text-teal-700 border-teal-200"
  }
];

export default function CustDocumentsVault() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", label: "All Files", icon: FaFolder, count: sampleCustomerDocs.length },
    { id: "photos", label: "Vehicle Photos", icon: FaImage, count: 1 },
    { id: "insurance", label: "Insurance & Claims", icon: FaShieldAlt, count: 1 },
    { id: "rc", label: "RC & Docs", icon: FaCar, count: 1 },
    { id: "approvals", label: "Approvals", icon: FaFileSignature, count: 1 },
    { id: "invoices", label: "Invoices & Bills", icon: FaReceipt, count: 1 },
    { id: "other", label: "Other Files", icon: FaFolderOpen, count: 0 }
  ];

  const filteredDocs = sampleCustomerDocs.filter((doc) => {
    const matchesCat = activeCategory === "all" || doc.category === activeCategory;
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.vehicle.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <FaFolderOpen className="w-3.5 h-3.5" /> Digital Document &amp; Records Vault
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Centralized Customer <GradientUnderline>Documents &amp; Service History Vault</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Store and organize vehicle RC books, insurance policies, claim approval slips, inspection photos, and past GST tax bills under every customer's unified cloud profile.
          </p>
        </div>

        {/* Interactive Modal-Style Showcase Window */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl p-4 sm:p-6 md:p-8 text-white space-y-6">
          {/* Modal Header inside Mockup */}
          <div className="bg-white text-slate-900 rounded-2xl p-5 md:p-6 shadow-xl border border-slate-200 space-y-6">
            {/* Top Bar: Customer Identity & Meta Badges */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#EFE9E7] text-primary flex items-center justify-center font-bold text-xl shadow-xs">
                  <FaFolder className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base md:text-lg font-black text-slate-900">
                      Dinesh Sharma's Documents &amp; History
                    </h3>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Active Customer
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    ID: USR1790144225967 • 📞 +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Tag for Linked Vehicle */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-500 font-bold flex items-center gap-1">
                  <FaCar className="text-primary w-3.5 h-3.5" /> Vehicles:
                </span>
                <span className="bg-[#EFE9E7] text-slate-800 text-xs font-bold font-mono px-3 py-1 rounded-xl border border-primary/20">
                  BH 02 31 (Maruti Suzuki Baleno)
                </span>
              </div>
            </div>

            {/* 4 Summary Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 text-xs">
              <div className="p-3.5 bg-blue-50/60 rounded-2xl border border-blue-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <FaCar className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase font-bold">Vehicles</span>
                  <span className="text-sm font-black text-slate-900">1 Vehicle(s)</span>
                </div>
              </div>

              <div className="p-3.5 bg-amber-50/60 rounded-2xl border border-amber-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  <FaFileAlt className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase font-bold">Job Cards</span>
                  <span className="text-sm font-black text-slate-900">4 Job Card(s)</span>
                </div>
              </div>

              <div className="p-3.5 bg-emerald-50/60 rounded-2xl border border-emerald-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <FaReceipt className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase font-bold">Total Work Done</span>
                  <span className="text-sm font-black text-emerald-700">₹ 28,450</span>
                </div>
              </div>

              <div className="p-3.5 bg-purple-50/60 rounded-2xl border border-purple-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                  <FaShieldAlt className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase font-bold">Insurance Docs</span>
                  <span className="text-sm font-black text-purple-700">2 Document(s)</span>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search files by name, tag, or notes..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-1 border-b border-slate-100 pb-3">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all flex items-center gap-1.5 ${
                      isActive
                        ? "bg-primary text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isActive ? "bg-white/20 text-white" : "bg-white text-slate-500"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Document List / Filter Results */}
            <div className="space-y-2.5">
              {filteredDocs.length > 0 ? (
                filteredDocs.map((doc) => {
                  const DocIcon = doc.icon;
                  return (
                    <div
                      key={doc.id}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-primary/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary shrink-0 shadow-2xs">
                          <DocIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-xs font-bold text-slate-900 font-mono">{doc.name}</h4>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${doc.badgeColor}`}>
                              {doc.tag}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            {doc.size} • Uploaded on {doc.uploadedOn} • {doc.vehicle}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center">
                        <button
                          type="button"
                          className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-primary hover:border-primary/40 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <FaEye className="w-3 h-3" /> Preview
                        </button>
                        <button
                          type="button"
                          className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <FaDownload className="w-3 h-3" /> Download
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="py-12 px-4 text-center space-y-3 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                  <FaFolderOpen className="w-12 h-12 text-slate-300 mx-auto" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-700">No documents in this category</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Upload photos, insurance papers, or customer signed slips to keep all records organized.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Upload Dropzone Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-50/70 to-orange-100/40 border border-orange-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow">
                  <FaCloudUploadAlt className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Instant Cloud Storage &amp; Multi-Format Upload</h4>
                  <p className="text-slate-600 text-xs mt-0.5">
                    Upload JPEG, PNG photos, PDF bills, or camera snapshots with instant WhatsApp sharing.
                  </p>
                </div>
              </div>

              <span className="px-3 py-1.5 bg-white text-primary border border-primary/30 rounded-xl font-bold font-mono text-[11px] whitespace-nowrap shadow-2xs">
                Max 25MB per document
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
