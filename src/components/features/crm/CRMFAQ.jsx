import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function CRMFAQ() {
  const faqs = [
    {
      question: "What is garage CRM software?",
      answer: "Garage CRM (Customer Relationship Management) software is a platform that helps auto repair workshops manage customer contact records, track repair leads, automate WhatsApp follow-ups, and send service due reminders to increase customer retention."
    },
    {
      question: "How does garage lead management work?",
      answer: "When a customer calls or visits your workshop for a repair inquiry, you can log their name, mobile number, vehicle details, and promised follow-up date. The system alerts your team when a follow-up is due so no lead is forgotten."
    },
    {
      question: "Can I send service reminders automatically on WhatsApp?",
      answer: "Yes! GarageSaarthi automatically tracks vehicle service intervals (e.g. 90 days or 5,000 km) and sends automated WhatsApp reminder alerts with booking links directly to vehicle owners."
    },
    {
      question: "Can I view complete vehicle repair history for a customer?",
      answer: "Yes. By entering a customer's phone number or registration plate, you can instantly view all past job cards, replaced spare parts, total invoices paid, and previous mechanic notes."
    },
    {
      question: "How does it help collect Google Reviews for my workshop?",
      answer: "After a job card is completed and paid, GarageSaarthi sends an automated thank-you message with your Google My Business review link, helping you build 5-star ratings effortlessly."
    },
    {
      question: "Can I run promotional WhatsApp marketing campaigns?",
      answer: "Yes! You can segment your customer database (e.g., customers who haven't visited in 6 months) and broadcast promotional service discounts or festival offers via WhatsApp."
    }
  ];

  return (
    <AccordionFAQ
      title="Garage CRM & Lead Management"
      titleHighlight="FAQs"
      subtitle="Got questions about managing garage leads, customer retention, and automated WhatsApp follow-ups? We've got answers."
      faqs={faqs}
    />
  );
}
