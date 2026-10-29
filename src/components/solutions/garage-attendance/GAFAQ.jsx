import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function GAFAQ({ className = "bg-white" }) {
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
      answer: "Yes, we maintain a live mobile apps on Google Play Store & Apple App Store. iOS apps are fully available."
    },
    {
      question: "Does GarageSaarthi support biometric or selfie attendance?",
      answer: "Yes! GarageSaarthi includes built-in live camera selfie verification during punch-in and punch-out. Mechanics capture a real-time photo on the workshop mobile, tablet, or desktop webcam, completely eliminating buddy punching and proxy attendance without requiring expensive biometric hardware."
    },
    {
      question: "Can I make selfie verification mandatory for workshop mechanics?",
      answer: "Yes. Workshop owners can toggle selfie capture as mandatory or optional in Attendance Settings, set grace periods for late punch-ins, and inspect live photo-verified check-in logs directly from the Admin Live Attendance roster."
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
      className={className}
    />
  );
}
