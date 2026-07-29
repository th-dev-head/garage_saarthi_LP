import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import GIHero from "../../components/solutions/garage-inventory/GIHero";
import GIDefinition from "../../components/solutions/garage-inventory/GIDefinition";
import GISpareParts from "../../components/solutions/garage-inventory/GISpareParts";
import GIStockManagement from "../../components/solutions/garage-inventory/GIStockManagement";
import GIAutomotiveParts from "../../components/solutions/garage-inventory/GIAutomotiveParts";
import GIWorkshopTypes from "../../components/solutions/garage-inventory/GIWorkshopTypes";
import GIConnectedOperations from "../../components/solutions/garage-inventory/GIConnectedOperations";
import GIAutomation from "../../components/solutions/garage-inventory/GIAutomation";
import GIMultiBranch from "../../components/solutions/garage-inventory/GIMultiBranch";
import GIReporting from "../../components/solutions/garage-inventory/GIReporting";
import GIAccess from "../../components/solutions/garage-inventory/GIAccess";
import GIWhySaarthi from "../../components/solutions/garage-inventory/GIWhySaarthi";
import GIRelatedFeatures from "../../components/solutions/garage-inventory/GIRelatedFeatures";
import GIFreeTrial from "../../components/solutions/garage-inventory/GIFreeTrial";
import GIFAQ from "../../components/solutions/garage-inventory/GIFAQ";
import GIFinalCTA from "../../components/solutions/garage-inventory/GIFinalCTA";

export default function GarageInventorySoftware() {
  return (
    <PageLayout>      <GIHero />
      <GIDefinition />
      <GISpareParts />
      <GIStockManagement />
      <GIAutomotiveParts />
      <GIWorkshopTypes />
      <GIConnectedOperations />
      <GIAutomation />
      <GIMultiBranch />
      <GIReporting />
      <GIAccess />
      <GIWhySaarthi />
      <GIRelatedFeatures />
      <GIFreeTrial />
      <GIFAQ />
      <GIFinalCTA />
    </PageLayout>
  );
}
