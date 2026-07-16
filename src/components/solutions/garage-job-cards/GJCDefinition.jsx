import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";

export default function GJCDefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Product Definition
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
          Create and Manage Garage{" "}
          <GradientUnderline>Job Cards Digitally</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
          In a traditional garage, advisors write repair instructions on paper slips, diaries, or scattered customer folders. This often results in lost vehicle details, forgotten complaints, and manual calculation errors.
        </p>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          A digital job card software system organizes this complete workflow online. By digitizing records, you can save customer names, vehicle numbers, complaints, checklist items, and estimated repair costs in under a minute. Introduce GarageSaarthi as the simple, paperless way to manage daily repair orders inside your{" "}
          <Link href="/" className="text-primary font-bold hover:underline">
            garage management software
          </Link>{" "}
          system.
        </p>
      </div>
    </section>
  );
}

