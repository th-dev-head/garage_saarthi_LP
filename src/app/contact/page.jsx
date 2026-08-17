import Home from "@/src/views/Home";

export const metadata = {
  title: "Book a Free Demo – GarageSaarthi | Garage Management Software India",
  description:
    "Book a free demo of GarageSaarthi and see how our garage management software transforms your workshop. Talk to our team today – no commitment required.",
  keywords:
    "book demo garage software India, garage management software demo, workshop software trial India, free garage software demo",
  alternates: {
    canonical: "https://www.garagesaarthi.com/contact/",
  },
  openGraph: {
    title: "Book a Free Demo – GarageSaarthi",
    description:
      "See GarageSaarthi in action. Book a free demo and discover how to digitize your workshop in minutes.",
    url: "https://www.garagesaarthi.com/contact/",
    images: [{ url: "https://www.garagesaarthi.com/garage.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Home />;
}
