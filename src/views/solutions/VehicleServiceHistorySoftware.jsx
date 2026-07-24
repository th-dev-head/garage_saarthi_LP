"use client";
import PageLayout from "@/src/components/common/PageLayout";
import dynamic from 'next/dynamic';
import React from "react";

const VSHHero = dynamic(() => import('../../components/solutions/vehicle-history/VSHHero'), { ssr: false });
const VSHDefinition = dynamic(() => import('../../components/solutions/vehicle-history/VSHDefinition'), { ssr: false });
const VSHCapabilities = dynamic(() => import('../../components/solutions/vehicle-history/VSHCapabilities'), { ssr: false });
const VSHWorkflow = dynamic(() => import('../../components/solutions/vehicle-history/VSHWorkflow'), { ssr: false });
const VSHJobCards = dynamic(() => import('../../components/solutions/vehicle-history/VSHJobCards'), { ssr: false });
const VSHCustomerRecords = dynamic(() => import('../../components/solutions/vehicle-history/VSHCustomerRecords'), { ssr: false });
const VSHServiceAlerts = dynamic(() => import('../../components/solutions/vehicle-history/VSHServiceAlerts'), { ssr: false });
const VSHManualVsDigital = dynamic(() => import('../../components/solutions/vehicle-history/VSHManualVsDigital'), { ssr: false });
const VSHWorkshopTypes = dynamic(() => import('../../components/solutions/vehicle-history/VSHWorkshopTypes'), { ssr: false });
const VSHAccessRecords = dynamic(() => import('../../components/solutions/vehicle-history/VSHAccessRecords'), { ssr: false });
const VSHWebMobile = dynamic(() => import('../../components/solutions/vehicle-history/VSHWebMobile'), { ssr: false });
const VSHWhySaarthi = dynamic(() => import('../../components/solutions/vehicle-history/VSHWhySaarthi'), { ssr: false });
const VSHFeatures = dynamic(() => import('../../components/solutions/vehicle-history/VSHFeatures'), { ssr: false });
const VSHFreeTrial = dynamic(() => import('../../components/solutions/vehicle-history/VSHFreeTrial'), { ssr: false });
const VSHFAQ = dynamic(() => import('../../components/solutions/vehicle-history/VSHFAQ'), { ssr: false });
const VSHFinalCTA = dynamic(() => import('../../components/solutions/vehicle-history/VSHFinalCTA'), { ssr: false });

export default function VehicleServiceHistorySoftware() {
  return (
    <PageLayout>

      <VSHHero />
      <VSHDefinition />
      <VSHCapabilities />
      <VSHWorkflow />
      <VSHJobCards />
      <VSHCustomerRecords />
      <VSHServiceAlerts />
      <VSHManualVsDigital />
      <VSHWorkshopTypes />
      <VSHAccessRecords />
      <VSHWebMobile />
      <VSHWhySaarthi />
      <VSHFeatures />
      <VSHFreeTrial />
      <VSHFAQ />
      <VSHFinalCTA />
    </PageLayout>
  );
}
