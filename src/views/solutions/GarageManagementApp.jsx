"use client";

import PageLayout from "@/src/components/common/PageLayout";
import dynamic from 'next/dynamic';
import React from "react";

// Section Components
const GAHero = dynamic(() => import('../../components/solutions/garage-app/GAHero'), { ssr: false });
const GADefinition = dynamic(() => import('../../components/solutions/garage-app/GADefinition'), { ssr: false });
const GADailyWork = dynamic(() => import('../../components/solutions/garage-app/GADailyWork'), { ssr: false });
const GAMobileWorkflow = dynamic(() => import('../../components/solutions/garage-app/GAMobileWorkflow'), { ssr: false });
const GABusinessTypes = dynamic(() => import('../../components/solutions/garage-app/GABusinessTypes'), { ssr: false });
const GAJobCardUseCase = dynamic(() => import('../../components/solutions/garage-app/GAJobCardUseCase'), { ssr: false });
const GACustomerVehicle = dynamic(() => import('../../components/solutions/garage-app/GACustomerVehicle'), { ssr: false });
const GAInventoryMobile = dynamic(() => import('../../components/solutions/garage-app/GAInventoryMobile'), { ssr: false });
const GAStaffManagement = dynamic(() => import('../../components/solutions/garage-app/GAStaffManagement'), { ssr: false });
const GAServiceAlerts = dynamic(() => import('../../components/solutions/garage-app/GAServiceAlerts'), { ssr: false });
const GAReports = dynamic(() => import('../../components/solutions/garage-app/GAReports'), { ssr: false });
const GAWebMobileConnection = dynamic(() => import('../../components/solutions/garage-app/GAWebMobileConnection'), { ssr: false });
const GAAndroidApp = dynamic(() => import('../../components/solutions/garage-app/GAAndroidApp'), { ssr: false });
const GAWhyUse = dynamic(() => import('../../components/solutions/garage-app/GAWhyUse'), { ssr: false });
const GAProductProof = dynamic(() => import('../../components/solutions/garage-app/GAProductProof'), { ssr: false });
const GAFreeTrialCTA = dynamic(() => import('../../components/solutions/garage-app/GAFreeTrialCTA'), { ssr: false });
const GAFAQ = dynamic(() => import('../../components/solutions/garage-app/GAFAQ'), { ssr: false });
const GAFinalCTA = dynamic(() => import('../../components/solutions/garage-app/GAFinalCTA'), { ssr: false });

export default function GarageManagementApp() {
  return (
    <PageLayout>

      <GAHero />
      <GADefinition />
      <GADailyWork />
      <GAMobileWorkflow />
      <GABusinessTypes />
      <GAJobCardUseCase />
      <GACustomerVehicle />
      <GAInventoryMobile />
      <GAStaffManagement />
      <GAServiceAlerts />
      <GAReports />
      {/* <GAWebMobileConnection /> */}
      <GAAndroidApp />
      <GAWhyUse />
      <GAProductProof />
      <GAFreeTrialCTA />
      <GAFAQ />
      <GAFinalCTA />
    </PageLayout>
  );
}
