"use client";

import React from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaTachometerAlt,
  FaGasPump,
  FaIdCard,
  FaFileSignature,
  FaHistory,
  FaArrowRight
} from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function GTDFeatures() {
  const handleFeatureClick = (featureName) => {
    trackEvent("test_drive_feature_click", {
      page_path: "/solutions/garage-test-drive-software/",
      feature_name: featureName
    });
  };

  const features = [
    {
      icon: <FaMapMarkerAlt className="text-primary w-6 h-6" />,
      title: "2D Vehicle Body Damage Mapper",
      desc: "Tap and drop pinpoint tags for scratches, dents, and cracks directly onto a car blueprint with technician notes.",
      link: "/features/test-drive/"
    },
    {
      icon: <FaTachometerAlt className="text-primary w-6 h-6" />,
      title: "Automated Distance Meter",
      desc: "Instant kilometer calculation (Return ODO - Start ODO) ensures road tests stay within designated authorized radius.",
      link: "/features/test-drive/"
    },
    {
      icon: <FaGasPump className="text-primary w-6 h-6" />,
      title: "5-Stage Fuel Monitoring",
      desc: "Select starting and return fuel gauge levels (0% to 100%) to verify fuel balance and prevent theft disputes.",
      link: "/features/test-drive/"
    },
    {
      icon: <FaIdCard className="text-primary w-6 h-6" />,
      title: "Driver License & Role Verification",
      desc: "Store driver classification (Staff / Customer / Third-Party), mobile contact, and driving license details.",
      link: "/features/test-drive/"
    },
    {
      icon: <FaFileSignature className="text-primary w-6 h-6" />,
      title: "Touchscreen Digital Signatures",
      desc: "Capture instant electronic signatures at departure and return to legally seal driver handover and condition.",
      link: "/features/test-drive/"
    },
    {
      icon: <FaHistory className="text-primary w-6 h-6" />,
      title: "Permanent Job Card History",
      desc: "Every completed road test is permanently archived inside the vehicle's digital service dossier.",
      link: "/features/job-card-management/"
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Key Capabilities
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Complete Digital Governance for <GradientUnderline>Workshop Road Tests</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Everything your service advisors and mechanics need to conduct secure, auditable, and dispute-proof test drives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-primary/40 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-text-dark mb-3">
                  {feat.title}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                  {feat.desc}
                </p>
              </div>
              <Link
                href={feat.link}
                onClick={() => handleFeatureClick(feat.title)}
                className="flex items-center gap-2 text-primary font-semibold text-xs md:text-sm hover:underline"
              >
                Learn More
                <FaArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
