'use client';

import React from 'react';
import Header from '../components/common/Header';
import Hero from '../components/Hero';
import ProductDefinition from '../components/ProductDefinition';
import DashboardFeatures from '../components/DashboardFeatures';
import IndustrialBenefits from '../components/IndustrialBenefits';
import DigitalOperations from '../components/DigitalOperations';
import SmartDashboard from '../components/SmartDashboard';
import MultiBranchPromo from '../components/MultiBranchPromo';
import CustomerRetentionPromo from '../components/CustomerRetentionPromo';
import StaffManagementPromo from '../components/StaffManagementPromo';
import FinancePromo from '../components/FinancePromo';
import AppPromotion from '../components/AppPromotion';
import WhyGarageSaarthi from '../components/WhyGarageSaarthi';
import ReviewSection from '../components/ReviewSection';
import PricingCTA from '../components/PricingCTA';
import FAQSection from '../components/FAQSection';
import FinalCTA from '../components/FinalCTA';
import ContactSection from '../components/ContactSection';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';

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
