import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function GTDFAQ() {
  const faqData = [
    {
      question: "What is garage test drive software?",
      answer: "Garage test drive software is a digital logging and vehicle road test management system designed for auto repair workshops. It records starting/return odometer readings, fuel levels, 2D vehicle damage schematics, and touchscreen driver signatures to eliminate vehicle misuse and customer damage disputes."
    },
    {
      question: "How does digital vehicle damage mapping work?",
      answer: "Technicians tap on an interactive 2D vehicle blueprint to pinpoint pre-existing scratches, dents, cracks, or paint chips before handing over the keys. The driver signs electronically, creating indisputable proof of pre-existing condition."
    },
    {
      question: "How does the system calculate distance driven?",
      answer: "When a vehicle departs for a road test, the starting odometer reading is recorded. Upon return, entering the return odometer automatically computes net kilometers driven (Return ODO - Start ODO) and highlights any excessive mileage."
    },
    {
      question: "Can mechanics use this software on mobile phones?",
      answer: "Yes! GarageSaarthi is 100% mobile-friendly. Mechanics can inspect the vehicle, drop damage pins on the diagram, and capture digital touchscreen signatures directly on any Android smartphone or tablet."
    },
    {
      question: "Is test drive data permanently attached to Job Cards?",
      answer: "Yes. When a test drive is launched from a Job Card, the trip distance, fuel consumption, damage checklist, and driver signatures are automatically attached to the Job Card and vehicle service history."
    },
    {
      question: "Does GarageSaarthi offer a free trial for test drive software?",
      answer: "Yes! We offer a 7-day free trial with complete access to test drive tracking, damage diagramming, Job Cards, and WhatsApp automation with no credit card required."
    }
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Garage Test Drive Software"
      faqs={faqData}
      className="bg-white"
    />
  );
}
