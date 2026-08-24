import React from "react";
import { FaLaptop, FaMobileAlt, FaCloud } from "react-icons/fa";
import CloudAccessCommon from "../../common/CloudAccessCommon";

const features = [
  {
    icon: <FaLaptop />,
    title: "Web-Based Garage Management",
    desc: "Access your complete car garage management system from any desktop or laptop browser. No software installation required — log in from anywhere with an internet connection.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Garage Management App for Android & iOS",
    desc: "Manage your car garage from the GarageSaarthi Android & iOS apps. Create job cards, update repair status, check inventory, and send service reminders directly from your mobile phone.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud-Based Access",
    desc: "All your car garage data — job cards, customer records, invoices, inventory — is securely stored in the cloud. Access your records anytime, from any device, without risk of data loss.",
  },
];

export default function CGCloudAccess() {
  return (
    <CloudAccessCommon
      badge="Web & Mobile Access"
      title="Manage Your Car Garage on"
      titleHighlight="Web and Mobile"
      subtitle="GarageSaarthi is available on the web and as mobile apps on Android and iOS — giving your car garage team the flexibility to work from the front desk, the workshop floor, or anywhere in between."
      features={features}
      bgClass="bg-slate-50"
    />
  );
}

