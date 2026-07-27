import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function VehFAQ() {
  const faqs = [
    {
      question: "What is workshop vehicle management software?",
      answer: "Workshop vehicle management software is a cloud-based system that allows garages to track complete vehicle records, including diagnostic history logs, past repair sheets, Odometer/KM readings, engine codes, and parts replaced."
    },
    {
      question: "Can I track the full service history of returning customer vehicles?",
      answer: "Yes! Every repair, part replacement, and billing transaction is saved permanently under the vehicle's registration plate number, allowing you to access complete service histories in 2 seconds."
    },
    {
      question: "Does it support Odometer and KM logging?",
      answer: "Yes. You can record vehicle Odometer/KM readings during intake. This helps calculate upcoming service targets and intervals, which triggers automated service reminders."
    },
    {
      question: "Can I record pre-existing vehicle damage or scratches?",
      answer: "Yes. The mobile check-in module allows you to take pictures of the vehicle and upload them directly to the active repair log, helping you avoid client damage disputes."
    },
    {
      question: "Can I map multiple vehicles under a single customer profile?",
      answer: "Absolutely. You can map any number of cars or two-wheelers to one customer profile, keeping all invoices and histories organized under a single family account."
    },
    {
      question: "Does it support different vehicle types like electric vehicles (EVs) or heavy trucks?",
      answer: "Yes. GarageSaarthi supports customized vehicle categories. Track EV battery serial numbers, warranty details, or heavy commercial truck wheel alignments."
    }
  ];

  return (
    <AccordionFAQ
      title="Garage Vehicle Management"
      titleHighlight="FAQs"
      subtitle="Got questions about tracking vehicle histories, Odometer logs, and check-in records? We've got answers."
      faqs={faqs}
      className="bg-slate-50"
    />
  );
}
