import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import GAHero from "../../components/solutions/garage-attendance/GAHero";
import GADefinition from "../../components/solutions/garage-attendance/GADefinition";
import GAFeatures from "../../components/solutions/garage-attendance/GAFeatures";
import GASelfieAttendance from "../../components/solutions/garage-attendance/GASelfieAttendance";
import GAMechanicTracking from "../../components/solutions/garage-attendance/GAMechanicTracking";
import GAWorkshopTypes from "../../components/solutions/garage-attendance/GAWorkshopTypes";
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
      <GASelfieAttendance bgClass="bg-white" />
      <GAMechanicTracking bgClass="bg-slate-50" />
      <GAWorkshopTypes bgClass="bg-white" />
      <GAWorkflow bgClass="bg-slate-50" />
      <GAManualVsSystem bgClass="bg-white" />
      <GAMultiBranch bgClass="bg-slate-50" />
      <GAWebMobile bgClass="bg-white" />
      <GAEcosystem bgClass="bg-slate-50" />
      <GAWhySaarthi bgClass="bg-white" />
      <GAPricing bgClass="bg-slate-50" />
      <GAFAQ className="bg-white" />
      <GAFinalCTA />
    </PageLayout>
  );
}
