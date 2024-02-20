import Image from "next/image";
import HeroSection from "./components/hero-section/heroSection";
import CardSection from "./components/card-section/cardSection";
import ServiceSection from "./components/service-section/service-section";
import AboutSection from "./components/aboutSection";

export default function Home() {
  return (
    <main className=" ">
      <HeroSection
        title="ABaa title"
        description="description de ABAA"
        image={{
          src: "/main-help.svg",
          title: "ABAA logo",
          height: 256,
          width: 256,
        }}
        btn1={{ title: "btn1", address: "/" }}
        btn2={{ title: "btn1", address: "/" }}
      />
      <CardSection />

      <ServiceSection />
      <AboutSection />
    </main>
  );
}
