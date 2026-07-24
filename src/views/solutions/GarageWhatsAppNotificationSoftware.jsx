"use client";

import PageLayout from "@/src/components/common/PageLayout";
import dynamic from 'next/dynamic';
import React from "react";

const GWNHero = dynamic(() => import('../../components/solutions/garage-whatsapp-notification/GWNHero'), { ssr: false });
const GWNProblem = dynamic(() => import('../../components/solutions/garage-whatsapp-notification/GWNProblem'), { ssr: false });
const GWNProductDefinition = dynamic(() => import('../../components/solutions/garage-whatsapp-notification/GWNProductDefinition'), { ssr: false });
const GWNWorkflow = dynamic(() => import('../../components/solutions/garage-whatsapp-notification/GWNWorkflow'), { ssr: false });
const GWNServiceDue = dynamic(() => import('../../components/solutions/garage-whatsapp-notification/GWNServiceDue'), { ssr: false });
const GWNAutomation = dynamic(() => import('../../components/solutions/garage-whatsapp-notification/GWNAutomation'), { ssr: false });
const GWNCommunication = dynamic(() => import('../../components/solutions/garage-whatsapp-notification/GWNCommunication'), { ssr: false });
const GWNRetention = dynamic(() => import('../../components/solutions/garage-whatsapp-notification/GWNRetention'), { ssr: false });
const GWNBusinessTypes = dynamic(() => import('../../components/solutions/garage-whatsapp-notification/GWNBusinessTypes'), { ssr: false });
const GWNAlerts = dynamic(() => import('../../components/solutions/garage-whatsapp-notification/GWNAlerts'), { ssr: false });
const GWNPlatform = dynamic(() => import('../../components/solutions/garage-whatsapp-notification/GWNPlatform'), { ssr: false });
const GWNWhySaarthi = dynamic(() => import('../../components/solutions/garage-whatsapp-notification/GWNWhySaarthi'), { ssr: false });
const GWNProof = dynamic(() => import('../../components/solutions/garage-whatsapp-notification/GWNProof'), { ssr: false });
const GWNFreeTrial = dynamic(() => import('../../components/solutions/garage-whatsapp-notification/GWNFreeTrial'), { ssr: false });
const GWNFAQ = dynamic(() => import('../../components/solutions/garage-whatsapp-notification/GWNFAQ'), { ssr: false });
const GWNFinalCTA = dynamic(() => import('../../components/solutions/garage-whatsapp-notification/GWNFinalCTA'), { ssr: false });

export default function GarageWhatsAppNotificationSoftware() {
  return (
    <PageLayout>      <GWNHero />
      <GWNProblem />
      <GWNProductDefinition />
      <GWNWorkflow />
      <GWNServiceDue />
      <GWNAutomation />
      <GWNCommunication />
      <GWNRetention />
      <GWNBusinessTypes />
      <GWNAlerts />
      <GWNPlatform />
      <GWNWhySaarthi />
      <GWNProof />
      <GWNFreeTrial />
      <GWNFAQ />
      <GWNFinalCTA />

    </PageLayout>
  );
}
