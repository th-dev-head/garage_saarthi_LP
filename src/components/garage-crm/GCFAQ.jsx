import React from "react";
import { trackEvent } from "@/src/utils/pixel";
import AccordionFAQ from "../common/AccordionFAQ";

export default function GCFAQ() {
  const handleFaqInteraction = (question) => {
    trackEvent("faq_interaction", {
      page_path: "/solutions/garage-crm-software",
      page_name: "garage_crm_software",
      faq_question: question
    });
  };

  const faqData = [
    {
      q: "What is garage CRM software?",
      a: "Garage CRM software is customer relationship management software designed specifically for automotive workshops. It organizes leads, customer records, follow-ups, and vehicle histories inside a unified digital platform."
    },
    {
      q: "Why does a garage need CRM software?",
      a: "A dedicated CRM helps garage owners track customer enquiries, schedule call backs, organize vehicle records, maintain service histories, and send service alerts for customer retention."
    },
    {
      q: "Can GarageSaarthi manage garage leads?",
      a: "Yes. You can save incoming enquiries, phone calls, or walk-ins, log complaints, set call dates, and track conversion statuses on the dashboard."
    },
    {
      q: "Can I store customer records in GarageSaarthi?",
      a: "Yes. Keep customer profiles, contact numbers, and invoice histories synchronized in a secure cloud database."
    },
    {
      q: "Can customer vehicles be managed in GarageSaarthi?",
      a: "Yes. Every customer record connects directly to one or more car or bike registration profiles."
    },
    {
      q: "Does GarageSaarthi help with customer follow-ups?",
      a: "Yes. It supports follow-up date fields, CRM status categories, and service alerts to coordinate customer communication."
    },
    {
      q: "Can car workshops use GarageSaarthi CRM?",
      a: "Yes, it is fully optimized for multi-brand car workshops and service centers."
    },
    {
      q: "Can auto repair shops use GarageSaarthi CRM?",
      a: "Yes, independent auto repair workshops can track diagnostic requests, mechanic tasks, and customer follow-up actions."
    },
    {
      q: "Does GarageSaarthi maintain customer service history?",
      a: "Yes. Every invoice, part replaced, and diagnostic checklist is stored under the vehicle's permanent profile."
    },
    {
      q: "Can GarageSaarthi send service alerts?",
      a: "Yes, you can track service calendars and coordinate next-due notifications."
    },
    {
      q: "Is GarageSaarthi CRM available on mobile?",
      a: "Yes. We maintain a live Android mobile application on the Google Play Store."
    },
    {
      q: "Is GarageSaarthi only a CRM software?",
      a: "No. CRM is just one connected module of our wider garage management platform, which also handles job cards, inventory, and billing."
    },
    {
      q: "Does GarageSaarthi offer a free trial?",
      a: "Yes. Sign up for our 7-day free trial to test all CRM and operational features with no credit card required."
    },
    {
      q: "How much does GarageSaarthi CRM cost?",
      a: "CRM features are included in our standard quarterly and annual subscription plans. Check the pricing page for details."
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            FAQ
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Frequently Asked Questions About Garage CRM Software
          </h2>
        </div>

        <AccordionFAQ
          faqData={faqData.map((item) => ({
            ...item,
            onOpen: () => handleFaqInteraction(item.q)
          }))}
        />
      </div>
    </section>
  );
}
