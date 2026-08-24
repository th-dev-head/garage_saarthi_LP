import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function MBFAQ() {
  const data = [
    {
      question: "What is multi branch garage software?",
      answer: "Multi branch garage software is a cloud platform built to help automotive groups, franchises, and multi-location repair chains manage and review daily transactions (billing, job cards, inventory, staff lists) for several outlets under one dashboard."
    },
    {
      question: "Can I manage multiple garage branches with GarageSaarthi?",
      answer: "Yes, you can register and select multiple branches inside your GarageSaarthi account, switching views on the dashboard in seconds."
    },
    {
      question: "Can I manage different users for different garage branches?",
      answer: "Yes. Manage staff user profiles and assign specific branch-level permissions to restrict mechanics and billing desk logins from checking records of other branches."
    },
    {
      question: "Can I view branch-wise garage reports?",
      answer: "Yes, generate daily sales collections, payments mode statements, and invoice rosters categorized by branches centrally."
    },
    {
      question: "Can GarageSaarthi manage inventory for multiple garage branches?",
      answer: "Yes. You can manage and audit separate spare parts warehouses and stocks for each branch centrally on the dashboard."
    },
    {
      question: "Is GarageSaarthi suitable for garage chains?",
      answer: "Yes, the system is designed to standardize workflows, checklist files, and invoicing codes across garage chains."
    },
    {
      question: "Can workshop franchises use GarageSaarthi?",
      answer: "Yes, franchise operators can review central collections, verify roles, and audit branch activities."
    },
    {
      question: "Can I manage staff attendance and payroll for my garages?",
      answer: "Yes, track checkin registers, calculated leaves, and print monthly salary slips per branch."
    },
    {
      question: "Is GarageSaarthi cloud-based?",
      answer: "Yes, it runs on secure cloud servers, meaning all data synchronizes automatically between web dashboards and the mobile app."
    },
    {
      question: "Can I use GarageSaarthi on mobile?",
      answer: "Yes. We maintain a live mobile apps on Google Play Store & Apple App Store, alongside our main web dashboard."
    },
    {
      question: "Does GarageSaarthi offer a free trial?",
      answer: "Yes, we offer a 7-day free trial with full access to multi-branch selection, user settings, billing, and accounting modules with no credit card required."
    },
    {
      question: "How much does multi branch garage software cost?",
      answer: "Multi-branch setups are included in our standard quarterly and annual packages. Please check the pricing page for the detailed rates."
    }
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Multi Branch Garage Software"
      faqs={data}
    />
  );
}