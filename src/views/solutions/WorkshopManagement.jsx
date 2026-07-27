"use client";

import PageLayout from "@/src/components/common/PageLayout";
import dynamic from 'next/dynamic';
import React from "react";
const WMHero = dynamic(() => import('../../components/solutions/workshop/WMHero'), { ssr: false });
const WMProblem = dynamic(() => import('../../components/solutions/workshop/WMProblem'), { ssr: false });
const WMProductDefinition = dynamic(() => import('../../components/solutions/workshop/WMProductDefinition'), { ssr: false });
const WMWorkflow = dynamic(() => import('../../components/solutions/workshop/WMWorkflow'), { ssr: false });
const WMFeatureGrid = dynamic(() => import('../../components/solutions/workshop/WMFeatureGrid'), { ssr: false });
const WMWorkshopTypes = dynamic(() => import('../../components/solutions/workshop/WMWorkshopTypes'), { ssr: false });
const WMComparison = dynamic(() => import('../../components/solutions/workshop/WMComparison'), { ssr: false });
const WMAutomation = dynamic(() => import('../../components/solutions/workshop/WMAutomation'), { ssr: false });
const WMStaff = dynamic(() => import('../../components/solutions/workshop/WMStaff'), { ssr: false });
const WMMultiBranch = dynamic(() => import('../../components/solutions/workshop/WMMultiBranch'), { ssr: false });
const WMFinance = dynamic(() => import('../../components/solutions/workshop/WMFinance'), { ssr: false });
const WMMobile = dynamic(() => import('../../components/solutions/workshop/WMMobile'), { ssr: false });
const WMWhyUs = dynamic(() => import('../../components/solutions/workshop/WMWhyUs'), { ssr: false });
const WMReviews = dynamic(() => import('../../components/solutions/workshop/WMReviews'), { ssr: false });
const WMPricing = dynamic(() => import('../../components/solutions/workshop/WMPricing'), { ssr: false });
const WMFAQ = dynamic(() => import('../../components/solutions/workshop/WMFAQ'), { ssr: false });
const WMFinalCTA = dynamic(() => import('../../components/solutions/workshop/WMFinalCTA'), { ssr: false });

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
