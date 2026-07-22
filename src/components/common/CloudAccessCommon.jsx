import React from "react";
import Link from "next/link";
import { FaLaptop, FaAndroid, FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import PlayStoreBadge from "./PlayStoreBadge";
import GLogo from "@/src/assets/icons/Glogo.png";
import { FRONTEND_URL } from "@/src/config/env";
import GradientUnderline from "./GradientUnderline";

export default function CloudAccessCommon({
  badge = "Cloud Access",
  title,
  titleHighlight,
  subtitle,
  features = [],
  bgClass = "bg-white"
}) {
  return (
    <section className={`py-20 px-4 lg:px-15 2xl:px-50 flex justify-center ${bgClass}`}>
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text Column */}
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              {badge}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
              {titleHighlight ? <>{title}{" "}<GradientUnderline>{titleHighlight}</GradientUnderline></> : title}
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              {subtitle}
            </p>

            <div className="space-y-4 mb-8">
              {features.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-primary text-base flex-shrink-0 inline-flex items-center">
                      {item.icon}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Button
                variant="hero"
                icon={<FaArrowRight className="w-4 h-4" />}
                onClick={() => window.open(`${FRONTEND_URL}/signup`, "_blank")}
              >
                Start 7-Day Free Trial
              </Button>
              <PlayStoreBadge />
            </div>
          </div>

          {/* Visual Column */}
          <div className="bg-slate-50 max-w-xl mx-auto border border-slate-200/80 rounded-2xl p-8 flex flex-col justify-center items-center text-center h-full min-h-[320px]">
            <span className="text-xs font-bold text-slate-800 mb-4 block">Android Play Store App Available</span>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 w-full mx-auto" style={{ maxWidth: "280px" }}>
              <img src={GLogo} alt="GarageSaarthi Logo" className="w-22 h-16 object-contain mx-auto mb-4" />
              <h4 className="font-bold text-slate-900 mb-1">GarageSaarthi App</h4>
              <p className="text-[10px] text-slate-500 mb-4">Complete garage management software for mobile.</p>
              <PlayStoreBadge className="w-full justify-center" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
