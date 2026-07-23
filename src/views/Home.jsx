'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Header from '../components/common/Header';
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
const Footer = dynamic(() => import('../components/common/Footer'), { loading: () => <div style={{ minHeight: '300px' }} /> });
const ScrollToTop = dynamic(() => import('../components/common/ScrollToTop'), {});

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <main>
        {/* Section 01 - Hero Banner */}
        <Hero />

        {/* Section 02 - Product Definition Text */}
        <ProductDefinition />

        {/* Section 03 - Core Workshop Operations Cards */}
        <DashboardFeatures />

        {/* Section 04 - Business Type Solutions Grid */}
        <IndustrialBenefits />

        {/* Section 05 - Digital Operations (Manual vs Digital Table) */}
        <DigitalOperations />

        {/* Section 06 - Dashboard & Business Visibility */}
        <SmartDashboard />

        {/* Section 07 - Multi-Branch Management */}
        <MultiBranchPromo />

        {/* Section 08 - Customer Retention & Alerts */}
        <CustomerRetentionPromo />

        {/* Section 09 - Staff & Mechanic Management */}
        <StaffManagementPromo />

        {/* Section 10 - Finance & CA Access */}
        <FinancePromo />

        {/* Section 11 - Web and Mobile Accessibility */}
        <AppPromotion />

        {/* Section 12 - Why Garage Owners Choose us */}
        <WhyGarageSaarthi />

        {/* Section 13 - Real Customer Testimonials */}
        <ReviewSection />

        {/* Section 14 - Pricing Entry Trial Offer */}
        <PricingCTA />

        {/* Section 15 - FAQs Accordion */}
        <FAQSection />

        {/* Section 16 - Final Conversion Call-To-Action */}
        <FinalCTA />

        {/* Contact form & Info */}
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
