import React from "react";
import { FaLaptop, FaAndroid } from "react-icons/fa";
import CloudAccessCommon from "../../common/CloudAccessCommon";

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
      title="Use GarageSaarthi on"
      titleHighlight="Mobile and Web"
      subtitle="Ensure complete operational sync between desktop billing computers and on-the-floor mechanic mobile app logs in real time."
      features={features}
      bgClass="bg-white"
    />
  );
}

