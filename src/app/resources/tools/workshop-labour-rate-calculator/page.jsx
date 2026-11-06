import ProfitMarginCalculatorView from "@/src/views/resources/ProfitMarginCalculatorView";
import { TOOLS_DATA } from "@/src/data/resourcesData";

const tool = TOOLS_DATA.find((t) => t.slug === "workshop-labour-rate-calculator") || TOOLS_DATA[0];

export const metadata = {
  title: tool.seoTitle,
  description: tool.seoDescription,
  keywords: "workshop labour rate calculator, auto repair hourly billing rate, mechanic labour charge formula, car garage bay overhead",
  alternates: {
    canonical: "https://www.garagesaarthi.com/resources/tools/workshop-labour-rate-calculator/",
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "website",
    title: tool.seoTitle,
    description: tool.seoDescription,
    url: "https://www.garagesaarthi.com/resources/tools/workshop-labour-rate-calculator/",
    siteName: "GarageSaarthi",
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: tool.title,
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: tool.seoTitle,
    description: tool.seoDescription,
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

export default function LabourRateCalculatorPage() {
  return <ProfitMarginCalculatorView />;
}

