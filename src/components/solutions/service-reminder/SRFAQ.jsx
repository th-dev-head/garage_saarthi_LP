import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function SRFAQ() {
  const data = [
    {
      question: "What is service reminder software?",
      answer: "Service reminder software is a specialized digital tool built to help automotive garages, workshops, and service centers organize vehicle maintenance timelines and track upcoming customer service due dates."
    },
    {
      question: "How does GarageSaarthi track vehicle service reminders?",
      answer: "GarageSaarthi tracks reminders through its dedicated Service Alerts module. When a job card is billed or a vehicle record is registered, you can log service intervals which are automatically added to the due calendar."
    },
    {
      question: "Can garages send WhatsApp service reminders with GarageSaarthi?",
      answer: "Yes. GarageSaarthi supports customer follow-up actions by providing template messaging structures that you can approve and send directly over WhatsApp."
    },
    {
      question: "Can I track upcoming car service due dates?",
      answer: "Yes, you can track car service milestones, customer detail sheets, and vehicle registration numbers from the main service alerts dashboard."
    },
    {
      question: "Is GarageSaarthi suitable for bike workshop service reminders?",
      answer: "Yes, the system is fully optimized for motorcycle service centers, independent bike garages, and multi-brand service outlets."
    },
    {
      question: "Can multi-branch garages manage service reminders?",
      answer: "Yes. Authorized owners can view and manage next due alerts for separate branch operations using their centralized multi-branch login."
    },
    {
      question: "Does GarageSaarthi store customer and vehicle details?",
      answer: "Yes. Customer contact logs and vehicle registration profiles remain connected in a unified, secure database."
    },
    {
      question: "Is GarageSaarthi a vehicle maintenance reminder system?",
      answer: "Yes, it serves as a vehicle maintenance reminder system for garages. However, it is not a consumer app for individual car owners; it is a B2B platform for workshop management."
    },
    {
      question: "Is there a service reminder app for garages?",
      answer: "Yes. We maintain a live Android mobile application on the Google Play Store, alongside our main web-based platform."
    },
    {
      question: "Does GarageSaarthi offer automated service reminders?",
      answer: "It automatically populates upcoming service alerts on your dashboard based on invoice dates. Sending the actual WhatsApp template requires a quick click confirmation from your staff."
    },
    {
      question: "How much does GarageSaarthi service reminder software cost?",
      answer: "Service reminder features are included in our standard subscription packages. Please check the pricing page for the detailed quarterly and annual plans."
    },
    {
      question: "Can I try GarageSaarthi before purchasing?",
      answer: "Yes, we offer a 7-day free trial with full access to all standard modules and service alerts with no credit card required."
    }
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Service Reminder Software"
      faqs={data}
    />
  );
}