import React from "react";
import AccordionFAQ from "../common/AccordionFAQ";

const faqs = [
  {
    q: "What is a workshop management app?",
    a: "A workshop management app is a mobile application that helps automotive service center owners digitize their operations. It provides features for creating digital job sheets, tracking diagnostic checklists, managing mechanic commissions, auditing inventory, and sending client notifications."
  },
  {
    q: "Which app can I use to manage my garage?",
    a: "You can use the GarageSaarthi mobile app, which is live on the Google Play Store and provides complete cloud-synchronized tools for independent garages, car detailing spas, and bike workshops in India."
  },
  {
    q: "Can I manage job cards from the GarageSaarthi app?",
    a: "Yes. Create job cards, log vehicle complaints, add parts/labor, and update progress states from Pending to In Progress directly on the shop floor."
  },
  {
    q: "Can I manage workshop inventory from my mobile?",
    a: "Yes. GarageSaarthi gives you visibility over stock counts, parts catalog logs, and tracks parts consumption against active job cards."
  },
  {
    q: "Is GarageSaarthi available for Android?",
    a: "Yes, the official GarageSaarthi application is available and live for public download on the Google Play Store."
  },
  {
    q: "Is GarageSaarthi available for iPhone?",
    a: "The iOS application has been submitted for App Store review. iOS app is coming soon."
  },
  {
    q: "Can car and bike workshops use GarageSaarthi?",
    a: "Yes. GarageSaarthi provides custom configurations for multi-brand car garages, independent bike service centers, EV repair shops, detailing businesses, and truck garages."
  },
  {
    q: "Can EV and truck workshops use the app?",
    a: "Yes. The job card forms and inventory parameters can be configured to record EV battery health metrics or heavy machinery truck components."
  },
  {
    q: "Can I manage multiple workshop branches?",
    a: "Yes. Setup branch profiles, transfer stock components, and monitor consolidated revenue dashboards across branches."
  },
  {
    q: "Does GarageSaarthi send service reminders?",
    a: "Yes. Tracks vehicle service schedules and broadcasts automated follow-up messages directly over WhatsApp."
  },
  {
    q: "Does GarageSaarthi support GST billing?",
    a: "Yes, the system allows you to create GST-compliant invoices, track billing states, and calculate GST totals."
  },
  {
    q: "Can my CA access GarageSaarthi?",
    a: "Yes. You can invite your accountant or CA with specific roles to export billing sheets and monthly GST reports."
  },
  {
    q: "Does GarageSaarthi offer a free trial?",
    a: "Yes. We offer a full 7-day free trial. Experience all features without registering any credit card details."
  },
  {
    q: "How much does the GarageSaarthi workshop management app cost?",
    a: "Our subscription plans are affordable. Please visit our pricing page to review plans."
  }
];

export default function WAFAQ() {
  return (
    <AccordionFAQ
      title={
        <>
          Frequently Asked Questions About{" "}
          <span className="relative inline-block">
            Workshop Management Apps
            <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
          </span>
        </>
      }
      subtitle="Find answers to common operational questions about GarageSaarthi workshop management mobile app."
      faqs={faqs.map(item => ({ question: item.q, answer: item.a }))}
    />
  );
}
