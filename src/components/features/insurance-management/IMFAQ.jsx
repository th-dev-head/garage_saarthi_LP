import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function IMFAQ() {
  const faqData = [
    {
      question: "How does GarageSaarthi calculate material depreciation on accidental parts?",
      answer: "GarageSaarthi incorporates standard IRDAI insurance guidelines: 50% for all rubber and nylon parts, 30% for fiberglass parts, 0% for glass parts, and standard progressive age-based depreciation slabs for sheet metal components. You can also customize rates for Zero Depreciation (Bumper-to-Bumper) policies.",
    },
    {
      question: "Can I manage cashless claims from all insurance companies in India?",
      answer: "Yes. You can manage claims from private insurers like ICICI Lombard, HDFC ERGO, Bajaj Allianz, Tata AIG, Go Digit, Reliance General, Cholamandalam, as well as public sector undertakings (New India, National Insurance, United India, Oriental).",
    },
    {
      question: "How do I share initial estimates and supplementary quotes with surveyors?",
      answer: "GarageSaarthi allows you to generate PDF estimate dossiers and share them directly with insurance surveyors via WhatsApp or private web access link, complete with high-resolution pre-repair and disassembled accident photos.",
    },
    {
      question: "How is customer liability separated from insurance payout?",
      answer: "Our system automatically divides the final invoice into two ledger balances: Net Cashless Payout receivable from the Insurance Company and Customer Liability (Compulsory Deductible, Voluntary Excess, Depreciation on Non-Covered Parts, and Salvage deduction).",
    },
    {
      question: "Can I track delayed insurance company cashless payments?",
      answer: "Yes. GarageSaarthi features a dedicated Insurance Payment Aging report showing pending settlements categorized by insurer, claim age (0-15 days, 15-30 days, 30+ days), and surveyor contact details for quick follow-ups.",
    },
    {
      question: "Does the software support Zero-Depreciation (Nil Dep) claims?",
      answer: "Yes! Simply toggle the Zero-Depreciation option when setting up the claim job card. The software will calculate 100% parts recovery while applying only the compulsory excess and consumables as customer liability.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl 2xl:max-w-full w-full">
        <AccordionFAQ
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Bodyshop & Cashless Insurance Claim Management in GarageSaarthi."
          data={faqData}
        />
      </div>
    </section>
  );
}
