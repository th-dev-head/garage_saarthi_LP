import React from "react";
import { trackEvent } from "@/src/utils/pixel";
import AccordionFAQ from "../common/AccordionFAQ";

export default function GBFAQ() {
  const handleFaqInteraction = (question) => {
    trackEvent("billing_faq_interaction", {
      page_path: "/solutions/garage-billing-software",
      faq_question: question
    });
  };

  const faqData = [
    {
      q: "What is garage billing software?",
      a: "Garage billing software is a digital invoicing system designed to handle the specific operational requirements of vehicle workshops, separate labor and spare parts lines, automatically manage GST calculations, and link billing lists directly with job card details."
    },
    {
      q: "Does GarageSaarthi support GST billing?",
      a: "Yes. GarageSaarthi compiles SGST, CGST, and IGST tax splits automatically, handles HSN tax rate codes, and compiles professional tax invoice reports."
    },
    {
      q: "Can I manage spare parts billing with GarageSaarthi?",
      a: "Yes. Adding spare parts to a digital job card or counter sales bill issues materials directly from inventory, tracking unit costs and margins."
    },
    {
      q: "Does GarageSaarthi support split payments?",
      a: "Yes, you can split payments across cash, UPI, cards, and bank transactions, log payments centrally, and track cash register details."
    },
    {
      q: "Can my accountant access my invoicing data?",
      a: "Yes. You can grant secure login details to your CA to download invoice summaries directly, saving you the hassle of exporting spreadsheets."
    },
    {
      q: "Can I create invoice quotes or estimates?",
      a: "Yes. Create customized service quotes and convert them into final invoices with a single click."
    },
    {
      q: "Can car and bike workshops use GarageSaarthi Billing?",
      a: "Yes. We support custom invoicing parameters for cars, motorcycles, two-wheelers, auto repair centers, and multi-brand chains."
    },
    {
      q: "Is there a mobile billing application available?",
      a: "Yes. Download our Android application from the Google Play Store to manage invoicing and payments from your mobile."
    },
    {
      q: "Does GarageSaarthi offer a free trial for billing software?",
      a: "Yes, we provide a 7-day free trial with full dashboard access and no credit card required."
    },
    {
      q: "How much does workshop billing software cost?",
      a: "Billing capability is a standard part of our main subscription plans billed in INR. Check the pricing page for the latest plan rates."
    },
    {
      q: "Can GarageSaarthi manage outstanding payments?",
      a: "Yes. Log pending dues under the customer's permanent database profile. The system highlights outstanding balances on their next visit."
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            FAQ
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Frequently Asked Questions About Garage Billing Software
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
