"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import GradientUnderline from "./GradientUnderline";

export default function AccordionFAQ({ title, titleHighlight, subtitle, faqs = [], className = "" }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? -1 : idx);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 6);

  return (
    <section className={`px-4 lg:px-15 2xl:px-50 py-10 lg:py-20 flex justify-center ${className || "bg-white"}`}>
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4">
            {titleHighlight ? <>{title}{" "}<GradientUnderline>{titleHighlight}</GradientUnderline></> : title}
          </h2>
          {subtitle && (
            <p className="text-sm md:text-base max-w-2xl mx-auto text-slate-600">
              {subtitle}
            </p>
          )}
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-6">
          {visibleFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 bg-white hover:border-gray-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none cursor-pointer"
                >
                  <span className={`text-sm md:text-base font-medium pr-4 ${isOpen ? "text-black" : "text-[#0F172A]"}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${isOpen ? "text-primary" : "text-gray-500"}`}>
                    <FaChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
                  </div>
                </button>
                <div className={`transition-all duration-300 ease-in-out border-t border-gray-200 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-t-0"}`}>
                  <p className="px-6 py-4 text-gray-600 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {faqs.length > 6 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 rounded-full border border-primary bg-transparent text-primary font-semibold text-sm hover:bg-primary/5 transition-colors cursor-pointer"
            >
              {showAll ? "Show Less Questions" : "Show All Questions"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
