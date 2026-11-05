"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight, FaGlobe, FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import PageLayout from "@/src/components/common/PageLayout";
import Button from "@/src/components/common/Button";
import GradientUnderline from "@/src/components/common/GradientUnderline";
import AccordionFAQ from "@/src/components/common/AccordionFAQ";
import PlayStoreBadge from "@/src/components/common/PlayStoreBadge";
import AppStoreBadge from "@/src/components/common/AppStoreBadge";
import CountryFlag from "@/src/components/common/CountryFlag";
import { ALL_LOCATIONS } from "@/src/data/locationsData";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

export default function LocationIndexView() {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/locations/",
      page_name: "locations_index",
      cta_location: "hero",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`,
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const hubFaqs = [
    {
      question: "Which countries does GarageSaarthi currently support?",
      answer: "GarageSaarthi natively supports workshops across 8 countries: United Arab Emirates (UAE), Saudi Arabia (KSA), India, United States, United Kingdom, Australia, Canada, and New Zealand with localized currencies, date formats, and tax rules."
    },
    {
      question: "Can I manage multi-country or multi-branch workshops from one account?",
      answer: "Yes! GarageSaarthi is a centralized multi-branch cloud platform. You can configure individual branch tax settings, currencies, and roles while managing everything under one corporate dashboard."
    },
    {
      question: "Is tax compliance (VAT, GST, Sales Tax) automatic?",
      answer: "Yes, our automated tax engines apply regional tax structures (such as 5% FTA VAT for UAE, 15% ZATCA for Saudi Arabia, 18% GST for India, HMRC VAT for UK, and ATO GST for Australia) automatically to spare parts and labor items."
    },
    {
      question: "Does WhatsApp messaging work globally?",
      answer: "Yes, GarageSaarthi integrates with global WhatsApp APIs to send instant repair updates, job card approvals, and PDF invoices to car owners in all supported countries."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 md:pt-45 md:pb-32 px-4 lg:px-15 2xl:px-50 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white overflow-hidden flex justify-center">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-full lg:max-w-5xl w-full relative z-10 text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3.5 py-1.5 rounded-full border border-orange-500/20 font-semibold mb-6 inline-flex items-center gap-2">
            <FaGlobe className="w-3.5 h-3.5" />
            <span>Global Auto Workshop Platform</span>
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Garage Management Software{" "}
            <GradientUnderline>Built for Global Workshops</GradientUnderline>
          </h1>

          <p className="text-base md:text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
            From the bustling repair centres of Dubai & Riyadh to independent garages in the UK, USA, Australia, and India — GarageSaarthi provides localized tax invoicing, multi-currency accounting, and digital job card workflows.
          </p>

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
              href="/pricing"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-all inline-flex items-center justify-center"
            >
              Explore Plans & Pricing
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 w-full">
            <PlayStoreBadge />
            <AppStoreBadge />
          </div>
        </div>
      </section>

      {/* 8 Countries Grid Section */}
      <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
        <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Supported Regions
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Select Your Country for{" "}
              <GradientUnderline>Localized Features & Pricing</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Explore localized tax invoicing, regional compliance rules, and tailored workshop workflows designed for your country.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ALL_LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}/`}
                className="group bg-slate-50 border border-slate-200/80 p-6 rounded-2xl hover:shadow-lg hover:border-primary/40 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <CountryFlag code={loc.code} name={loc.countryName} className="w-8 h-5.5 rounded-sm shadow-xs" />
                    <span className="text-xs font-bold text-primary bg-[#EFE9E7] px-2.5 py-0.5 rounded-full">
                      {loc.currency}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-text-dark group-hover:text-primary transition-colors mb-2">
                    {loc.countryName}
                  </h3>

                  <div className="inline-block text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-md mb-3">
                    {loc.taxType} • {loc.taxAuthority}
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {loc.hero.description}
                  </p>
                </div>

                <div className="flex items-center text-xs font-bold text-primary gap-1.5 pt-3 border-t border-slate-200/60 group-hover:gap-2.5 transition-all">
                  <span>Explore {loc.shortName} Editions</span>
                  <FaArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global FAQs Section */}
      <AccordionFAQ
        className="bg-slate-50"
        title="Frequently Asked Questions About"
        titleHighlight="Global Operations"
        subtitle="Learn how GarageSaarthi powers independent workshops and multi-country service networks."
        faqs={hubFaqs}
      />

      {/* Bottom CTA */}
      <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
        <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white rounded-2xl p-8 lg:p-14 text-center">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3.5 py-1.5 rounded-full border border-orange-500/20 font-semibold mb-6 inline-flex items-center gap-2">
                <FaShieldAlt className="text-orange-400" />
                <span>Enterprise-Grade Global Cloud</span>
              </span>

              <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
                Empower Your Workshop Anywhere in the{" "}
                <GradientUnderline>World</GradientUnderline>
              </h2>

              <p className="text-sm md:text-base text-slate-300 mb-8 leading-relaxed max-w-2xl">
                Get started today in less than 2 minutes. Full cloud deployment, multi-device mobile apps, and 24/7 dedicated workshop onboarding.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-6">
                <Button
                  variant="hero"
                  onClick={handleTrialClick}
                  className="w-full sm:w-auto text-base !py-3.5 !px-8 cursor-pointer shadow-lg hover:shadow-orange-500/25 transition-all"
                >
                  Start 7-Day Free Trial
                  <FaArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Link
                  href="/contact-us"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-all inline-flex items-center justify-center"
                >
                  Contact Global Sales
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <FaCheckCircle className="text-emerald-400" /> 8 Countries Supported
                </span>
                <span className="flex items-center gap-1.5">
                  <FaCheckCircle className="text-emerald-400" /> Multi-Currency Invoicing
                </span>
                <span className="flex items-center gap-1.5">
                  <FaCheckCircle className="text-emerald-400" /> 99.9% Uptime SLA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

