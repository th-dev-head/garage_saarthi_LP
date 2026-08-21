"use client";

import AccordionFAQ from "../../common/AccordionFAQ";

const faqs = [
  {
    question: "How does the color-coded status work?",
    answer: "During inspection, mechanics select Green (Good), Yellow (Average/Needs Attention Soon), or Red (Bad/Replace Immediately) for each vehicle part. This makes it extremely easy for the customer to understand their car's health at a glance.",
  },
  {
    question: "Can I customize the inspection points?",
    answer: "Yes, GarageSaarthi comes with a comprehensive standard 100-point checklist covering Engine, Brakes, Tyres, Exterior, etc., but you can request customizations to match your specific workshop needs.",
  },
  {
    question: "How is the report sent to the customer?",
    answer: "Once the inspection is saved, you can click a single button to generate a WhatsApp message containing a secure link to the digital PDF health card. It's sent directly from your system to their phone.",
  },
  {
    question: "Can mechanics add photos to the inspection?",
    answer: "Currently, mechanics can add detailed text remarks and specific readings (like tyre depth). We are actively rolling out a feature that will allow attaching live photos to specific inspection points for even greater transparency.",
  },
  {
    question: "Can the inspection report be used to generate repair estimates?",
    answer: "Yes! The vehicle inspection report seamlessly integrates with our job card module. Any component marked as 'Bad' or 'Needs Attention' can instantly be converted into a repair estimate or added to the active job card.",
  },
  {
    question: "Does the inspection software work without an internet connection?",
    answer: "GarageSaarthi is a cloud-based system and requires a stable internet connection (WiFi or mobile data) to save inspection reports and instantly sync them to the main dashboard.",
  },
  {
    question: "How much time does a digital vehicle inspection take?",
    answer: "While a manual paper inspection can take 15-20 minutes, our digital checklists are optimized with quick-tap color codes, allowing a mechanic to complete a thorough 100-point check in just 5-7 minutes.",
  },
  {
    question: "Can my customers view the inspection report later?",
    answer: "Absolutely. The digital health card sent via WhatsApp includes a link that remains active, so customers can view their vehicle's historical health reports at any time.",
  },
];

export default function VIFAQ() {
  return (
    <AccordionFAQ
      title="Frequently Asked "
      titleHighlight="Questions"
      subtitle="Common questions about the Digital Vehicle Inspection software."
      faqs={faqs}
      className="bg-white border- "
    />
  );
}
