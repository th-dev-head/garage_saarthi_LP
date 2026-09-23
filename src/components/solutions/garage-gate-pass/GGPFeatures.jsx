"use client";

import React from "react";
import Link from "next/link";
import {
  FaQrcode,
  FaShieldAlt,
  FaPrint,
  FaUserCheck,
  FaLock,
  FaHistory,
  FaWhatsapp,
  FaArrowRight
} from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function GGPFeatures() {
  const handleFeatureClick = (featureName) => {
    trackEvent("gate_pass_feature_click", {
      page_path: "/solutions/garage-gate-pass-software/",
      feature_name: featureName
    });
  };

  const features = [
    {
      icon: <FaQrcode className="text-primary w-6 h-6" />,
      title: "1-Click QR Gate Pass Generation",
      desc: "Instantly create dynamic, encrypted QR gate passes linked directly to the closed job card and invoice settlement.",
      link: "/features/gate-pass/"
    },
    {
      icon: <FaUserCheck className="text-primary w-6 h-6" />,
      title: "Zero-Login Guard Smartphone Scan",
      desc: "Guards point their mobile phone camera at the QR slip to load clearance status in 2 seconds without logging in.",
      link: "/features/gate-pass/"
    },
    {
      icon: <FaLock className="text-primary w-6 h-6" />,
      title: "Unpaid Vehicle Exit Blocker",
      desc: "Prevents exit authorization if invoice balances, parts counter dues, or insurance deductibles are pending.",
      link: "/features/billing/"
    },
    {
      icon: <FaPrint className="text-primary w-6 h-6" />,
      title: "Thermal POS & A4 Printing",
      desc: "Print compact 2-inch/3-inch thermal gate slips or full-page A4 delivery receipts directly from the billing desk.",
      link: "/features/gate-pass/"
    },
    {
      icon: <FaHistory className="text-primary w-6 h-6" />,
      title: "Cloud Exit Audit Ledger",
      desc: "Every gate release records guard identity, exact timestamp, vehicle odometer, and notes permanently in the cloud.",
      link: "/features/gate-pass/"
    },
    {
      icon: <FaWhatsapp className="text-primary w-6 h-6" />,
      title: "WhatsApp Digital Gate Slips",
      desc: "Customers receive their digital gate pass and tax invoice PDF directly on WhatsApp for paperless gate exit.",
      link: "/features/automation/"
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
            Comprehensive Gate Pass Features for{" "}
            <GradientUnderline>Workshop Security</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            From cashier billing counter to the security exit gate, explore our complete vehicle release toolkit:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-150"
            >
              <div>
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                  {feat.icon}
                </div>
                <h3 className="text-sm font-bold text-text-dark mb-2">{feat.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">{feat.desc}</p>
              </div>
              <Link
                href={feat.link}
                onClick={() => handleFeatureClick(feat.title)}
                className="flex items-center gap-1 text-xs text-primary font-bold hover:underline self-start mt-auto"
              >
                Explore Feature
                <FaArrowRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
