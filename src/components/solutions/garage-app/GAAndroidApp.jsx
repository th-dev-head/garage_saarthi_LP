import React from "react";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import GradientUnderline from "../../common/GradientUnderline";

export default function GAAndroidApp() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full text-center">
        
        {/* Header */}
        <div className="mb-10 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Download Mobile App
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Download the GarageSaarthi Garage Management{" "}
            <GradientUnderline>
              App for Android
            </GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Get the official application downloaded on your Android tablet or smartphone today. Get a 7-day unrestricted free trial. iOS app is coming soon.
          </p>
        </div>

        {/* Action Badge */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <PlayStoreBadge />
          <span className="text-xs font-semibold text-slate-500">iOS app coming soon.</span>
        </div>

      </div>
    </section>
  );
}

