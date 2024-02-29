import Image from "next/image";
import HeroSection from "./components/hero-section/heroSection";
import CardSection from "./components/card-section/cardSection";
import ServiceSection from "./components/service-section/service-section";
import AboutSection from "./components/aboutSection";
import NewsletterSection from "./components/newsletter-section/newsLetterSection";

export default function Home() {
  return (
    <main className=" ">
      <HeroSection
        title="Apprendre, surmonter, réussir"
        description=" un nouveau départ pour tous."
        image={{
          src: "/main-help.svg",
          title: "ABAA logo",
          height: 256,
          width: 256,
        }}
        btn1={{ title: "example button", address: "/" }}
        btn2={{ title: "example 2 button", address: "/" }}
      />
      <AboutSection />
      <NewsletterSection />
      <ServiceSection />
      <CardSection />
    </main>
  );
}
