'use client';

import PageLayout from "@/src/components/common/PageLayout";
import React from 'react';
import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import ProductDefinition from '../components/ProductDefinition';
import DashboardFeatures from '../components/DashboardFeatures';

const SectionPlaceholder = () => <div style={{ minHeight: '400px' }} />;

const IndustrialBenefits = dynamic(() => import('../components/IndustrialBenefits'), { loading: () => <SectionPlaceholder /> });
const DigitalOperations = dynamic(() => import('../components/DigitalOperations'), { loading: () => <SectionPlaceholder /> });
const SmartDashboard = dynamic(() => import('../components/SmartDashboard'), { loading: () => <SectionPlaceholder /> });
const MultiBranchPromo = dynamic(() => import('../components/MultiBranchPromo'), { loading: () => <SectionPlaceholder /> });
const CustomerRetentionPromo = dynamic(() => import('../components/CustomerRetentionPromo'), { loading: () => <SectionPlaceholder /> });
const StaffManagementPromo = dynamic(() => import('../components/StaffManagementPromo'), { loading: () => <SectionPlaceholder /> });
const FinancePromo = dynamic(() => import('../components/FinancePromo'), { loading: () => <SectionPlaceholder /> });
const AppPromotion = dynamic(() => import('../components/AppPromotion'), { loading: () => <SectionPlaceholder /> });
const WhyGarageSaarthi = dynamic(() => import('../components/WhyGarageSaarthi'), { loading: () => <SectionPlaceholder /> });
const ReviewSection = dynamic(() => import('../components/ReviewSection'), { loading: () => <SectionPlaceholder /> });
const PricingCTA = dynamic(() => import('../components/PricingCTA'), { loading: () => <SectionPlaceholder /> });
const FAQSection = dynamic(() => import('../components/FAQSection'), { loading: () => <SectionPlaceholder /> });
const FinalCTA = dynamic(() => import('../components/FinalCTA'), { loading: () => <SectionPlaceholder /> });
const ContactSection = dynamic(() => import('../components/ContactSection'), { loading: () => <SectionPlaceholder /> });

const Home = () => {
  return (
    <PageLayout className="bg-white">
        <Hero />
        <ProductDefinition />
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
