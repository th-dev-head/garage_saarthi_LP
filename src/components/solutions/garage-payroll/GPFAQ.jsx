import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function GPFAQ() {
  const data = [
    {
      question: "What is garage payroll software?",
      answer: "Garage payroll software is a specialized staff management module built to help automotive workshops, car garages, and bike repair centers log employee presence, daily check-ins, leaves, basic wages, and mechanic commission ratios to output monthly salary payouts."
    },
    {
      question: "Can I manage mechanic salaries with GarageSaarthi?",
      answer: "Yes. You can configure basic salaries, calculate daily allowances, and track mechanic job commissions based on completed repair work logged on digital job cards."
    },
    {
      question: "Can GarageSaarthi manage workshop employee payroll?",
      answer: "Yes, you can register and manage payroll details for managers, service advisors, helpers, cleaners, and mechanics."
    },
    {
      question: "Does GarageSaarthi include attendance management?",
      answer: "Yes, our Attendance module helps you check shifts, login registers, and staff availability status. This attendance data supports organized payroll tracking."
    },
    {
      question: "Can I manage employee leave records in GarageSaarthi?",
      answer: "Yes, you can track daily leaves, paid leave structures, sick leaves, and outstanding balances per employee."
    },
    {
      question: "Is GarageSaarthi suitable for car workshop payroll management?",
      answer: "Yes, it is designed around multibrand car workshop structures where mechanics receive salary commissions depending on labor job card parameters."
    },
    {
      question: "Can multi-branch garages manage staff with GarageSaarthi?",
      answer: "Yes. You can manage staff user profiles, check present ratios, and compile payroll parameters categorized by locations centrally."
    },
    {
      question: "Is GarageSaarthi a payroll app for garages?",
      answer: "Yes. We provide browser access alongside a live Android application on the Google Play Store so staff attendance and payroll statuses can be updated on mobile. iOS support is coming soon."
    },
    {
      question: "Does GarageSaarthi only manage payroll?",
      answer: "No. Payroll is a module within our all-in-one garage management software, which also handles Job Cards, Inventory, CRM, Payments, Billing, and Reports."
    },
    {
      question: "Does GarageSaarthi offer a free trial?",
      answer: "Yes, we offer a 7-day free trial containing full access to payroll, attendance, leave logs, and workshop modules with no credit card required."
    },
    {
      question: "How much does GarageSaarthi cost?",
      answer: "Payroll features are part of our standard subscription packages. Please check the pricing page for the detailed plans."
    }
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Garage Payroll Software"
      faqs={data}
    />
  );
}
