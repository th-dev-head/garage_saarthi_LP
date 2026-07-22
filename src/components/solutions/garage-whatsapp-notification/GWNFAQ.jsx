import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function GWNFAQ() {
  const data = [
    {
      question: "What is garage WhatsApp notification software?",
      answer: "Garage WhatsApp notification software is a digital tool built to help automotive workshops, car garages, and bike repair centers log customer maintenance schedules and send periodic service reminders, updates, and follow-ups to vehicle owners through WhatsApp."
    },
    {
      question: "Can GarageSaarthi send WhatsApp service reminders to customers?",
      answer: "Yes. GarageSaarthi lets you track upcoming service due dates based on previous repair records and trigger pre-configured WhatsApp alerts to customers directly from the service reminder panel."
    },
    {
      question: "How do WhatsApp service reminders work in GarageSaarthi?",
      answer: "First, customer and vehicle details are logged. Next, periodic maintenance dates are set. When an alert becomes due, advisors can select a message template and click the send action to deliver the notification to the customer's WhatsApp."
    },
    {
      question: "Can I send vehicle service due reminders through WhatsApp?",
      answer: "Yes. You can manage multiple vehicle profiles per customer, track periodic service milestones, and log individual alerts for each vehicle to dispatch WhatsApp reminders."
    },
    {
      question: "Does GarageSaarthi automate WhatsApp garage reminders?",
      answer: "GarageSaarthi automates the tracking of upcoming service due dates. Once an alert is active in the Service Alerts queue, advisors can quickly verify the customer details and trigger the WhatsApp reminder with a single click."
    },
    {
      question: "Can car workshops use GarageSaarthi for customer follow-ups?",
      answer: "Yes. The software is designed for multi-brand car workshops in India, allowing advisors to log specific repair follow-ups, denting quotes, and periodic maintenance reminders."
    },
    {
      question: "Can bike garages send service reminders with GarageSaarthi?",
      answer: "Yes. Motorcycle and scooter repair shops can utilize the Service Alerts dashboard to manage fast-paced washing checks, general tune-ups, and periodic reminders."
    },
    {
      question: "Are customer and vehicle records connected with service alerts?",
      answer: "Yes. In GarageSaarthi, all customer parameters, linked vehicle registration details, digital job cards, and invoice histories are stored in a single unified database."
    },
    {
      question: "Can multi-branch garages manage customer notifications?",
      answer: "Yes. Large workshop chains can compile customer records centrally, monitor messaging metrics, and review branch-specific retention statistics from a consolidated dashboard."
    },
    {
      question: "Is GarageSaarthi only a WhatsApp notification software?",
      answer: "No. GarageSaarthi is a complete workshop management software. WhatsApp notifications are a core feature of the platform, which also includes digital job cards, GST billing, inventory tracking, CRM, finance, staff payroll, and reports."
    },
    {
      question: "Does GarageSaarthi offer a free trial?",
      answer: "Yes, we offer a 7-day free trial that gives you full access to WhatsApp reminder tracking, CRM pipelines, and job cards with no credit card required."
    },
    {
      question: "How much does GarageSaarthi cost?",
      answer: "WhatsApp reminder features are included in our standard subscription packages. Please check the pricing page for details on monthly and annual packages."
    }
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Garage WhatsApp Notification Software"
      faqs={data}
      className="bg-slate-50"
    />
  );
}
