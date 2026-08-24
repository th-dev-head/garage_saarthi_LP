import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function GJCFAQ() {
  const faqData = [
    {
      question: "What is garage job card software?",
      answer: "Garage job card software is a digital tool that replaces physical job sheets, cardboard registers, and paper checklists with organized digital repair orders. It tracks vehicle conditions, customer complaints, mechanic tasks, and parts used."
    },
    {
      question: "What information can be added to a garage job card?",
      answer: "You can log customer contact information, vehicle model/number, fuel level indicators, complaints, mechanic assignments, spare parts issued, labor service items, estimate values, and delivery dates."
    },
    {
      question: "Can I create digital job cards with GarageSaarthi?",
      answer: "Yes. You can generate digital job cards on-the-go from any laptop web browser or our mobile app (Android & iOS), then share a copy with the customer via WhatsApp."
    },
    {
      question: "Can GarageSaarthi be used as workshop job card software?",
      answer: "Yes. GarageSaarthi is designed specifically to map standard workshop workflows for car, motorcycle, EV, and commercial auto service centers."
    },
    {
      question: "Can mechanics use GarageSaarthi for repair work orders?",
      answer: "Yes. You can assign specific user access permissions. Mechanics can view their assigned job sheets and update repair progress from a mobile browser or app."
    },
    {
      question: "Can I connect job cards with customer and vehicle records?",
      answer: "Yes. Typing the registration number instantly retrieves customer details and vehicle history records, linking the new job card to the vehicle's permanent profile."
    },
    {
      question: "Does GarageSaarthi connect job cards with inventory?",
      answer: "Yes. Spare parts issued to active job cards are automatically adjusted in inventory records, pulling active rates directly to the bill."
    },
    {
      question: "Can I access garage job cards online?",
      answer: "Yes, all data is cloud-based, providing real-time data sync across all web and mobile logins."
    },
    {
      question: "Is there a garage job card app?",
      answer: "Yes, we maintain mobile apps on Google Play Store and Apple App Store for quick on-the-floor job card creation."
    },
    {
      question: "Can car and bike workshops use GarageSaarthi Job Cards?",
      answer: "Yes. It supports custom parameters for both passenger cars and two-wheelers."
    },
    {
      question: "Does GarageSaarthi offer a free trial for Job Card software?",
      answer: "Yes, we offer a 7-day free trial with full feature access and no credit card required to register."
    },
    {
      question: "How much does GarageSaarthi Job Card software cost?",
      answer: "It is included as a core capability within our standard quarterly and annual plans. Check the pricing page for the latest plan details."
    }
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Garage Job Card Software"
      faqs={faqData}
    />
  );
}

