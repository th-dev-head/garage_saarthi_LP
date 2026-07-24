"use client";
import PageLayout from "@/src/components/common/PageLayout";
import dynamic from 'next/dynamic';
import React from "react";

const SRHero = dynamic(() => import('../../components/solutions/service-reminder/SRHero'), { ssr: false });
const SRDefinition = dynamic(() => import('../../components/solutions/service-reminder/SRDefinition'), { ssr: false });
const SRHowItWorks = dynamic(() => import('../../components/solutions/service-reminder/SRHowItWorks'), { ssr: false });
const SRWhatsApp = dynamic(() => import('../../components/solutions/service-reminder/SRWhatsApp'), { ssr: false });
const SRDueTracking = dynamic(() => import('../../components/solutions/service-reminder/SRDueTracking'), { ssr: false });
const SRCustomerFollowUp = dynamic(() => import('../../components/solutions/service-reminder/SRCustomerFollowUp'), { ssr: false });
const SRVehicleMaintenance = dynamic(() => import('../../components/solutions/service-reminder/SRVehicleMaintenance'), { ssr: false });
const SRWorkshopTypes = dynamic(() => import('../../components/solutions/service-reminder/SRWorkshopTypes'), { ssr: false });
const SRManualVsDigital = dynamic(() => import('../../components/solutions/service-reminder/SRManualVsDigital'), { ssr: false });
const SRApp = dynamic(() => import('../../components/solutions/service-reminder/SRApp'), { ssr: false });
const SRConnected = dynamic(() => import('../../components/solutions/service-reminder/SRConnected'), { ssr: false });
const SRRetentionValue = dynamic(() => import('../../components/solutions/service-reminder/SRRetentionValue'), { ssr: false });
const SRWhySaarthi = dynamic(() => import('../../components/solutions/service-reminder/SRWhySaarthi'), { ssr: false });
const SRProductProof = dynamic(() => import('../../components/solutions/service-reminder/SRProductProof'), { ssr: false });
const SRFreeTrial = dynamic(() => import('../../components/solutions/service-reminder/SRFreeTrial'), { ssr: false });
const SRFAQ = dynamic(() => import('../../components/solutions/service-reminder/SRFAQ'), { ssr: false });
const SRFinalCTA = dynamic(() => import('../../components/solutions/service-reminder/SRFinalCTA'), { ssr: false });

export default function ServiceReminderSoftware() {
  return (
    <PageLayout>

      <SRHero />
      <SRDefinition />
      <SRHowItWorks />
      <SRWhatsApp />
      <SRDueTracking />
      <SRCustomerFollowUp />
      <SRVehicleMaintenance />
      <SRWorkshopTypes />
      <SRManualVsDigital />
      <SRApp />
      <SRConnected />
      <SRRetentionValue />
      <SRWhySaarthi />
      <SRProductProof />
      <SRFreeTrial />
      <SRFAQ />
      <SRFinalCTA />
    </PageLayout>
  );
}
