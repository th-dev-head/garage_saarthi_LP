"use client";

import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaArrowRight } from "react-icons/fa";
import MockupBg from "../../../assets/icons/MockupDashboard.webp";
import AppHand from "../../../assets/icons/Appdl.webp";
import Button from "../../common/Button";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import AppStoreBadge from "../../common/AppStoreBadge";
import Link from "next/link";
import { FRONTEND_URL } from "@/src/config/env";

export default function WMMobile() {
  return (
    <section
      id="wm-mobile"
      className="relative w-full py-16 px-6 md:px-12 lg:px-20 2xl:px-50 overflow-hidden bg-[#EFE9E7]"
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("${MockupBg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        {/* Left Side - Image */}
        <div className="w-full flex justify-center lg:justify-start items-end self-end">
          <div className="relative w-full">
            <img
              src={AppHand}
              alt="GarageSaarthi workshop app on mobile"
              className="w-full h-full object-contain lg:-mb-20"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full flex flex-col items-start text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
            Responsive Platform
          </p>
          <h2 className="text-xl md:text-3xl lg:text-2xl xl:text-4xl 2xl:text-4xl font-bold text-text-dark mb-5">
            Access Your Workshop on{" "}
            <GradientUnderline>Web and Mobile.</GradientUnderline>
          </h2>

          <p className="text-gray-600 text-sm md:text-lg mb-7 md:mb-10 max-w-3xl leading-relaxed font-medium">
            Manage your garage business from anywhere. Run invoices and check financial reports on your office desktop, while mechanics create digital job cards and update service statuses directly on the shop floor using our Android and iOS apps.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start w-full">
            {/* Primary CTA - Start Free Trial */}
            <Button
              variant="hero"
              onClick={() => {
                window.open(`${FRONTEND_URL}/register`, "_blank");
              }}
            >
              Start Free Trial
              <FaArrowRight className="w-4 h-4 ml-2" />
            </Button>

            {/* App Store & Play Store Badges */}
            <div className="flex items-center gap-4">
<PlayStoreBadge />
<AppStoreBadge />
</div>
          </div>
        </div>
      </div>
    </section>
  );
}

