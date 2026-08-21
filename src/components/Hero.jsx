"use client";

import { FRONTEND_URL } from "@/src/config/env";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaPlay, FaTimes, FaArrowRight } from "react-icons/fa";
import Button from "./common/Button";
import HeroBg from "../assets/optimized/GimageBg.webp";
import { trackEvent } from "../utils/pixel";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (showVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showVideo]);

  return (
    <section id="home" className="relative w-full overflow-hidden">
      {/* Explicit LCP Preload */}
      <link
        rel="preload"
        as="image"
        href={typeof HeroBg === 'object' ? HeroBg.src : HeroBg}
        fetchPriority="high"
      />

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={HeroBg}
          alt="GarageSaarthi Background"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-[300px] md:min-h-[400px] lg:min-h-[480px] xl:min-h-[540px] flex flex-col items-center justify-center px-4 pt-32 md:pt-40 lg:pt-44 pb-20 md:pb-24 lg:pb-28 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-white font-extrabold leading-normal mb-6">
            <span className="block text-3xl md:text-5xl mb-2">Garage Management Software</span>
            <span className="block text-white text-2xl md:text-4xl font-semibold">for Modern Workshops in India</span>
          </h1>

          <p className="text-white/80 text-base md:text-lg max-w-3xl mx-auto mb-10">
            All-in-one garage management platform to simplify digital job cards, billing, counter sales, inventory, CRM, staff, and service alerts.
          </p>

          <div className="flex flex-col min-[430px]:flex-row justify-center gap-4 w-fit mx-auto">
            <Button
              variant="hero"
              className="!px-8 !py-3 text-lg min-[350px]:text-lg pulse-border-effect"
              onClick={() => {
                trackEvent('Lead');
                window.open(`${FRONTEND_URL}/signup`, '_blank');
              }}
            >
              Start 7-Day Free Trial
              <FaArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <Button
              variant="secondary"
              className="!px-8 !py-3 text-lg min-[350px]:text-lg shadow-lg justify-center"
              onClick={() => setShowVideo(true)}
              icon={
                <span className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
                  <FaPlay className="w-2 h-2 text-white pl-[1.5px]" />
                </span>
              }
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4" onClick={() => setShowVideo(false)}>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors cursor-pointer flex items-center justify-center"
            >
              <FaTimes className="w-5 h-5" />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Csp1EhRFKnE?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
