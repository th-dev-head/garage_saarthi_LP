"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

// Section Components
import GAHero from "../components/solutions/garage-app/GAHero";
import GADefinition from "../components/solutions/garage-app/GADefinition";
import GADailyWork from "../components/solutions/garage-app/GADailyWork";
import GAMobileWorkflow from "../components/solutions/garage-app/GAMobileWorkflow";
import GABusinessTypes from "../components/solutions/garage-app/GABusinessTypes";
import GAJobCardUseCase from "../components/solutions/garage-app/GAJobCardUseCase";
import GACustomerVehicle from "../components/solutions/garage-app/GACustomerVehicle";
import GAInventoryMobile from "../components/solutions/garage-app/GAInventoryMobile";
import GAStaffManagement from "../components/solutions/garage-app/GAStaffManagement";
import GAServiceAlerts from "../components/solutions/garage-app/GAServiceAlerts";
import GAReports from "../components/solutions/garage-app/GAReports";
import GAWebMobileConnection from "../components/solutions/garage-app/GAWebMobileConnection";
import GAAndroidApp from "../components/solutions/garage-app/GAAndroidApp";
import GAWhyUse from "../components/solutions/garage-app/GAWhyUse";
import GAProductProof from "../components/solutions/garage-app/GAProductProof";
import GAFreeTrialCTA from "../components/solutions/garage-app/GAFreeTrialCTA";
import GAFAQ from "../components/solutions/garage-app/GAFAQ";
import GAFinalCTA from "../components/solutions/garage-app/GAFinalCTA";

export default function GarageManagementApp() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <GAHero />
        <GADefinition />
        <GADailyWork />
        <GAMobileWorkflow />
        <GABusinessTypes />
        <GAJobCardUseCase />
        <GACustomerVehicle />
        <GAInventoryMobile />
        <GAStaffManagement />
        <GAServiceAlerts />
        <GAReports />
        {/* <GAWebMobileConnection /> */}
        <GAAndroidApp />
        <GAWhyUse />
        <GAProductProof />
        <GAFreeTrialCTA />
        <GAFAQ />
        <GAFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
