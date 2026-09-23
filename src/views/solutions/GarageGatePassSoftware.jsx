import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import GGPHero from "../../components/solutions/garage-gate-pass/GGPHero";
import GGPProblemDefinition from "../../components/solutions/garage-gate-pass/GGPProblemDefinition";
import GGPProductDefinition from "../../components/solutions/garage-gate-pass/GGPProductDefinition";
import GGPFeatures from "../../components/solutions/garage-gate-pass/GGPFeatures";
import GGPWorkflow from "../../components/solutions/garage-gate-pass/GGPWorkflow";
import GGPBusinessType from "../../components/solutions/garage-gate-pass/GGPBusinessType";
import GGPCloudAccess from "../../components/solutions/garage-gate-pass/GGPCloudAccess";
import GGPCustomerProof from "../../components/solutions/garage-gate-pass/GGPCustomerProof";
import GGPFreeTrial from "../../components/solutions/garage-gate-pass/GGPFreeTrial";
import GGPFAQ from "../../components/solutions/garage-gate-pass/GGPFAQ";
import GGPFinalCTA from "../../components/solutions/garage-gate-pass/GGPFinalCTA";

export default function GarageGatePassSoftware() {
  return (
    <PageLayout>
      <GGPHero />
      <GGPProblemDefinition />
      <GGPProductDefinition />
      <GGPFeatures />
      <GGPWorkflow />
      <GGPBusinessType />
      <GGPCloudAccess />
      <GGPCustomerProof />
      <GGPFreeTrial />
      <GGPFAQ />
      <GGPFinalCTA />
    </PageLayout>
  );
}
