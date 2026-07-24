"use client";
import PageLayout from "@/src/components/common/PageLayout";
import dynamic from 'next/dynamic';
import React from "react";

const GAHero = dynamic(() => import('../../components/solutions/garage-attendance/GAHero'), { ssr: false });
const GADefinition = dynamic(() => import('../../components/solutions/garage-attendance/GADefinition'), { ssr: false });
const GAFeatures = dynamic(() => import('../../components/solutions/garage-attendance/GAFeatures'), { ssr: false });
const GAWorkshopTypes = dynamic(() => import('../../components/solutions/garage-attendance/GAWorkshopTypes'), { ssr: false });
const GAMechanicTracking = dynamic(() => import('../../components/solutions/garage-attendance/GAMechanicTracking'), { ssr: false });
const GAWorkflow = dynamic(() => import('../../components/solutions/garage-attendance/GAWorkflow'), { ssr: false });
const GAManualVsSystem = dynamic(() => import('../../components/solutions/garage-attendance/GAManualVsSystem'), { ssr: false });
const GAMultiBranch = dynamic(() => import('../../components/solutions/garage-attendance/GAMultiBranch'), { ssr: false });
const GAWebMobile = dynamic(() => import('../../components/solutions/garage-attendance/GAWebMobile'), { ssr: false });
const GAEcosystem = dynamic(() => import('../../components/solutions/garage-attendance/GAEcosystem'), { ssr: false });
const GAWhySaarthi = dynamic(() => import('../../components/solutions/garage-attendance/GAWhySaarthi'), { ssr: false });
const GAPricing = dynamic(() => import('../../components/solutions/garage-attendance/GAPricing'), { ssr: false });
const GAFAQ = dynamic(() => import('../../components/solutions/garage-attendance/GAFAQ'), { ssr: false });
const GAFinalCTA = dynamic(() => import('../../components/solutions/garage-attendance/GAFinalCTA'), { ssr: false });

export default function GarageAttendanceSoftware() {
  return (
    <PageLayout>

      <GAHero />
      <GADefinition />
      <GAFeatures />
      <GAWorkshopTypes />
      <GAMechanicTracking />
      <GAWorkflow />
      <GAManualVsSystem />
      <GAMultiBranch />
      <GAWebMobile />
      <GAEcosystem />
      <GAWhySaarthi />
      <GAPricing />
      <GAFAQ />
      <GAFinalCTA />
    </PageLayout>
  );
}
