import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

const faqs = [
  {
    q: "Can mechanics upload photos directly from their smartphones?",
    a: "Yes! Using the responsive mobile web dashboard or Android app, technicians can snap and upload photos directly from their phone camera in real-time."
  },
  {
    q: "Is there a limit to how many photos I can upload?",
    a: "No. GarageSaarthi supports unlimited media uploads so you can document every single repair stage comprehensively."
  },
  {
    q: "How does photo documentation protect my garage from disputes?",
    a: "By recording dent logs and scratch check-ins before taking the keys, you have timestamped visual proof that protects you against false claims."
  },
  {
    q: "Can I share vehicle repair photos with the customer?",
    a: "Yes, you can share diagnostic images or finished service photos with customers directly on WhatsApp for transparency and approval."
  },
  {
    q: "Are the photos stored securely and permanently?",
    a: "Yes. All images are backed up on secure AWS S3 cloud storage servers linked permanently to the vehicle's historical service log."
  },
  {
    q: "Can I upload videos of engine sound or smoke?",
    a: "Yes. GarageSaarthi allows you to record and attach short video clips to document complex issues like engine knocks or exhaust smoke."
  }
];

export default function MGFAQ() {
  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Media Uploads."
      subtitle="Everything you need to know about vehicle inspection photos, diagnostic media, and cloud storage files in GarageSaarthi."
      faqs={faqs.map(item => ({ question: item.q, answer: item.a }))}
      className="bg-white"
    />
  );
}
