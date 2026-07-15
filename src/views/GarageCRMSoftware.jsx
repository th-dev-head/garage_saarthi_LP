"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

import GCHero from "../components/garage-crm/GCHero";
import GCDefinition from "../components/garage-crm/GCDefinition";
import GCLeadManagement from "../components/garage-crm/GCLeadManagement";
import GCCustomerManagement from "../components/garage-crm/GCCustomerManagement";
import GCCustomerVehicle from "../components/garage-crm/GCCustomerVehicle";
import GCCustomerFollowUps from "../components/garage-crm/GCCustomerFollowUps";
import GCRetention from "../components/garage-crm/GCRetention";
import GCWorkflow from "../components/garage-crm/GCWorkflow";
import GCBusinessType from "../components/garage-crm/GCBusinessType";
import GCOperations from "../components/garage-crm/GCOperations";
import GCManualVsCrm from "../components/garage-crm/GCManualVsCrm";
import GCCloudAccess from "../components/garage-crm/GCCloudAccess";
import GCWhySaarthi from "../components/garage-crm/GCWhySaarthi";
import GCCustomerProof from "../components/garage-crm/GCCustomerProof";
import GCFreeTrial from "../components/garage-crm/GCFreeTrial";
import GCFAQ from "../components/garage-crm/GCFAQ";
import GCFinalCTA from "../components/garage-crm/GCFinalCTA";

export default function GarageCRMSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20">
        <GCHero />
        <GCDefinition />
        <GCLeadManagement />
        <GCCustomerManagement />
        <GCCustomerVehicle />
        <GCCustomerFollowUps />
        <GCRetention />
        <GCWorkflow />
        <GCBusinessType />
        <GCOperations />
        <GCManualVsCrm />
        <GCCloudAccess />
        <GCWhySaarthi />
        <GCCustomerProof />
        <GCFreeTrial />
        <GCFAQ />
        <GCFinalCTA />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
