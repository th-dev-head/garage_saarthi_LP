import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function MCFAQ() {
  const faqData = [
    {
      question: "How do mechanics clock into job card services?",
      answer: "Mechanics can log in through the GarageSaarthi mobile app (Android/iOS) or a shared workshop tablet/kiosk at the bay. With a single tap on 'Clock In', the stopwatch starts recording active time against that specific service item on the job card.",
    },
    {
      question: "What happens when a technician needs to pause for parts or lunch?",
      answer: "The mechanic simply taps 'Pause' and selects a categorized reason: 'Parts Waiting from Store', 'Lathe Turning Outsourced', 'Customer Approval Pending', or 'Tea / Lunch Break'. The software separates active wrench time from non-productive idle time.",
    },
    {
      question: "Can multiple mechanics work and clock into the same job card?",
      answer: "Yes! Different tasks on the same job card can be assigned to different technicians (e.g. Mechanic A for Engine Overhaul, Mechanic B for AC Service, Electrician C for Wiring). Each technician clocks into their assigned service individually.",
    },
    {
      question: "How does the system calculate technician efficiency percentage?",
      answer: "Efficiency % is calculated by comparing pure active wrench time against total elapsed time in the bay, as well as benchmarking actual minutes against estimated standard labor hours.",
    },
    {
      question: "Can workshop managers edit or correct clocking logs if a mechanic forgets to stop?",
      answer: "Yes. Workshop owners and managers have role-based administrative permissions to review daily time logs, adjust timestamps if a technician forgot to clock out, and export time audit sheets to CSV.",
    },
    {
      question: "Does mechanic clocking integrate with staff payroll and incentives?",
      answer: "Yes. All verified clocking hours and completed job tasks automatically feed into GarageSaarthi's Payroll & Staff Management module for effortless monthly incentive and bonus calculations.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl 2xl:max-w-full w-full">
        <AccordionFAQ
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Mechanic Clocking & Labor Time Tracking in GarageSaarthi."
          data={faqData}
        />
      </div>
    </section>
  );
}
