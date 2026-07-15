import React from "react";
import GradientUnderline from "../common/GradientUnderline";
import PlayStoreBadge from "../common/PlayStoreBadge";

const steps = [
  { step: "1", title: "Download on Mobile", desc: "Search for 'GarageSaarthi' on the Google Play Store and install the app." },
  { step: "2", title: "Create Your Account", desc: "Sign up using your mobile number and add basic workshop parameters." },
  { step: "3", title: "Start Free Trial", desc: "Get a full 7-day free trial activated instantly with no card details required." },
  { step: "4", title: "Log Daily Services", desc: "Create your first digital job card and start tracking vehicle progress." }
];

export default function WAAndroidDownload() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Download Mobile App
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Download the GarageSaarthi Workshop{" "}
            <GradientUnderline>Management App for Android</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Get complete control over your garage operations. Follow these simple steps to download the app and digitize your workshop.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {steps.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl shadow-xs">
              <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm mb-4">
                {item.step}
              </span>
              <h3 className="text-sm font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* PlayStore Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <PlayStoreBadge />
          <span className="text-xs font-semibold text-slate-500">iOS app coming soon.</span>
        </div>

      </div>
    </section>
  );
}
