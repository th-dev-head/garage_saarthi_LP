"use client";

import React from "react";
import dynamic from "next/dynamic";
import Header from "../../components/common/Header";

import ARSHero from "../../components/solutions/auto-repair-shop/ARSHero";
import ARSProductDefinition from "../../components/solutions/auto-repair-shop/ARSProductDefinition";

const ARSWorkflow = dynamic(() => import("../../components/solutions/auto-repair-shop/ARSWorkflow"), { ssr: false });
const ARSJobCards = dynamic(() => import("../../components/solutions/auto-repair-shop/ARSJobCards"), { ssr: false });
const ARSInventory = dynamic(() => import("../../components/solutions/auto-repair-shop/ARSInventory"), { ssr: false });
const ARSBillingFinance = dynamic(() => import("../../components/solutions/auto-repair-shop/ARSBillingFinance"), { ssr: false });
const ARSCustomerHistory = dynamic(() => import("../../components/solutions/auto-repair-shop/ARSCustomerHistory"), { ssr: false });
const ARSServiceReminders = dynamic(() => import("../../components/solutions/auto-repair-shop/ARSServiceReminders"), { ssr: false });
const ARSStaff = dynamic(() => import("../../components/solutions/auto-repair-shop/ARSStaff"), { ssr: false });
const ARSDashboardReports = dynamic(() => import("../../components/solutions/auto-repair-shop/ARSDashboardReports"), { ssr: false });
const ARSMultiBranch = dynamic(() => import("../../components/solutions/auto-repair-shop/ARSMultiBranch"), { ssr: false });
const ARSCloudAccess = dynamic(() => import("../../components/solutions/auto-repair-shop/ARSCloudAccess"), { ssr: false });
const ARSIndiaPositioning = dynamic(() => import("../../components/solutions/auto-repair-shop/ARSIndiaPositioning"), { ssr: false });
const ARSWhyUs = dynamic(() => import("../../components/solutions/auto-repair-shop/ARSWhyUs"), { ssr: false });
const ARSTestimonials = dynamic(() => import("../../components/solutions/auto-repair-shop/ARSTestimonials"), { ssr: false });
const ARSFreeTrialCTA = dynamic(() => import("../../components/solutions/auto-repair-shop/ARSFreeTrialCTA"), { ssr: false });
const ARSFAQ = dynamic(() => import("../../components/solutions/auto-repair-shop/ARSFAQ"), { ssr: false });
const ARSFinalCTA = dynamic(() => import("../../components/solutions/auto-repair-shop/ARSFinalCTA"), { ssr: false });
const Footer = dynamic(() => import("../../components/common/Footer"), { ssr: false });
const ScrollToTop = dynamic(() => import("../../components/common/ScrollToTop"), { ssr: false });

export default function AutoRepairShop() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <ARSHero />
        <ARSProductDefinition />
        <ARSWorkflow />
        <ARSJobCards />
        <ARSInventory />
        <ARSBillingFinance />
        <ARSCustomerHistory />
        <ARSServiceReminders />
        <ARSStaff />
        <ARSDashboardReports />
        <ARSMultiBranch />
        <ARSCloudAccess />
        <ARSIndiaPositioning />
        <ARSWhyUs />
        <ARSTestimonials />
        <ARSFreeTrialCTA />
        <ARSFAQ />
        <ARSFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
