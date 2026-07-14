import React from "react";
import AccordionFAQ from "../common/AccordionFAQ";

const faqs = [
  {
    q: "What is a garage management app?",
    a: "A garage management app is a specialized mobile application that helps workshop owners manage vehicle entries, log diagnostic complaints, assign duties to mechanics, track spare parts stock, create estimates, and send automated service alerts from their mobile device."
  },
  {
    q: "Which app can I use to manage my garage?",
    a: "You can use GarageSaarthi, which is a leading cloud-based garage management application designed specifically for multi-brand workshops, car detailing businesses, and independent bike garages in India."
  },
  {
    q: "Can I create job cards from the GarageSaarthi app?",
    a: "Yes. You can create digital job cards in under 60 seconds on any web browser or Android mobile app. Add vehicle plates, note fuel levels, and record complaints easily."
  },
  {
    q: "Can I manage customers and vehicles from the app?",
    a: "Yes. GarageSaarthi maintains a secure and lifetime customer registry alongside complete vehicle service logs and job histories."
  },
  {
    q: "Can GarageSaarthi manage garage inventory?",
    a: "Yes. You can check spare parts catalog stock counts, record parts consumption directly on active job cards, and manage counter parts sales."
  },
  {
    q: "Can I manage mechanic attendance and payroll?",
    a: "Yes. Log daily staff shifts, track worker commission percentages on completed jobs, and manage leaves or base monthly salaries."
  },
  {
    q: "Does the GarageSaarthi app support service reminders?",
    a: "Yes. The system schedules future service dates based on previous visits and lets you broadcast alerts directly to customer WhatsApp profiles."
  },
  {
    q: "Is GarageSaarthi available on Android?",
    a: "Yes. The Android app is live and publicly available for download on the official Google Play Store."
  },
  {
    q: "Is GarageSaarthi available for iPhone?",
    a: "The iOS application has been submitted for App Store review and is not yet publicly available. iOS app is coming soon."
  },
  {
    q: "Can I use GarageSaarthi on a computer?",
    a: "Yes. You can access the fully featured cloud dashboard on any computer browser by visiting platform.garagesaarthi.com."
  },
  {
    q: "Does GarageSaarthi offer a free trial?",
    a: "Yes, we provide a full, unrestricted 7-day free trial of all modules for you to experience its features."
  },
  {
    q: "How much does the GarageSaarthi garage management app cost?",
    a: "GarageSaarthi plans are very affordable. Please visit our pricing page to check subscription rates."
  }
];

export default function GAFAQ() {
  return (
    <AccordionFAQ
      title={
        <>
          Frequently Asked Questions About{" "}
          <span className="relative inline-block">
            Garage Management Apps
            <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
          </span>
        </>
      }
      subtitle="Everything you need to know about GarageSaarthi mobile garage management features and configurations."
      faqs={faqs.map(item => ({ question: item.q, answer: item.a }))}
    />
  );
}
