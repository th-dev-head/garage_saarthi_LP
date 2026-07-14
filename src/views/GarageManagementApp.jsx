"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

// Section Components
import GAHero from "../components/garage-app/GAHero";
import GADefinition from "../components/garage-app/GADefinition";
import GADailyWork from "../components/garage-app/GADailyWork";
import GAMobileWorkflow from "../components/garage-app/GAMobileWorkflow";
import GABusinessTypes from "../components/garage-app/GABusinessTypes";
import GAJobCardUseCase from "../components/garage-app/GAJobCardUseCase";
import GACustomerVehicle from "../components/garage-app/GACustomerVehicle";
import GAInventoryMobile from "../components/garage-app/GAInventoryMobile";
import GAStaffManagement from "../components/garage-app/GAStaffManagement";
import GAServiceAlerts from "../components/garage-app/GAServiceAlerts";
import GAReports from "../components/garage-app/GAReports";
import GAWebMobileConnection from "../components/garage-app/GAWebMobileConnection";
import GAAndroidApp from "../components/garage-app/GAAndroidApp";
import GAWhyUse from "../components/garage-app/GAWhyUse";
import GAProductProof from "../components/garage-app/GAProductProof";
import GAFreeTrialCTA from "../components/garage-app/GAFreeTrialCTA";
import GAFAQ from "../components/garage-app/GAFAQ";
import GAFinalCTA from "../components/garage-app/GAFinalCTA";

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
        <GAWebMobileConnection />
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
