"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

// Section Components
import WAHero from "../components/workshop-app/WAHero";
import WADefinition from "../components/workshop-app/WADefinition";
import WAMobileWorkshop from "../components/workshop-app/WAMobileWorkshop";
import WACoreCapabilities from "../components/workshop-app/WACoreCapabilities";
import WABusinessTypes from "../components/workshop-app/WABusinessTypes";
import WAOwnersMechanics from "../components/workshop-app/WAOwnersMechanics";
import WAWebMobileSync from "../components/workshop-app/WAWebMobileSync";
import WATracking from "../components/workshop-app/WATracking";
import WAMultiBranch from "../components/workshop-app/WAMultiBranch";
import WAServiceAlerts from "../components/workshop-app/WAServiceAlerts";
import WAWhySaarthi from "../components/workshop-app/WAWhySaarthi";
import WAAndroidDownload from "../components/workshop-app/WAAndroidDownload";
import WAFreeTrial from "../components/workshop-app/WAFreeTrial";
import WAFAQ from "../components/workshop-app/WAFAQ";
import WAFinalCTA from "../components/workshop-app/WAFinalCTA";

export default function WorkshopManagementApp() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <WAHero />
        <WADefinition />
        <WAMobileWorkshop />
        <WACoreCapabilities />
        <WABusinessTypes />
        <WAOwnersMechanics />
        <WAWebMobileSync />
        <WATracking />
        <WAMultiBranch />
        <WAServiceAlerts />
        <WAWhySaarthi />
        <WAAndroidDownload />
        <WAFreeTrial />
        <WAFAQ />
        <WAFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
