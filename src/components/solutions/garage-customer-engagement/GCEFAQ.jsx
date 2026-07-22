import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function GCEFAQ() {
  const data = [
    {
      question: "What is garage customer engagement software?",
      answer: "Garage customer engagement software is a centralized digital system that helps auto workshops, car garages, and bike service centers manage customer relationships, communications, reminders, and follow-ups. It brings vehicle records and history into one database to support repeat service visits."
    },
    {
      question: "How can GarageSaarthi help garages stay connected with customers?",
      answer: "GarageSaarthi keeps customer and vehicle profiles in sync. When services are completed, upcoming alerts are logged. You can review customer logs, schedule follow-up notes, and send WhatsApp reminder notifications in one click."
    },
    {
      question: "Can GarageSaarthi send service reminders to customers?",
      answer: "Yes. You can track periodic service due dates and send pre-designed WhatsApp alerts to customers. This structured process keeps vehicle owners informed without manual tracking on paper registers."
    },
    {
      question: "Does GarageSaarthi have a garage CRM?",
      answer: "Yes, our Garage CRM lets you track new walk-ins, phone bookings, and internet leads. You can configure follow-up dates and tasks to convert inquiries into active workshop job cards."
    },
    {
      question: "Can I manage customer and vehicle records together?",
      answer: "Yes. In GarageSaarthi, every customer is linked directly to their specific vehicle registration records, odometer logs, insurance details, and entire service invoice history."
    },
    {
      question: "How can garage software help with customer retention?",
      answer: "It replaces disconnected paper registers with a digital retention flow: customer visits are logged, service dates are tracked, WhatsApp reminder alerts are triggered, and customer follow-up notes are recorded, helping garages bring clients back for future periodic service."
    },
    {
      question: "Can GarageSaarthi help manage garage customer follow-ups?",
      answer: "Yes. The CRM module organizes follow-ups by scheduling tasks, logs, and contact actions, showing service advisors which customers need to be called or messaged each day."
    },
    {
      question: "Can I create offers and promotions for garage customers?",
      answer: "Yes, the Offers & Promotions module lets you configure discount coupon codes, seasonal check-up packages, and weekend deals, which can be shared with clients via WhatsApp templates."
    },
    {
      question: "Is GarageSaarthi suitable for car and bike workshops?",
      answer: "Yes. The software is designed around the unique workflows of multi-brand car workshops, motorcycle service centers, and modern EV garages in India."
    },
    {
      question: "Can multi-branch garages use GarageSaarthi for customer management?",
      answer: "Yes. You can manage customer databases across multiple branches, track total customer counts centrally, and view retention metrics for each location."
    },
    {
      question: "Is GarageSaarthi available on mobile?",
      answer: "Yes. GarageSaarthi offers full browser accessibility alongside a dedicated Android app on the Google Play Store, so advisors and technicians can update records on the go."
    },
    {
      question: "Does GarageSaarthi offer a free trial?",
      answer: "Yes, we provide a 7-day free trial containing full access to CRM, customer database, job cards, service alerts, and other modules with no credit card required."
    }
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Garage Customer Engagement Software"
      faqs={data}
      className="bg-slate-50"
    />
  );
}
