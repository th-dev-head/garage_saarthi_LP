import React from "react";
import { FaUserShield, FaLock } from "react-icons/fa";

export default function GEFinance() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Finance &amp; CA
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Organize Garage Payments, Finance and CA Access
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            Keep your operational financial records organized inside the same platform. Track customer payments, invoice series, pending dues, and basic workshop collections.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            You can grant a dedicated login to your Chartered Accountant (CA) or tax manager to directly access sales summaries, GST invoices, and financial lists. This eliminates the need for manual CSV exports during monthly filing periods.
          </p>
          <div className="bg-orange-50 border-l-4 border-primary p-4 rounded-r-xl text-xs text-slate-600 mb-8 max-w-md">
            <strong>Important Notice:</strong> GarageSaarthi is operational software. It is not designed to be a complete accounting ERP or full Tally replacement, and does not file GST returns automatically.
          </div>
        </div>

        {/* Right Card visual */}
        <div className="bg-white border border-slate-200/80 p-8 rounded-3xl space-y-4">
          <div className="flex items-center gap-3">
            <FaUserShield className="text-primary w-6 h-6" />
            <h3 className="text-sm font-bold text-text-dark uppercase tracking-wide">CA Access Portal</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-green-600 bg-green-50 px-3 py-2 rounded-lg">
              <FaLock className="w-3.5 h-3.5" />
              <span>Dedicated Secure CA Login Session Active</span>
            </div>
            <div className="border border-slate-100 p-4 rounded-xl space-y-2">
              <div className="flex justify-between text-xs text-slate-500">
                <span>GST Taxable Invoices</span>
                <span className="font-bold text-slate-700">142 generated</span>
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>SGST collected</span>
                <span className="font-bold text-slate-700">₹14,240</span>
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>CGST collected</span>
                <span className="font-bold text-slate-700">₹14,240</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
