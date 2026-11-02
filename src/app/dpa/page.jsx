import DataProcessingAddendum from "@/src/views/DataProcessingAddendum";

export const metadata = {
  title: "Data Processing Addendum (DPA) – GarageSaarthi | Data Security & Compliance",
  description:
    "Read GarageSaarthi's Data Processing Addendum (DPA). Review our data processing roles, security safeguards, sub-processor standards, and compliance obligations.",
  keywords: "GarageSaarthi DPA, data processing addendum, workshop data security, data protection agreement India",
  alternates: {
    canonical: "https://www.garagesaarthi.com/dpa/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
};

export default function Page() {
  return <DataProcessingAddendum />;
}

