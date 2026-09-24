import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import GTDHero from "../../components/solutions/garage-test-drive/GTDHero";
import GTDProblemDefinition from "../../components/solutions/garage-test-drive/GTDProblemDefinition";
import GTDProductDefinition from "../../components/solutions/garage-test-drive/GTDProductDefinition";
import GTDFeatures from "../../components/solutions/garage-test-drive/GTDFeatures";
import GTDWorkflow from "../../components/solutions/garage-test-drive/GTDWorkflow";
import GTDBusinessType from "../../components/solutions/garage-test-drive/GTDBusinessType";
import GTDCloudAccess from "../../components/solutions/garage-test-drive/GTDCloudAccess";
import GTDCustomerProof from "../../components/solutions/garage-test-drive/GTDCustomerProof";
import GTDFreeTrial from "../../components/solutions/garage-test-drive/GTDFreeTrial";
import GTDFAQ from "../../components/solutions/garage-test-drive/GTDFAQ";
import GTDFinalCTA from "../../components/solutions/garage-test-drive/GTDFinalCTA";

export default function GarageTestDriveSoftware() {
  return (
    <PageLayout>
      <GTDHero />
      <GTDProblemDefinition />
      <GTDProductDefinition />
      <GTDFeatures />
      <GTDWorkflow />
      <GTDBusinessType />
      <GTDCloudAccess />
      <GTDCustomerProof />
      <GTDFreeTrial />
      <GTDFAQ />
      <GTDFinalCTA />
    </PageLayout>
  );
}
