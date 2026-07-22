import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function GAFAQ() {
  const data = [
    {
      question: "What is garage attendance software?",
      answer: "Garage attendance software is a specialized shift and check-in tracker built to help automotive workshops, car garages, and bike repair centers log daily employee check-ins, record working hours, monitor leave logs, and keep staff lists organized online."
    },
    {
      question: "Can I track mechanic attendance with GarageSaarthi?",
      answer: "Yes, you can record check-in times and active status parameters for mechanics, helpers, and technician profiles."
    },
    {
      question: "Is GarageSaarthi suitable for workshop employee attendance?",
      answer: "Yes. You can manage shifts for managers, service advisors, helpers, and cleaners."
    },
    {
      question: "Can I manage attendance and leave in GarageSaarthi?",
      answer: "Yes, you can track daily shifts alongside leave balance logs, sick leaves, and present/absent ratios in our integrated dashboard."
    },
    {
      question: "Does GarageSaarthi include payroll management?",
      answer: "Yes. Staff attendance profiles connect with monthly payroll calculations so commissions and salaries are based on verified present days. Check the Payroll feature page."
    },
    {
      question: "Can multi-branch garages manage staff attendance?",
      answer: "Yes. Switch between registered locations on the dashboard to check present ratios, shift times, and user roles by branch centrally."
    },
    {
      question: "Is GarageSaarthi a mechanic attendance app?",
      answer: "Yes, we provide web browser access alongside a live Android mobile application so desk managers or mechanics can log shifts on the go."
    },
    {
      question: "Can I use GarageSaarthi attendance software on mobile?",
      answer: "Yes, we maintain a live Android mobile application on the Google Play Store. iOS support is coming soon."
    },
    {
      question: "Does GarageSaarthi support biometric attendance?",
      answer: "GarageSaarthi provides digital attendance management for garage and workshop staff. Biometric device integration is not currently supported."
    },
    {
      question: "Does GarageSaarthi offer a free trial?",
      answer: "Yes, we offer a 7-day free trial containing full access to attendance, leaves, payroll, and workshop modules with no credit card required."
    }
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Garage Attendance Software"
      faqs={data}
      className="bg-slate-50"
    />
  );
}
