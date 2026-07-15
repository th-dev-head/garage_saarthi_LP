import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function GEFAQ() {
  const faqs = [
    {
      q: "What is a garage ERP software?",
      a: "A garage ERP (Enterprise Resource Planning) software is an all-in-one system designed specifically for workshops to manage everything from service bookings, digital job cards, spare parts inventory control, customer relations, employee attendance, and invoicing within a single cloud-based interface."
    },
    {
      q: "Can I manage multiple workshop branches using GarageSaarthi?",
      a: "Yes! GarageSaarthi provides complete multi-branch management features. You can monitor daily sales, check inventory, and assign user roles for multiple centers through a single unified owner dashboard."
    },
    {
      q: "How does the spare parts inventory sync with job cards?",
      a: "When a mechanic is assigned a job card, any spare parts needed can be allocated from the digital inventory. The stock count reduces automatically in real-time, preventing parts leakage and discrepancies during final billing."
    },
    {
      q: "Can my accountant or CA access our invoicing logs?",
      a: "Yes. You can create a dedicated secure login for your Chartered Accountant or finance auditor. They can view, review, and export GST-taxable invoices and payment records directly, saving you time."
    },
    {
      q: "Does GarageSaarthi run on smartphones?",
      a: "Yes. In addition to a web browser layout on laptops, GarageSaarthi has an Android mobile application available on the Google Play Store, providing real-time data sync on-the-go."
    }
  ];

  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-3xl w-full">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            FAQ
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Get answers to common queries about GarageSaarthi's workshop ERP platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/60 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex justify-between items-center hover:bg-slate-100/50 transition-colors duration-150"
                >
                  <span className="text-xs md:text-sm font-bold text-text-dark">{faq.q}</span>
                  {isOpen ? (
                    <FaChevronUp className="text-slate-400 w-3 h-3 flex-shrink-0 ml-4" />
                  ) : (
                    <FaChevronDown className="text-slate-400 w-3 h-3 flex-shrink-0 ml-4" />
                  )}
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 border-t border-slate-200/40 text-xs text-slate-500 leading-relaxed bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
