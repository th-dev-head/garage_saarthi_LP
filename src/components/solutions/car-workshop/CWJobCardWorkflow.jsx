import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function CWJobCardWorkflow() {
  const handleLinkClick = (name, url) => {
    trackEvent("feature_click", {
      page_path: "/solutions/car-workshop-software",
      cta_location: "job_card_workflow_section",
      cta_label: name,
      destination: url
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between aspect-[4/3] relative">
          <div className="space-y-4 my-auto">
            <div className="border-b border-slate-200/60 pb-3">
              <span className="text-xs text-slate-500 font-medium">Digital Job Card</span>
              <p className="text-sm font-bold text-slate-800">Job Card #GSJC-0845</p>
            </div>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Vehicle Model</span>
                <span className="font-semibold text-slate-800">Hyundai i20</span>
              </div>
              <div className="flex justify-between">
                <span>Services Assigned</span>
                <span className="font-semibold text-slate-800">Engine Oil + Wheel Alignment</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 rounded-2xl p-3 text-[11px] text-slate-600 text-center">
            🔗 Linked to service history logs
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Job Cards Workflow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Create and Manage Digital Job Cards for <GradientUnderline>Every Car</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Record customer requests, list repair instructions, and monitor mechanic assignments digitally. When a vehicle enters your workshop, log check-in details immediately to avoid manual transcription errors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-800">Digital Job Cards</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Log services and repair activities on our web or mobile app dashboard. Explore{" "}
                <Link href="/features/job-cards" onClick={() => handleLinkClick("Job Cards Feature Link", "/features/job-cards")} className="text-primary font-semibold hover:underline">
                  Digital Job Cards
                </Link>.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-800">Customer Records</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Track phone numbers, billing profiles, and active cars centrally. Explore{" "}
                <Link href="/features/customers" onClick={() => handleLinkClick("Customers Feature Link", "/features/customers")} className="text-primary font-semibold hover:underline">
                  Customer Records
                </Link>.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-800">Vehicle History</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Review past invoice records, spare part bills, and checklists. Explore{" "}
                <Link href="/features/vehicles" onClick={() => handleLinkClick("Vehicles Feature Link", "/features/vehicles")} className="text-primary font-semibold hover:underline">
                  Vehicle History
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
