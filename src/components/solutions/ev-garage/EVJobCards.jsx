import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const benefits = [
  {
    title: "Create Digital Job Cards",
    desc: "Generate professional job cards detailing repair tasks (like scooter general service, wiring fixes, or brake pad installations) in seconds on customer arrival.",
  },
  {
    title: "Keep Vehicle and Customer Information Connected",
    desc: "Every digital job card automatically links to the customer's profile and vehicle history. Keep all historical service records organized and retrievable.",
  },
  {
    title: "Track Workshop Jobs Digitally",
    desc: "Ditch manual registers. See active repair statuses, assigned mechanics, estimated delivery timelines, and parts used directly from your central board.",
  },
];

export default function EVJobCards() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            EV Service Logs
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Create and Manage Digital Job Cards for{" "}
            <GradientUnderline>EV Service Jobs</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            From arrival check-ins to final checkouts, GarageSaarthi organizes your electric vehicle garage service flow digitally, keeping records transparent and safe.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left - benefits */}
          <div className="lg:col-span-7 space-y-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary shadow-sm">
                  <FaCheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <Link
                href="/features/job-card-management/"
                className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
              >
                Explore Digital Job Cards <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right - Simulation log */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide border-b border-slate-200/60 pb-3 mb-4">
              EV Service Card Sample
            </h4>
            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex justify-between border-b border-slate-200/40 pb-2">
                <span className="font-bold text-slate-800">Job Card #EV-882</span>
                <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-[9px] font-bold">Ready</span>
              </li>
              <li className="flex justify-between border-b border-slate-200/40 pb-2">
                <span>Vehicle: Ather 450X</span>
                <span>Owner: Amit Trivedi</span>
              </li>
              <li className="flex justify-between border-b border-slate-200/40 pb-2">
                <span>Service: Front Disc Brake Pad Replace</span>
                <span>Labor: ₹350</span>
              </li>
              <li className="flex justify-between border-b border-slate-200/40 pb-2">
                <span>Technician: Karan S.</span>
                <span>Status: Billed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
