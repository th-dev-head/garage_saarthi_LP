"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

import GJCHero from "../components/garage-job-cards/GJCHero";
import GJCDefinition from "../components/garage-job-cards/GJCDefinition";
import GJCWorkflow from "../components/garage-job-cards/GJCWorkflow";
import GJCPaperVsDigital from "../components/garage-job-cards/GJCPaperVsDigital";
import GJCWorkOrders from "../components/garage-job-cards/GJCWorkOrders";
import GJCBusinessType from "../components/garage-job-cards/GJCBusinessType";
import GJCCustomerVehicle from "../components/garage-job-cards/GJCCustomerVehicle";
import GJCInventoryBilling from "../components/garage-job-cards/GJCInventoryBilling";
import GJCCloudAccess from "../components/garage-job-cards/GJCCloudAccess";
import GJCBenefits from "../components/garage-job-cards/GJCBenefits";
import GJCProductContext from "../components/garage-job-cards/GJCProductContext";
import GJCCustomerProof from "../components/garage-job-cards/GJCCustomerProof";
import GJCFreeTrial from "../components/garage-job-cards/GJCFreeTrial";
import GJCFAQ from "../components/garage-job-cards/GJCFAQ";
import GCFinalCTA from "../components/garage-job-cards/GCFinalCTA";

export default function GarageJobCards() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20">
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
