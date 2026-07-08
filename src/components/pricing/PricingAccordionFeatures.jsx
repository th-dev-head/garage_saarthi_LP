import React, { useState } from "react";
import { cn } from "../../utils/cn";
import { Check, ChevronUp, ChevronDown } from "lucide-react";
import tickIcon from "../../assets/pricing/true.svg";
import cat1 from "../../assets/pricing/categories.svg";
import cat2 from "../../assets/pricing/categories2.svg";
import cat3 from "../../assets/pricing/categories3.svg";
import cat4 from "../../assets/pricing/categories4.svg";
import cat5 from "../../assets/pricing/categories5.svg";
import cat6 from "../../assets/pricing/categories6.svg";
import cat7 from "../../assets/pricing/categories7.svg";
import feat1 from "../../assets/pricing/features1.svg";
import feat2 from "../../assets/pricing/features2.svg";

const categories = [
  {
    id: "job",
    name: "Job Management",
    icon: cat1,
    features: [
      "Unlimited Job Card Creation",
      "Insurance Job Card (Dedicated Flow)",
      "Job Card Status Tracking (Priority-wise)",
      "Before / After Work Photos",
      "Work Progress Tracking",
      "Job History per Vehicle",
      "Urgent Flag for Job Cards",
    ],
  },
  {
    id: "dashboard",
    name: "Real-time Dashboard",
    icon: cat6,
    features: [
      "Live Workshop Revenue Tracking",
      "Active Job Cards & Status Monitor",
      "Quick Access Analytics Widgets",
      "Real-time Booking & Task Notifications",
      "Interactive Sales & Repair Insights",
    ],
  },
  {
    id: "finance",
    name: "Finance Management",
    icon: cat2,
    features: [
      "GST Billing & Invoice Generation",
      "Customer Ledger & Account Balances",
      "Payment Tracking (Paid / Due / Partially Paid)",
      "Expense Tracking & Categorization",
    ],
  },
  {
    id: "countersales",
    name: "Counter Sales",
    icon: feat2,
    features: [
      "Counter Sales & Instant Invoicing",
      "Direct Parts & Spares Billing",
      "Daily Cash & Online Payment Reconciliation",
      "Walk-in Customer Quick Checkout",
    ],
  },
  {
    id: "multibranch",
    name: "Multi-Branch System",
    icon: cat5,
    features: [
      "Unified Multi-Branch Analytics Dashboard",
      "Inter-Branch Stock Transfer & Requests",
      "Branch-wise Staff Allocation & Permissions",
      "Centralized Inventory Control across locations",
      "Separate Branch Ledger & Accounts",
    ],
  },
  {
    id: "inventory",
    name: "Inventory Management",
    icon: cat3,
    features: [
      "Parts Stock Control & Stock Adjustment",
      "Low-Stock Alerts & Critical Item Warnings",
      "Purchase History & Supplier Ledger",
      "Supplier Accounts & Payment Tracking",
    ],
  },
  {
    id: "crm",
    name: "Customer CRM",
    icon: feat1,
    features: [
      "Customer Profile & Contact Management",
      "Vehicle Service History Logging",
      "CRM Interaction Notes & Preferences",
      "Automated Next Service Date Reminders",
      "Feedback Logs & Follow-up History",
    ],
  },
  {
    id: "staff",
    name: "Staff & Payroll",
    icon: cat4,
    features: [
      "Role-Based Access Control (Admin / Manager / Mechanic)",
      "Staff Attendance & Check-in Logging",
      "Mechanic Commission & Incentive Calculations",
      "Salary Setup & Automated Wage Slips",
      "Mechanic-wise Repair Tasks Tracking",
    ],
  },
  {
    id: "automation",
    name: "WhatsApp Notifications",
    icon: cat1,
    features: [
      "Automated Booking Notifications to WhatsApp",
      "Digital Job Card Share Links via WhatsApp",
      "Invoice Links & Payment Reminders on Mobile",
      "Service Completion & Delivery Alerts",
      "Credit-Based Messaging System Control",
    ],
  },
  {
    id: "reports",
    name: "Smart Analytics & Reports",
    icon: cat6,
    features: [
      "Accounting & Detailed Profitability Reports",
      "Staff Performance & Mechanic Output Reports",
      "Inventory Consumption & Fast-Moving Items Analysis",
      "Detailed Tax & GST Reports",
      "Comprehensive Business Audit Logs",
    ],
  },
  {
    id: "system",
    name: "System & Access",
    icon: cat7,
    features: [
      "Cloud Backup & Auto Database Sync",
      "Multi-Device Compatibility (Mobile, Tablet, Desktop)",
      "Secure Encrypted Login System",
      "Automated Security Updates & Data Privacy",
    ],
  },
];

export default function PricingAccordionFeatures({ className }) {
  const [openId, setOpenId] = useState("job");

  return (
    <div className="bg-[#F6F6F6] py-16 px-4">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
          Everything You Get with{" "}
          <span className="relative inline-block">
            GarageSaarthi
            <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></span>
          </span>
        </h2>
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#EFE9E7] shadow-sm">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          <p className="text-sm text-slate-600">
            All features are included in every plan. No restrictions. Choose a
            duration that suits you.
          </p>
        </div>
      </div>
      <div className="p-0 rounded-none lg:p-6 lg:rounded-[20px] mx-auto lg:bg-white">
        <div className="rounded-[20px] border border-[#F1F1F4] overflow-hidden shadow-2xl shadow-slate-200/50">
          {/* Table Header (Hidden on Mobile) */}
          <div className="hidden md:flex items-stretch bg-[#F8F4EE]">
            <div className="w-[40%] px-8 py-5 font-bold text-[#0F172A] text-sm tracking-wider flex items-center">
              Feature Categories
            </div>
            <div className="w-[60%] px-8 py-5 font-bold text-[#0F172A] text-sm tracking-wider flex items-center justify-center text-center">
              Features
            </div>
          </div>

          <div>
            {categories.map((cat) => {
              const isOpen = openId === cat.id;
              return (
                <div
                  key={cat.id}
                  className={cn(
                    "group border-t border-[#F1F1F4]",
                    cat.id === categories[0].id && "border-t-0"
                  )}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setOpenId(isOpen ? null : cat.id)}
                    className={cn(
                      "w-full flex items-center justify-between py-5 px-8 transition-all duration-300 text-left outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0 border-b",
                      isOpen
                        ? "bg-white border-[#F1F1F4]"
                        : "hover:bg-slate-50/50 border-transparent"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center p-2 transition-colors">
                        <img
                          src={cat.icon}
                          alt={cat.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="font-medium text-base transition-colors text-[#101828]">
                        {cat.name}
                      </span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-[#B02E0C]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 group-hover:text-slate-600" />
                    )}
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={cn(
                      "grid transition-all duration-500 ease-in-out overflow-hidden",
                      isOpen
                        ? "grid-rows-[1fr] bg-[#FDFDFD]"
                        : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="md:flex">
                        <div className="hidden md:block md:w-[40%]"></div>
                        <div className="md:w-[60%]">
                        {cat.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className={cn(
                              "group/feature flex items-center justify-between py-4 px-8 border-b border-[#F1F1F4]/40 md:border-l md:border-l-[#F1F1F4] transition-colors bg-white hover:bg-[#F3F3F3]/40 cursor-pointer"
                            )}
                          >
                            <span className="text-slate-700 text-sm sm:text-base transition-all group-hover/feature:font-semibold">
                              {feature}
                            </span>
                            <div className="bg-[#B02E0C] p-1 rounded-full shadow-sm">
                              <Check className="h-2.5 w-2.5 text-white stroke-[3px]" />
                            </div>
                          </div>
                        ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
