import React from "react";
import TestimonialsGrid from "../../common/TestimonialsGrid";

const reviews = [
  {
    name: "Egun",
    role: "Owner, Egun Auto Workshop",
    location: "Ahmedabad",
    initials: "EG",
    text: "GarageSaarthi has completely transformed how we track job cards. We used to lose paper cards, but now everything is digital. Our customers love getting invoice links directly on WhatsApp!",
  },
  {
    name: "BHAGWATI SERVICE CENTER",
    role: "Owner, Bhagwati Service Center",
    location: "Uttrakhand",
    initials: "BS",
    text: "The staff tracking and inventory alerts are absolute lifesavers. I get notifications when parts stock is low, so we never run out of critical items. Highly recommended to all workshop owners.",
  },
  {
    name: "Rishabh",
    role: "Owner, The Big Wheels",
    location: "Madhya Pradesh",
    initials: "TBW",
    text: "Counter sales and instant billing have reduced customer wait times by half. The daily cash and online payment reconciliation makes tallying at the end of the day extremely simple.",
  },
  {
    name: "Smit Koladiya",
    role: "Owner, Auto Touch Cars",
    location: "Vadodara",
    initials: "AT",
    text: "Creating job sheets and vehicle check lists takes under a minute now. The interface is simple enough that even our junior mechanics log operations on their mobile phones without training.",
  },
  {
    name: "Karan Johar",
    role: "Owner, KJ Motors",
    location: "Mumbai",
    initials: "KJM",
    text: "The multi-branch management dashboard lets me view total sales, expenses, active cards, and collections across three outlets centrally. Exceptional cloud stability and speed.",
  },
  {
    name: "Prakash Raj",
    role: "Owner, Auto Care Clinic",
    location: "Bangalore",
    initials: "ACC",
    text: "Automated service reminders send WhatsApp notification due messages to clients, bringing them back precisely on schedule. It has significantly improved our repeat business count.",
  },
];

export default function AWReviews() {
  return (
    <TestimonialsGrid
      title="See How Workshops Use GarageSaarthi in"
      titleHighlight="Daily Operations."
      subtitle="Hear from real independent garage owners, car workshops, and service centre operators across India who trust GarageSaarthi for their daily operations."
      reviews={reviews}
    />
  );
}

