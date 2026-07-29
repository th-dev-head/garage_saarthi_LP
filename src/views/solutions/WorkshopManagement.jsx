import PageLayout from "@/src/components/common/PageLayout";
import React from "react";
import WMHero from "../../components/solutions/workshop/WMHero";
import WMProblem from "../../components/solutions/workshop/WMProblem";
import WMProductDefinition from "../../components/solutions/workshop/WMProductDefinition";
import WMWorkflow from "../../components/solutions/workshop/WMWorkflow";
import WMFeatureGrid from "../../components/solutions/workshop/WMFeatureGrid";
import WMWorkshopTypes from "../../components/solutions/workshop/WMWorkshopTypes";
import WMComparison from "../../components/solutions/workshop/WMComparison";
import WMAutomation from "../../components/solutions/workshop/WMAutomation";
import WMStaff from "../../components/solutions/workshop/WMStaff";
import WMMultiBranch from "../../components/solutions/workshop/WMMultiBranch";
import WMFinance from "../../components/solutions/workshop/WMFinance";
import WMMobile from "../../components/solutions/workshop/WMMobile";
import WMWhyUs from "../../components/solutions/workshop/WMWhyUs";
import WMReviews from "../../components/solutions/workshop/WMReviews";
import WMPricing from "../../components/solutions/workshop/WMPricing";
import WMFAQ from "../../components/solutions/workshop/WMFAQ";
import WMFinalCTA from "../../components/solutions/workshop/WMFinalCTA";

const WorkshopManagement = () => {
  return (
    <PageLayout>
        <WMHero />
        <WMProblem />
        <WMProductDefinition />
        <WMWorkflow />
        <WMFeatureGrid />
        <WMWorkshopTypes />
        <WMComparison />
        <WMAutomation />
        <WMStaff />
        <WMMultiBranch />
        <WMFinance />
        <WMMobile />
        <WMWhyUs />
        <WMReviews />
        <WMPricing />
        <WMFAQ />
        <WMFinalCTA />
    </PageLayout>
  );
};

export default WorkshopManagement;
