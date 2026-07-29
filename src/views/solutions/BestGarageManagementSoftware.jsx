import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import BGSHero from "../../components/solutions/best-garage-software/BGSHero";
import BGSAnswer from "../../components/solutions/best-garage-software/BGSAnswer";
import BGSChecklist from "../../components/solutions/best-garage-software/BGSChecklist";
import BGSFeatureCoverage from "../../components/solutions/best-garage-software/BGSFeatureCoverage";
import BGSSmallGarages from "../../components/solutions/best-garage-software/BGSSmallGarages";
import BGSBusinessType from "../../components/solutions/best-garage-software/BGSBusinessType";
import BGSAllInOne from "../../components/solutions/best-garage-software/BGSAllInOne";
import BGSCloudAccess from "../../components/solutions/best-garage-software/BGSCloudAccess";
import BGSFramework from "../../components/solutions/best-garage-software/BGSFramework";
import BGSWhyUs from "../../components/solutions/best-garage-software/BGSWhyUs";
import BGSProductVisual from "../../components/solutions/best-garage-software/BGSProductVisual";
import BGSPricing from "../../components/solutions/best-garage-software/BGSPricing";
import BGSTestimonials from "../../components/solutions/best-garage-software/BGSTestimonials";
import BGSFAQ from "../../components/solutions/best-garage-software/BGSFAQ";
import BGSFinalCTA from "../../components/solutions/best-garage-software/BGSFinalCTA";

export default function BestGarageManagementSoftware() {
  return (
    <PageLayout>
      <BGSHero />
      <BGSAnswer />
      <BGSChecklist />
      <BGSFeatureCoverage />
      <BGSSmallGarages />
      <BGSBusinessType />
      <BGSAllInOne />
      <BGSCloudAccess />
      <BGSFramework />
      <BGSWhyUs />
      <BGSProductVisual />
      <BGSPricing />
      <BGSTestimonials />
      <BGSFAQ />
      <BGSFinalCTA />
    </PageLayout>
  );
}
