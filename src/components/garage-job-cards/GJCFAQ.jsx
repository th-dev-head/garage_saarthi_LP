import React from "react";
import { trackEvent } from "@/src/utils/pixel";
import AccordionFAQ from "../common/AccordionFAQ";

export default function GJCFAQ() {
  const handleFaqInteraction = (question) => {
    trackEvent("job_card_faq_interaction", {
      page_path: "/solutions/garage-job-card-software",
      faq_question: question
    });
  };

  const faqData = [
    {
      q: "What is garage job card software?",
      a: "Garage job card software is a digital tool that replaces physical job sheets, cardboard registers, and paper checklists with organized digital repair orders. It tracks vehicle conditions, customer complaints, mechanic tasks, and parts used."
    },
    {
      q: "What information can be added to a garage job card?",
      a: "You can log customer contact information, vehicle model/number, fuel level indicators, complaints, mechanic assignments, spare parts issued, labor service items, estimate values, and delivery dates."
    },
    {
      q: "Can I create digital job cards with GarageSaarthi?",
      a: "Yes. You can generate digital job cards on-the-go from any laptop web browser or our mobile Android application, then share a copy with the customer via WhatsApp."
    },
    {
      q: "Can GarageSaarthi be used as workshop job card software?",
      a: "Yes. GarageSaarthi is designed specifically to map standard workshop workflows for car, motorcycle, EV, and commercial auto service centers."
    },
    {
      q: "Can mechanics use GarageSaarthi for repair work orders?",
      a: "Yes. You can assign specific user access permissions. Mechanics can view their assigned job sheets and update repair progress from a mobile browser or app."
    },
    {
      q: "Can I connect job cards with customer and vehicle records?",
      a: "Yes. Typing the registration number instantly retrieves customer details and vehicle history records, linking the new job card to the vehicle's permanent profile."
    },
    {
      q: "Does GarageSaarthi connect job cards with inventory?",
      a: "Yes. Spare parts issued to active job cards are automatically adjusted in inventory records, pulling active rates directly to the bill."
    },
    {
      q: "Can I access garage job cards online?",
      a: "Yes, all data is cloud-based, providing real-time data sync across all web and mobile logins."
    },
    {
      q: "Is there a garage job card app?",
      a: "Yes, we maintain a live Android application on the Google Play Store for quick on-the-floor job card creation."
    },
    {
      q: "Can car and bike workshops use GarageSaarthi Job Cards?",
      a: "Yes. It supports custom parameters for both passenger cars and two-wheelers."
    },
    {
      q: "Does GarageSaarthi offer a free trial for Job Card software?",
      a: "Yes, we offer a 7-day free trial with full feature access and no credit card required to register."
    },
    {
      q: "How much does GarageSaarthi Job Card software cost?",
      a: "It is included as a core capability within our standard quarterly and annual plans. Check the pricing page for the latest plan details."
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
            Frequently Asked Questions About Garage Job Card Software
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
