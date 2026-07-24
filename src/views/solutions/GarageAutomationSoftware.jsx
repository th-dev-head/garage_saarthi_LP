"use client";

import PageLayout from "@/src/components/common/PageLayout";
import dynamic from 'next/dynamic';
import React from "react";

const GAHero = dynamic(() => import('../../components/solutions/garage-automation/GAHero'), { ssr: false });
const GAProblem = dynamic(() => import('../../components/solutions/garage-automation/GAProblem'), { ssr: false });
const GAWorkflow = dynamic(() => import('../../components/solutions/garage-automation/GAWorkflow'), { ssr: false });
const GAManualVsAuto = dynamic(() => import('../../components/solutions/garage-automation/GAManualVsAuto'), { ssr: false });
const GAConnected = dynamic(() => import('../../components/solutions/garage-automation/GAConnected'), { ssr: false });
const GAServiceReminders = dynamic(() => import('../../components/solutions/garage-automation/GAServiceReminders'), { ssr: false });
const GABilling = dynamic(() => import('../../components/solutions/garage-automation/GABilling'), { ssr: false });
const GAInventory = dynamic(() => import('../../components/solutions/garage-automation/GAInventory'), { ssr: false });
const GACustomerCRM = dynamic(() => import('../../components/solutions/garage-automation/GACustomerCRM'), { ssr: false });
const GAMultiBranch = dynamic(() => import('../../components/solutions/garage-automation/GAMultiBranch'), { ssr: false });
const GABusinessTypes = dynamic(() => import('../../components/solutions/garage-automation/GABusinessTypes'), { ssr: false });
const GAMobileAccess = dynamic(() => import('../../components/solutions/garage-automation/GAMobileAccess'), { ssr: false });
const GAWhySaarthi = dynamic(() => import('../../components/solutions/garage-automation/GAWhySaarthi'), { ssr: false });
const GAProof = dynamic(() => import('../../components/solutions/garage-automation/GAProof'), { ssr: false });
const GAFreeTrial = dynamic(() => import('../../components/solutions/garage-automation/GAFreeTrial'), { ssr: false });
const GAFAQ = dynamic(() => import('../../components/solutions/garage-automation/GAFAQ'), { ssr: false });
const GAFinalCTA = dynamic(() => import('../../components/solutions/garage-automation/GAFinalCTA'), { ssr: false });

export default function GarageAutomationSoftware() {
  return (
    <PageLayout>      <GAHero />
      <GAProblem />
      <GAWorkflow />
      <GAManualVsAuto />
      <GAConnected />
      <GAServiceReminders />
      <GABilling />
      <GAInventory />
      <GACustomerCRM />
      <GAMultiBranch />
      <GABusinessTypes />
      <GAMobileAccess />
      <GAWhySaarthi />
      <GAProof />
      <GAFreeTrial />
      <GAFAQ />
      <GAFinalCTA />

    </PageLayout>
  );
}
