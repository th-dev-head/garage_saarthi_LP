"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaClock,
  FaCalendarAlt,
  FaUserAlt,
  FaArrowRight,
  FaCalculator,
  FaFileDownload,
  FaChevronRight,
  FaChevronDown,
  FaBookOpen,
} from "react-icons/fa";
import PageLayout from "@/src/components/common/PageLayout";
import PromoCTA from "@/src/components/common/PromoCTA";

export default function BlogDetailView({ blog }) {
  const [openFaq, setOpenFaq] = useState(0);

  if (!blog) return null;


  return (
    <PageLayout>
      {/* 1. Hero: Dark gradient with pt-48 matching rest of site */}
      <section className="relative pt-48 pb-20 md:pt-45 md:pb-24 px-4 lg:px-15 2xl:px-50 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white overflow-hidden flex justify-center">
        {/* Decorative Blobs */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-full lg:max-w-4xl w-full relative z-10 flex flex-col items-center text-center">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-6 font-medium flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <FaChevronRight className="w-2 h-2 text-slate-500" />
            <Link href="/resources/" className="hover:text-white transition-colors">
              Resources
            </Link>
            <FaChevronRight className="w-2 h-2 text-slate-500" />
            <Link href="/resources/blogs/" className="hover:text-white transition-colors">
              Blogs
            </Link>
            <FaChevronRight className="w-2 h-2 text-slate-500" />
            <span className="text-orange-400 font-semibold truncate max-w-[220px] sm:max-w-xs">
              {blog.shortTitle}
            </span>
          </nav>

          {/* Eyebrow Badge */}
          <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3.5 py-1.5 rounded-full border border-orange-500/20 font-semibold mb-6 inline-flex items-center gap-2">
            <FaBookOpen className="w-3.5 h-3.5" />
            <span>{blog.category}</span>
          </span>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight max-w-3xl">
            {blog.title}
          </h1>

          {/* Excerpt */}
          <p className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
            {blog.excerpt}
          </p>

          {/* Author & Meta */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 w-full max-w-md">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#B02E0C] text-white font-bold flex items-center justify-center text-xs shadow-xs">
                {blog.author.avatar}
              </span>
              <span className="font-semibold text-white">{blog.author.name}</span>
            </div>
            <span className="flex items-center gap-1.5 text-slate-400">
              <FaCalendarAlt className="w-3 h-3 text-orange-400" /> {blog.publishedDate}
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <FaClock className="w-3 h-3 text-orange-400" /> {blog.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Article Body & Table of Contents */}
      <section className="py-16 md:py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
        <div className="mx-auto max-w-full lg:max-w-4xl w-full space-y-10">
          {/* Table of Contents */}
          {blog.tableOfContents && blog.tableOfContents.length > 0 && (
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs">
              <h3 className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-4">
                Table of Contents
              </h3>
              <ol className="space-y-2.5">
                {blog.tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-xs sm:text-sm text-slate-700 hover:text-[#B02E0C] font-medium transition-colors flex items-center gap-2"
                    >
                      <FaChevronRight className="w-2.5 h-2.5 text-[#B02E0C]" />
                      {item.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Content Sections */}
          <div className="space-y-12 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
            {blog.contentSections && blog.contentSections.length > 0 ? (
              blog.contentSections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    {section.heading}
                  </h2>

                  {section.paragraphs.map((p, idx) => (
                    <p key={idx} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {/* Highlight Callout */}
                  {section.highlight && (
                    <div className="bg-[#F5EAE7]/70 border-l-4 border-[#B02E0C] p-4 sm:p-5 rounded-r-xl my-4 text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed shadow-xs">
                      {section.highlight}
                    </div>
                  )}

                  {/* Data Table if present */}
                  {section.table && (
                    <div className="overflow-x-auto my-6 border border-slate-200 rounded-2xl shadow-xs">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-slate-100/90 text-slate-800 font-bold border-b border-slate-200">
                          <tr>
                            {section.table.headers.map((h, i) => (
                              <th key={i} className="py-3.5 px-4 font-bold">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {section.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-50/60 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="py-3.5 px-4 text-slate-700">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div
                className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-4 whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: blog.content || blog.excerpt || "" }}
              />
            )}

            {/* Recommended Interactive Tool / Template */}
            {(blog.relatedTool || blog.relatedTemplate) && (
              <div className="mt-10 pt-8 border-t border-slate-200">
                <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-4">
                  Recommended Interactive Resource
                </span>

                {blog.relatedTool && (
                  <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50/50 p-6 rounded-2xl border border-orange-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-[#B02E0C] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <FaCalculator className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-[#B02E0C] uppercase tracking-wide">Free Tool</p>
                        <h4 className="text-base font-bold text-slate-900">{blog.relatedTool.title}</h4>
                      </div>
                    </div>
                    <Link
                      href={blog.relatedTool.href}
                      className="px-5 py-2.5 rounded-full bg-[#B02E0C] hover:bg-[#8f2509] text-white text-xs font-bold transition-all shadow-xs shrink-0 flex items-center gap-1.5"
                    >
                      Try Calculator <FaArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}

                {blog.relatedTemplate && (
                  <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50/50 p-6 rounded-2xl border border-emerald-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs mt-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                        <FaFileDownload className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-emerald-700 uppercase tracking-wide">Free Template</p>
                        <h4 className="text-base font-bold text-slate-900">{blog.relatedTemplate.title}</h4>
                      </div>
                    </div>
                    <Link
                      href={blog.relatedTemplate.href}
                      className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs shrink-0 flex items-center gap-1.5"
                    >
                      View & Download <FaArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Related In-Article In-depth FAQs */}
            {blog.faqs && blog.faqs.length > 0 && (
              <div id="faqs" className="mt-10 pt-8 border-t border-slate-200 scroll-mt-28">
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
                    Article FAQs
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                    Frequently Asked Questions
                  </h3>
                </div>

                <div className="flex flex-col gap-4">
                  {blog.faqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 bg-white hover:border-slate-300"
                      >
                        <button
                          onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                          className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none cursor-pointer"
                        >
                          <span className={`text-sm md:text-base font-medium pr-4 ${isOpen ? "text-[#B02E0C] font-bold" : "text-[#0F172A]"}`}>
                            {faq.q}
                          </span>
                          <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${isOpen ? "text-[#B02E0C]" : "text-gray-500"}`}>
                            <FaChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
                          </div>
                        </button>
                        <div className={`transition-all duration-300 ease-in-out border-t border-slate-100 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-t-0"}`}>
                          <p className="px-6 py-4 text-slate-600 text-sm md:text-base leading-relaxed bg-slate-50/50">{faq.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Bottom Standard Promo CTA */}
      <PromoCTA
        title="Ready to Transform Your Workshop's Operations?"
        subtitle="Join hundreds of verified automobile workshops and service centers across India. Start with full access to job cards, inventory, and WhatsApp alerts."
        bgClass="bg-white"
      />
    </PageLayout>
  );
}
