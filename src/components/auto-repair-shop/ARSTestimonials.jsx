import React from "react";
import TestimonialsGrid from "../common/TestimonialsGrid";

const reviews = [
  {
    name: "Smit Koladiya",
    role: "Owner, Ever Garage",
    location: "Surat, Gujarat",
    initials: "SK",
    text: "Automated service reminders send WhatsApp notification due messages to clients, bringing them back precisely on schedule. It has significantly improved our repeat business count."
  },
  {
    name: "Gurpreet Singh",
    role: "Proprietor, G.S. Car Care",
    location: "Delhi, NCR",
    initials: "GS",
    text: "The digital job cards are excellent. We log scratches and complaints right beside the vehicle on an Android phone. Customer trust has grown significantly."
  },
  {
    name: "Ramesh Malaviya",
    role: "Founder, Sodhi Auto Garage",
    location: "Pune, Maharashtra",
    initials: "RM",
    text: "Managing spare parts inventory and GST billing is very easy. The parts requisitions are mapped directly to job cards, which prevents part leakage."
  }
];

export default function ARSTestimonials() {
  return (
    <TestimonialsGrid
      title={
        <>
          See How Repair Workshops{" "}
          <span className="relative inline-block">
            Use GarageSaarthi
            <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
          </span>
        </>
      }
      subtitle="Hear from real independent garage owners, car detailing spas, and auto service center operators across India who trust GarageSaarthi."
      reviews={reviews}
    />
  );
}