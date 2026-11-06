"use client";

import React from "react";
import Link from "next/link";
import {
  FaFileDownload,
  FaArrowRight,
  FaChevronRight,
  FaCheckCircle,
} from "react-icons/fa";
import PageLayout from "@/src/components/common/PageLayout";
import Button from "@/src/components/common/Button";
import GradientUnderline from "@/src/components/common/GradientUnderline";
import PlayStoreBadge from "@/src/components/common/PlayStoreBadge";
import AppStoreBadge from "@/src/components/common/AppStoreBadge";
import AccordionFAQ from "@/src/components/common/AccordionFAQ";
import PromoCTA from "@/src/components/common/PromoCTA";
import { TEMPLATES_DATA } from "@/src/data/resourcesData";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

export default function TemplatesListView() {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/resources/templates/",
      page_name: "templates_list",
      cta_location: "hero",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`,
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const templateFaqs = [
    {
      question: "Are these workshop templates free to print and use?",
      answer:
        "Yes, 100% free with no watermark or restriction. You can print them for immediate workshop use or download and modify them for your garage needs.",
    },
    {
      question: "Can I replace these paper checklists with a digital mobile app?",
      answer:
        "Yes! GarageSaarthi provides digital versions of these templates directly inside our mobile Android and iOS app with photo attachment and customer WhatsApp signatures.",
    },
    {
      question: "Which formats are available for download?",
      answer:
        "Templates are available in high-resolution printable PDF formats, optimized for standard A4 paper printers.",
    },
  ];

  return (
    <PageLayout>
      {/* 1. Hero: Dark gradient with pt-48 matching rest of site */}
      <section className="relative pt-48 pb-20 md:pt-45 md:pb-24 px-4 lg:px-15 2xl:px-50 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white overflow-hidden flex justify-center">
        {/* Decorative Blobs */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-full lg:max-w-5xl w-full relative z-10 flex flex-col items-center text-center">
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
            <span className="text-orange-400 font-semibold">Templates & Checklists</span>
          </nav>

          {/* Eyebrow Badge */}
          <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3.5 py-1.5 rounded-full border border-orange-500/20 font-semibold mb-6 inline-flex items-center gap-2">
            <FaFileDownload className="w-3.5 h-3.5" />
            <span>Standardized Workshop Operational Sheets</span>
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl">
            Free Workshop{" "}
            <GradientUnderline>Templates & Inspection Checklists</GradientUnderline>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Download production-tested vehicle inspection checklists, job card formats, and customer handover documents ready for print or digital usage.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8">
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
              Try Free Calculators
            </Link>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full">
            <PlayStoreBadge />
            <AppStoreBadge />
          </div>
        </div>
      </section>

      {/* 2. Templates Grid */}
      <section className="py-16 md:py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
        <div className="mx-auto max-w-full lg:max-w-5xl w-full">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Standardized Formats
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Ready-to-Use <GradientUnderline>Workshop Downloads</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Print these formats directly for your shop floor or upgrade to our mobile app.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TEMPLATES_DATA.map((tmpl) => (
              <div
                key={tmpl.id}
                className="bg-white rounded-2xl border border-slate-200/80 hover:border-[#B02E0C]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-7">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-bold text-[#B02E0C] bg-[#EFE9E7] px-3 py-1 rounded-full text-[11px]">
                      {tmpl.category}
                    </span>
                    <span className="text-slate-400 font-medium text-xs flex items-center gap-1">
                      <FaFileDownload className="w-3 h-3 text-[#B02E0C]" /> {tmpl.format}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#B02E0C] transition-colors leading-snug">
                    <Link href={`/resources/templates/${tmpl.slug}/`}>{tmpl.title}</Link>
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {tmpl.description}
                  </p>

                  {tmpl.keyCheckpoints && (
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-800 mb-2">Checkpoints included:</p>
                      <ul className="space-y-1.5">
                        {tmpl.keyCheckpoints.slice(0, 3).map((cp, idx) => (
                          <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                            <FaCheckCircle className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{cp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="px-7 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Free Printable Format</span>
                  <Link
                    href={`/resources/templates/${tmpl.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B02E0C] group-hover:translate-x-1 transition-transform"
                  >
                    View & Download <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <AccordionFAQ
        className="bg-white border-t border-slate-100"
        title="Frequently Asked"
        titleHighlight="Questions"
        subtitle="Learn how to implement standardized inspection sheets in your workshop."
        faqs={templateFaqs}
      />

      {/* 4. Bottom Promo CTA */}
      <PromoCTA
        title="Ready to Digitize Your Inspection Sheets?"
        subtitle="Ditch paper checklists. Inspect vehicles with mobile photos, get WhatsApp approvals from car owners, and generate job cards automatically."
        bgClass="bg-slate-50"
      />
    </PageLayout>
  );
}
