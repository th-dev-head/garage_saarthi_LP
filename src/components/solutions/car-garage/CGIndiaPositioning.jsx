import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const points = [
  "GST billing designed for Indian spare parts and service tax structures.",
  "Workflows built around how independent and multi-brand car garages operate in India.",
  "Subscription plans in INR with monthly and longer-duration options.",
  "Android and iOS mobile applications available for garage owners and advisors across Indian cities.",
  "Designed for single-location car garages and growing multi-branch workshop chains.",
  "Cloud-based online garage management — no hardware or server required.",
];

export default function CGIndiaPositioning() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Built for India
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
              Car Garage Management Software Built for{" "}
              <GradientUnderline>Workshops in India</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              GarageSaarthi is designed specifically for car garages and automotive workshops operating in India. The platform reflects the actual workflows, billing requirements, and operational realities of Indian garage businesses — from independent workshops to growing multi-branch service centres.
            </p>
            <Link
              href="/pricing/"
              className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              View GarageSaarthi Pricing
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Checklist */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-6">Why Indian Garages Choose GarageSaarthi</h3>
            <ul className="space-y-4">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

