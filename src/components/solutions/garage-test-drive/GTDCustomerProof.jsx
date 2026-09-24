"use client";

import React from "react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

export default function GTDCustomerProof() {
  const handleCtaClick = () => {
    trackEvent("test_drive_customer_story_click", {
      page_path: "/solutions/garage-test-drive-software/",
      destination: "/features/customer-reviews/"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Customer Success
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-8 leading-tight">
          How Workshop Owners <GradientUnderline>Eliminated Test Drive Disputes</GradientUnderline>
        </h2>

        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-sm text-left max-w-2xl mx-auto relative">
          <div className="flex gap-1 text-orange-400 mb-6 justify-center md:justify-start">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="text-slate-700 text-sm md:text-base italic leading-relaxed mb-6">
            "Before GarageSaarthi, we had constant arguments with car owners about extra kilometers or existing bumper scratches after servicing. The pre-drive damage diagramming and touchscreen signature pad solved 100% of these disputes. Our staff road tests are now fully controlled and professional."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center font-bold text-primary">
              SN
            </div>
            <div>
              <h4 className="text-xs font-bold text-text-dark">Suresh N.</h4>
              <p className="text-[10px] text-slate-400">SpeedKraft Multi-Brand Workshop, Pune</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <Link href="/features/customer-reviews/">
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
