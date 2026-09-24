import React from "react";
import GICHero from "../../components/solutions/garage-insurance-claim/GICHero";
import GICProblemDefinition from "../../components/solutions/garage-insurance-claim/GICProblemDefinition";
import GICProductDefinition from "../../components/solutions/garage-insurance-claim/GICProductDefinition";
import GICFeatures from "../../components/solutions/garage-insurance-claim/GICFeatures";
import GICWorkflow from "../../components/solutions/garage-insurance-claim/GICWorkflow";
import GICBusinessType from "../../components/solutions/garage-insurance-claim/GICBusinessType";
import GICCloudAccess from "../../components/solutions/garage-insurance-claim/GICCloudAccess";
import GICCustomerProof from "../../components/solutions/garage-insurance-claim/GICCustomerProof";
import GICFreeTrial from "../../components/solutions/garage-insurance-claim/GICFreeTrial";
import GICFAQ from "../../components/solutions/garage-insurance-claim/GICFAQ";
import GICFinalCTA from "../../components/solutions/garage-insurance-claim/GICFinalCTA";

export default function GarageInsuranceClaimSoftware() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <GICHero />
      <GICProblemDefinition />
      <GICProductDefinition />
      <GICFeatures />
      <GICWorkflow />
      <GICBusinessType />
      <GICCloudAccess />
      <GICCustomerProof />
      <GICFreeTrial />
      <GICFAQ />
      <GICFinalCTA />
    </div>
  );
}
