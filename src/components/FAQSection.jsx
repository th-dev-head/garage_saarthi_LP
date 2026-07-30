import React from "react";
import AccordionFAQ from "./common/AccordionFAQ";

const faqs = [
  {
    question: "What is garage management software?",
    answer: "Garage management software is a digital solution that helps auto workshop owners run their daily operations smoothly. It brings job card creation, GST invoicing, counter parts sales, inventory tracking, CRM, service reminders, and employee management into one single platform."
  },
  {
    question: "What does GarageSaarthi help garage owners manage?",
    answer: "GarageSaarthi provides specialized modules to track every aspect of your workshop: digital job cards, parts inventory, payments, employee attendance, staff payroll, next service alerts, customer history, and overall profit-and-loss reports."
  },
  {
    question: "Can GarageSaarthi be used by car and bike workshops?",
    answer: "Yes! GarageSaarthi is designed for all kinds of workshops, including multi-brand car garages, two-wheeler/bike workshops, EV service centers, truck garages, and premium car detailing outlets."
  },
  {
    question: "Is GarageSaarthi available for multi-branch garages?",
    answer: "Yes, our multi-branch module allows you to control multiple workshop locations centrally. You can manage access rights, check branch-wise reports, and transfer inventory from one store to another easily."
  },
  {
    question: "Can I manage job cards and inventory with GarageSaarthi?",
    answer: "Yes, you can create digital job cards for incoming vehicles, assign mechanics, log customer complaints, and link spare parts. When parts are used, they are automatically deducted from the central inventory."
  },
  {
    question: "Does GarageSaarthi help manage garage employees?",
    answer: "Yes, you can track staff and mechanic check-in and check-out times, log leaves, and generate monthly salary slips automatically based on their working days and advances."
  },
  {
    question: "Is GarageSaarthi available as a mobile app?",
    answer: "Yes, GarageSaarthi is available both as a web-based dashboard and an Android mobile application, allowing you to manage your workshop operations from a phone on the shop floor or from a laptop in the office."
  },
  {
    question: "Is GarageSaarthi cloud-based?",
    answer: "Yes, GarageSaarthi is a cloud-based platform. This means all your workshop data is securely backed up and accessible in real-time from any device, anywhere."
  },
  {
    question: "Does GarageSaarthi offer a free trial?",
    answer: "Yes, we offer a 7-day free trial with full access to all features so you can test and see how it simplifies your daily workshop routines."
  },
  {
    question: "How much does GarageSaarthi cost?",
    answer: "We offer affordable monthly, quarterly, and annual subscription plans tailored to different workshop sizes. Please check our pricing page for detailed rates."
  }
];

export default function FAQSection() {
  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Garage Management Software."
      subtitle="Everything you need to know about GarageSaarthi and how it can transform your workshop."
      faqs={faqs}
      className="bg-slate-50"
    />
  );
}
