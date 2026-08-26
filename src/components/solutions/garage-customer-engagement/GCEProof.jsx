import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GCEProof() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Real Proof
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            See How GarageSaarthi Helps Garages <GradientUnderline>Stay Connected</GradientUnderline> with Customers
          </h2>
        </div>

        {/* Testimonial Box */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center text-primary text-xl flex-shrink-0">
            <FaQuoteLeft />
          </div>
          <div className="space-y-4">
            <div className="flex gap-1 text-orange-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4" />
              ))}
            </div>
            <p className="text-slate-700 text-sm md:text-base italic leading-relaxed">
              "We used to lose contact with customers right after billing them. Now, with WhatsApp reminders, we easily follow up for their next oil change. Our repeat service bookings have become much more organized."
            </p>
            <div>
              <h4 className="font-bold text-slate-900 text-xs">Rajesh Patel</h4>
              <p className="text-slate-500 text-[10px]">Owner, Patel Auto Workshop (Ahmedabad)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
