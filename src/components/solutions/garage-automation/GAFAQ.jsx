import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function GAFAQ() {
  const data = [
    {
      question: "What is garage automation software?",
      answer: "Garage automation software is a digital workspace built to help auto repair shops, car workshops, and bike garages replace manual paperwork with connected digital workflows such as job cards, spare stock tracking, GST billing, and service reminder notifications."
    },
    {
      question: "How does garage automation software work?",
      answer: "It connects daily operations. When a vehicle enters, check-in is logged. Work details and spares are added to job cards. Billing compiles this information to create GST invoices. The system then automatically tracks service alerts and follow-ups."
    },
    {
      question: "What garage operations can GarageSaarthi automate?",
      answer: "GarageSaarthi automates service reminder scheduling, invoice compilations, spare parts deductions on job cards, mechanic wage commission tracking, and consolidated multi-branch reporting dashboards."
    },
    {
      question: "Can GarageSaarthi automate vehicle service reminders?",
      answer: "Yes. The system schedules future maintenance alerts based on billing dates. These service reminders can be sent via WhatsApp with a single click, helping you stay connected with customers."
    },
    {
      question: "Does GarageSaarthi support GST billing?",
      answer: "Yes, you can generate GST tax invoices with custom CGST/SGST layouts, invoice series, and payment records matching Indian workshop configurations."
    },
    {
      question: "Can I manage garage inventory with GarageSaarthi?",
      answer: "Yes. You can track spare parts catalog numbers, purchase records, low-stock indicators, and deduct spares from active job cards."
    },
    {
      question: "Is GarageSaarthi suitable for car workshops?",
      answer: "Yes. GarageSaarthi is designed for multi-brand car garages, body repair workshops, and detailing service centers in India."
    },
    {
      question: "Can multi-branch garages use GarageSaarthi?",
      answer: "Yes. You can configure centralized dashboards to monitor sales metrics, configure custom roles for branch managers, and consolidate inventory logs."
    },
    {
      question: "Is GarageSaarthi available as a garage automation app?",
      answer: "Yes, our web dashboard is paired with a dedicated Android application on the Google Play Store, letting you manage the workshop on the go."
    },
    {
      question: "Is GarageSaarthi cloud-based?",
      answer: "Yes. All customer profiles, spares stock numbers, and invoice parameters are securely synchronized in real time across web and Android interfaces."
    },
    {
      question: "Does GarageSaarthi offer a free trial?",
      answer: "Yes, we provide a 7-day free trial that gives you full access to digital job cards, billing, CRM, and inventory modules with no credit card required."
    },
    {
      question: "How much does garage automation software cost?",
      answer: "GarageSaarthi is subscription-based. Please check the pricing page for our monthly and annual plans."
    }
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Garage Automation Software"
      faqs={data}
      className="bg-slate-50"
    />
  );
}
