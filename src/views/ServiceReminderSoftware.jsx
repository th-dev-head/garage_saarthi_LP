"use client";
import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

import SRHero from "../components/solutions/service-reminder/SRHero";
import SRDefinition from "../components/solutions/service-reminder/SRDefinition";
import SRHowItWorks from "../components/solutions/service-reminder/SRHowItWorks";
import SRWhatsApp from "../components/solutions/service-reminder/SRWhatsApp";
import SRDueTracking from "../components/solutions/service-reminder/SRDueTracking";
import SRCustomerFollowUp from "../components/solutions/service-reminder/SRCustomerFollowUp";
import SRVehicleMaintenance from "../components/solutions/service-reminder/SRVehicleMaintenance";
import SRWorkshopTypes from "../components/solutions/service-reminder/SRWorkshopTypes";
import SRManualVsDigital from "../components/solutions/service-reminder/SRManualVsDigital";
import SRApp from "../components/solutions/service-reminder/SRApp";
import SRConnected from "../components/solutions/service-reminder/SRConnected";
import SRRetentionValue from "../components/solutions/service-reminder/SRRetentionValue";
import SRWhySaarthi from "../components/solutions/service-reminder/SRWhySaarthi";
import SRProductProof from "../components/solutions/service-reminder/SRProductProof";
import SRFreeTrial from "../components/solutions/service-reminder/SRFreeTrial";
import SRFAQ from "../components/solutions/service-reminder/SRFAQ";
import SRFinalCTA from "../components/solutions/service-reminder/SRFinalCTA";

export default function ServiceReminderSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <SRHero />
        <SRDefinition />
        <SRHowItWorks />
        <SRWhatsApp />
        <SRDueTracking />
        <SRCustomerFollowUp />
        <SRVehicleMaintenance />
        <SRWorkshopTypes />
        <SRManualVsDigital />
        <SRApp />
        <SRConnected />
        <SRRetentionValue />
        <SRWhySaarthi />
        <SRProductProof />
        <SRFreeTrial />
        <SRFAQ />
        <SRFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
