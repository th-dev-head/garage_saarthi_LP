import TermsAndConditions from "@/src/views/TermsAndConditions";

export const metadata = {
  title: "Terms & Conditions – GarageSaarthi | Usage Policy",
  description:
    "Read the terms and conditions for using GarageSaarthi's garage management platform. Understand your rights and our service policies.",
  keywords: "GarageSaarthi terms conditions, garage software terms of service, usage policy garage app",
  alternates: {
    canonical: "https://garagesaarthi.com/terms-and-conditions/",
  },
  robots: "noindex, follow",
};

export default function Page() {
  return <TermsAndConditions />;
}
