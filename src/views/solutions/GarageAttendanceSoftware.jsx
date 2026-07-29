import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import GAHero from "../../components/solutions/garage-attendance/GAHero";
import GADefinition from "../../components/solutions/garage-attendance/GADefinition";
import GAFeatures from "../../components/solutions/garage-attendance/GAFeatures";
import GAWorkshopTypes from "../../components/solutions/garage-attendance/GAWorkshopTypes";
import GAMechanicTracking from "../../components/solutions/garage-attendance/GAMechanicTracking";
import GAWorkflow from "../../components/solutions/garage-attendance/GAWorkflow";
import GAManualVsSystem from "../../components/solutions/garage-attendance/GAManualVsSystem";
import GAMultiBranch from "../../components/solutions/garage-attendance/GAMultiBranch";
import GAWebMobile from "../../components/solutions/garage-attendance/GAWebMobile";
import GAEcosystem from "../../components/solutions/garage-attendance/GAEcosystem";
import GAWhySaarthi from "../../components/solutions/garage-attendance/GAWhySaarthi";
import GAPricing from "../../components/solutions/garage-attendance/GAPricing";
import GAFAQ from "../../components/solutions/garage-attendance/GAFAQ";
import GAFinalCTA from "../../components/solutions/garage-attendance/GAFinalCTA";

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
