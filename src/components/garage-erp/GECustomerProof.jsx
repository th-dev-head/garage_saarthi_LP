import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function GECustomerProof() {
  const reviews = [
    {
      author: "Rajesh Kumar",
      role: "Owner, Sai Motors, Bangalore",
      rating: 5,
      comment: "We used to lose track of spare parts and mechanic commissions across our 3 branches. GarageSaarthi's ERP brought everything under one login. The CA access feature saved us hours of CSV exports every month!"
    },
    {
      author: "Amit Sharma",
      role: "Manager, AutoCare Solutions, Delhi",
      rating: 5,
      comment: "Since moving to GarageSaarthi, we have zero billing leakages. The real-time mapping of parts issued to digital job cards works flawlessly. Customer follow-up is now automated."
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Success Stories
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Trusted by Modern Indian Workshops
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            See how multi-branch and single-outlet garage owners use our ERP platform to streamline their business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((r, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 relative flex flex-col justify-between hover:shadow-sm transition-all duration-200">
              <FaQuoteLeft className="text-primary/10 w-12 h-12 absolute right-6 top-6" />
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(r.rating)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400 w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 italic leading-relaxed z-10 relative">
                  "{r.comment}"
                </p>
              </div>
              <div className="border-t border-slate-200/60 mt-6 pt-4 flex flex-col">
                <span className="text-xs font-bold text-text-dark">{r.author}</span>
                <span className="text-[10px] text-slate-400 mt-0.5">{r.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
