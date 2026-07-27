import React from "react";
import Link from "next/link";
import { FaBookOpen, FaLayerGroup, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const paperSetupPoints = [
  "Paper job sheets that get dirty, misplaced, or torn in repair bays",
  "Manual stockbooks leading to inventory leakage and unbilled spare parts",
  "Separate billing software or paper books that delay GST filing",
  "Loose slips for mechanic attendance and manual salary calculations"
];

const saarthiPoints = [
  "Digital job cards created in under a minute on mobile or laptop",
  "Real-time spare parts stock tracking deducted dynamically on work orders",
  "GST-compliant invoices with custom billing series & direct WhatsApp sharing",
  "Mechanic staff attendance, leave management, and job-based commission tracking"
];

export default function GSIPositioning() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            India Workshop Realities
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Garage Management Software Designed for <GradientUnderline>Workshops in India</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Many workshops across India still rely on paper registers, Excel sheets, personal WhatsApp chats, and loose scraps of paper to run daily operations.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left - Disconnected Reality */}
          <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl space-y-4">
            <div className="flex items-center gap-3 text-red-700">
              <FaBookOpen className="text-xl flex-shrink-0" />
              <h3 className="text-base font-bold">The Disconnected Paper & Register Setup</h3>
            </div>
            <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
              {paperSetupPoints.map((text, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Right - GarageSaarthi Unified Platform */}
          <div className="bg-white border-2 border-primary/20 p-8 rounded-3xl space-y-4 shadow-sm">
            <div className="flex items-center gap-3 text-primary">
              <FaLayerGroup className="text-xl flex-shrink-0" />
              <h3 className="text-base font-bold">The Unified GarageSaarthi Solution</h3>
            </div>
            <ul className="space-y-2 text-xs text-slate-700 leading-relaxed font-medium">
              {saarthiPoints.map((text, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs md:text-sm text-slate-600">
            Explore how{" "}
            <Link href="/" className="font-bold text-primary hover:underline">
              GarageSaarthi garage management software
            </Link>{" "}
            simplifies daily workshop tasks across India.
          </p>
        </div>
      </div>
    </section>
  );
}

