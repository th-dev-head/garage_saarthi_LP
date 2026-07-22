"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

import GAHero from "../components/solutions/garage-automation/GAHero";
import GAProblem from "../components/solutions/garage-automation/GAProblem";
import GAWorkflow from "../components/solutions/garage-automation/GAWorkflow";
import GAManualVsAuto from "../components/solutions/garage-automation/GAManualVsAuto";
import GAConnected from "../components/solutions/garage-automation/GAConnected";
import GAServiceReminders from "../components/solutions/garage-automation/GAServiceReminders";
import GABilling from "../components/solutions/garage-automation/GABilling";
import GAInventory from "../components/solutions/garage-automation/GAInventory";
import GACustomerCRM from "../components/solutions/garage-automation/GACustomerCRM";
import GAMultiBranch from "../components/solutions/garage-automation/GAMultiBranch";
import GABusinessTypes from "../components/solutions/garage-automation/GABusinessTypes";
import GAMobileAccess from "../components/solutions/garage-automation/GAMobileAccess";
import GAWhySaarthi from "../components/solutions/garage-automation/GAWhySaarthi";
import GAProof from "../components/solutions/garage-automation/GAProof";
import GAFreeTrial from "../components/solutions/garage-automation/GAFreeTrial";
import GAFAQ from "../components/solutions/garage-automation/GAFAQ";
import GAFinalCTA from "../components/solutions/garage-automation/GAFinalCTA";

export default function GarageAutomationSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        <GAHero />
        <GAProblem />
        <GAWorkflow />
        <GAManualVsAuto />
        <GAConnected />
        <GAServiceReminders />
        <GABilling />
        <GAInventory />
        <GACustomerCRM />
        <GAMultiBranch />
        <GABusinessTypes />
        <GAMobileAccess />
        <GAWhySaarthi />
        <GAProof />
        <GAFreeTrial />
        <GAFAQ />
        <GAFinalCTA />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
