import React from "react";
import TestimonialsGrid from "../../common/TestimonialsGrid";

const reviews = [
  {
    name: "Egun",
    role: "Owner, Egun Auto Workshop",
    location: "Ahmedabad",
    initials: "EG",
    text: "GarageSaarthi has completely transformed how we track job cards for car repairs. We used to lose paper cards, but now everything is digital. Our customers love getting invoice links directly on WhatsApp!",
  },
  {
    name: "Rajesh Patel",
    role: "Owner, Auto Touch Cars",
    location: "Vadodara",
    initials: "AT",
    text: "Creating job sheets and vehicle checklists takes under a minute now. The interface is simple enough that even our junior mechanics log car repair operations on their mobile phones without training.",
  },
  {
    name: "Rishabh",
    role: "Owner, The Big Wheels",
    location: "Madhya Pradesh",
    initials: "TBW",
    text: "Counter sales and instant billing have reduced customer wait times by half. The daily cash and online payment reconciliation makes tallying at the end of the day extremely simple.",
  },
  {
    name: "Karan Johar",
    role: "Owner, KJ Motors",
    location: "Mumbai",
    initials: "KJM",
    text: "The multi-branch management dashboard lets me view total sales, expenses, active job cards, and collections across three car garage outlets centrally. Exceptional cloud stability and speed.",
  },
  {
    name: "Prakash Raj",
    role: "Owner, Auto Care Clinic",
    location: "Bangalore",
    initials: "ACC",
    text: "Automated service reminders send WhatsApp notifications to car owners when their vehicle is due for service, bringing them back precisely on schedule. Repeat business has improved significantly.",
  },
  {
    name: "BHAGWATI SERVICE CENTER",
    role: "Owner, Bhagwati Service Center",
    location: "Uttrakhand",
    initials: "BS",
    text: "Staff tracking and inventory alerts are absolute lifesavers. I get notifications when spare parts stock is low, so we never run out of critical car service items. Highly recommended.",
  },
];

export default function CGTestimonials() {
  return (
    <TestimonialsGrid
      title="See How Car Garages Use GarageSaarthi in"
      titleHighlight="Daily Operations."
      subtitle="Hear from real car garage owners, independent workshops, and multi-brand service centre operators across India who use GarageSaarthi to manage their daily operations."
      reviews={reviews}
      bgClass="bg-white"
    />
  );
}

