import React, { useState } from "react";
import { Crown, X, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "../../utils/cn";
import { subscriptionApi } from "../../api/subscription";

export default function LifetimeInterestModal({ isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    data._subject = "New Lifetime Plan Interest - GarageSaarthi";

    try {
      const isOk = await subscriptionApi.submitInterest(data);

      if (isOk) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          setTimeout(() => setIsSuccess(false), 500);
        }, 2500);
      } else {
        alert("Oops! There was a problem submitting your request.");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md rounded-[20px] overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/80 hover:text-white z-[70] transition-colors p-1 cursor-pointer"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Premium Header */}
        <div className="bg-[#B02E0C] p-10 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-black/5 rounded-full blur-2xl" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-4">
              <Crown className="h-10 w-10 text-[#B02E0C]" />
            </div>
            <h2 className="text-3xl font-black text-white tracking-tight">
              Lifetime Access
            </h2>
            <div className="mt-2 h-1 w-12 bg-white/30 rounded-full" />
          </div>
        </div>

        {isSuccess ? (
          <div className="p-12 text-center space-y-4 animate-in fade-in zoom-in duration-500">
            <div className="flex justify-center">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Request Sent!</h3>
            <p className="text-slate-600">
              We have received your interest. Our team will contact you shortly
              to discuss your customized plan.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="text-center space-y-2">
              <p className="text-slate-600 text-sm leading-relaxed">
                Please provide your details. Our team will reach out to discuss
                a
                <span className="text-[#080B23] font-bold">
                  {" "}
                  customized lifetime plan{" "}
                </span>
                tailored specifically for your workshop needs.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#080B23] ml-1 uppercase tracking-wider">
                  Business / Owner Name
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Ex: Sharma Auto Care"
                  className="w-full h-12 bg-[#F6F6F6] border-2 border-transparent rounded-2xl focus:border-[#FFCFC3] focus:bg-white focus:ring-0 transition-all px-5 text-[#080B23] text-sm font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#080B23] ml-1 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Ex: owner@example.com"
                  className="w-full h-12 bg-[#F6F6F6] border-2 border-transparent rounded-2xl focus:border-[#FFCFC3] focus:bg-white focus:ring-0 transition-all px-5 text-[#080B23] text-sm font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#080B23] ml-1 uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="Ex: +91 98765 43210"
                  className="w-full h-12 bg-[#F6F6F6] border-2 border-transparent rounded-2xl focus:border-[#FFCFC3] focus:bg-white focus:ring-0 transition-all px-5 text-[#080B23] text-sm font-medium"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full bg-primary text-white py-3 rounded-2xl font-bold transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed",
                isSubmitting && "bg-slate-800",
              )}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Sending...
                </>
              ) : (
                "Confirm Interest"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
