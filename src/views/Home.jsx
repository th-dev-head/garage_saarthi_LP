import PageLayout from "@/src/components/common/PageLayout";
import React from 'react';
import Hero from '../components/Hero';
import ProductDefinition from '../components/ProductDefinition';
import DashboardFeatures from '../components/DashboardFeatures';
import IndustrialBenefits from "../components/IndustrialBenefits";
import DigitalOperations from "../components/DigitalOperations";
import SmartDashboard from "../components/SmartDashboard";
import MultiBranchPromo from "../components/MultiBranchPromo";
import CustomerRetentionPromo from "../components/CustomerRetentionPromo";
import StaffManagementPromo from "../components/StaffManagementPromo";
import FinancePromo from "../components/FinancePromo";
import AppPromotion from "../components/AppPromotion";
import WhyGarageSaarthi from "../components/WhyGarageSaarthi";
import ReviewSection from "../components/ReviewSection";
import PricingCTA from "../components/PricingCTA";
import FAQSection from "../components/FAQSection";
import FinalCTA from "../components/FinalCTA";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <PageLayout className="bg-white">
      <Hero />
      <DashboardFeatures />
      <IndustrialBenefits />
      <DigitalOperations />
      <SmartDashboard />
      <MultiBranchPromo />
      <CustomerRetentionPromo />
      <StaffManagementPromo />
      <FinancePromo />
      <AppPromotion />
      <WhyGarageSaarthi />
      <ReviewSection />
      <PricingCTA />
      <FAQSection />
      <FinalCTA />
      <ContactSection />
    </PageLayout>
  );
};

export default Home;
