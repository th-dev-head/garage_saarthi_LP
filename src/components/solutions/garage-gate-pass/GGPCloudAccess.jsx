import React from "react";
import { FaMobileAlt, FaShieldAlt } from "react-icons/fa";
import CloudAccessCommon from "../../common/CloudAccessCommon";

export default function GGPCloudAccess() {
  const cloudFeatures = [
    {
      icon: <FaMobileAlt className="text-primary mt-1" />,
      title: "Zero-Login Guard Smartphone Camera Scan",
      desc: "Guards use their own Android/iOS smartphone camera or any mobile browser to verify QR gate passes in 2 seconds with zero software login."
    },
    {
      icon: <FaShieldAlt className="text-primary mt-1" />,
      title: "Encrypted Cloud Exit Ledger",
      desc: "Every release timestamp, guard ID, and vehicle registration record is securely backed up to the cloud for 100% auditability."
    }
  ];

  return (
    <CloudAccessCommon
      badge="Zero-App Mobile Verification"
      title="Verify Vehicle Release Clearance on"
      titleHighlight="Any Smartphone"
      subtitle="GarageSaarthi digital gate passes use cryptographic QR tokens that allow security guards to verify payment and authorize vehicle exit from any browser without complex credentials."
      features={cloudFeatures}
      bgClass="bg-slate-50"
    />
  );
}
