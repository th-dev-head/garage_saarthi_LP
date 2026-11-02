import RefundPolicy from "@/src/views/RefundPolicy";

export const metadata = {
  title: "Refund, Cancellation & Subscription Policy – GarageSaarthi",
  description:
    "Read GarageSaarthi's Refund, Cancellation & Subscription Policy. Learn about our 7-day free trial, manual renewal model, refund review procedure, and terms.",
  keywords: "GarageSaarthi refund policy, subscription cancellation garage software, garage billing refund policy India",
  alternates: {
    canonical: "https://www.garagesaarthi.com/refund-policy/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
};

export default function Page() {
  return <RefundPolicy />;
}

