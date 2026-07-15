import React from "react";
import Link from "next/link";
import { FaAddressBook } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import Button from "../common/Button";

export default function GCCustomerManagement() {
  const handleFeatureClick = () => {
    trackEvent("customer_feature_click", {
      page_path: "/solutions/garage-crm-software",
      page_name: "garage_crm_software",
      cta_location: "customer_management",
      cta_label: "Explore Customer Management",
      feature_name: "Customers"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Customer Records
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Keep Every Garage Customer Record Organized
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            Ditch paper diaries, loose notes, scattered phone book contacts, and manual spreadsheets. Centralize customer registers in a secure cloud database.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-2.5 text-xs text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-1.5 flex-shrink-0" />
              <span>Maintain customer name, contact details, and locations in one place.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-1.5 flex-shrink-0" />
              <span>Link vehicle registration parameters and specifications directly to the profile.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-1.5 flex-shrink-0" />
              <span>Search customer logs instantly by phone number or vehicle registration when they call or visit.</span>
            </div>
          </div>

          <Link href="/features/customers">
            <Button
              variant="hero"
              onClick={handleFeatureClick}
            >
              Explore Customer Management
            </Button>
          </Link>
        </div>

        {/* Right card visual */}
        <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-4">
            <FaAddressBook className="text-primary w-5 h-5" />
            <h3 className="text-sm font-bold text-text-dark uppercase tracking-wide">Customer database card</h3>
          </div>
          <div className="space-y-3 text-xs">
            <div className="bg-white p-3 rounded-xl border border-slate-100 flex justify-between">
              <span>Customer Name</span>
              <span className="font-bold text-slate-800">Ramesh Patel (Surat)</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-100 flex justify-between">
              <span>Linked Vehicle</span>
              <span className="font-bold text-slate-800">Hyundai Creta (GJ-05-CD-5678)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
