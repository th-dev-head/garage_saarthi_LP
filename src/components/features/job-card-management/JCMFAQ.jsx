import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function JCMFAQ({ className = "bg-slate-50" }) {
  const faqs = [
    {
      question: "What is a digital job card software?",
      answer: "A digital job card software is a mobile and web application that replaces paper repair registers in auto workshops. It allows service advisors to create repair orders, log customer complaints, attach inspection photos, assign mechanics, and send estimates via WhatsApp."
    },
    {
      question: "How do digital job cards save time in daily garage operations?",
      answer: "Digital job cards eliminate manual handwriting and redundant data entry. Searching past customer or vehicle service records takes just 2 seconds by registration number, and completing job cards automatically converts them into GST invoices in 1 click."
    },
    {
      question: "Can I send job card estimates to customers on WhatsApp?",
      answer: "Yes! GarageSaarthi allows you to generate a professional PDF job card and estimate link that can be shared directly with your customer's WhatsApp number for instant review and approval."
    },
    {
      question: "Can I assign mechanics to specific repair tasks on a job card?",
      answer: "Yes. You can assign one or more mechanics to specific line items on a job card, set estimated completion times, and track their progress on the shop floor."
    },
    {
      question: "Can workshop team members chat and mention each other on a job card?",
      answer: "Yes! Every job card has a private 'Activity & Discussion' drawer. Service advisors, mechanics, and admins can chat, use @mentions (e.g., @Detailer) to notify colleagues, and view live status changes in one shared thread."
    },
    {
      question: "Does the job card software automatically deduct spare parts from inventory?",
      answer: "Absolutely. As soon as spare parts or lubricants are issued to a job card, the quantities are automatically deducted from your central stock levels."
    },
    {
      question: "How does Mechanic Work & Break Time Clocking work in GarageSaarthi?",
      answer: "Technicians can start live stopwatch timers on specific job card labour tasks or the whole repair order. When pausing for lunch, tea, parts waiting, or customer approval, the break duration is logged and subtracted from total elapsed time to record 100% accurate active working hours."
    },
    {
      question: "Can mechanics access the live clocking timer from any page in the app?",
      answer: "Yes! A persistent global floating timer bar stays at the bottom right across all app pages, allowing mechanics to check parts or inventory while keeping 1-tap Break, Resume, and Finish buttons immediately accessible."
    },
    {
      question: "Can I attach before and after repair photos to a job card?",
      answer: "Yes! You can capture and upload vehicle inspection photos, scratch diagrams, and completed repair photos directly using the Android mobile app or web portal."
    },
    {
      question: "Does the system generate mechanic productivity and efficiency reports?",
      answer: "Yes. GarageSaarthi aggregates total active working hours, total break duration, completed job card count, and productivity percentage for each technician to power transparent performance evaluations and incentive payroll."
    }
  ];

  return (
    <AccordionFAQ
      title="Digital Job Card Management"
      titleHighlight="FAQs"
      subtitle="Got questions about digital repair orders, mechanic time tracking, and workshop workflow? We've got answers."
      faqs={faqs}
      className={className}
    />
  );
}
