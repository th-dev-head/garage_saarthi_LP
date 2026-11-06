"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaBookOpen,
  FaClock,
  FaArrowRight,
  FaUserAlt,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import PageLayout from "@/src/components/common/PageLayout";
import Button from "@/src/components/common/Button";
import GradientUnderline from "@/src/components/common/GradientUnderline";
import PlayStoreBadge from "@/src/components/common/PlayStoreBadge";
import AppStoreBadge from "@/src/components/common/AppStoreBadge";
import AccordionFAQ from "@/src/components/common/AccordionFAQ";
import PromoCTA from "@/src/components/common/PromoCTA";
import { BLOGS_DATA } from "@/src/data/resourcesData";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import { getCachedBlogs } from "@/src/utils/blogCache";

const ITEMS_PER_PAGE = 9;

export default function BlogsListView() {
  const [selectedTag, setSelectedTag] = useState("all");
  const [blogsList, setBlogsList] = useState(BLOGS_DATA);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getCachedBlogs().then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        setBlogsList(data);
      }
    });
  }, []);

  const tags = ["all", "Profitability & Finance", "Operations & Workflow", "Inventory & Spares"];

  const filteredBlogs =
    selectedTag === "all"
      ? blogsList
      : blogsList.filter((b) => b.category === selectedTag);

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedBlogs = filteredBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    if (typeof window !== "undefined") {
      const el = document.getElementById("articles-grid");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/resources/blogs/",
      page_name: "blogs_list",
      cta_location: "hero",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`,
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const blogFaqs = [
    {
      question: "How often are new workshop operational guides published?",
      answer:
        "We regularly publish practical insights and actionable teardowns on garage profitability, spare parts management, GST/VAT billing, and customer retention strategies based on real workshop data.",
    },
    {
      question: "Can I implement these recommendations without specialized software?",
      answer:
        "Yes! Our articles contain foundational frameworks you can start on paper or spreadsheets today. When you outgrow manual processes, GarageSaarthi automates these exact workflows end-to-end.",
    },
    {
      question: "Can workshop owners contribute or suggest article topics?",
      answer:
        "Absolutely. Reach out to our editorial team via WhatsApp or support email with specific garage challenges you want addressed in detailed teardowns.",
    },
  ];

  return (
    <PageLayout>
      {/* 1. Hero: Dark gradient with pt-48 matching rest of site */}
      <section className="relative pt-48 pb-24 md:pt-45 md:pb-32 px-4 lg:px-15 2xl:px-50 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white overflow-hidden flex justify-center">
        {/* Decorative Blobs */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-full lg:max-w-5xl w-full relative z-10 text-center flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-4xl">
            {/* Eyebrow Badge */}
            <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3.5 py-1.5 rounded-full border border-orange-500/20 font-semibold mb-6 inline-flex items-center gap-2">
              <FaBookOpen className="w-3.5 h-3.5" />
              <span>Workshop Growth & Operational Insights</span>
            </span>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Garage Management{" "}
              <GradientUnderline>Articles & Actionable Guides</GradientUnderline>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
              Step-by-step guides on workshop profitability, job card workflow optimization, spare parts inventory control, and customer retention.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
              <Button
                variant="hero"
                onClick={handleTrialClick}
                className="w-full sm:w-auto text-base !py-3.5 !px-8 cursor-pointer shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Start 7-Day Free Trial
                <FaArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Link
                href="/resources/tools/"
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-all inline-flex items-center justify-center"
              >
                Explore Free Calculators
              </Link>
            </div>

            {/* App Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 w-full">
              <PlayStoreBadge />
              <AppStoreBadge />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Filter Bar & Articles Grid */}
      <section id="articles-grid" className="scroll-mt-24 py-16 md:py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
        <div className="mx-auto max-w-full lg:max-w-6xl w-full">
          {/* Tag Filter Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12">
            {tags.map((tag) => {
              const isActive = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => {
                    setSelectedTag(tag);
                    setCurrentPage(1);
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#B02E0C] text-white shadow-sm"
                      : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100"
                  }`}
                >
                  {tag === "all" ? "All Articles" : tag}
                </button>
              );
            })}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-2xl border border-slate-200/80 hover:border-[#B02E0C]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-bold text-[#B02E0C] bg-[#EFE9E7] px-3 py-1 rounded-full text-[11px]">
                      {blog.category}
                    </span>
                    <span className="text-slate-400 font-medium text-xs flex items-center gap-1">
                      <FaClock className="w-3 h-3" /> {blog.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-[#B02E0C] transition-colors leading-snug">
                    <Link href={`/resources/blogs/${blog.slug}/`}>{blog.title}</Link>
                  </h2>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 font-medium text-slate-600">
                      <FaUserAlt className="w-2.5 h-2.5 text-slate-400" /> {blog.author.name}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <FaCalendarAlt className="w-2.5 h-2.5" /> {blog.publishedDate}
                    </span>
                  </div>
                </div>

                <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Read Complete Article</span>
                  <Link
                    href={`/resources/blogs/${blog.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B02E0C] group-hover:translate-x-1 transition-transform"
                  >
                    Read Now <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-14 flex items-center justify-center gap-2 flex-wrap">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  currentPage === 1
                    ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 cursor-pointer shadow-xs"
                }`}
              >
                <FaChevronLeft className="w-2.5 h-2.5" /> Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    currentPage === pageNum
                      ? "bg-[#B02E0C] text-white shadow-xs"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  currentPage === totalPages
                    ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 cursor-pointer shadow-xs"
                }`}
              >
                Next <FaChevronRight className="w-2.5 h-2.5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. FAQ Section */}
      <AccordionFAQ
        className="bg-white border-t border-slate-100"
        title="Frequently Asked"
        titleHighlight="Questions"
        subtitle="Learn how to get the most value from our garage management guides."
        faqs={blogFaqs}
      />

      {/* 4. Bottom Promo CTA */}
      <PromoCTA
        title="Stop Managing Your Garage on Paper & Spreadsheets"
        subtitle="Automate job cards, track mechanic hours, prevent inventory theft, and send instant WhatsApp invoices with GarageSaarthi."
        bgClass="bg-slate-50"
      />
    </PageLayout>
  );
}
