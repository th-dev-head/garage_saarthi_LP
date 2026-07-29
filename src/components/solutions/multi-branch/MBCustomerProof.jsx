"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";
import Button from "../../common/Button";

export default function MBCustomerProof() {
  const handleStoriesClick = () => {
    trackEvent("customer_story_click", {
      page_path: "/solutions/multi-branch-garage-software",
      cta_location: "customer_proof_section",
      cta_label: "View Customer Stories"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center space-y-6">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Case Studies
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
          Built for Growing Garage and <GradientUnderline>Workshop Businesses</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Read how multi-location workshop groups, auto repair chains, and franchise owners use GarageSaarthi to centralize their databases and switch from registers to cloud control.
        </p>
        <div className="pt-2 flex justify-center">
          <Link href="/customers" onClick={handleStoriesClick}>
            <Button>
              View Customer Stories <FaArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}