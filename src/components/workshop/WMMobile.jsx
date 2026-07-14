import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import MockupBg from "../../assets/icons/Mockup dashboard 1.png";
import AppHand from "../../assets/icons/Appdl.png";
import PlayStoreIcon from "../../assets/icons/Playstore.png";
import Button from "../common/Button";

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
          <h2 className="text-xl md:text-3xl lg:text-2xl xl:text-4xl 2xl:text-[44px] font-bold text-[#111827] mb-5">
            Access Your Workshop on{" "}
            <span className="relative inline-block">
              Web and Mobile.
              <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
            </span>
          </h2>

          <p className="text-[#4B5563] text-sm md:text-lg mb-7 md:mb-10 max-w-3xl leading-relaxed font-medium">
            Manage your garage business from anywhere. Run invoices and check financial reports on your office desktop, while mechanics create digital job cards and update service statuses directly on the shop floor using our Android app.
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

            {/* Play Store Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.th.garagesaarthi&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full transition-all hover:-translate-y-1 active:scale-95 group h-[46px]"
            >
              <div className="p-0.5">
                <img src={PlayStoreIcon} alt="" className="w-6 h-6 object-contain" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-normal opacity-70 leading-none">Download on the</span>
                <span className="text-xs font-semibold leading-tight mt-0.5">Play Store</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
