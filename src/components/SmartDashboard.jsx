import { useRouter } from 'next/navigation';
import { FaArrowRight } from "react-icons/fa";
import DemoImg from '../assets/icons/Demo.webp';
import MockupBg from '../assets/icons/MockupDashboard.webp';
import Button from './common/Button';

const SmartDashboard = () => {
  const router = useRouter();

  return (
    <section
      id="showcase"
      className="py-10 px-4"
      style={{
        backgroundImage: `url(${MockupBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4">
          See What’s Happening in Your Garage from <span className="relative inline-block">One Smart Dashboard.<span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]"></span></span>
        </h2>

        <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto mb-8">
          Get centralized visibility into key workshop metrics: active job cards, revenue trends, pending payment collections, and employee working hours.
        </p>

        <div className="flex justify-center mb-6">
          <Button
            variant="hero"
            className="!px-8"
            onClick={() => {
              router.push("/features/workshop-management-dashboard");
            }}
          >
            Explore Dashboard
            <FaArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <img src={DemoImg} alt="Garage management dashboard in GarageSaarthi" className="w-full h-auto" loading="lazy" width={1200} height={675} />
        </div>
      </div>
    </section>
  );
};

export default SmartDashboard;
