"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

// Section Components
import WAHero from "../components/solutions/workshop-app/WAHero";
import WADefinition from "../components/solutions/workshop-app/WADefinition";
import WAMobileWorkshop from "../components/solutions/workshop-app/WAMobileWorkshop";
import WACoreCapabilities from "../components/solutions/workshop-app/WACoreCapabilities";
import WABusinessTypes from "../components/solutions/workshop-app/WABusinessTypes";
import WAOwnersMechanics from "../components/solutions/workshop-app/WAOwnersMechanics";
import WAWebMobileSync from "../components/solutions/workshop-app/WAWebMobileSync";
import WATracking from "../components/solutions/workshop-app/WATracking";
import WAMultiBranch from "../components/solutions/workshop-app/WAMultiBranch";
import WAServiceAlerts from "../components/solutions/workshop-app/WAServiceAlerts";
import WAWhySaarthi from "../components/solutions/workshop-app/WAWhySaarthi";
import WAAndroidDownload from "../components/solutions/workshop-app/WAAndroidDownload";
import WAFreeTrial from "../components/solutions/workshop-app/WAFreeTrial";
import WAFAQ from "../components/solutions/workshop-app/WAFAQ";
import WAFinalCTA from "../components/solutions/workshop-app/WAFinalCTA";

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
