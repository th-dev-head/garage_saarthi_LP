"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaBookOpen,
  FaCalculator,
  FaFileDownload,
  FaArrowRight,
  FaSearch,
  FaClock,
  FaChevronRight,
  FaWrench,
} from "react-icons/fa";
import PageLayout from "@/src/components/common/PageLayout";
import Button from "@/src/components/common/Button";
import GradientUnderline from "@/src/components/common/GradientUnderline";
import PlayStoreBadge from "@/src/components/common/PlayStoreBadge";
import AppStoreBadge from "@/src/components/common/AppStoreBadge";
import AccordionFAQ from "@/src/components/common/AccordionFAQ";
import PromoCTA from "@/src/components/common/PromoCTA";
import { ALL_RESOURCES, RESOURCE_CATEGORIES } from "@/src/data/resourcesData";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import { getCachedBlogs } from "@/src/utils/blogCache";

export default function ResourcesHubView() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [allResourcesList, setAllResourcesList] = useState(ALL_RESOURCES);

  useEffect(() => {
    // Uses 24-hour client cache so API is only called once a day
    getCachedBlogs().then((blogs) => {
      if (Array.isArray(blogs) && blogs.length > 0) {
        const apiItems = blogs.map((b) => ({
          id: b.id || b._id,
          title: b.title,
          category: b.category,
          resourceType: "blog",
          readTime: b.readTime || "5 min read",
          link: `/resources/blogs/${b.slug}/`,
          excerpt: b.excerpt,
        }));

        const apiSlugs = new Set(blogs.map((b) => b.slug));
        const remaining = ALL_RESOURCES.filter(
          (r) =>
            !(
              r.resourceType === "blog" &&
              apiSlugs.has(
                r.link.replace(/\/resources\/blogs\//, "").replace(/\/$/, "")
              )
            )
        );
        setAllResourcesList([...apiItems, ...remaining]);
      }
    });
  }, []);

  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/resources/",
      page_name: "resources_hub",
      cta_location: "hero",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`,
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const filteredResources = allResourcesList.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "blogs" && item.resourceType === "blog") ||
      (selectedCategory === "tools" && item.resourceType === "tool") ||
      (selectedCategory === "templates" && item.resourceType === "template");

    const matchesSearch =
      searchQuery.trim() === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.excerpt && item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const hubFaqs = [
    {
      question: "Are these calculators and templates really 100% free?",
      answer:
        "Yes, all workshop calculators, 40-point vehicle inspection checklists, and job card formats are completely free to use and download with zero credit card required.",
    },
    {
      question: "How do I use these resources in my daily workshop operations?",
      answer:
        "You can use the interactive calculators to benchmark your monthly parts markup and mechanic labour rates, or print our standardized 40-point checklists for your service intake counter. For automated digital execution, you can run them inside GarageSaarthi.",
    },
    {
      question: "Can I customize the job card template for my garage?",
      answer:
        "Yes, our templates are provided in printable and spreadsheet formats that allow you to add your workshop name, logo, phone number, and custom repair terms.",
    },
    {
      question: "Does GarageSaarthi include automated digital versions of these tools?",
      answer:
        "Yes! GarageSaarthi comes with built-in digital job cards, WhatsApp estimate approvals with photos, real-time parts inventory tracking, and automatic profit reports.",
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
              <FaWrench className="w-3.5 h-3.5" />
              <span>Workshop Knowledge Base & Free Tools</span>
            </span>

            {/* Heading with Gradient Underline */}
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Automotive Workshop{" "}
              <GradientUnderline>Resources & Free Tools</GradientUnderline>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
              Practical guides, financial profit margin calculators, and downloadable inspection checklists designed to help independent garages increase profits and eliminate operational waste.
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
                href="/pricing/"
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-all inline-flex items-center justify-center"
              >
                Explore Plans & Pricing
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

      {/* 2. Three Main Category Cards */}
      <section className="py-12 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-100">
        <div className="mx-auto max-w-full lg:max-w-6xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/resources/blogs/"
              className="group bg-slate-50 hover:bg-[#F5EAE7]/40 p-6 rounded-2xl border border-slate-200/80 hover:border-[#B02E0C]/30 shadow-xs hover:shadow-md transition-all flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-white text-[#B02E0C] shadow-xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <FaBookOpen className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900 group-hover:text-[#B02E0C] transition-colors flex items-center gap-1.5">
                  Blogs & Guides <FaArrowRight className="w-3 h-3 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </h2>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                  Pricing strategies, job card workflows, and spare parts inventory control.
                </p>
              </div>
            </Link>

            <Link
              href="/resources/tools/"
              className="group bg-slate-50 hover:bg-[#F5EAE7]/40 p-6 rounded-2xl border border-slate-200/80 hover:border-[#B02E0C]/30 shadow-xs hover:shadow-md transition-all flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-white text-[#B02E0C] shadow-xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <FaCalculator className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900 group-hover:text-[#B02E0C] transition-colors flex items-center gap-1.5">
                  Free Calculators <FaArrowRight className="w-3 h-3 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </h2>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                  Compute real-time gross margin, parts markup, and hourly mechanic labour rates.
                </p>
              </div>
            </Link>

            <Link
              href="/resources/templates/"
              className="group bg-slate-50 hover:bg-[#F5EAE7]/40 p-6 rounded-2xl border border-slate-200/80 hover:border-[#B02E0C]/30 shadow-xs hover:shadow-md transition-all flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-white text-[#B02E0C] shadow-xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <FaFileDownload className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900 group-hover:text-[#B02E0C] transition-colors flex items-center gap-1.5">
                  Templates & Downloads <FaArrowRight className="w-3 h-3 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </h2>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                  Download free 40-point vehicle inspection checklists and job card formats.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Search & Category Filter Section */}
      <section className="py-16 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
        <div className="mx-auto max-w-full lg:max-w-6xl w-full">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Explore All Resources
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Filter by <GradientUnderline>Topic or Resource Type</GradientUnderline>
            </h2>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8 relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by topic, calculator, or checklist..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#B02E0C] transition-all text-sm shadow-xs"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {RESOURCE_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#B02E0C] text-white shadow-sm"
                      : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100"
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              );
            })}
          </div>

          {/* Resources Grid */}
          {filteredResources.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200/80 max-w-lg mx-auto">
              <FaBookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800">No resources matched your search</h3>
              <p className="text-xs text-slate-500 mt-1">Try a different keyword or view all categories.</p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-[#B02E0C] text-white cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((item) => {
                const isBlog = item.resourceType === "blog";
                const isTool = item.resourceType === "tool";
                const isTemplate = item.resourceType === "template";

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-slate-200/80 hover:border-[#B02E0C]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#EFE9E7] text-[#B02E0C]">
                          {item.category}
                        </span>
                        <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                          {isBlog && (
                            <>
                              <FaClock className="w-3 h-3" /> {item.readTime}
                            </>
                          )}
                          {isTool && (
                            <>
                              <FaCalculator className="w-3 h-3 text-[#B02E0C]" /> Interactive
                            </>
                          )}
                          {isTemplate && (
                            <>
                              <FaFileDownload className="w-3 h-3 text-[#B02E0C]" /> {item.format}
                            </>
                          )}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#B02E0C] transition-colors leading-snug">
                        <Link href={item.link}>{item.title}</Link>
                      </h3>

                      <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {item.excerpt || item.description}
                      </p>
                    </div>

                    <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-500">
                        {isBlog && "Read Complete Guide"}
                        {isTool && "Launch Free Calculator"}
                        {isTemplate && "View & Download Formats"}
                      </span>
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B02E0C] group-hover:translate-x-1 transition-transform"
                      >
                        Access <FaArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 4. FAQs: AccordionFAQ Component */}
      <AccordionFAQ
        className="bg-white border-t border-slate-100"
        title="Frequently Asked"
        titleHighlight="Questions"
        subtitle="Everything you need to know about GarageSaarthi free resources and workshop software."
        faqs={hubFaqs}
      />

      {/* 5. Standard Bottom Promo CTA */}
      <PromoCTA
        title="Ready to Put Your Workshop on Autopilot?"
        subtitle="Join 1,000+ modern garages. Manage job cards, automated billing, parts inventory, and WhatsApp alerts effortlessly."
        bgClass="bg-slate-50"
      />
    </PageLayout>
  );
}
