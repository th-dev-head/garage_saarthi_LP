"use client";
import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

import VSHHero from "../components/solutions/vehicle-history/VSHHero";
import VSHDefinition from "../components/solutions/vehicle-history/VSHDefinition";
import VSHCapabilities from "../components/solutions/vehicle-history/VSHCapabilities";
import VSHWorkflow from "../components/solutions/vehicle-history/VSHWorkflow";
import VSHJobCards from "../components/solutions/vehicle-history/VSHJobCards";
import VSHCustomerRecords from "../components/solutions/vehicle-history/VSHCustomerRecords";
import VSHServiceAlerts from "../components/solutions/vehicle-history/VSHServiceAlerts";
import VSHManualVsDigital from "../components/solutions/vehicle-history/VSHManualVsDigital";
import VSHWorkshopTypes from "../components/solutions/vehicle-history/VSHWorkshopTypes";
import VSHAccessRecords from "../components/solutions/vehicle-history/VSHAccessRecords";
import VSHWebMobile from "../components/solutions/vehicle-history/VSHWebMobile";
import VSHWhySaarthi from "../components/solutions/vehicle-history/VSHWhySaarthi";
import VSHFeatures from "../components/solutions/vehicle-history/VSHFeatures";
import VSHFreeTrial from "../components/solutions/vehicle-history/VSHFreeTrial";
import VSHFAQ from "../components/solutions/vehicle-history/VSHFAQ";
import VSHFinalCTA from "../components/solutions/vehicle-history/VSHFinalCTA";

export default function VehicleServiceHistorySoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow pt-20">
        <VSHHero />
        <VSHDefinition />
        <VSHCapabilities />
        <VSHWorkflow />
        <VSHJobCards />
        <VSHCustomerRecords />
        <VSHServiceAlerts />
        <VSHManualVsDigital />
        <VSHWorkshopTypes />
        <VSHAccessRecords />
        <VSHWebMobile />
        <VSHWhySaarthi />
        <VSHFeatures />
        <VSHFreeTrial />
        <VSHFAQ />
        <VSHFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
