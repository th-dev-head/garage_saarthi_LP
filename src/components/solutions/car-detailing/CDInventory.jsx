import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const inventoryPoints = [
  {
    title: "Track Workshop Inventory",
    desc: "Maintain detailed logs for specialized detailing chemical stocks (compounds, polishes, waxes, ceramic coatings) and PPF rolls.",
  },
  {
    title: "Manage Counter Sales",
    desc: "Process fast retail billing for direct microfiber towels, shampoos, or accessories sold straight to walk-in car owners.",
  },
  {
    title: "Link Stock to active Job Cards",
    desc: "Automatically deduct coatings or chemical ounces as they are assigned by detailers to active job sheets, preventing stock shrinkage.",
  },
];

export default function CDInventory() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content - Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Chemical Stock
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Manage Detailing Chemicals and{" "}
              <GradientUnderline>Workshop Inventory</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Detailing chemicals and PPF rolls are high-value stock. Track usage levels precisely. GarageSaarthi links inventory checkouts straight to job cards and customer invoices.
            </p>

            <div className="space-y-4 pt-2">
              {inventoryPoints.map((point, idx) => (
                <div key={idx} className="flex gap-3">
                  <FaCheckCircle className="text-primary w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 mb-0.5">{point.title}</h3>
                    <p className="text-[11px] text-slate-500 leading-normal">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/features/inventory"
                className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
              >
                Explore Inventory Management <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Visual block - Right Column */}
          <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide border-b border-slate-200/60 pb-3 mb-4">
              Chemical Stock Reference
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between text-xs border-b border-slate-200/40 pb-2">
                <span className="font-medium text-slate-700">Ceramic Coating Liquid (50ml)</span>
                <span className="text-primary font-bold">12 Units</span>
              </div>
              <div className="flex justify-between text-xs border-b border-slate-200/40 pb-2">
                <span className="font-medium text-slate-700">PPF Roll (Matte Finish)</span>
                <span className="text-primary font-bold">4 Rolls</span>
              </div>
              <div className="flex justify-between text-xs border-b border-slate-200/40 pb-2">
                <span className="font-medium text-slate-700">Microfiber Towel 400 GSM</span>
                <span className="text-primary font-bold">45 Units</span>
              </div>
              <div className="flex justify-between text-xs border-b border-slate-200/40 pb-2">
                <span className="font-medium text-slate-700">Cutting Compound (1L)</span>
                <span className="text-emerald-600 font-bold">Low (1 Unit)</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="font-medium text-slate-700">Car Shampoo Concentrate</span>
                <span className="text-primary font-bold">8 Cans</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
