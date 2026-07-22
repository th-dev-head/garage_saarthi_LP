import React from "react";
import { FaTimesCircle } from "react-icons/fa";

export default function GCEProblem() {
  const problems = [
    "Customer contact details and vehicle history are often stored in registers or disjointed diaries.",
    "Vehicle records and past services are spread out, making it hard to understand previous workshop activity.",
    "Service follow-ups are handled manually via phone calls, causing teams to miss key contact dates.",
    "Customers forget when their next maintenance or periodic oil service is actually due.",
    "Workshop managers forget to reconnect with previous customers when they are in low seasons.",
    "Promotional coupons and discounts are shared inconsistently without tracking customer response.",
    "Leads from digital channels or walk-ins are not tracked, meaning potential clients go cold.",
    "No structured system to monitor customer retention rates or overall customer experience metrics."
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-red-600 font-bold bg-red-50 px-3 py-1 rounded-full border border-red-200">
            The Retention Challenge
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Turn One-Time Garage Customers into Long-Term Relationships
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Running a busy auto workshop is demanding. After completing a vehicle repair or body service, staying in regular communication is the first thing that gets forgotten. 
          </p>
        </div>

        {/* Problem Card / Grid */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-900">
              Why Workshops Struggle to Retain Customers
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Without dedicated <strong className="text-primary capitalize">garage customer relationship software</strong>, garages rely on paper job cards and registers. This manual approach impacts the <strong className="text-primary capitalize">workshop customer experience software</strong> benefits you want to build. 
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Over time, lack of structured follow-ups leads to customers going to competitors. Implementing <strong className="text-primary capitalize">workshop customer retention software</strong> automates this workflow so no customer is left forgotten.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60">
            <ul className="space-y-4">
              {problems.map((prob, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FaTimesCircle className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-slate-700 font-medium leading-relaxed">
                    {prob}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
