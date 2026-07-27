"use client";
import PageLayout from "@/src/components/common/PageLayout";
import dynamic from 'next/dynamic';
import React from "react";

const GMHero = dynamic(() => import('../../components/solutions/garage-marketing/GMHero'), { ssr: false });
const GMDefinition = dynamic(() => import('../../components/solutions/garage-marketing/GMDefinition'), { ssr: false });
const GMChallenges = dynamic(() => import('../../components/solutions/garage-marketing/GMChallenges'), { ssr: false });
const GMOverview = dynamic(() => import('../../components/solutions/garage-marketing/GMOverview'), { ssr: false });
const GMOffers = dynamic(() => import('../../components/solutions/garage-marketing/GMOffers'), { ssr: false });
const GMWhatsApp = dynamic(() => import('../../components/solutions/garage-marketing/GMWhatsApp'), { ssr: false });
const GMFollowUp = dynamic(() => import('../../components/solutions/garage-marketing/GMFollowUp'), { ssr: false });
const GMRetention = dynamic(() => import('../../components/solutions/garage-marketing/GMRetention'), { ssr: false });
const GMServiceReminder = dynamic(() => import('../../components/solutions/garage-marketing/GMServiceReminder'), { ssr: false });
const GMCRMConnection = dynamic(() => import('../../components/solutions/garage-marketing/GMCRMConnection'), { ssr: false });
const GMBusinessType = dynamic(() => import('../../components/solutions/garage-marketing/GMBusinessType'), { ssr: false });
const GMComparison = dynamic(() => import('../../components/solutions/garage-marketing/GMComparison'), { ssr: false });
const GMCloudAccess = dynamic(() => import('../../components/solutions/garage-marketing/GMCloudAccess'), { ssr: false });
const GMWhyUs = dynamic(() => import('../../components/solutions/garage-marketing/GMWhyUs'), { ssr: false });
const GMPricing = dynamic(() => import('../../components/solutions/garage-marketing/GMPricing'), { ssr: false });
const GMFAQ = dynamic(() => import('../../components/solutions/garage-marketing/GMFAQ'), { ssr: false });
const GMFinalCTA = dynamic(() => import('../../components/solutions/garage-marketing/GMFinalCTA'), { ssr: false });

export default function GarageMarketingSoftware() {
  return (
    < PageLayout >
      <GMHero />
      <GMDefinition />
      <GMChallenges />
      <GMOverview />
      <GMOffers />
      <GMWhatsApp />
      <GMFollowUp />
      <GMRetention />
      <GMServiceReminder />
      <GMCRMConnection />
      <GMBusinessType />
      <GMComparison />
      <GMCloudAccess />
      <GMWhyUs />
      <GMPricing />
      <GMFAQ />
      <GMFinalCTA />
    </PageLayout >
  );
}
