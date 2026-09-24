import React from "react";
import { FaMobileAlt, FaShieldAlt } from "react-icons/fa";
import CloudAccessCommon from "../../common/CloudAccessCommon";

export default function GTDCloudAccess() {
  const cloudFeatures = [
    {
      icon: <FaMobileAlt className="text-primary mt-1" />,
      title: "Mobile Touchscreen Digital Signatures",
      desc: "Mechanics and drivers sign key handover acknowledgements directly on any Android/iOS smartphone or tablet."
    },
    {
      icon: <FaShieldAlt className="text-primary mt-1" />,
      title: "Encrypted Cloud Audit Ledger",
      desc: "Every road test distance, fuel reading, and vehicle damage diagram is securely backed up to the cloud for 100% auditability."
    }
  ];

  return (
    <CloudAccessCommon
      badge="Any Device, Anywhere"
      title="Manage Test Drives on"
      titleHighlight="Mobile, Tablet &amp; Desktop"
      subtitle="GarageSaarthi digital test drive logs sync in real time across your entire workshop, allowing service advisors, mechanics, and workshop owners to monitor road tests seamlessly."
      features={cloudFeatures}
      bgClass="bg-slate-50"
    />
  );
}
