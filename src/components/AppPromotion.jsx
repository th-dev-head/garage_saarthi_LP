"use client";

import { FRONTEND_URL } from "@/src/config/env";
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import MockupBg from '../assets/icons/MockupDashboard.webp';
import AppHand from '../assets/icons/Appdl.webp';
import Button from './common/Button';
import PlayStoreBadge from './common/PlayStoreBadge';
import AppStoreBadge from './common/AppStoreBadge';

const AppPromotion = () => {
  return (
    <section 
      id="download-app"
      className="relative w-full py-10 md:py-16 2xl:py-20 px-6 md:px-12 lg:px-20 2xl:px-50 overflow-hidden bg-[#EFE9E7]"
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{ 
          backgroundImage: `url("${MockupBg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.15
        }}
      />
      
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        {/* Left Side - Image */}
        <div className="w-full flex justify-center lg:justify-start items-end self-end ">
          <div className="relative w-full">
            <img 
              src={AppHand} 
              alt="GarageSaarthi garage management software on web and mobile" 
              className="w-full h-full object-contain lg:-mb-20"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full flex flex-col items-start text-center md:text-left">
          <h2 className="text-xl md:text-3xl lg:text-2xl xl:text-4xl 2xl:text-4xl font-bold text-text-dark mb-5">
            Manage Your Garage on <span className="relative inline-block">Web and Mobile.<span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]"></span></span>
          </h2>
          
          <p className="text-[#4B5563] text-sm md:text-lg mb-7 md:mb-10 max-w-3xl leading-relaxed font-medium">
            Access your workshop details from anywhere. Use the GarageSaarthi web dashboard for office billing and calculations, and use our mobile app to track mechanic tasks and create job cards instantly.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start w-full">
            {/* Primary CTA - Start Free Trial */}
            <Button
              variant="hero"
              className="h-[46px]"
              onClick={() => {
                window.open(`${FRONTEND_URL}/register`, "_blank");
              }}
            >
              Start Free Trial
              <FaArrowRight className="w-4 h-4 ml-2" />
            </Button>

            {/* Play Store Button */}
            <PlayStoreBadge />

            {/* App Store Button */}
            <AppStoreBadge />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;
