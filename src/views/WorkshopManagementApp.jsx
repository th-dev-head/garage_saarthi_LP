"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
const ScrollToTop = dynamic(() => import('../components/common/ScrollToTop'), { ssr: false });

// Section Components
const WAHero = dynamic(() => import('../components/solutions/workshop-app/WAHero'), { ssr: false });
const WADefinition = dynamic(() => import('../components/solutions/workshop-app/WADefinition'), { ssr: false });
const WAMobileWorkshop = dynamic(() => import('../components/solutions/workshop-app/WAMobileWorkshop'), { ssr: false });
const WACoreCapabilities = dynamic(() => import('../components/solutions/workshop-app/WACoreCapabilities'), { ssr: false });
const WABusinessTypes = dynamic(() => import('../components/solutions/workshop-app/WABusinessTypes'), { ssr: false });
const WAOwnersMechanics = dynamic(() => import('../components/solutions/workshop-app/WAOwnersMechanics'), { ssr: false });
const WAWebMobileSync = dynamic(() => import('../components/solutions/workshop-app/WAWebMobileSync'), { ssr: false });
const WATracking = dynamic(() => import('../components/solutions/workshop-app/WATracking'), { ssr: false });
const WAMultiBranch = dynamic(() => import('../components/solutions/workshop-app/WAMultiBranch'), { ssr: false });
const WAServiceAlerts = dynamic(() => import('../components/solutions/workshop-app/WAServiceAlerts'), { ssr: false });
const WAWhySaarthi = dynamic(() => import('../components/solutions/workshop-app/WAWhySaarthi'), { ssr: false });
const WAAndroidDownload = dynamic(() => import('../components/solutions/workshop-app/WAAndroidDownload'), { ssr: false });
const WAFreeTrial = dynamic(() => import('../components/solutions/workshop-app/WAFreeTrial'), { ssr: false });
const WAFAQ = dynamic(() => import('../components/solutions/workshop-app/WAFAQ'), { ssr: false });
const WAFinalCTA = dynamic(() => import('../components/solutions/workshop-app/WAFinalCTA'), { ssr: false });

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
