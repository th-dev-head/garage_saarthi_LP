"use client";

import PageLayout from "@/src/components/common/PageLayout";
import dynamic from 'next/dynamic';
import React from "react";

const GJCHero = dynamic(() => import('../../components/solutions/garage-job-cards/GJCHero'), { ssr: false });
const GJCDefinition = dynamic(() => import('../../components/solutions/garage-job-cards/GJCDefinition'), { ssr: false });
const GJCWorkflow = dynamic(() => import('../../components/solutions/garage-job-cards/GJCWorkflow'), { ssr: false });
const GJCPaperVsDigital = dynamic(() => import('../../components/solutions/garage-job-cards/GJCPaperVsDigital'), { ssr: false });
const GJCWorkOrders = dynamic(() => import('../../components/solutions/garage-job-cards/GJCWorkOrders'), { ssr: false });
const GJCBusinessType = dynamic(() => import('../../components/solutions/garage-job-cards/GJCBusinessType'), { ssr: false });
const GJCCustomerVehicle = dynamic(() => import('../../components/solutions/garage-job-cards/GJCCustomerVehicle'), { ssr: false });
const GJCInventoryBilling = dynamic(() => import('../../components/solutions/garage-job-cards/GJCInventoryBilling'), { ssr: false });
const GJCCloudAccess = dynamic(() => import('../../components/solutions/garage-job-cards/GJCCloudAccess'), { ssr: false });
const GJCBenefits = dynamic(() => import('../../components/solutions/garage-job-cards/GJCBenefits'), { ssr: false });
const GJCProductContext = dynamic(() => import('../../components/solutions/garage-job-cards/GJCProductContext'), { ssr: false });
const GJCCustomerProof = dynamic(() => import('../../components/solutions/garage-job-cards/GJCCustomerProof'), { ssr: false });
const GJCFreeTrial = dynamic(() => import('../../components/solutions/garage-job-cards/GJCFreeTrial'), { ssr: false });
const GJCFAQ = dynamic(() => import('../../components/solutions/garage-job-cards/GJCFAQ'), { ssr: false });
const GCFinalCTA = dynamic(() => import('../../components/solutions/garage-job-cards/GCFinalCTA'), { ssr: false });

export default function GarageJobCards() {
  return (
    <PageLayout>      <GJCHero />
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

    </PageLayout>
  );
}
