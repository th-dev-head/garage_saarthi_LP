import React from "react";
import { FaMobileAlt, FaShieldAlt } from "react-icons/fa";
import CloudAccessCommon from "../../common/CloudAccessCommon";

export default function GICCloudAccess() {
  const cloudFeatures = [
    {
      icon: <FaMobileAlt className="text-primary mt-1" />,
      title: "Mobile Photo Uploads at the Bay",
      desc: "Mechanics take high-definition photos of damaged panels and instantly attach them to the active insurance job card.",
    },
    {
      icon: <FaShieldAlt className="text-primary mt-1" />,
      title: "Real-Time Insurer Payment Sync",
      desc: "All claim statuses, surveyor approvals, and cashless insurance reimbursements update instantly across all workshop branches.",
    },
  ];

  return (
    <CloudAccessCommon
      badge="Any Device, Anywhere"
      title="Manage Bodyshop Claims on"
      titleHighlight="Mobile, Tablet &amp; Desktop"
      subtitle="GarageSaarthi insurance claim data syncs in real time across your entire workshop, allowing service advisors, surveyors, and bodyshop managers to access estimates from any device."
      features={cloudFeatures}
      bgClass="bg-white"
    />
  );
}
