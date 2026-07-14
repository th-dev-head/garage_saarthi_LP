import React from "react";
import { FaLaptop, FaAndroid } from "react-icons/fa";
import CloudAccessCommon from "../common/CloudAccessCommon";

export default function GAWebMobileConnection() {
  const features = [
    {
      icon: <FaLaptop />,
      title: "Desktop Web Platform",
      desc: "Perfect for front-office desks or billing counters. Create job cards, manage parts listings, and print GST invoices."
    },
    {
      icon: <FaAndroid className="text-green-500" />,
      title: "Mobile Application",
      desc: "Great for mechanics and supervisors on the floor. Track active repairs, edit checklist details, and trigger reminders."
    }
  ];

  return (
    <CloudAccessCommon
      badge="Connected Platform"
      title={
        <>
          Use GarageSaarthi on{" "}
          <span className="relative inline-block">
            Mobile and Web
            <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
          </span>
        </>
      }
      subtitle="Ensure complete operational sync between desktop billing computers and on-the-floor mechanic mobile app logs in real time."
      features={features}
      bgClass="bg-white"
    />
  );
}
