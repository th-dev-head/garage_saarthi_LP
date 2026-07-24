"use client";

import PageLayout from "@/src/components/common/PageLayout";
import dynamic from 'next/dynamic';
import React from "react";

const GCEHero = dynamic(() => import('../../components/solutions/garage-customer-engagement/GCEHero'), { ssr: false });
const GCEProblem = dynamic(() => import('../../components/solutions/garage-customer-engagement/GCEProblem'), { ssr: false });
const GCERecords = dynamic(() => import('../../components/solutions/garage-customer-engagement/GCERecords'), { ssr: false });
const GCEReminders = dynamic(() => import('../../components/solutions/garage-customer-engagement/GCEReminders'), { ssr: false });
const GCECommunication = dynamic(() => import('../../components/solutions/garage-customer-engagement/GCECommunication'), { ssr: false });
const GCECRM = dynamic(() => import('../../components/solutions/garage-customer-engagement/GCECRM'), { ssr: false });
const GCEOffers = dynamic(() => import('../../components/solutions/garage-customer-engagement/GCEOffers'), { ssr: false });
const GCERetention = dynamic(() => import('../../components/solutions/garage-customer-engagement/GCERetention'), { ssr: false });
const GCEExperience = dynamic(() => import('../../components/solutions/garage-customer-engagement/GCEExperience'), { ssr: false });
const GCEFeedback = dynamic(() => import('../../components/solutions/garage-customer-engagement/GCEFeedback'), { ssr: false });
const GCEBusinessTypes = dynamic(() => import('../../components/solutions/garage-customer-engagement/GCEBusinessTypes'), { ssr: false });
const GCEPlatform = dynamic(() => import('../../components/solutions/garage-customer-engagement/GCEPlatform'), { ssr: false });
const GCEWhySaarthi = dynamic(() => import('../../components/solutions/garage-customer-engagement/GCEWhySaarthi'), { ssr: false });
const GCEProof = dynamic(() => import('../../components/solutions/garage-customer-engagement/GCEProof'), { ssr: false });
const GCEFreeTrial = dynamic(() => import('../../components/solutions/garage-customer-engagement/GCEFreeTrial'), { ssr: false });
const GCEFAQ = dynamic(() => import('../../components/solutions/garage-customer-engagement/GCEFAQ'), { ssr: false });
const GCEFinalCTA = dynamic(() => import('../../components/solutions/garage-customer-engagement/GCEFinalCTA'), { ssr: false });

export default function GarageCustomerEngagementSoftware() {
  return (
    <PageLayout>      
      <GCEHero />
      <GCEProblem />
      <GCERecords />
      <GCEReminders />
      <GCECommunication />
      <GCECRM />
      <GCEOffers />
      <GCERetention />
      <GCEExperience />
      <GCEFeedback />
      <GCEBusinessTypes />
      <GCEPlatform />
      <GCEWhySaarthi />
      <GCEProof />
      <GCEFreeTrial />
      <GCEFAQ />
      <GCEFinalCTA />
    </PageLayout>
  );
}
