"use client";

import React from "react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

export default function GJCCustomerProof() {
  const handleCtaClick = () => {
    trackEvent("job_card_customer_story_click", {
      page_path: "/solutions/garage-job-card-software",
      destination: "/features/customer-reviews"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Customer Stories
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-8 leading-tight">
          See How Garages Manage Daily Jobs with{" "}
          <GradientUnderline>GarageSaarthi</GradientUnderline>
        </h2>

        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-sm text-left max-w-2xl mx-auto relative">
          <div className="flex gap-1 text-orange-400 mb-6 justify-center md:justify-start">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="text-slate-700 text-sm md:text-base italic leading-relaxed mb-6">
            "We used to write job cards on custom paper pads. Mechanics would lose sheets, and the front counter wouldn't know which parts were replaced. Switching to GarageSaarthi digital job cards has saved us hours of double entry. We create cards on mobile, select inventory parts directly, and print final GST invoices with one click."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center font-bold text-primary">
              AR
            </div>
            <div>
              <h4 className="text-xs font-bold text-text-dark">Anil R.</h4>
              <p className="text-[10px] text-slate-400">Apex Motor Works, Surat (Car Garage &amp; Multi-Brand Repair services)</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex item-cetner justify-center">
          <Link href="/features/customer-reviews">
            <Button
              variant="hero"
              onClick={handleCtaClick}
            >
              View Customer Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

