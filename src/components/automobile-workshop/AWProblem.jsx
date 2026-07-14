import React from "react";
import {
  FaFileAlt, FaUsersSlash, FaHistory, FaBoxOpen,
  FaFileInvoiceDollar, FaCalendarTimes, FaUserClock, FaCoins
} from "react-icons/fa";

const problems = [
  {
    icon: <FaFileAlt className="w-5 h-5" />,
    title: "Paper Job Cards",
    desc: "Writing job details by hand is slow, messy, and hard to track as vehicles move through different service stages.",
  },
  {
    icon: <FaUsersSlash className="w-5 h-5" />,
    title: "Scattered Customer Records",
    desc: "Saving customer details across notebooks or WhatsApp chats makes it difficult to find contact info when needed.",
  },
  {
    icon: <FaHistory className="w-5 h-5" />,
    title: "Manual Vehicle History",
    desc: "Without a system, searching past service records, parts replaced, and previous complaints takes too long.",
  },
  {
    icon: <FaBoxOpen className="w-5 h-5" />,
    title: "Parts Stock Confusion",
    desc: "Not knowing exact stock counts leads to last-minute delays or over-purchasing expensive spare parts.",
  },
  {
    icon: <FaFileInvoiceDollar className="w-5 h-5" />,
    title: "Pending Estimates",
    desc: "Delaying customer approvals because preparing quotes manually takes time, keeping workshop bays blocked.",
  },
  {
    icon: <FaCalendarTimes className="w-5 h-5" />,
    title: "Missed Service Follow-ups",
    desc: "Losing contact with existing customers because there is no automated way to remind them when their service is due.",
  },
  {
    icon: <FaUserClock className="w-5 h-5" />,
    title: "Separate Attendance Records",
    desc: "Tracking staff entries, hours, commissions, and salaries on different paper sheets creates errors.",
  },
  {
    icon: <FaCoins className="w-5 h-5" />,
    title: "Manual Finance Tracking",
    desc: "Difficulty understanding daily workshop revenue, credit balances, and expenses without centralized accounts.",
  },
];

export default function AWProblem() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Challenges
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Running an Automobile Workshop Shouldn’t <br className="hidden md:block" /> <span className="relative inline-block">Depend on Paper and Memory<span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" /></span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Managing operations with paper and spreadsheet templates wastes hours every day. A digital automobile workshop management software fixes these operational leaks automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:bg-white"
            >
              <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
