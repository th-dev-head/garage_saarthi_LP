"use client";
import PageLayout from "@/src/components/common/PageLayout";
import dynamic from 'next/dynamic';
import React from "react";

const GSIHero = dynamic(() => import('../../components/solutions/garage-software-india/GSIHero'), { ssr: false });
const GSIPositioning = dynamic(() => import('../../components/solutions/garage-software-india/GSIPositioning'), { ssr: false });
const GSIServices = dynamic(() => import('../../components/solutions/garage-software-india/GSIServices'), { ssr: false });
const GSIBusinessTypes = dynamic(() => import('../../components/solutions/garage-software-india/GSIBusinessTypes'), { ssr: false });
const GSIDigitalTransformation = dynamic(() => import('../../components/solutions/garage-software-india/GSIDigitalTransformation'), { ssr: false });
const GSICloudAccess = dynamic(() => import('../../components/solutions/garage-software-india/GSICloudAccess'), { ssr: false });
const GSIGSTBilling = dynamic(() => import('../../components/solutions/garage-software-india/GSIGSTBilling'), { ssr: false });
const GSIServiceReminders = dynamic(() => import('../../components/solutions/garage-software-india/GSIServiceReminders'), { ssr: false });
const GSIMultiBranch = dynamic(() => import('../../components/solutions/garage-software-india/GSIMultiBranch'), { ssr: false });
const GSIWhyUs = dynamic(() => import('../../components/solutions/garage-software-india/GSIWhyUs'), { ssr: false });
const GSIPricing = dynamic(() => import('../../components/solutions/garage-software-india/GSIPricing'), { ssr: false });
const GSITestimonials = dynamic(() => import('../../components/solutions/garage-software-india/GSITestimonials'), { ssr: false });
const GSICriteria = dynamic(() => import('../../components/solutions/garage-software-india/GSICriteria'), { ssr: false });
const GSIFAQ = dynamic(() => import('../../components/solutions/garage-software-india/GSIFAQ'), { ssr: false });
const GSIFinalCTA = dynamic(() => import('../../components/solutions/garage-software-india/GSIFinalCTA'), { ssr: false });

export default function GarageManagementSoftwareIndia() {
  return (
    < PageLayout >
        <GSIHero />
        <GSIPositioning />
        <GSIServices />
        <GSIBusinessTypes />
        <GSIDigitalTransformation />
        <GSICloudAccess />
        <GSIGSTBilling />
        <GSIServiceReminders />
        <GSIMultiBranch />
        <GSIWhyUs />
        <GSIPricing />
        <GSITestimonials />
        <GSICriteria />
        <GSIFAQ />
        <GSIFinalCTA />
    </PageLayout >
  );
}
