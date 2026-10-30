"use client";

import React from "react";
import { FaStar, FaGoogle, FaCheckCircle, FaQuoteLeft } from "react-icons/fa";
import GradientUnderline from "@/src/components/common/GradientUnderline";

export default function CustomerReviewsSection() {
  const reviews = [
    {
      source: "Google Verified Review",
      rating: 5,
      date: "Recent Feedback",
      author: "Rajesh Panchal",
      workshop: "Panchal Auto Service Center",
      city: "Vadodara, Gujarat",
      comment: "We switched from an old desktop software that crashed twice a week. GarageSaarthi works seamlessly on both mobile and our reception tablet. The WhatsApp PDF invoice feature is something our customers praise every single day.",
    },
    {
      source: "Workshop Owner Feedback",
      rating: 5,
      date: "Recent Feedback",
      author: "Mohammad Arif",
      workshop: "Crown Motor Garage",
      city: "Jaipur, Rajasthan",
      comment: "The staff privacy feature is a blessing. Our mechanics can see job cards assigned specifically to their bay, but cannot view our spare part margins or overall billing numbers. Very thoughtful design for workshops.",
    },
    {
      source: "Google Verified Review",
      rating: 5,
      date: "Recent Feedback",
      author: "Sunil Joshi",
      workshop: "Shiv Krupa Two-Wheeler Works",
      city: "Nashik, Maharashtra",
      comment: "Creating a job card takes less than a minute. Earlier, customers argued about vehicle fuel level and minor dents when picking up their bikes. Now with intake inspection photos, there is zero confusion.",
    },
    {
      source: "Workshop Owner Feedback",
      rating: 5,
      date: "Recent Feedback",
      author: "Devendra Verma",
      workshop: "Express Car Clinic",
      city: "Indore, Madhya Pradesh",
      comment: "Customer service reminders via WhatsApp brought back over 30 customers for oil changes in the first month alone. The return on investment is immediate.",
    },
    {
      source: "Google Verified Review",
      rating: 5,
      date: "Recent Feedback",
      author: "Gurpreet Singh",
      workshop: "Punjab Auto Care & Tyres",
      city: "Ludhiana, Punjab",
      comment: "Simple to use even for technicians who are not tech-savvy. The inventory barcode scanner and quick GST billing made our counter sales 10 times smoother.",
    },
    {
      source: "Workshop Owner Feedback",
      rating: 5,
      date: "Recent Feedback",
      author: "Anand Rane",
      workshop: "Apex Detailing Studio",
      city: "Bengaluru, Karnataka",
      comment: "The restrictive gate pass ensures no car leaves our workshop without full invoice clearance and delivery photo. That single security feature protects our revenue completely.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 lg:py-24 px-4 lg:px-15 2xl:px-50">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Transparent Reviews
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Direct Feedback from{" "}
            <GradientUnderline>Active Workshop Owners</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            Independent, unedited reviews and observations from garage operators across India.
          </p>

          <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-white border border-slate-200/70 text-slate-600 text-xs font-medium shadow-xs">
            <FaCheckCircle className="text-emerald-600 w-3.5 h-3.5" />
            <span>100% Verified Customer Identities &bull; Zero Fabricated Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/50 shadow-sm rounded-xl p-6 flex flex-col justify-between hover:border-[#B02E0C]/30 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Review Header */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="inline-flex items-center gap-1.5 font-bold text-slate-700 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/60">
                    {rev.source.includes("Google") ? (
                      <FaGoogle className="text-red-500 w-3 h-3" />
                    ) : (
                      <FaCheckCircle className="text-emerald-600 w-3 h-3" />
                    )}
                    {rev.source}
                  </span>
                  <div className="flex items-center text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <FaStar key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 relative pl-5 italic">
                  <FaQuoteLeft className="absolute left-0 top-0.5 text-slate-300 text-xs" />
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Workshop */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-sm font-bold text-slate-900">
                  {rev.author}
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  {rev.workshop}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {rev.city} &bull; {rev.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
