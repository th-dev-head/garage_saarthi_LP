import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function TDFAQ({ className = "bg-white" }) {
  const faqs = [
    {
      question: "What is digital test drive tracking in GarageSaarthi?",
      answer: "Digital test drive tracking is an integrated module in GarageSaarthi that logs every vehicle road test conducted by mechanics, technicians, or customers. It records starting and return odometer readings, fuel gauges, pre-drive scratch/dent blueprint markings, driver authorization, and electronic digital signatures to prevent joyrides, mileage tampering, fuel disputes, and damage blame games."
    },
    {
      question: "How does the system calculate distance driven automatically?",
      answer: "When a test drive is initiated, the supervisor inputs the current start odometer reading. Upon return, entering the return odometer automatically computes the exact kilometers driven (Distance = Return Odometer - Start Odometer). If distance exceeds standard road test limits, it is clearly highlighted for management review."
    },
    {
      question: "How does visual vehicle damage mapping protect my workshop?",
      answer: "Technicians use an interactive 2D vehicle blueprint to tap and place coordinate pins for any existing scratches, dents, cracks, or paint chips before handing over the vehicle keys. By capturing the driver's signature on this condition report, the workshop has indisputable proof of pre-existing vehicle defects."
    },
    {
      question: "Can I record driving license numbers and driver contact details?",
      answer: "Yes! GarageSaarthi allows you to categorize drivers as Staff, Customer, or Other Driver. You can record their full name, mobile number, and government Driving License (DL) number, ensuring legal compliance and driver accountability in case of traffic violations or road incidents."
    },
    {
      question: "How does the digital signature feature work during key handover?",
      answer: "The system includes an HTML5 touchscreen digital signature pad. Drivers and supervisors can sign directly using their finger on a smartphone/tablet or using a mouse on counter PCs. The signature is encrypted and permanently stamped on the test drive record."
    },
    {
      question: "Is test drive data linked directly to Job Cards and Insurance claims?",
      answer: "Yes. Test drives can be initiated directly from any active Job Card or Insurance claim. Vehicle registration, make, model, and customer details auto-fill in 1 click, and the completed test drive history is stored permanently inside the vehicle's service dossier."
    },
    {
      question: "What happens if a new scratch or defect is found after the test drive?",
      answer: "During the Return Check-In dialog, the supervisor can flag 'New Damage Observed' and add specific notes describing the issue. This immediately generates an internal audit alert for workshop management to resolve before the vehicle is delivered to the customer."
    },
    {
      question: "Does this feature work seamlessly on mobile phones and tablets?",
      answer: "Absolutely. The entire Test Drive interface—including odometer entry, fuel gauge sliders, vehicle damage pinning, and signature canvas—is 100% responsive and optimized for mobile browsers and the GarageSaarthi Android app."
    }
  ];

  return (
    <AccordionFAQ
      title="Workshop Test Drive &amp; Road Test"
      titleHighlight="FAQs"
      subtitle="Frequently asked questions about managing vehicle road tests, odometer distance tracking, damage diagramming, and driver liability."
      faqs={faqs}
      className={className}
    />
  );
}
