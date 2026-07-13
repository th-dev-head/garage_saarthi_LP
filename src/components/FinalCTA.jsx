import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import Button from "./common/Button";

export default function FinalCTA() {
  const router = useRouter();

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 text-white">
          Ready to Manage Your Garage with GarageSaarthi?
        </h2>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Join hundreds of smart workshop owners digitizing their auto business. Create job cards, manage stock, and track staff payroll with India's easiest garage management software.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center w-fit mx-auto">
          <Button
            variant="hero"
            onClick={() => {
              window.open("https://platform.garagesaarthi.com/register", "_blank");
            }}
          >
            Start 7-Day Free Trial
            <FaArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            variant="outline"
            onClick={() => router.push("/pricing")}
          >
            View Pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
