import React from 'react';
import { cn } from '../../utils/cn';
import fireIcon from "../../assets/pricing/fire.svg";

export default function PricingTabs({ plans, selectedPlanId, setSelectedPlanId }) {
  return (
    <div className='py-16'>
    <div className="flex flex-wrap justify-center gap-2 max-w-fit mx-auto p-2 bg-white rounded-full shadow-xl shadow-gray-100 border border-gray-100 overflow-x-auto no-scrollbar">
      {plans.map((plan) => (
        <button
          key={plan._id}
          onClick={() => setSelectedPlanId(plan._id)}
          className={cn(
            "px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer",
            selectedPlanId === plan._id ? "bg-[#B02E0C] text-white" : "hover:bg-gray-50 text-slate-600"
          )}
        >
          {plan.name}
          {plan.isPopular && (
            <span className={cn("flex items-center gap-1 py-0.5 px-2 rounded-full text-[10px] font-bold uppercase", selectedPlanId === plan._id ? "bg-white/20" : "bg-orange-100 text-orange-600")}>
              <img src={fireIcon} className="h-3 w-3" alt="fire icon" /> Popular
            </span>
          )}
        </button>
      ))}
    </div>
    </div>
  );
}
