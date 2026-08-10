import PrivacyPolicy from "@/src/views/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy – GarageSaarthi | Data Protection & User Privacy",
  description:
    "Read GarageSaarthi's privacy policy. Learn how we collect, use and protect your data on our garage management platform.",
  keywords: "GarageSaarthi privacy policy, garage software data policy, user data protection India",
  alternates: {
    canonical: "https://garagesaarthi.com/privacy-policy/",
  },
  robots: "noindex, follow",
};

export default function Page() {
  return <PrivacyPolicy />;
}
