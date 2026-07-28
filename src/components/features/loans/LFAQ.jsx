import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function LFAQ() {
  const faqs = [
    {
      question: "How does GarageSaarthi help prevent bank EMI bounce charges?",
      answer: "GarageSaarthi sends automated advance WhatsApp and push notifications 3 days before your bank loan auto-debit dates, reminding you to ensure sufficient account balance."
    },
    {
      question: "Can I track equipment financing like hydraulic lifts and OBD scanners?",
      answer: "Yes! You can log machinery loans, equipment financing agreements, principal amounts, interest rates, and monthly EMI schedules separately."
    },
    {
      question: "Does it split interest payments and principal reduction?",
      answer: "Yes. The system automatically calculates interest component vs principal balance reduction for every EMI payment, making CA audit tax deductions simple."
    },
    {
      question: "Can I manage informal loans from business partners or private lenders?",
      answer: "Yes! You can log private borrowings, custom interest rates, and repayment terms alongside formal bank loans."
    },
    {
      question: "Is Loan Management included in the 7-day free trial?",
      answer: "Yes! During your 7-day free trial, you can test EMI schedule generation, repayment reminders, and debt reporting tools with full access."
    }
  ];

  return (
    <AccordionFAQ
      title="Garage Loan & EMI Management"
      titleHighlight="FAQs"
      subtitle="Everything you need to know about GarageSaarthi loan tracking software."
      faqs={faqs}
      className="bg-white"
    />
  );
}
