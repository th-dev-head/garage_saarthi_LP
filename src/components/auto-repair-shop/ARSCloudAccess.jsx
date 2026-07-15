import React from "react";
import { FaLaptop, FaAndroid } from "react-icons/fa";
import CloudAccessCommon from "../common/CloudAccessCommon";

export default function ARSCloudAccess() {
  const features = [
    {
      icon: <FaLaptop />,
      title: "Desktop Web Dashboard",
      desc: "Best for billing desks. Create estimates, assign jobs, update stock, and invoice GST bills."
    },
    {
      icon: <FaAndroid className="text-green-500" />,
      title: "Android Mobile App",
      desc: "Great for diagnostic advisors on the workshop floor. Take vehicle walkaround photos, write down scratch marks, and save customer complaints right beside the vehicle."
    }
  ];

  return (
    <CloudAccessCommon
      badge="Anywhere Access"
      title="Access Your Auto Repair Shop Software"
      titleHighlight="Online and on Mobile"
      subtitle="GarageSaarthi is a cloud auto repair software meaning your billing, parts inventory data, and job cards are automatically backed up in real time and accessible on all supported devices."
      features={features}
      bgClass="bg-slate-50"
    />
  );
}