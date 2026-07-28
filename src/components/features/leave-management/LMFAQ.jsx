import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function LMFAQ() {
  const faqs = [
    {
      question: "Can mechanics apply for leave directly from their smartphones?",
      answer: "Yes! Mechanics and staff can log into the GarageSaarthi mobile app, view their remaining leave balances, and apply for Paid Leave (PL), Sick Leave (SL), or Casual Leave (CL) in seconds."
    },
    {
      question: "How does leave management sync with monthly salary payroll?",
      answer: "Approved paid leave days count towards regular work days. Unpaid leaves automatically reduce the present day count and trigger loss-of-pay salary deductions on monthly salary slips."
    },
    {
      question: "Can I set different leave quotas for mechanics and office managers?",
      answer: "Yes. GarageSaarthi lets you define custom leave rules and annual paid leave limits per role (e.g. Head Mechanic, Junior Helper, Service Advisor, Accountant)."
    },
    {
      question: "Can workshop owners approve or reject leave applications remotely?",
      answer: "Absolutely! Garage owners receive push notifications whenever staff submit leave applications and can approve or reject them with 1-tap from anywhere."
    },
    {
      question: "Does the leave management system support half-day leaves?",
      answer: "Yes! Staff can select half-day options (Morning / Afternoon shift) or short leave hours, which are recorded accurately in the attendance and leave register."
    }
  ];

  return (
    <AccordionFAQ
      title="Garage Staff Leave Management"
      titleHighlight="FAQs"
      subtitle="Clear answers regarding staff leave tracking, paid leave quotas, loss-of-pay, and payroll integration."
      faqs={faqs}
      className="bg-white"
    />
  );
}
