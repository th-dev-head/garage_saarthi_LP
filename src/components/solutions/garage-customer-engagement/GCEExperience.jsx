import React from "react";
import { FaUserShield, FaSmile, FaHistory } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GCEExperience() {
  const cards = [
    {
      icon: <FaUserShield className="text-blue-600 w-5 h-5" />,
      title: "Digital Transparency",
      desc: "Mechanics and writers access accurate vehicle history, ensuring transparent diagnostic quotes and estimates."
    },
    {
      icon: <FaSmile className="text-orange-500 w-5 h-5" />,
      title: "Timely WhatsApp Service Update",
      desc: "Send instant job card notifications, avoiding customer anxiety about delivery delays."
    },
    {
      icon: <FaHistory className="text-green-600 w-5 h-5" />,
      title: "Instant History Retrieve",
      desc: "Answer customer service status phone calls or visits instantly with digital database search queries."
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Customer Experience
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Create a More Professional Customer <GradientUnderline>Experience</GradientUnderline> at Your Garage
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Professional interactions build workshop credibility. Organizing your backend processes using <strong className="text-primary capitalize">garage customer experience software</strong> lets your team provide a fast and streamlined customer experience.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((cd, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="bg-white w-10 h-10 rounded-xl border border-slate-200/80 flex items-center justify-center shadow-xs">
                {cd.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900">{cd.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{cd.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
