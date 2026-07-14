import React from "react";
import Link from "next/link";
import { FaTimesCircle, FaCheckCircle, FaArrowRight } from "react-icons/fa";

export default function GADefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            App Definition
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Manage Your Garage from{" "}
            <span className="relative inline-block">
              One Mobile App
              <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Stop juggling between physical diaries, paper job cards, and messy WhatsApp groups. Organize every detail of your automotive business in one centralized place.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hard Way */}
          <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl">
            <h3 className="text-lg font-bold text-red-700 mb-6 flex items-center gap-2">
              <FaTimesCircle /> The Traditional Messy Way
            </h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>• Paper registers that get damaged or misplaced easily.</li>
              <li>• Handwritten job cards that mechanics find hard to read.</li>
              <li>• WhatsApp chats causing client complaints to get forgotten.</li>
              <li>• Loose receipts making billing and payments hard to track.</li>
              <li>• Manual phone logs that make customer follow-ups a headache.</li>
            </ul>
          </div>

          {/* Saarthi Way */}
          <div className="bg-[#EFE9E7]/40 border border-primary/20 p-8 rounded-2xl">
            <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
              <FaCheckCircle /> The GarageSaarthi App Way
            </h3>
            <ul className="space-y-4 text-sm text-slate-700 font-medium">
              <li>✔ Everything saved securely in the cloud instantly.</li>
              <li>✔ Digital job cards accessible on any mechanic's phone.</li>
              <li>✔ Clear customer check-in records with vehicle photos.</li>
              <li>✔ Dynamic billing, parts tracking, and payment history.</li>
              <li>✔ Automated WhatsApp reminders sent with one simple click.</li>
            </ul>
          </div>
        </div>

        {/* Explore All Features Link */}
        <div className="mt-10 text-center">
          <Link
            href="/features"
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
          >
            Explore All Features
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
