import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";

export default function GEDefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          ERP Definition
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
          What Is{" "}
          <GradientUnderline>Garage ERP Software?</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
          A garage ERP (Enterprise Resource Planning) system is a centralized software platform designed to connect and manage all aspects of an automotive workshop business. Instead of keeping isolated logs for job cards, spare parts inventory, billing, customers, and employees, an ERP connects these modules together. 
        </p>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          For example, when a mechanic adds a spare part to a digital job card, the stock is automatically updated, the customer profile is updated with service logs, and the pricing is instantly mapped to the final GST invoice. GarageSaarthi provides this connected, end-to-end{" "}
          <Link href="/" className="text-primary font-bold hover:underline">
            garage management software
          </Link>{" "}
          approach for modern Indian workshops.
        </p>
      </div>
    </section>
  );
}

