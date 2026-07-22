import React from "react";
import Link from "next/link";
import { FaTimesCircle } from "react-icons/fa";

export default function GWNProblem() {
  const problems = [
    "Searching old registers and books to find who is due for a periodic service.",
    "Checking separate spreadsheets or diaries to find customer numbers and previous logs.",
    "Drafting individual SMS or WhatsApp texts manually for every single customer.",
    "Missing crucial follow-up dates when a vehicle's scheduled service is approaching.",
    "Scattering vehicle repair records across multiple systems, losing relationship context."
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-red-600 font-bold bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Manual Follow-Ups
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Stop Managing Garage Customer Follow-Ups Manually
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Many auto workshops rely on manual reminder lists. This makes it difficult to stay connected consistently when your team is busy on the workshop floor.
          </p>
        </div>

        {/* Layout split */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-900">
              The Drawbacks of Paper Registers and Disconnected Tools
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Without dedicated <strong className="text-primary capitalize">garage follow up software</strong>, your service managers spend hours looking through old job cards to identify due dates. 
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              This manual follow-up work often results in late or forgotten reminders. 
              By switching to <strong className="text-primary capitalize">garage customer reminder software</strong>, you bring these disjointed records into a structured database.
            </p>
            <div className="pt-2">
              <Link href="/features/customers" className="text-primary font-bold hover:underline text-xs">
                Explore Customer Management &rarr;
              </Link>
            </div>
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
