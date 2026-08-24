"use client";

import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import Button from "./common/Button";
import GradientUnderline from "./common/GradientUnderline";

export default function ProductDefinition() {
  const router = useRouter();

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6">
          All-in-One Garage Management Software for <GradientUnderline>Your Workshop</GradientUnderline>
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
          GarageSaarthi brings your entire daily workshop operations into a single, cloud-based platform. Reclaim control of your business by replacing disconnected paper registers, separate Excel sheets, scattered WhatsApp chats, manual reminders, and messy employee logs with one unified digital workspace.
        </p>
        <div className="flex justify-center">
          <Button
            variant="hero"
            onClick={() => router.push("/features/")}
          >
            Explore GarageSaarthi Features
            <FaArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
