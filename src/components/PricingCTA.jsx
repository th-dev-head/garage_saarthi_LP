import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import Button from "./common/Button";

export default function PricingCTA() {
  const router = useRouter();

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6">
          Start with a 7-Day Free Trial
        </h2>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Get complete access to all GarageSaarthi features for 7 days. Streamline your job cards, track spare parts, manage staff attendance, and check revenue graphs. No commitment required.
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
            variant="secondary"
            onClick={() => router.push("/pricing")}
          >
            View Pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
