import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function GCWorkflow() {
  const steps = [
    { num: "1", title: "Lead Enquiry Logged", desc: "Log walk-ins or phone enquiries on the CRM dashboard." },
    { num: "2", title: "Follow-Up reminder", desc: "Schedule calls or follow-ups to coordinate requirements." },
    { num: "3", title: "Customer Created", desc: "Convert lead to a registered customer profile in database." },
    { num: "4", title: "Vehicle Registered", desc: "Associate cars or motorcycles with the customer account." },
    { num: "5", title: "Job Card Opened", desc: "Generate a digital job card and assign mechanics to repair orders." },
    { num: "6", title: "Service Complete", desc: "Maintain final repair sheets and billing transaction records." },
    { num: "7", title: "Automated Service Alert", desc: "Track calendars and follow up for future routine maintenance." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center ">
      <div className="mx-auto max-w-full lg:max-w-7xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Customer Journey
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Manage the Garage Customer Journey in <GradientUnderline>One System</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi connects customer relationship management with actual garage operations. See the workflow from enquiry to service retention alerts:
          </p>
        </div>

        {/* Step Timeline Row */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-200">
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-gray pb-2">
                  <span className="text-[9px] font-extrabold text-primary bg-[#EFE9E7] px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Step {s.num}
                  </span>
                </div>
                <h3 className="text-xs font-bold text-text-dark mb-2">{s.title}</h3>
                <p className="text-[10px] text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

