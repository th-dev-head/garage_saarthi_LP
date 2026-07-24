"use client";

import PageLayout from "@/src/components/common/PageLayout";
import dynamic from 'next/dynamic';
import React from "react";

const GIHero = dynamic(() => import('../../components/solutions/garage-inventory/GIHero'), { ssr: false });
const GIDefinition = dynamic(() => import('../../components/solutions/garage-inventory/GIDefinition'), { ssr: false });
const GISpareParts = dynamic(() => import('../../components/solutions/garage-inventory/GISpareParts'), { ssr: false });
const GIStockManagement = dynamic(() => import('../../components/solutions/garage-inventory/GIStockManagement'), { ssr: false });
const GIAutomotiveParts = dynamic(() => import('../../components/solutions/garage-inventory/GIAutomotiveParts'), { ssr: false });
const GIWorkshopTypes = dynamic(() => import('../../components/solutions/garage-inventory/GIWorkshopTypes'), { ssr: false });
const GIConnectedOperations = dynamic(() => import('../../components/solutions/garage-inventory/GIConnectedOperations'), { ssr: false });
const GIAutomation = dynamic(() => import('../../components/solutions/garage-inventory/GIAutomation'), { ssr: false });
const GIMultiBranch = dynamic(() => import('../../components/solutions/garage-inventory/GIMultiBranch'), { ssr: false });
const GIReporting = dynamic(() => import('../../components/solutions/garage-inventory/GIReporting'), { ssr: false });
const GIAccess = dynamic(() => import('../../components/solutions/garage-inventory/GIAccess'), { ssr: false });
const GIWhySaarthi = dynamic(() => import('../../components/solutions/garage-inventory/GIWhySaarthi'), { ssr: false });
const GIRelatedFeatures = dynamic(() => import('../../components/solutions/garage-inventory/GIRelatedFeatures'), { ssr: false });
const GIFreeTrial = dynamic(() => import('../../components/solutions/garage-inventory/GIFreeTrial'), { ssr: false });
const GIFAQ = dynamic(() => import('../../components/solutions/garage-inventory/GIFAQ'), { ssr: false });
const GIFinalCTA = dynamic(() => import('../../components/solutions/garage-inventory/GIFinalCTA'), { ssr: false });

export default function GarageInventorySoftware() {
  return (
    <PageLayout>      <GIHero />
      <GIDefinition />
      <GISpareParts />
      <GIStockManagement />
      <GIAutomotiveParts />
      <GIWorkshopTypes />
      <GIConnectedOperations />
      <GIAutomation />
      <GIMultiBranch />
      <GIReporting />
      <GIAccess />
      <GIWhySaarthi />
      <GIRelatedFeatures />
      <GIFreeTrial />
      <GIFAQ />
      <GIFinalCTA />

    </PageLayout>
  );
}
