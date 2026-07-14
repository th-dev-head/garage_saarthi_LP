"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

// Section Components
import ARSHero from "../components/auto-repair-shop/ARSHero";
import ARSProductDefinition from "../components/auto-repair-shop/ARSProductDefinition";
import ARSWorkflow from "../components/auto-repair-shop/ARSWorkflow";
import ARSJobCards from "../components/auto-repair-shop/ARSJobCards";
import ARSInventory from "../components/auto-repair-shop/ARSInventory";
import ARSBillingFinance from "../components/auto-repair-shop/ARSBillingFinance";
import ARSCustomerHistory from "../components/auto-repair-shop/ARSCustomerHistory";
import ARSServiceReminders from "../components/auto-repair-shop/ARSServiceReminders";
import ARSStaff from "../components/auto-repair-shop/ARSStaff";
import ARSDashboardReports from "../components/auto-repair-shop/ARSDashboardReports";
import ARSMultiBranch from "../components/auto-repair-shop/ARSMultiBranch";
import ARSCloudAccess from "../components/auto-repair-shop/ARSCloudAccess";
import ARSIndiaPositioning from "../components/auto-repair-shop/ARSIndiaPositioning";
import ARSWhyUs from "../components/auto-repair-shop/ARSWhyUs";
import ARSTestimonials from "../components/auto-repair-shop/ARSTestimonials";
import ARSFreeTrialCTA from "../components/auto-repair-shop/ARSFreeTrialCTA";
import ARSFAQ from "../components/auto-repair-shop/ARSFAQ";
import ARSFinalCTA from "../components/auto-repair-shop/ARSFinalCTA";

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
