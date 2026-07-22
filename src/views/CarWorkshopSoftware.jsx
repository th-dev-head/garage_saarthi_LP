"use client";
import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

import CWHero from "../components/solutions/car-workshop/CWHero";
import CWDefinition from "../components/solutions/car-workshop/CWDefinition";
import CWJobCardWorkflow from "../components/solutions/car-workshop/CWJobCardWorkflow";
import CWInventory from "../components/solutions/car-workshop/CWInventory";
import CWBilling from "../components/solutions/car-workshop/CWBilling";
import CWServiceReminders from "../components/solutions/car-workshop/CWServiceReminders";
import CWStaffManagement from "../components/solutions/car-workshop/CWStaffManagement";
import CWDashboardReports from "../components/solutions/car-workshop/CWDashboardReports";
import CWMultiBranch from "../components/solutions/car-workshop/CWMultiBranch";
import CWWebMobile from "../components/solutions/car-workshop/CWWebMobile";
import CWTransformation from "../components/solutions/car-workshop/CWTransformation";
import CWWhySaarthi from "../components/solutions/car-workshop/CWWhySaarthi";
import CWCustomerProof from "../components/solutions/car-workshop/CWCustomerProof";
import CWPricing from "../components/solutions/car-workshop/CWPricing";
import CWRelatedSolutions from "../components/solutions/car-workshop/CWRelatedSolutions";
import CWFAQ from "../components/solutions/car-workshop/CWFAQ";
import CWFinalCTA from "../components/solutions/car-workshop/CWFinalCTA";

export default function CarWorkshopSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <CWHero />
        <CWDefinition />
        <CWJobCardWorkflow />
        <CWInventory />
        <CWBilling />
        <CWServiceReminders />
        <CWStaffManagement />
        <CWDashboardReports />
        <CWMultiBranch />
        <CWWebMobile />
        <CWTransformation />
        <CWWhySaarthi />
        <CWCustomerProof />
        <CWPricing />
        <CWRelatedSolutions />
        <CWFAQ />
        <CWFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
