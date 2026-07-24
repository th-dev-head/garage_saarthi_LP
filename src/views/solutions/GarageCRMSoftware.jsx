"use client";

import dynamic from 'next/dynamic';
import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
const ScrollToTop = dynamic(() => import('../../components/common/ScrollToTop'), { ssr: false });

const GCHero = dynamic(() => import('../../components/solutions/garage-crm/GCHero'), { ssr: false });
const GCDefinition = dynamic(() => import('../../components/solutions/garage-crm/GCDefinition'), { ssr: false });
const GCLeadManagement = dynamic(() => import('../../components/solutions/garage-crm/GCLeadManagement'), { ssr: false });
const GCCustomerManagement = dynamic(() => import('../../components/solutions/garage-crm/GCCustomerManagement'), { ssr: false });
const GCCustomerVehicle = dynamic(() => import('../../components/solutions/garage-crm/GCCustomerVehicle'), { ssr: false });
const GCCustomerFollowUps = dynamic(() => import('../../components/solutions/garage-crm/GCCustomerFollowUps'), { ssr: false });
const GCRetention = dynamic(() => import('../../components/solutions/garage-crm/GCRetention'), { ssr: false });
const GCWorkflow = dynamic(() => import('../../components/solutions/garage-crm/GCWorkflow'), { ssr: false });
const GCBusinessType = dynamic(() => import('../../components/solutions/garage-crm/GCBusinessType'), { ssr: false });
const GCOperations = dynamic(() => import('../../components/solutions/garage-crm/GCOperations'), { ssr: false });
const GCManualVsCrm = dynamic(() => import('../../components/solutions/garage-crm/GCManualVsCrm'), { ssr: false });
const GCCloudAccess = dynamic(() => import('../../components/solutions/garage-crm/GCCloudAccess'), { ssr: false });
const GCWhySaarthi = dynamic(() => import('../../components/solutions/garage-crm/GCWhySaarthi'), { ssr: false });
const GCCustomerProof = dynamic(() => import('../../components/solutions/garage-crm/GCCustomerProof'), { ssr: false });
const GCFreeTrial = dynamic(() => import('../../components/solutions/garage-crm/GCFreeTrial'), { ssr: false });
const GCFAQ = dynamic(() => import('../../components/solutions/garage-crm/GCFAQ'), { ssr: false });
const GCFinalCTA = dynamic(() => import('../../components/solutions/garage-crm/GCFinalCTA'), { ssr: false });

export default function GarageCRMSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
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
