"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaFileDownload,
  FaArrowRight,
  FaChevronRight,
  FaCheckCircle,
  FaPrint,
  FaFilePdf,
} from "react-icons/fa";
import PageLayout from "@/src/components/common/PageLayout";
import Button from "@/src/components/common/Button";
import GradientUnderline from "@/src/components/common/GradientUnderline";
import PlayStoreBadge from "@/src/components/common/PlayStoreBadge";
import AppStoreBadge from "@/src/components/common/AppStoreBadge";
import AccordionFAQ from "@/src/components/common/AccordionFAQ";
import PromoCTA from "@/src/components/common/PromoCTA";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

export default function TemplateDetailView({ template }) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!template) return null;

  const handleDownload = () => {
    trackEvent("template_download", {
      page_path: `/resources/templates/${template.slug}/`,
      template_name: template.title,
    });
    setDownloadSuccess(true);
    setTimeout(() => {
      window.print();
    }, 400);
  };

  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: `/resources/templates/${template.slug}/`,
      page_name: `template_${template.slug}`,
      cta_location: "template_detail_cta",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`,
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const templateFaqs = [
    {
      question: `How should my workshop team use the ${template.shortTitle}?`,
      answer:
        "Print out standard copies and attach them to the vehicle clipboard at intake. Service advisors or lead technicians tick off each checkpoint and have the customer sign during key handover.",
    },
    {
      question: "Can I customize the items or add my workshop branding?",
      answer:
        "Yes, you can edit or customize the checklist items to include your shop logo and terms. GarageSaarthi also lets you customize your digital inspection checklist on mobile with custom fields.",
    },
    {
      question: "Can this inspection checklist be sent directly to vehicle owners?",
      answer:
        "With GarageSaarthi, yes! Our mobile technician app lets mechanics snap photos of worn brakes or body dents and send a digital interactive inspection report directly to the vehicle owner on WhatsApp.",
    },
  ];

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
            <Link href="/resources/templates/" className="hover:text-white transition-colors">
              Templates
            </Link>
            <FaChevronRight className="w-2 h-2 text-slate-500" />
            <span className="text-orange-400 font-semibold truncate max-w-xs">{template.shortTitle}</span>
          </nav>

          {/* Eyebrow Badge */}
          <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3.5 py-1.5 rounded-full border border-orange-500/20 font-semibold mb-6 inline-flex items-center gap-2">
            <FaFileDownload className="w-3.5 h-3.5" />
            <span>{template.category}</span>
          </span>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight max-w-3xl">
            {template.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
            {template.description}
          </p>

          {/* Direct Print Button in Hero */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8">
            <Button
              variant="hero"
              onClick={handleDownload}
              className="w-full sm:w-auto text-base !py-3.5 !px-8 cursor-pointer shadow-lg hover:shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
            >
              <FaFileDownload className="w-4 h-4 mr-1" />
              Download / Print Free Format
            </Button>
            <Link
              href="/resources/tools/"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-all inline-flex items-center justify-center"
            >
              Explore Free Calculators
            </Link>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full">
            <PlayStoreBadge />
            <AppStoreBadge />
          </div>
        </div>
      </section>

      {/* 2. Template Preview & Checklist Details */}
      <section className="py-16 md:py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
        <div className="mx-auto max-w-full lg:max-w-4xl w-full">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8">
            {/* Download Action Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/70">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Format</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">{template.format} ({template.fileSize})</p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button
                  variant="hero"
                  onClick={handleDownload}
                  className="w-full sm:w-auto text-xs !py-3 !px-6 cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <FaPrint className="w-3.5 h-3.5 mr-1" /> Print / Save as PDF
                </Button>
              </div>
            </div>

            {downloadSuccess && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 flex items-center gap-2">
                <FaCheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                Opening print dialog. You can save as PDF or print directly on any workshop printer!
              </div>
            )}

            {/* Key Checklist Sections */}
            {template.keyCheckpoints && (
              <div>
                <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
                  Checklist Contents
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                  What&apos;s Included in This Standardized Sheet
                </h2>
                <div className="space-y-3">
                  {template.keyCheckpoints.map((cp, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 flex items-start gap-3 hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#EFE9E7] text-[#B02E0C] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                        {idx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        {cp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Operational Best Practices */}
            <div className="pt-8 border-t border-slate-100 space-y-4">
              <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
                Digital Evolution
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Why Modern Garages are Going 100% Digital
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Paper checklists and carbon-copy job cards are a great first step, but they often get grease-stained, misplaced, or forgotten when preparing the final customer invoice.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                With <strong>GarageSaarthi</strong>, mechanics complete this exact inspection directly on a mobile device, taking photos of worn brake pads or body dents that are instantly sent to the car owner on WhatsApp for 1-click digital approval.
              </p>
            </div>

            {/* Contextual Box */}
            <div className="p-7 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-orange-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border border-white/10 shadow-md">
              <div>
                <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-600/30 px-3 py-1 rounded-full border border-orange-500/20 inline-block mb-2">
                  Upgrade to Mobile App
                </span>
                <h4 className="text-base sm:text-lg font-bold mt-1">Want to run this inspection digitally on WhatsApp?</h4>
                <p className="text-xs text-slate-300 mt-1 max-w-md">Eliminate paper waste and get instant digital approvals with photos.</p>
              </div>
              <Button
                variant="hero"
                onClick={handleTrialClick}
                className="text-xs !py-3 !px-5 cursor-pointer shadow-md shrink-0"
              >
                Start Free Trial <FaArrowRight className="w-3 h-3 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <AccordionFAQ
        className="bg-white border-t border-slate-100"
        title="Frequently Asked"
        titleHighlight="Questions"
        subtitle="Common questions about using this standardized template."
        faqs={templateFaqs}
      />

      {/* 4. Bottom Promo CTA */}
      <PromoCTA
        title="Ready to Put Your Workshop on Autopilot?"
        subtitle="Join hundreds of verified workshops across India. Automate job cards, spare parts inventory, and WhatsApp estimates effortlessly."
        bgClass="bg-slate-50"
      />
    </PageLayout>
  );
}
