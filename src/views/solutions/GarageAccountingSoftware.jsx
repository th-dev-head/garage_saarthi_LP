"use client";
import PageLayout from "@/src/components/common/PageLayout";
import dynamic from 'next/dynamic';
import React from "react";

const GACHero = dynamic(() => import('../../components/solutions/garage-accounting/GACHero'), { ssr: false });
const GACDefinition = dynamic(() => import('../../components/solutions/garage-accounting/GACDefinition'), { ssr: false });
const GACCapabilities = dynamic(() => import('../../components/solutions/garage-accounting/GACCapabilities'), { ssr: false });
const GACProblem = dynamic(() => import('../../components/solutions/garage-accounting/GACProblem'), { ssr: false });
const GACExpenseManagement = dynamic(() => import('../../components/solutions/garage-accounting/GACExpenseManagement'), { ssr: false });
const GACBilling = dynamic(() => import('../../components/solutions/garage-accounting/GACBilling'), { ssr: false });
const GACCaAccess = dynamic(() => import('../../components/solutions/garage-accounting/GACCaAccess'), { ssr: false });
const GACConnected = dynamic(() => import('../../components/solutions/garage-accounting/GACConnected'), { ssr: false });
const GACWebMobile = dynamic(() => import('../../components/solutions/garage-accounting/GACWebMobile'), { ssr: false });
const GACMultiBranch = dynamic(() => import('../../components/solutions/garage-accounting/GACMultiBranch'), { ssr: false });
const GACWorkshopTypes = dynamic(() => import('../../components/solutions/garage-accounting/GACWorkshopTypes'), { ssr: false });
const GACWhySaarthi = dynamic(() => import('../../components/solutions/garage-accounting/GACWhySaarthi'), { ssr: false });
const GACPricing = dynamic(() => import('../../components/solutions/garage-accounting/GACPricing'), { ssr: false });
const GACFAQ = dynamic(() => import('../../components/solutions/garage-accounting/GACFAQ'), { ssr: false });
const GACFinalCTA = dynamic(() => import('../../components/solutions/garage-accounting/GACFinalCTA'), { ssr: false });

export default function GarageAccountingSoftware() {
  return (
    <PageLayout>

      <GACHero />
      <GACDefinition />
      <GACCapabilities />
      <GACProblem />
      <GACExpenseManagement />
      <GACBilling />
      <GACCaAccess />
      <GACConnected />
      <GACWebMobile />
      <GACMultiBranch />
      <GACWorkshopTypes />
      <GACWhySaarthi />
      <GACPricing />
      <GACFAQ />
      <GACFinalCTA />
    </PageLayout>
  );
}
