import React from "react";
import { FaStar, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import GradientUnderline from "./GradientUnderline";

export default function TestimonialsGrid({
  title,
  titleHighlight,
  subtitle,
  reviews = [],
  linkHref = "/customers",
  linkLabel = "View All Customer Stories",
  bgClass = "bg-slate-50",
}) {
  return (
    <section className={`py-16 px-4 lg:px-15 2xl:px-50 ${bgClass}`}>
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4">
            {titleHighlight ? <>{title}{" "}<GradientUnderline>{titleHighlight}</GradientUnderline></> : title}
          </h2>
          {subtitle && (
            <p className="text-[#575757] text-sm md:text-base mt-6">
              {subtitle}
            </p>
          )}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-[#EEE] p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-[#B02E0C]" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-[#575757] text-sm leading-relaxed mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* User profile */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#F5F5F5]">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#B02E0C] font-bold text-sm shrink-0">
                  {review.initials}
                </div>

                <div>
                  <h4 className="font-semibold text-text-dark text-sm leading-tight">
                    {review.name}
                  </h4>
                  <p className="text-xs text-[#575757] mt-0.5">
                    {review.role} • {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {linkHref && (
          <div className="flex justify-center mt-10">
            <Link
              href={linkHref}
              className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover transition-colors"
            >
              {linkLabel} <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
