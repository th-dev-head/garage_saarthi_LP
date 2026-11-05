import React from "react";
import GradientUnderline from "@/src/components/common/GradientUnderline";
import CountryFlag from "@/src/components/common/CountryFlag";
import { FaCheckCircle, FaFileInvoiceDollar, FaShieldAlt, FaCoins, FaBuilding } from "react-icons/fa";

export default function LocationTaxCompliance({ location }) {
  const { taxCompliance, countryName, currency, currencySymbol, taxType, taxAuthority } = location;

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Tax & Invoicing Compliance
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Built-in Compliance with{" "}
            <GradientUnderline>{taxAuthority}</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate accounting errors, automate tax line-items, and print clean legal invoices formatted specifically for {countryName}.
          </p>
        </div>

        {/* Main Tax Card */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-8 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Details & Checklist */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-primary text-xs font-semibold mb-4">
                <FaFileInvoiceDollar className="w-3.5 h-3.5" />
                <span>{taxType} Tax Engine</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-4">
                {taxCompliance?.headline}
              </h3>
              <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                {taxCompliance?.description}
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {taxCompliance?.features?.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <FaCheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                    <span className="text-xs md:text-sm text-slate-700 font-medium">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Key Stats / Compliance Badges */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-xl p-6 lg:p-8 flex flex-col gap-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-primary flex items-center justify-center font-bold">
                    <FaCoins className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Standard Currency</div>
                    <div className="text-sm font-bold text-slate-900">{currency} ({currencySymbol})</div>
                  </div>
                </div>
                <CountryFlag code={location.code} name={countryName} className="w-8 h-5.5 rounded-sm shadow-xs" />
              </div>

              <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-emerald-600 flex items-center justify-center font-bold">
                  <FaShieldAlt className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Governing Authority</div>
                  <div className="text-sm font-bold text-slate-900">{taxAuthority}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-blue-600 flex items-center justify-center font-bold">
                  <FaBuilding className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Tax Structure</div>
                  <div className="text-sm font-bold text-slate-900">{taxType} Integrated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

