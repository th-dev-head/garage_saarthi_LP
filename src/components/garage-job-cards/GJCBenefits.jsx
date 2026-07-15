import React from "react";
import { FaFolder, FaTasks, FaHistory, FaCheckCircle } from "react-icons/fa";

export default function GJCBenefits() {
  const benefitsList = [
    {
      icon: <FaFolder className="text-primary w-6 h-6" />,
      title: "Keep Repair Information Organized",
      desc: "Store vehicle attributes, fuel levels, symptoms, and service requests in one unified digital record."
    },
    {
      icon: <FaTasks className="text-primary w-6 h-6" />,
      title: "Track Ongoing Garage Jobs",
      desc: "Get real-time visibility into repair statuses (Pending, In-Progress, Completed) directly from the dashboard."
    },
    {
      icon: <FaHistory className="text-primary w-6 h-6" />,
      title: "Maintain Customer and Vehicle Information",
      desc: "Instantly check past repairs, invoice details, and service logs whenever a vehicle returns."
    },
    {
      icon: <FaCheckCircle className="text-primary w-6 h-6" />,
      title: "Reduce Dependence on Paper Job Cards",
      desc: "Ditch physical diaries and registers. Store files securely online without administrative paper worries."
    },
    {
      icon: <FaCheckCircle className="text-primary w-6 h-6" />,
      title: "Give Your Team Structured Job Information",
      desc: "Ensure advisors, managers, and mechanics access the same work list based on user roles."
    },
    {
      icon: <FaCheckCircle className="text-primary w-6 h-6" />,
      title: "Access Job Information Online",
      desc: "Retrieve and update job card details from any laptop browser or Android phone, anywhere."
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Operational Advantages
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Why Use Digital Job Card Software in Your Garage?
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Switching from manual paper processes to digital garage work sheets optimizes your workshop floor in several ways:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsList.map((b, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:-translate-y-1 transition-all duration-200">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                {b.icon}
              </div>
              <h3 className="text-sm font-bold text-text-dark mb-2">{b.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
