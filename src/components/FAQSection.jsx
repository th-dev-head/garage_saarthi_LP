import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is garage management software?",
    answer: "Garage management software is a digital solution that helps auto workshop owners run their daily operations smoothly. It brings job card creation, GST invoicing, counter parts sales, inventory tracking, CRM, service reminders, and employee management into one single platform."
  },
  {
    question: "What does GarageSaarthi help garage owners manage?",
    answer: "GarageSaarthi provides specialized modules to track every aspect of your workshop: digital job cards, parts inventory, payments, employee attendance, staff payroll, next service alerts, customer history, and overall profit-and-loss reports."
  },
  {
    question: "Can GarageSaarthi be used by car and bike workshops?",
    answer: "Yes! GarageSaarthi is designed for all kinds of workshops, including multi-brand car garages, two-wheeler/bike workshops, EV service centers, truck garages, and premium car detailing outlets."
  },
  {
    question: "Is GarageSaarthi available for multi-branch garages?",
    answer: "Yes, our multi-branch module allows you to control multiple workshop locations centrally. You can manage access rights, check branch-wise reports, and transfer inventory from one store to another easily."
  },
  {
    question: "Can I manage job cards and inventory with GarageSaarthi?",
    answer: "Yes, you can create digital job cards for incoming vehicles, assign mechanics, log customer complaints, and link spare parts. When parts are used, they are automatically deducted from the central inventory."
  },
  {
    question: "Does GarageSaarthi help manage garage employees?",
    answer: "Yes, you can track staff and mechanic check-in and check-out times, log leaves, and generate monthly salary slips automatically based on their working days and advances."
  },
  {
    question: "Is GarageSaarthi available as a mobile app?",
    answer: "Yes, GarageSaarthi is available both as a web-based dashboard and an Android mobile application, allowing you to manage your workshop operations from a phone on the shop floor or from a laptop in the office."
  },
  {
    question: "Is GarageSaarthi cloud-based?",
    answer: "Yes, GarageSaarthi is a cloud-based platform. This means all your workshop data is securely backed up and accessible in real-time from any device, anywhere."
  },
  {
    question: "Does GarageSaarthi offer a free trial?",
    answer: "Yes, we offer a 7-day free trial with full access to all features so you can test and see how it simplifies your daily workshop routines."
  },
  {
    question: "How much does GarageSaarthi cost?",
    answer: "We offer affordable monthly, quarterly, and annual subscription plans tailored to different workshop sizes. Please check our pricing page for detailed rates."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="px-4 lg:px-15 2xl:px-50 py-10 lg:py-20 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4">
            Frequently Asked <span className="relative inline-block">
            Questions
            <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]"></span>
          </span>
          </h2>
          <p className="text-sm md:text-base max-w-2xl mx-auto">
            Everything you need to know about GarageSaarthi and how it can transform your workshop.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-gray-200"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none cursor-pointer"
                >
                  <span
                    className={`text-sm md:text-lg font-medium pr-4 ${
                      isOpen ? "text-black" : "text-[#0F172A]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${
                      isOpen ? " text-primary" : " text-gray-500"
                    }`}
                  >
                    <FaChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out border-t border-gray-200 ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 py-4 text-gray-600 text-base md:text-md leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
