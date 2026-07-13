import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import Button from "./common/Button";

export default function ProductDefinition() {
  const router = useRouter();

  return (
    <section className="py-20 px-4 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
          All-in-One Garage Management Software for Your Workshop
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
          GarageSaarthi brings your entire daily workshop operations into a single, cloud-based platform. Reclaim control of your business by replacing disconnected paper registers, separate Excel sheets, scattered WhatsApp chats, manual reminders, and messy employee logs with one unified digital workspace.
        </p>
        <div className="flex justify-center">
          <Button
            variant="hero"
            onClick={() => router.push("/features")}
          >
            Explore GarageSaarthi Features
            <FaArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
