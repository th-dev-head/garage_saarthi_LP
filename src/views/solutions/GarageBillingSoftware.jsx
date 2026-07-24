"use client";

import dynamic from 'next/dynamic';
import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
const ScrollToTop = dynamic(() => import('../../components/common/ScrollToTop'), { ssr: false });

const GBHero = dynamic(() => import('../../components/solutions/garage-billing/GBHero'), { ssr: false });
const GBProblemDefinition = dynamic(() => import('../../components/solutions/garage-billing/GBProblemDefinition'), { ssr: false });
const GBProductDefinition = dynamic(() => import('../../components/solutions/garage-billing/GBProductDefinition'), { ssr: false });
const GBFeatures = dynamic(() => import('../../components/solutions/garage-billing/GBFeatures'), { ssr: false });
const GBWorkflow = dynamic(() => import('../../components/solutions/garage-billing/GBWorkflow'), { ssr: false });
const GBGSTBilling = dynamic(() => import('../../components/solutions/garage-billing/GBGSTBilling'), { ssr: false });
const GBBusinessType = dynamic(() => import('../../components/solutions/garage-billing/GBBusinessType'), { ssr: false });
const GBCloudAccess = dynamic(() => import('../../components/solutions/garage-billing/GBCloudAccess'), { ssr: false });
const GBInventoryConnection = dynamic(() => import('../../components/solutions/garage-billing/GBInventoryConnection'), { ssr: false });
const GBFinanceVisibility = dynamic(() => import('../../components/solutions/garage-billing/GBFinanceVisibility'), { ssr: false });
const GBCustomerVehicle = dynamic(() => import('../../components/solutions/garage-billing/GBCustomerVehicle'), { ssr: false });
const GBSelectionCriteria = dynamic(() => import('../../components/solutions/garage-billing/GBSelectionCriteria'), { ssr: false });
const GBEcosystem = dynamic(() => import('../../components/solutions/garage-billing/GBEcosystem'), { ssr: false });
const GBCustomerProof = dynamic(() => import('../../components/solutions/garage-billing/GBCustomerProof'), { ssr: false });
const GBFreeTrial = dynamic(() => import('../../components/solutions/garage-billing/GBFreeTrial'), { ssr: false });
const GBFAQ = dynamic(() => import('../../components/solutions/garage-billing/GBFAQ'), { ssr: false });
const GBFinalCTA = dynamic(() => import('../../components/solutions/garage-billing/GBFinalCTA'), { ssr: false });

export default function GarageBillingSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        <GBHero />
        <GBProblemDefinition />
        <GBProductDefinition />
        <GBFeatures />
        <GBWorkflow />
        <GBGSTBilling />
        <GBBusinessType />
        <GBCloudAccess />
        <GBInventoryConnection />
        <GBFinanceVisibility />
        <GBCustomerVehicle />
        <GBSelectionCriteria />
        <GBEcosystem />
        <GBCustomerProof />
        <GBFreeTrial />
        <GBFAQ />
        <GBFinalCTA />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
