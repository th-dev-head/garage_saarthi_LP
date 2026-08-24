import React from "react";
import { FaLaptop, FaAndroid } from "react-icons/fa";
import CloudAccessCommon from "../../common/CloudAccessCommon";

export default function AWCloudAccess() {
  const features = [
    {
      icon: <FaLaptop />,
      title: "Desktop Web Dashboard",
      desc: "Perfect for the front-office desk or billing counter. Create job sheets, track spare parts inventory, and print invoices."
    },
    {
      icon: <FaAndroid className="text-green-500" />,
      title: "Android & iOS Mobile App",
      desc: "Great for workshop floor advisors. Walk around incoming vehicles, take photos of scratches or parts, and register complaints instantly on-site."
    }
  ];

  return (
    <CloudAccessCommon
      badge="Cloud Access"
      title="Access Your Automobile Workshop Software on"
      titleHighlight="Web and Mobile"
      subtitle="GarageSaarthi is a cloud-based platform, meaning your workshop records are always safely backed up and accessible from anywhere."
      features={features}
      bgClass="bg-white"
    />
  );
}

