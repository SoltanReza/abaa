import Image from "next/image";
import HeroSection from "./components/hero-section/heroSection";
import CardSection from "./components/card-section/cardSection";
import ServiceSection from "./components/service-section/service-section";
import AboutSection from "./components/aboutSection";
import NewsletterSection from "./components/newsletter-section/newsLetterSection";
import Calendar from "./components/calendar/calendar";
import PartnersSection from "./components/partnerSection/partnersSection";
import TeamMembers from "./components/team-members/teamMembers";

export default function Home() {
  const events = [
    {
      date: "2024-02-28",
      name: "Event 1",
      description: "This is the description for Event 1.",
    },
    {
      date: "2024-03-01",
      name: "Event 2",
      description: "This is the description for Event 2.",
    },
    {
      date: "2024-03-02",
      name: "Event 3",
      description: "This is the description for Event 3.",
    },
  ];

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
      <Calendar events={events} />
      <ServiceSection />
      <CardSection />
      <PartnersSection />
      <TeamMembers />
    </main>
  );
}
