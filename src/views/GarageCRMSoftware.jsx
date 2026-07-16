"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

import GCHero from "../components/solutions/garage-crm/GCHero";
import GCDefinition from "../components/solutions/garage-crm/GCDefinition";
import GCLeadManagement from "../components/solutions/garage-crm/GCLeadManagement";
import GCCustomerManagement from "../components/solutions/garage-crm/GCCustomerManagement";
import GCCustomerVehicle from "../components/solutions/garage-crm/GCCustomerVehicle";
import GCCustomerFollowUps from "../components/solutions/garage-crm/GCCustomerFollowUps";
import GCRetention from "../components/solutions/garage-crm/GCRetention";
import GCWorkflow from "../components/solutions/garage-crm/GCWorkflow";
import GCBusinessType from "../components/solutions/garage-crm/GCBusinessType";
import GCOperations from "../components/solutions/garage-crm/GCOperations";
import GCManualVsCrm from "../components/solutions/garage-crm/GCManualVsCrm";
import GCCloudAccess from "../components/solutions/garage-crm/GCCloudAccess";
import GCWhySaarthi from "../components/solutions/garage-crm/GCWhySaarthi";
import GCCustomerProof from "../components/solutions/garage-crm/GCCustomerProof";
import GCFreeTrial from "../components/solutions/garage-crm/GCFreeTrial";
import GCFAQ from "../components/solutions/garage-crm/GCFAQ";
import GCFinalCTA from "../components/solutions/garage-crm/GCFinalCTA";

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
