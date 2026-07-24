"use client";
import PageLayout from "@/src/components/common/PageLayout";
import dynamic from 'next/dynamic';
import React from "react";

const WSIHero = dynamic(() => import('../../components/solutions/workshop-software-india/WSIHero'), { ssr: false });
const WSIDefinition = dynamic(() => import('../../components/solutions/workshop-software-india/WSIDefinition'), { ssr: false });
const WSIOperations = dynamic(() => import('../../components/solutions/workshop-software-india/WSIOperations'), { ssr: false });
const WSIBusinessTypes = dynamic(() => import('../../components/solutions/workshop-software-india/WSIBusinessTypes'), { ssr: false });
const WSIIndianContext = dynamic(() => import('../../components/solutions/workshop-software-india/WSIIndianContext'), { ssr: false });
const WSIDigitalTransformation = dynamic(() => import('../../components/solutions/workshop-software-india/WSIDigitalTransformation'), { ssr: false });
const WSIJobCards = dynamic(() => import('../../components/solutions/workshop-software-india/WSIJobCards'), { ssr: false });
const WSIBillingInventory = dynamic(() => import('../../components/solutions/workshop-software-india/WSIBillingInventory'), { ssr: false });
const WSICustomerService = dynamic(() => import('../../components/solutions/workshop-software-india/WSICustomerService'), { ssr: false });
const WSIMultiBranch = dynamic(() => import('../../components/solutions/workshop-software-india/WSIMultiBranch'), { ssr: false });
const WSICloudAccess = dynamic(() => import('../../components/solutions/workshop-software-india/WSICloudAccess'), { ssr: false });
const WSIStaff = dynamic(() => import('../../components/solutions/workshop-software-india/WSIStaff'), { ssr: false });
const WSIFinance = dynamic(() => import('../../components/solutions/workshop-software-india/WSIFinance'), { ssr: false });
const WSIWhyUs = dynamic(() => import('../../components/solutions/workshop-software-india/WSIWhyUs'), { ssr: false });
const WSITestimonials = dynamic(() => import('../../components/solutions/workshop-software-india/WSITestimonials'), { ssr: false });
const WSIPricing = dynamic(() => import('../../components/solutions/workshop-software-india/WSIPricing'), { ssr: false });
const WSIFAQ = dynamic(() => import('../../components/solutions/workshop-software-india/WSIFAQ'), { ssr: false });
const WSIFinalCTA = dynamic(() => import('../../components/solutions/workshop-software-india/WSIFinalCTA'), { ssr: false });

export default function WorkshopSoftwareIndia() {
  return (
    <PageLayout className="bg-slate-50 text-slate-900">
      
        <WSIHero />
        <WSIDefinition />
        <WSIOperations />
        <WSIBusinessTypes />
        <WSIIndianContext />
        <WSIDigitalTransformation />
        <WSIJobCards />
        <WSIBillingInventory />
        <WSICustomerService />
        <WSIMultiBranch />
        <WSICloudAccess />
        <WSIStaff />
        <WSIFinance />
        <WSIWhyUs />
        <WSITestimonials />
        <WSIPricing />
        <WSIFAQ />
        <WSIFinalCTA />
      
      
      
    </PageLayout>
  );
}
