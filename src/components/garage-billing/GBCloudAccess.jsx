import React from "react";
import { FaLaptop, FaMobileAlt } from "react-icons/fa";
import CloudAccessCommon from "../common/CloudAccessCommon";

export default function GBCloudAccess() {
  const cloudFeatures = [
    {
      icon: <FaLaptop className="text-primary mt-1" />,
      title: "Real-Time Cloud Synchronization",
      desc: "All transaction logs, job card additions, and parts adjustments synchronize immediately across web and mobile app views."
    },
    {
      icon: <FaMobileAlt className="text-primary mt-1" />,
      title: "Google Play Android Application",
      desc: "Download our mobile-friendly dashboard app to check stats, upload photos, and draft job cards on-the-go."
    }
  ];

  return (
    <CloudAccessCommon
      badge="Online Billing"
      title="Access Your Garage Billing Online and via Cloud"
      subtitle="GarageSaarthi runs on secure cloud servers, giving you instant web access on laptop browsers and live synchronization with our Android application."
      features={cloudFeatures}
      bgClass="bg-white"
    />
  );
}
