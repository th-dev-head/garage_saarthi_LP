"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

import GJCHero from "../components/solutions/garage-job-cards/GJCHero";
import GJCDefinition from "../components/solutions/garage-job-cards/GJCDefinition";
import GJCWorkflow from "../components/solutions/garage-job-cards/GJCWorkflow";
import GJCPaperVsDigital from "../components/solutions/garage-job-cards/GJCPaperVsDigital";
import GJCWorkOrders from "../components/solutions/garage-job-cards/GJCWorkOrders";
import GJCBusinessType from "../components/solutions/garage-job-cards/GJCBusinessType";
import GJCCustomerVehicle from "../components/solutions/garage-job-cards/GJCCustomerVehicle";
import GJCInventoryBilling from "../components/solutions/garage-job-cards/GJCInventoryBilling";
import GJCCloudAccess from "../components/solutions/garage-job-cards/GJCCloudAccess";
import GJCBenefits from "../components/solutions/garage-job-cards/GJCBenefits";
import GJCProductContext from "../components/solutions/garage-job-cards/GJCProductContext";
import GJCCustomerProof from "../components/solutions/garage-job-cards/GJCCustomerProof";
import GJCFreeTrial from "../components/solutions/garage-job-cards/GJCFreeTrial";
import GJCFAQ from "../components/solutions/garage-job-cards/GJCFAQ";
import GCFinalCTA from "../components/solutions/garage-job-cards/GCFinalCTA";

export default function GarageJobCards() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        <GJCHero />
        <GJCDefinition />
        <GJCWorkflow />
        <GJCPaperVsDigital />
        <GJCWorkOrders />
        <GJCBusinessType />
        <GJCCustomerVehicle />
        <GJCInventoryBilling />
        <GJCCloudAccess />
        <GJCBenefits />
        <GJCProductContext />
        <GJCCustomerProof />
        <GJCFreeTrial />
        <GJCFAQ />
        <GCFinalCTA />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
