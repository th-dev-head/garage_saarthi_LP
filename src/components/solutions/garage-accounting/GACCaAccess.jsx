import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function GACCaAccess() {
  const handleFeatureClick = () => {
    trackEvent("ca_access_feature_click", {
      page_path: "/solutions/garage-accounting-software",
      cta_location: "ca_access_section",
      cta_label: "Explore CA Access",
      destination: "/features/ca-access"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Tax Audit Access
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Give Your CA Access Without <GradientUnderline>Sharing Your Garage Login</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Many workshop owners waste hours sending invoice PDFs and export files to their accountant at the end of every quarter. GarageSaarthi lets you invite your Chartered Accountant (CA) or tax assistant under a restricted read-only profile.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            They can log in independently to download collections logs, expense records, and tax summaries, without having permissions to modify your live database.
          </p>
          <div className="pt-2">
            <Link href="/features/ca-access" onClick={handleFeatureClick}>
              <Button>
                Explore CA Access <FaChevronRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between aspect-[4/3]">
          <div className="space-y-4 my-auto">
            <div className="border-b border-slate-200/60 pb-3">
              <span className="text-xs text-slate-500 font-medium">CA User Settings</span>
              <p className="text-sm font-bold text-slate-800">Restricted Read-Only Access</p>
            </div>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>View GST Sales Reports</span>
                <span className="font-bold text-emerald-600">✓ Enabled</span>
              </div>
              <div className="flex justify-between">
                <span>Modify Invoice Ledger</span>
                <span className="font-bold text-rose-500">✕ Disabled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
