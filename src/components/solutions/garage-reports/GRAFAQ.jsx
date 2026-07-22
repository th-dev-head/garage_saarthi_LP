import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function GRAFAQ() {
  const data = [
    {
      question: "What is garage reports software?",
      answer: "Garage reports software is a management information system (MIS) that organizes daily workshop transactions (invoices, inventory movements, attendance sheets, payments) into structured business reports."
    },
    {
      question: "What reports can I view in GarageSaarthi?",
      answer: "You can view daily sales billing, counter spare parts sales logs, inventory audits, expense summaries, staff attendance checkins, and branch comparisons."
    },
    {
      question: "Can GarageSaarthi show garage sales reports?",
      answer: "Yes. GarageSaarthi compiles daily, weekly, and monthly invoice listings, along with collections categorized by payment modes."
    },
    {
      question: "Can I track garage revenue and profit?",
      answer: "Yes, you can track overall workshop collections and expenses centrally to evaluate financial health parameters."
    },
    {
      question: "Does GarageSaarthi provide inventory reports?",
      answer: "Yes, you get reports on current spare parts stock lists, inventory entry logs, reorder warnings, and counter sales logs."
    },
    {
      question: "Can I view service and job card reports?",
      answer: "Yes, track total closed job cards, active repair timings, and service alert due schedules centrally."
    },
    {
      question: "Can I track mechanic performance?",
      answer: "You can track role logins, mechanic assignments on job cards, and check attendance logs."
    },
    {
      question: "Does GarageSaarthi provide MIS reports for garages?",
      answer: "Yes, it compiles MIS dashboards and financial checklists, replacing manual ledger registers with structured tables."
    },
    {
      question: "Can I view reports for multiple garage branches?",
      answer: "Yes. Switch between branches on the main dashboard to check branch-specific collections, inventory, and staff rosters."
    },
    {
      question: "Can my CA access garage reports?",
      answer: "Yes, you can create a CA login with custom, view-only reports access to verify daily billing and payment histories."
    },
    {
      question: "Can I access GarageSaarthi reports on mobile?",
      answer: "Yes. We maintain a live Android mobile application on the Google Play Store, alongside our main web platform."
    },
    {
      question: "Does GarageSaarthi offer a free trial?",
      answer: "Yes, we offer a 7-day free trial with full access to reporting, dashboards, billing, and accounting modules with no credit card required."
    },
    {
      question: "How much does GarageSaarthi cost?",
      answer: "Reporting tools are included in our standard subscription packages. Check the pricing page for the quarterly and annual options."
    }
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Garage Reports Software"
      faqs={data}
    />
  );
}