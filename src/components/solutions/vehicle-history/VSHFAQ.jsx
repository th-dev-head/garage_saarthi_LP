import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function VSHFAQ() {
  const data = [
    {
      question: "What is vehicle service history software?",
      answer: "Vehicle service history software is a digital system designed to maintain chronological logs of past repairs, replaced parts, general services, and invoice values under specific vehicle registration profiles."
    },
    {
      question: "How can a garage maintain vehicle service history digitally?",
      answer: "By replacing physical diaries or paper cards with a cloud database. Inside GarageSaarthi, creating and closing a digital job card automatically populates the permanent service timeline for that vehicle."
    },
    {
      question: "Can GarageSaarthi store previous vehicle service records?",
      answer: "Yes. All invoice entries, checklist comments, and mechanic assignments completed inside your GarageSaarthi account are securely saved under the vehicle's permanent profile."
    },
    {
      question: "Can I check previous repair work for a customer vehicle?",
      answer: "Yes, you can search for the vehicle's registration number to instantly view all closed job sheets, billing dates, and parts replaced."
    },
    {
      question: "Can vehicle service history be connected with job cards?",
      answer: "Yes. Every job card opens against a specific vehicle, ensuring that all checkup notes, complaints, and invoices automatically populate the service timeline."
    },
    {
      question: "Can GarageSaarthi manage car service history?",
      answer: "Yes, it is fully optimized for multi-brand car garages, listing models, fuel levels, diagnostic reports, and engine checks."
    },
    {
      question: "Can GarageSaarthi maintain bike service records?",
      answer: "Yes, motorcycle workshops can organize customer bikes, wash schedules, engine logs, and next-due parameters."
    },
    {
      question: "Does GarageSaarthi support service reminders?",
      answer: "Yes, the system links vehicle service intervals with proactive Service Alerts and WhatsApp templates to handle customer outreach."
    },
    {
      question: "Can multiple garage branches manage vehicle records?",
      answer: "Yes. In our multi-branch configuration, authorized owners can check past service logs for a vehicle across different locations centrally."
    },
    {
      question: "Is GarageSaarthi available on mobile?",
      answer: "Yes. We maintain a live Android mobile application on the Google Play Store, alongside our web dashboard."
    },
    {
      question: "Is vehicle service history included in the GarageSaarthi free trial?",
      answer: "Yes, the 7-day free trial gives you complete access to digital job cards, vehicle records, customer profiles, and service logs."
    },
    {
      question: "How much does GarageSaarthi cost?",
      answer: "Vehicle records and history tools are standard modules included in our quarterly and annual plans. Check /pricing for detailed rates."
    }
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Vehicle Service History Software"
      faqs={data}
    />
  );
}