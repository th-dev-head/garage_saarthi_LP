import React from "react";

const reviews = [
  {
    name: "Harish Salunkhe",
    role: "Owner, Salunkhe Auto Works",
    location: "Pune",
    initials: "HS",
    text: "GarageSaarthi has completely transformed how we track job cards. We used to lose paper cards, but now everything is digital. Our customers love getting invoice links directly on WhatsApp!"
  },
  {
    name: "Gurpreet Singh",
    role: "Founder, GS Motors & Detailing",
    location: "Ludhiana",
    initials: "GS",
    text: "The staff tracking and inventory alerts are absolute lifesavers. I get notifications when parts stock is low, so we never run out of critical items. Highly recommended to all workshop owners."
  },
  {
    name: "Prashant Gowda",
    role: "Manager, Gowda Auto Care",
    location: "Bangalore",
    initials: "PG",
    text: "Counter sales and instant billing have reduced customer wait times by half. The daily cash and online payment reconciliation screen makes tallying at the end of the day extremely simple."
  },
  {
    name: "Devendra Choudhary",
    role: "Owner, Choudhary Car Garage",
    location: "Jaipur",
    initials: "DC",
    text: "Managing multiple branches was a nightmare before. With GarageSaarthi, I can see branch-wise analytics and transfer parts inventory in seconds. The central control is amazing!"
  },
  {
    name: "Abhishek Naskar",
    role: "Partner, Naskar Motors",
    location: "Kolkata",
    initials: "AN",
    text: "The GST billing feature is very simple to use. Generating invoices takes seconds and sending them straight to WhatsApp is very convenient. Our billing flow has never been this smooth."
  },
  {
    name: "M. Karthik",
    role: "Owner, Karthik Auto Tech",
    location: "Chennai",
    initials: "MK",
    text: "Customer service reminders are brilliant. It automatically sends service alerts, which has increased our repeat customers by 30%. Very happy with the platform!"
  }
];

const ReviewSection = () => {
  return (
    <section className="py-16 px-4 lg:px-15 2xl:px-50 bg-[#FDFDFD]">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4">
            Loved By{" "}
            <span className="relative inline-block">
              Workshop Owners
              <span className="absolute -bottom-1 left-0 w-full h-1.5 rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]"></span>
            </span>
          </h2>
          <p className="text-[#575757] text-sm md:text-base mt-6">
            Hear from workshop and garage owners across India who are growing their businesses and simplifying operations with GarageSaarthi.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-[#EEE] p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#B02E0C]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Text */}
                <p className="text-[#575757] text-sm leading-relaxed mb-6 italic">
                  " {review.text} "
                </p>
              </div>

              {/* User profile */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#F5F5F5]">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#B02E0C] font-bold text-sm shrink-0">
                  {review.initials}
                </div>
                
                <div>
                  <h4 className="font-semibold text-text-dark text-sm sm:text-base leading-tight">
                    {review.name}
                  </h4>
                  <p className="text-xs text-[#575757] mt-0.5">
                    {review.role} • {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
