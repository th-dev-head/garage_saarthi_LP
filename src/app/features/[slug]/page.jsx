import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { featuresData } from "@/src/data/featuresData";
import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import ScrollToTop from "@/src/components/common/ScrollToTop";
import { FaCheckCircle, FaArrowRight, FaQuestionCircle } from "react-icons/fa";

import Button from "../../../components/common/Button";

// Next.js static generation parameters
export async function generateStaticParams() {
  return Object.keys(featuresData).map((slug) => ({
    slug: slug,
  }));
}

// Generate dynamic page metadata
export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = featuresData[slug];

  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords.join(", "),
    alternates: {
      canonical: `https://www.garagesaarthi.com/features/${slug}/`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://www.garagesaarthi.com/features/${slug}/`,
      type: "website",
      images: [
        {
          url: "https://www.garagesaarthi.com/garage.png",
          width: 1200,
          height: 630,
          alt: `${data.h1} - GarageSaarthi`,
        },
      ],
    },
  };
}

export default function FeaturePage({ params }) {
  const { slug } = params;
  const data = featuresData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-28 pb-16">
        {/* Banner Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3 py-1.5 rounded-full border border-orange-500/20 font-semibold mb-6 inline-block">
              Feature Spotlight
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              {data.h1}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {data.tagline}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 items-center w-fit mx-auto">
              <a
                href="https://platform.garagesaarthi.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-6 py-2.5 text-base font-medium text-white shadow-lg bg-[linear-gradient(92.52deg,#B22F0E_2.1%,#D73D17_105.99%)] hover:opacity-95 active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2"
              >
                Start 7-Day Free Trial
                <FaArrowRight className="w-4 h-4 ml-1" />
              </a>
              <Link
                href="/pricing"
                className="rounded-full bg-transparent text-white border border-white hover:bg-white/10 px-6 py-2.5 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2"
              >
                View Pricing Plans
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Detail Section */}
        <section className="py-16 px-4 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight mb-6">
                Why Garage Owners Need This Feature
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Streamline operations, eliminate paperwork bottlenecks, and improve daily cash flows. Handcrafted to meet the demands of modern Indian auto garages and mechanics.
              </p>
              <ul className="space-y-4">
                {data.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <FaCheckCircle className="text-orange-500 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-tr from-orange-100 to-orange-50 p-8 rounded-2xl border border-orange-200/50 shadow-sm relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-300/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
              <h3 className="text-lg font-bold text-orange-950 mb-3 uppercase tracking-wider">
                Platform Standard
              </h3>
              <p className="text-orange-900/80 text-sm leading-relaxed mb-6">
                This capability works out of the box in the GarageSaarthi cloud management ecosystem, fully integrated with sitemaps, templates, customer records, and dashboard metrics.
              </p>
              <div className="border-t border-orange-200/60 pt-6 flex items-center justify-between">
                <span className="text-xs font-semibold text-orange-950/60">
                  Ready to deploy
                </span>
                <span className="text-xs font-bold text-orange-600 bg-white px-3 py-1 rounded-full border border-orange-200 shadow-sm">
                  Active
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white border-y border-slate-200/80 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <FaQuestionCircle className="text-orange-500 w-10 h-10 mx-auto mb-4" />
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 mt-2">
                Clear answers to questions about {data.h1.toLowerCase()}.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-200/60 shadow-sm hover:border-orange-200 transition-colors"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
