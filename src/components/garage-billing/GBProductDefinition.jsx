import React from "react";
import Link from "next/link";
import GradientUnderline from "../common/GradientUnderline";

export default function GBProductDefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Billing Definition
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
          Billing Software Designed for{" "}
          <GradientUnderline>Garage and Workshop Workflows</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
          Unlike generic billing software or general retail POS tools, garage billing requires custom configurations. It must handle labor operations, spare parts stock issues, mechanic margins, and vehicle history connections.
        </p>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          Introduce GarageSaarthi as the ideal way to generate professional GST invoices, log direct counter sales, and monitor pending dues. Our billing module acts as a seamless extension of your overall{" "}
          <Link href="/" className="text-primary font-bold hover:underline">
            garage management software
          </Link>{" "}
          workflow.
        </p>
      </div>
    </section>
  );
}
